import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { 
  TableContainer,
  StyledTable,
  TableHead,
  TableHeaderCell,
  SortAscending,
  SortDescending,
  TableBody,
  TableRow,
  TableCell,
  EmptyContainer,
  EmptyText,
  LoadingContainer,
  ActionCell,
  TableTitle,
  TableFooter,
  SelectionInfo,
  TableScrollContainer
} from './table.styles';
import { Spin } from '../spin';
import { Pagination } from './pagination';
import { Selection } from './selection';

interface RowProps<T> {
  record: T;
  index: number;
  columns: ColumnType<T>[];
  rowSelection?: TableProps<T>['rowSelection'];
  onRowClick?: (record: T, index: number) => void;
  isSelected: boolean;
  rowKey: string | number | bigint;
  onSelectChange?: (checked: boolean) => void;
  stickyOffsets?: {
    left: (number | string)[];
    right: (number | string)[];
  };
}

// 列定义接口
export interface ColumnType<T> {
  title?: React.ReactNode;
  dataIndex?: keyof T;
  key?: string;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: number | string;
  ellipsis?: boolean;
  sortable?: boolean;
  sorter?: (a: T, b: T) => number;
  type?: 'selection' | 'action'; // 新增列类型
  actions?: (record: T, index: number) => React.ReactNode[]; // 操作列函数
  fixed?: 'left' | 'right'; // 固定列
}

// 排序方向
export type SortDirection = 'ascend' | 'descend' | null;

// 表格属性
export interface TableProps<T> {
  dataSource?: T[];
  columns: ColumnType<T>[];
  rowKey?: keyof T | ((record: T) => React.Key);
  bordered?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  loading?: boolean;
  emptyText?: React.ReactNode;
  onRowClick?: (record: T, index: number) => void;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
    pageSizeOptions?: number[];
    showSizeChanger?: boolean;
    showTotal?: (total: number) => React.ReactNode;
  };
  rowSelection?: {
    type?: 'checkbox' | 'radio';
    selectedRowKeys?: React.Key[];
    onChange?: (selectedKeys: React.Key[], selectedRows: T[]) => void;
    getCheckboxProps?: (record: T) => { disabled?: boolean };
    /** 自定义选中信息条内容，参数为当前选中数量 */
    renderTitle?: (count: number) => React.ReactNode;
    /** 是否显示表格上方的“已选 x 条”选中信息条，默认 true */
    showSelectedInfo?: boolean;
    /** @deprecated 请使用 showSelectedInfo */
    showSelectionTitle?: boolean;
  };
  title?: React.ReactNode;
  footer?: React.ReactNode;
  theme?: 'light' | 'dark';
  variant?: 'default' | 'borderless';
  className?: string;
  style?: React.CSSProperties;
  scroll?: {
    x?: number | string;
    y?: number | string;
  };
}

const RowComponent = <T extends object>({
  record,
  index,
  columns,
  rowSelection,
  onRowClick,
  isSelected,
  onSelectChange,
  stickyOffsets
}: RowProps<T>) => {
  return (
    <TableRow 
      clickable={!!onRowClick}
      selected={isSelected}
      onClick={() => onRowClick?.(record, index)}
    >
      {rowSelection && (
        <TableCell 
          align="center"
          fixed={columns.some(col => col.fixed === 'left') ? 'left' : undefined}
          offset={0}
          style={{ zIndex: columns.some(col => col.fixed === 'left') ? 1 : 'auto' }}
        >
          <Selection
            type={rowSelection.type || 'checkbox'}
            checked={isSelected}
            onChange={(checked) => {
              // 使用 onSelectChange 回调处理选择变化
              onSelectChange?.(checked);
            }}
            disabled={rowSelection.getCheckboxProps?.(record)?.disabled}
          />
        </TableCell>
      )}
      
      {columns.map((column, colIndex) => {
        // 如果有 rowSelection 且第一列是 fixed left，则需要加上 rowSelection 的宽度
        let leftOffset = stickyOffsets?.left[colIndex];
        if (rowSelection && column.fixed === 'left') {
          const selectionWidth = 60; // 假设 selection 列宽度为 60
          if (typeof leftOffset === 'number') {
            leftOffset += selectionWidth;
          }
        }

        if (column.type === 'action') {
          return (
            <ActionCell 
              key={colIndex} 
              align={column.align || 'center'}
              fixed={column.fixed}
              offset={column.fixed === 'left' ? leftOffset : stickyOffsets?.right[colIndex]}
            >
              {column.actions?.(record, index)}
            </ActionCell>
          );
        }
        
        const value = column.dataIndex 
          ? record[column.dataIndex] 
          : null;
        
        const renderContent = column.render
          ? column.render(value, record, index)
          : (value as React.ReactNode);
        
        return (
          <TableCell 
            key={colIndex}
            align={column.align}
            ellipsis={column.ellipsis}
            fixed={column.fixed}
            offset={column.fixed === 'left' ? leftOffset : stickyOffsets?.right[colIndex]}
          >
            {renderContent}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

const areEqual = <T extends object>(prevProps: RowProps<T>, nextProps: RowProps<T>) => {
  // 基本检查
  if (prevProps.index !== nextProps.index) return false;
  if (prevProps.isSelected !== nextProps.isSelected) return false;
  if (prevProps.rowKey !== nextProps.rowKey) return false;
  
  // 检查行数据是否变化
  if (prevProps.record !== nextProps.record) {
    // 这里可以添加更细粒度的比较
    return false;
  }
  
  return true;
};

const MemoizedRow = React.memo(RowComponent, areEqual) as typeof RowComponent;

const Table = <T extends object>({
  dataSource = [],
  columns,
  rowKey,
  bordered = false,
  striped = false,
  hoverable = false,
  loading = false,
  emptyText = 'No data',
  onRowClick,
  pagination,
  rowSelection,
  title,
  footer,
  theme = 'light',
  variant = 'default',
  scroll,
  className,
  style
}: TableProps<T>) => {
  // 排序状态
  const [sortState, setSortState] = useState<{
    columnKey?: string;
    direction: SortDirection;
  }>({ direction: null });
  
  // 选择状态
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number | bigint)[]>(rowSelection?.selectedRowKeys || []);
  const selectedRowKeysSet = useMemo(() => new Set(selectedRowKeys), [selectedRowKeys]);

  useEffect(() => {
    if (rowSelection?.selectedRowKeys) {
      setSelectedRowKeys(rowSelection.selectedRowKeys);
    }
  }, [rowSelection?.selectedRowKeys]);

  // 处理排序
  const handleSort = (column: ColumnType<T>) => {
    if (!column.sortable && !column.sorter) return;

    setSortState(prev => {
      if (prev.columnKey !== column.key) {
        return { columnKey: column.key as string, direction: 'ascend' };
      }
      
      return {
        columnKey: column.key as string,
        direction: 
          prev.direction === 'ascend' ? 'descend' : 
          prev.direction === 'descend' ? null : 'ascend'
      };
    });
  };

  // 处理排序后的数据
  const sortedData = useMemo(() => {
    if (!sortState.direction || !sortState.columnKey) {
      return [...dataSource];
    }

    const column = columns.find(col => col.key === sortState.columnKey);
    if (!column || !column.sorter) {
      return [...dataSource];
    }

    return [...dataSource].sort((a, b) => {
      const result = column.sorter!(a, b);
      return sortState.direction === 'ascend' ? result : -result;
    });
  }, [dataSource, columns, sortState]);

  // 处理分页数据
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;
    
    const start = (pagination.current - 1) * pagination.pageSize;
    return sortedData.slice(start, start + pagination.pageSize);
  }, [sortedData, pagination]);

  // 获取行key
  const getRowKey = useCallback((record: T, index: number): string | number | bigint => {
    if (typeof rowKey === 'function') {
      return rowKey(record);
    }
    if (rowKey) {
      const key = record[rowKey as keyof T];
      if (typeof key === 'string' || typeof key === 'number' || typeof key === 'bigint') {
        return key;
      }
    }
    // Default to 'key' property if it exists and is valid
    if ('key' in record) {
      const key = (record as any).key;
      if (typeof key === 'string' || typeof key === 'number' || typeof key === 'bigint') {
        return key;
      }
    }
    return index;
  }, [rowKey]);

  // 渲染空状态
  const renderEmpty = () => (
    <tbody>
      <tr>
        <td colSpan={columns.length + (rowSelection ? 1 : 0)}>
          <EmptyContainer>
            <EmptyText>{emptyText}</EmptyText>
          </EmptyContainer>
        </td>
      </tr>
    </tbody>
  );

  // 处理行选择
  const handleRowSelect = useCallback((record: T, checked: boolean, rowIndex: number) => {
    const key = getRowKey(record, rowIndex);
    
    setSelectedRowKeys(prev => {
      let newSelectedKeys: (string | number | bigint)[];
      
      if (rowSelection?.type === 'radio') {
        newSelectedKeys = checked ? [key] : [];
      } else {
        newSelectedKeys = checked 
          ? [...prev, key] 
          : prev.filter(k => k !== key);
      }
      
      // 获取选中的行数据
      const selectedRows = dataSource.filter((record, idx) => 
        newSelectedKeys.includes(getRowKey(record, idx))
      );
      
      // 延迟调用 onChange，避免在渲染过程中触发状态更新
      setTimeout(() => {
        rowSelection?.onChange?.(newSelectedKeys, selectedRows);
      }, 0);
      
      return newSelectedKeys;
    });
  }, [dataSource, rowSelection, getRowKey]);

  // 处理全选/取消全选
  const handleSelectAll = useCallback((checked: boolean) => {
    if (!rowSelection || rowSelection.type === 'radio') return;
    
    setSelectedRowKeys(prev => {
      const currentPageKeys = paginatedData.map((record, idx) => getRowKey(record, idx));
      let newSelectedKeys: (string | number | bigint)[];
      
      if (checked) {
        newSelectedKeys = Array.from(new Set([...prev, ...currentPageKeys]));
      } else {
        newSelectedKeys = prev.filter(key => !currentPageKeys.includes(key));
      }
      
      // 获取选中的行数据
      const selectedRows = dataSource.filter((record, idx) => 
        newSelectedKeys.includes(getRowKey(record, idx))
      );
      
      // 延迟调用 onChange
      setTimeout(() => {
        rowSelection?.onChange?.(newSelectedKeys, selectedRows);
      }, 0);
      
      return newSelectedKeys;
    });
  }, [paginatedData, dataSource, rowSelection, getRowKey]);

  // 全选状态（仅当所有当前页行都被选中时）
  const allSelected = useMemo(() => {
    return paginatedData.length > 0 && 
           paginatedData.every((record, idx) => {
             const key = getRowKey(record, idx);
             return selectedRowKeysSet.has(key);
           });
  }, [paginatedData, selectedRowKeysSet, getRowKey]);

  // 部分选择状态
  const indeterminate = useMemo(() => {
    return paginatedData.some((record, idx) => {
      const key = getRowKey(record, idx);
      return selectedRowKeysSet.has(key);
    }) && !allSelected;
  }, [paginatedData, selectedRowKeysSet, allSelected, getRowKey]);

  // 计算固定列的偏移量
  const stickyOffsets = useMemo(() => {
    const leftOffsets: (number | string)[] = [];
    const rightOffsets: (number | string)[] = [];
    let leftSum = 0;
    let rightSum = 0;

    // 计算左侧固定列的偏移
    columns.forEach((col) => {
      if (col.fixed === 'left') {
        leftOffsets.push(leftSum);
        const width = typeof col.width === 'number' ? col.width : parseInt(col.width as string) || 0;
        leftSum += width;
      } else {
        leftOffsets.push('auto');
      }
    });

    // 计算右侧固定列的偏移
    for (let i = columns.length - 1; i >= 0; i--) {
      const col = columns[i];
      if (col.fixed === 'right') {
        rightOffsets[i] = rightSum;
        const width = typeof col.width === 'number' ? col.width : parseInt(col.width as string) || 0;
        rightSum += width;
      } else {
        rightOffsets[i] = 'auto';
      }
    }

    return { left: leftOffsets, right: rightOffsets };
  }, [columns]);

  // 渲染表头
  const renderHeader = () => {
    return (
      <TableHead theme={theme}>
        <tr>
          {/* 选择框列 */}
          {rowSelection && (
            <TableHeaderCell 
              align="center" 
              theme={theme} 
              sticky={!!scroll?.y} 
              fixed={columns.some(col => col.fixed === 'left') ? 'left' : undefined}
              offset={0}
              style={{ 
                width: '60px',
                zIndex: columns.some(col => col.fixed === 'left') ? 20 : (!!scroll?.y ? 10 : 'auto')
              }}
            >
              {(rowSelection.type || 'checkbox') === 'checkbox' && (
                <Selection
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                  indeterminate={indeterminate}
                />
              )}
            </TableHeaderCell>
          )}
          
          {columns.map((column, index) => {
            const isSorting = sortState.columnKey === column.key;
            const showAsc = isSorting && sortState.direction === 'ascend';
            const showDesc = isSorting && sortState.direction === 'descend';
            
            // 如果有 rowSelection 且第一列是 fixed left，则需要加上 rowSelection 的宽度
            let leftOffset = stickyOffsets.left[index];
            if (rowSelection && column.fixed === 'left') {
              const selectionWidth = 60; // 假设 selection 列宽度为 60
              if (typeof leftOffset === 'number') {
                leftOffset += selectionWidth;
              }
            }
            
            return (
              <TableHeaderCell
                key={column.key || index.toString()}
                align={column.align}
                sortable={column.sortable || !!column.sorter}
                onClick={() => handleSort(column)}
                style={{ width: column.width }}
                theme={theme}
                sticky={!!scroll?.y}
                fixed={column.fixed}
                offset={column.fixed === 'left' ? leftOffset : stickyOffsets.right[index]}
              >
                {column.title}
                {(column.sortable || column.sorter) && (
                  <>
                    {showAsc && <SortAscending />}
                    {showDesc && <SortDescending />}
                    {!showAsc && !showDesc && isSorting && (
                      <SortDescending style={{ opacity: 0.3 }} />
                    )}
                  </>
                )}
              </TableHeaderCell>
            );
          })}
        </tr>
      </TableHead>
    );
  };

  // 渲染表格行
  const renderRows = useCallback(() => {
    return paginatedData.map((record, rowIndex) => {
      const rowKeyValue = getRowKey(record, rowIndex);
      const isSelected = selectedRowKeysSet.has(rowKeyValue);
      
      return (
        <MemoizedRow
          key={rowKeyValue}
          record={record}
          index={rowIndex}
          columns={columns}
          rowSelection={rowSelection}
          onRowClick={onRowClick}
          isSelected={isSelected}
          rowKey={rowKeyValue}
          // 传递处理函数
          onSelectChange={(checked) => handleRowSelect(record, checked, rowIndex)}
          stickyOffsets={stickyOffsets}
        />
      );
    });
  }, [
    paginatedData, 
    selectedRowKeysSet, 
    getRowKey, 
    columns, 
    rowSelection, 
    onRowClick,
    handleRowSelect,
    stickyOffsets
  ]);

  return (
    <TableContainer theme={theme} variant={variant} className={className} style={style}>
      {title && (
        <TableTitle theme={theme}>
          {typeof title === 'string' ? (
            <div className="title-content">
              <span>{title}</span>
            </div>
          ) : (
            title
          )}
        </TableTitle>
      )}
      
      {((rowSelection?.showSelectedInfo ?? rowSelection?.showSelectionTitle ?? true) && selectedRowKeys.length > 0) && (
        <SelectionInfo theme={theme}>
          {rowSelection?.renderTitle?.(selectedRowKeys.length) ?? `Selected ${selectedRowKeys.length} items`}
        </SelectionInfo>
      )}

      <TableScrollContainer scroll={scroll}>
        <StyledTable 
          bordered={bordered} 
          striped={striped} 
          hoverable={hoverable}
          scroll={scroll}
        >
          {renderHeader()}
          
          {paginatedData.length > 0 ? (
            <TableBody striped={striped} hoverable={hoverable}>
              {renderRows()}
            </TableBody>
          ) : renderEmpty()}
        </StyledTable>
        
        {loading && (
          <LoadingContainer>
            <Spin />
          </LoadingContainer>
        )}
        {footer && <TableFooter theme={theme}>{footer}</TableFooter>}
      </TableScrollContainer>
      
      {pagination && pagination.total > 0 && (
        <Pagination
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={pagination.total}
          onChange={pagination.onChange}
          pageSizeOptions={pagination.pageSizeOptions}
          showSizeChanger={pagination.showSizeChanger}
          showTotal={pagination.showTotal}
          variant={variant === 'borderless' ? 'outline' : 'default'}
          align={variant === 'borderless' ? 'right' : undefined}
        />
      )}
    </TableContainer>
  );
};

export default Table;