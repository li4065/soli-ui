import React from 'react';
import { PaginationContainer } from './pagination.styles';
import { PaginationContext } from './pagination.context';
import { PaginationItems  } from './paginationRenderer';
import type { PaginationProps } from './pagination.types';

export const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  pageSize = 10,
  theme = 'light',
  onChange,
  onPageSizeChange,
  className,
  style,
  showQuickJumper = false,
  quickJumperType = 'default',
  showSizeChanger = false,
  pageSizeOptions = [10, 20, 50, 100],
  showTotal = true,
  align = 'center',
  variant = 'default',
}) => {
  // 确保当前页在有效范围内
  const totalPages = Math.ceil(total / pageSize);
  const safeCurrent = Math.max(1, Math.min(current, totalPages));
  
  const contextValue = {
    current: safeCurrent,
    total,
    pageSize,
    theme,
    onChange,
    onPageSizeChange: onPageSizeChange as (size: number) => void,
    showQuickJumper,
    quickJumperType,
    showSizeChanger,
    pageSizeOptions,
    showTotal,
    variant,
  };
  
  return (
    <PaginationContext.Provider value={contextValue}>
      <PaginationContainer 
        paginationTheme={theme}
        align={align}
        className={`admin-pagination ${className}`}
        style={style}
        variant={variant}
      >
        <PaginationItems />
      </PaginationContainer>
    </PaginationContext.Provider>
  );
};