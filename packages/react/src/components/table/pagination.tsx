import React from 'react';
import { 
  PaginationContainer, 
  PaginationButtons, 
  PaginationButton,
  PageSizeSelect
} from './table.styles';

interface PaginationProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
  pageSizeOptions?: number[];
  showSizeChanger?: boolean;
  showTotal?: (total: number) => React.ReactNode;
  variant?: 'default' | 'outline';
  align?: 'left' | 'center' | 'right';
}

export const Pagination: React.FC<PaginationProps> = ({
  current,
  pageSize,
  total,
  onChange,
  pageSizeOptions = [10, 20, 50, 100],
  showSizeChanger = true,
  showTotal,
  variant = 'default',
  align = 'center',
}) => {
  const totalPages = Math.ceil(total / pageSize);
  
  // 生成页码按钮
  const renderPageButtons = () => {
    const buttons = [];
    
    // 上一页按钮
    buttons.push(
      <PaginationButton 
        key="prev" 
        onClick={() => onChange(current - 1, pageSize)}
        disabled={current === 1}
        variant={variant}
      >
        &lt;
      </PaginationButton>
    );
    
    // 页码按钮
    const maxButtons = 5;
    let startPage = Math.max(1, current - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;
    
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PaginationButton 
          key={i}
          active={i === current}
          onClick={() => onChange(i, pageSize)}
          variant={variant}
        >
          {i}
        </PaginationButton>
      );
    }
    
    // 下一页按钮
    buttons.push(
      <PaginationButton 
        key="next" 
        onClick={() => onChange(current + 1, pageSize)}
        disabled={current >= totalPages}
        variant={variant}
      >
        &gt;
      </PaginationButton>
    );
    
    return buttons;
  };
  
  return (
    <PaginationContainer variant={variant} align={align}>
      {showTotal && <div>{showTotal(total)}</div>}
      
      <PaginationButtons>
        {renderPageButtons()}
      </PaginationButtons>
      
      {showSizeChanger && (
        <PageSizeSelect>
          <span>每页显示:</span>
          <select
            value={pageSize}
            onChange={(e) => onChange(1, Number(e.target.value))}
          >
            {pageSizeOptions.map(size => (
              <option key={size} value={size}>
                {size} 条
              </option>
            ))}
          </select>
        </PageSizeSelect>
      )}
    </PaginationContainer>
  );
};