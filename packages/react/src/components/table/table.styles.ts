import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TableTitle = styled.div<{ theme?: 'light' | 'dark' }>`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  padding: 0 8px;
  color: ${({ theme }) => theme === 'dark' ? '#e6e6e6' : 'rgba(0, 0, 0, 0.85)'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .title-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .title-extra {
    font-size: 14px;
    font-weight: normal;
    color: ${({ theme }) => theme === 'dark' ? '#bfbfbf' : 'rgba(0, 0, 0, 0.65)'};
  }
`;

export const SelectionInfo = styled.div<{ theme?: 'light' | 'dark' }>`
  margin-bottom: 16px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(24, 144, 255, 0.1)' : '#e6f7ff'};
  border: 1px solid ${({ theme }) => theme === 'dark' ? '#1890ff' : '#91d5ff'};
  border-radius: 4px;
  color: ${({ theme }) => theme === 'dark' ? '#a6d4ff' : 'rgba(0, 0, 0, 0.85)'};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// 表格页脚样式
export const TableFooter = styled.div<{ theme?: 'light' | 'dark' }>`
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme === 'dark' ? '#434343' : '#f0f0f0'};
  background-color: ${({ theme }) => theme === 'dark' ? '#1f1f1f' : '#fafafa'};
  color: ${({ theme }) => theme === 'dark' ? '#e6e6e6' : 'rgba(0, 0, 0, 0.85)'};
  font-size: 14px;
  border-radius: 0 0 4px 4px;
`;

export const TableScrollContainer = styled.div<{ 
  scroll?: { x?: number | string; y?: number | string }; 
}>`
  overflow: auto;
  width: 100%;
  ${({ scroll }) => scroll?.y && css`
    max-height: ${typeof scroll.y === 'number' ? `${scroll.y}px` : scroll.y};
  `}
  ${({ scroll }) => scroll?.x && css`
    max-width: ${typeof scroll.x === 'number' ? `${scroll.x}px` : scroll.x};
  `}
`;

// 表格容器
export const TableContainer = styled.div<{ theme?: 'light' | 'dark'; variant?: 'default' | 'borderless' }>`
  position: relative;
  width: 100%;
  // 移除 overflow: auto，由内部 TableScrollContainer 处理
  border-radius: ${({ variant }) => variant === 'borderless' ? '0' : '4px'};
  box-shadow: ${({ theme, variant }) => 
    variant === 'borderless' 
      ? 'none'
      : theme === 'dark' 
        ? '0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.6)' 
        : '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'};
  background-color: ${({ theme, variant }) => 
    variant === 'borderless' 
      ? 'transparent' 
      : theme === 'dark' ? '#141414' : '#fff'};
  color: ${({ theme }) => theme === 'dark' ? '#e6e6e6' : 'rgba(0, 0, 0, 0.85)'};
  display: flex;
  flex-direction: column;
`;

// 表格主体
export const StyledTable = styled.table<{ 
  striped?: boolean; 
  bordered?: boolean;
  hoverable?: boolean;
  theme?: 'light' | 'dark';
  scroll?: { x?: number | string; y?: number | string };
}>`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: ${({ theme }) => theme === 'dark' ? '#e6e6e6' : 'rgba(0, 0, 0, 0.85)'};

  ${({ scroll }) => scroll?.x && css`
    width: max-content;
    min-width: 100%;
  `}
  
  ${({ bordered, theme }) => bordered && css`
    border: 1px solid ${theme === 'dark' ? '#434343' : '#e8e8e8'};
    border-radius: 4px;
  `}
`;

// 表头
export const TableHead = styled.thead<{ theme?: 'light' | 'dark' }>`
  background-color: ${({ theme }) => theme === 'dark' ? '#1d1d1d' : '#fafafa'};
  font-weight: 500;
`;

// 表头单元格
export const TableHeaderCell = styled.th<{ 
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  theme?: 'light' | 'dark';
  sticky?: boolean;
  fixed?: 'left' | 'right';
  offset?: number | string;
}>`
  padding: 16px;
  text-align: ${({ align = 'left' }) => align};
  border-bottom: 1px solid ${({ theme }) => theme === 'dark' ? '#434343' : '#e8e8e8'};
  position: ${({ sticky, fixed }) => (fixed ? 'sticky' : sticky ? 'sticky' : 'relative')};
  top: ${({ sticky }) => sticky ? 0 : 'auto'};
  left: ${({ fixed, offset }) => (fixed === 'left' ? (typeof offset === 'number' ? `${offset}px` : offset || 0) : 'auto')};
  right: ${({ fixed, offset }) => (fixed === 'right' ? (typeof offset === 'number' ? `${offset}px` : offset || 0) : 'auto')};
  z-index: ${({ sticky, fixed }) => (fixed ? 20 : sticky ? 10 : 'auto')}; // fixed columns higher than sticky header
  color: ${({ theme }) => theme === 'dark' ? '#bfbfbf' : 'rgba(0, 0, 0, 0.85)'};
  background-color: ${({ theme }) => theme === 'dark' ? '#1d1d1d' : '#fafafa'};
  
  ${({ sortable, theme }: { sortable?: boolean; theme?: 'light' | 'dark' }) => sortable && theme && css`
    cursor: pointer;
    user-select: none;
    
    &:hover {
      background-color: ${theme === 'dark' ? '#2a2a2a' : '#f5f5f5'};
    }
  `}
`;

// 排序指示器
export const SortIndicator = styled.span`
  display: inline-block;
  margin-left: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  vertical-align: middle;
`;

// 排序升序图标
export const SortAscending = styled(SortIndicator)`
  border-width: 0 4px 5px 4px;
  border-color: transparent transparent #bfbfbf transparent;
`;

// 排序降序图标
export const SortDescending = styled(SortIndicator)`
  border-width: 5px 4px 0 4px;
  border-color: #bfbfbf transparent transparent transparent;
  margin-top: -2px;
`;

// 表体
export const TableBody = styled.tbody<{ 
  striped?: boolean; 
  hoverable?: boolean;
}>`
  ${({ striped }) => striped && css`
    tr:nth-of-type(even) {
      background-color: #f9f9f9;
    }
  `}
  
  ${({ hoverable }) => hoverable && css`
    tr:hover {
      background-color: #e6f7ff;
    }
  `}
`;

// 表格行
export const TableRow = styled.tr<{ clickable?: boolean; selected?: boolean }>`
  ${({ clickable }) => clickable && css`
    cursor: pointer;
  `}
  
  ${({ selected }) => selected && css`
    background-color: #e6f7ff !important;
    td {
      background-color: #e6f7ff !important;
    }
  `}
`;

// 表格单元格
export const TableCell = styled.td<{ 
  align?: 'left' | 'center' | 'right';
  ellipsis?: boolean;
  theme?: 'light' | 'dark';
  fixed?: 'left' | 'right';
  offset?: number | string;
}>`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme === 'dark' ? '#303030' : '#e8e8e8'};
  text-align: ${({ align = 'left' }) => align};
  background-color: ${({ theme }) => theme === 'dark' ? '#141414' : '#fff'};
  position: ${({ fixed }) => (fixed ? 'sticky' : 'static')};
  left: ${({ fixed, offset }) => (fixed === 'left' ? (typeof offset === 'number' ? `${offset}px` : offset || 0) : 'auto')};
  right: ${({ fixed, offset }) => (fixed === 'right' ? (typeof offset === 'number' ? `${offset}px` : offset || 0) : 'auto')};
  z-index: ${({ fixed }) => (fixed ? 1 : 'auto')};
  
  ${({ ellipsis }) => ellipsis && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  `}
`;

// 空状态容器
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

// 空状态文本
export const EmptyText = styled.p`
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
`;

// 加载状态容器
export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;

// 分页容器
export const PaginationContainer = styled.div<{ theme?: 'light' | 'dark'; variant?: 'default' | 'outline'; align?: 'left' | 'center' | 'right' }>`
  display: flex;
  justify-content: ${({ align }) => {
    if (align === 'right') return 'flex-end';
    if (align === 'left') return 'flex-start';
    if (align === 'center') return 'center';
    return 'space-between';
  }};
  align-items: center;
  padding: 16px;
  gap: 16px;
  border-top: ${({ variant, theme }) => variant === 'outline' ? 'none' : `1px solid ${theme === 'dark' ? '#303030' : '#e8e8e8'}`};
  background-color: ${({ theme, variant }) => variant === 'outline' ? 'transparent' : (theme === 'dark' ? '#1d1d1d' : '#fafafa')};
  color: ${({ theme }) => theme === 'dark' ? '#bfbfbf' : 'rgba(0, 0, 0, 0.65)'};
`;

// 分页按钮组
export const PaginationButtons = styled.div`
  display: flex;
  gap: 8px;
`;

// 分页按钮
export const PaginationButton = styled.button<{ active?: boolean; variant?: 'default' | 'outline' }>`
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border: ${({ variant, active }) => variant === 'outline' ? (active ? '1px solid #1890ff' : '1px solid transparent') : '1px solid #d9d9d9'};
  border-radius: 4px;
  background-color: ${({ active, variant }) => 
    variant === 'outline' 
      ? 'transparent' 
      : (active ? '#1890ff' : '#fff')
  };
  color: ${({ active, variant }) => 
    variant === 'outline' 
      ? (active ? '#1890ff' : 'rgba(0, 0, 0, 0.65)')
      : (active ? '#fff' : 'rgba(0, 0, 0, 0.65)')
  };
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    border-color: #1890ff;
    color: #1890ff;
  }
  
  &:disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    border-color: ${({ variant }) => variant === 'outline' ? 'transparent' : '#d9d9d9'};
    background-color: ${({ variant }) => variant === 'outline' ? 'transparent' : '#fff'}; // Was #fff (or implicit default), fixing to match logic
  }
`;

// 页大小选择器
export const PageSizeSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  select {
    padding: 4px 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }
`;

export const SelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;

  input[type="checkbox"] {
    cursor: pointer;
  }
`;

// 操作按钮容器
export const ActionCell = styled(TableCell)<{
  align?: 'left' | 'center' | 'right';
}>`
  display: flex;
  gap: 8px;
  justify-content: ${({ align }) => align === 'right' ? 'flex-end' : align === 'left' ? 'flex-start' : 'center'};
  
  button {
    padding: 4px 8px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      border-color: #1890ff;
      color: #1890ff;
    }
  }
`;