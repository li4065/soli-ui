import React, { useContext, useState } from 'react';
import { 
  PaginationItem, 
  PaginationDots,
  PaginationSelect,
  PaginationInput,
  PaginationText
} from './pagination.styles';
import { PaginationContext } from './pagination.context';
import type { PageItem } from './pagination.types';
import { LeftIcon, RightIcon, DoubleLeftIcon, DoubleRightIcon } from '../icons';

export const PaginationItems: React.FC = () => {
  const context = useContext(PaginationContext);
  const [jumpPage, setJumpPage] = useState('');
  const [dotsHover, setDotsHover] = useState<'prev' | 'next' | null>(null);
  
  if (!context) {
    throw new Error('PaginationItems must be used within a PaginationProvider');
  }
  
  const { current, total, pageSize, onChange, onPageSizeChange, showQuickJumper, quickJumperType, showSizeChanger, pageSizeOptions, showTotal } = context;
  
  const totalPages = Math.ceil(total / pageSize);
  
  if (totalPages <= 1) return null;
  
  const items: PageItem[] = [];
  
  // 上一页按钮
  items.push({
    type: 'prev',
    page: current > 1 ? current - 1 : 1,
    disabled: current === 1
  });
  
  // 页码按钮
  if (totalPages <= 7) {
    // 显示所有页码
    for (let i = 1; i <= totalPages; i++) {
      items.push({ type: 'page', page: i });
    }
  } else {
    // 处理省略号逻辑
    const firstPage = 1;
    const lastPage = totalPages;
    
    // 总是显示第一页
    items.push({ type: 'page', page: firstPage });
    
    if (current > 3) {
      items.push({ type: 'jump-prev' });
    }
    
    // 当前页附近页码
    const start = Math.max(2, current - 1);
    const end = Math.min(totalPages - 1, current + 1);
    
    for (let i = start; i <= end; i++) {
      items.push({ type: 'page', page: i });
    }
    
    if (current < totalPages - 2) {
      items.push({ type: 'jump-next' });
    }
    
    // 总是显示最后一页
    items.push({ type: 'page', page: lastPage });
  }
  
  // 下一页按钮
  items.push({
    type: 'next',
    page: current < totalPages ? current + 1 : totalPages,
    disabled: current === totalPages
  });
  
  const handlePageJump = () => {
    const pageNum = parseInt(jumpPage, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      onChange(pageNum);
    }
    setJumpPage('');
  };
  
  return (
    <>
      {items.map((item) => {
        switch (item.type) {
          case 'prev':
            return (
              <PaginationItem
                key="prev"
                className={`pagination-item ${item.disabled ? 'disabled' : ''}`}
                onClick={() => !item.disabled && onChange(item.page!)}
              >
                <LeftIcon style={{ width: 16, height: 16 }} />
              </PaginationItem>
            );
          
          case 'next':
            return (
              <PaginationItem
                key="next"
                className={`pagination-item ${item.disabled ? 'disabled' : ''}`}
                onClick={() => !item.disabled && onChange(item.page!)}
              >
                <RightIcon style={{ width: 16, height: 16 }} />
              </PaginationItem>
            );
          
          case 'jump-prev':
            return (
              <PaginationDots
                key="jump-prev"
                onClick={() => onChange(Math.max(1, current - 5))}
                onMouseEnter={() => setDotsHover('prev')}
                onMouseLeave={() => setDotsHover(null)}
              >
                {dotsHover === 'prev' ? (
                  <DoubleLeftIcon style={{ width: 14, height: 14 }} />
                ) : (
                  '...'
                )}
              </PaginationDots>
            );
          
          case 'jump-next':
            return (
              <PaginationDots
                key="jump-next"
                onClick={() => onChange(Math.min(totalPages, current + 5))}
                onMouseEnter={() => setDotsHover('next')}
                onMouseLeave={() => setDotsHover(null)}
              >
                {dotsHover === 'next' ? (
                  <DoubleRightIcon style={{ width: 14, height: 14 }} />
                ) : (
                  '...'
                )}
              </PaginationDots>
            );
          
          case 'page':
            return (
              <PaginationItem
                key={`page-${item.page}`}
                className={`pagination-item ${item.page === current ? 'active' : ''}`}
                onClick={() => item.page !== current && onChange(item.page!)}
              >
                {item.page}
              </PaginationItem>
            );
          
          default:
            return null;
        }
      })}
      
      {showSizeChanger && onPageSizeChange && (
        <>
          <PaginationText>每页:</PaginationText>
          <PaginationSelect
            value={pageSize}
            onChange={(e) => onPageSizeChange(parseInt(e.target.value, 10))}
          >
            {pageSizeOptions?.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </PaginationSelect>
        </>
      )}
      
      {showTotal && (
        <PaginationText>
          {typeof showTotal === 'function'
            ? showTotal(total, [(current - 1) * pageSize + 1, Math.min(current * pageSize, total)])
            : `${(current - 1) * pageSize + 1}-${Math.min(current * pageSize, total)} 共 ${total} 条`
          }
        </PaginationText>
      )}
      
      {showQuickJumper && (
        <>
          <PaginationInput
            type="number"
            min="1"
            max={totalPages}
            value={jumpPage}
            onChange={(e) => setJumpPage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handlePageJump()}
            placeholder="页码"
          />
          {quickJumperType === 'default' && (
            <PaginationItem
              className="pagination-item"
              onClick={handlePageJump}
              style={{ padding: '0 12px', width: 'auto' }}
            >
              跳转
            </PaginationItem>
          )}
        </>
      )}
    </>
  );
};