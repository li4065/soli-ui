import { 
  useState, 
  useEffect, 
  useRef, 
  useCallback,
  type ReactNode,
  type CSSProperties
} from 'react';
import { 
  ListContainer, 
  ListWrapper, 
  ListContent, 
  ListFooter,
  ListHeader,
  ListLoading,
  ListEmpty,
  paginationStyles,
  loadingOverlayStyles,
  type ListVariant
} from './list.styles';

export interface ListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor?: (item: T, index: number) => string;
  header?: ReactNode;
  footer?: ReactNode;
  loading?: boolean;
  loadingText?: string;
  emptyText?: string;
  emptyComponent?: ReactNode;
  layout?: 'vertical' | 'horizontal' | 'grid';
  gridColumns?: number;
  itemSize?: number;
  virtualScroll?: boolean;
  virtualBuffer?: number;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
  onScroll?: (scrollTop: number) => void;
  onReachEnd?: () => void;
  style?: CSSProperties;
  className?: string;
  scrollToIndex?: number;
  itemSpacing?: number;
  height?: number | string;
  width?: number | string;
  variant?: ListVariant;
}

export function List<T>({
  data = [],
  renderItem,
  keyExtractor = (_, index) => index.toString(),
  header,
  footer,
  loading = false,
  loadingText = '加载中...',
  emptyText = '暂无数据',
  emptyComponent,
  layout = 'vertical',
  gridColumns = 3,
  itemSize = 50,
  virtualScroll = false,
  virtualBuffer = 5,
  pagination,
  onScroll,
  onReachEnd,
  style,
  className,
  scrollToIndex,
  itemSpacing = 8,
  height = 'auto',
  width = '100%',
  variant = 'outlined'
}: ListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  // const [isScrolling, setIsScrolling] = useState(false);
  // console.log(isScrolling)
  
  // 计算可见范围
  const calculateVisibleRange = useCallback(() => {
    if (!containerRef.current || !virtualScroll || data.length === 0) {
      return { start: 0, end: data.length - 1 };
    }
    
    const scrollTop = containerRef.current.scrollTop;
    const start = Math.max(0, Math.floor(scrollTop / itemSize) - virtualBuffer);
    const visibleItems = Math.ceil(dimensions.height / itemSize) + virtualBuffer * 2;
    const end = Math.min(data.length - 1, start + visibleItems);
    
    return { start, end };
  }, [data.length, dimensions.height, itemSize, virtualBuffer, virtualScroll]);
  
  // 更新可见范围
  useEffect(() => {
    if (!containerRef.current || !virtualScroll) return;
    
    const newRange = calculateVisibleRange();
    setVisibleRange(newRange);
  }, [calculateVisibleRange, virtualScroll]);
  
  // 监听滚动事件
  const handleScroll = useCallback(() => {
  if (!containerRef.current) return;
  
  const scrollTop = containerRef.current.scrollTop;
  
  // 滚动回调
  onScroll?.(scrollTop);
  
  // 滚动到底部回调
  if (containerRef.current.scrollHeight - scrollTop <= containerRef.current.clientHeight + 50) {
    onReachEnd?.();
  }
  
  // 更新可见范围
  if (virtualScroll) {
    const newRange = calculateVisibleRange();
    setVisibleRange(newRange);
  }
}, [calculateVisibleRange, onReachEnd, onScroll, virtualScroll]);
  
  // 监听容器尺寸变化
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // 滚动到指定位置
  useEffect(() => {
    if (scrollToIndex !== undefined && containerRef.current) {
      const scrollPosition = scrollToIndex * itemSize;
      containerRef.current.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [scrollToIndex, itemSize]);
  
  // 渲染列表内容
  const renderContent = () => {
    // 空状态
    if (data.length === 0 && !loading) {
      return emptyComponent || (
        <ListEmpty>
          <div className="empty-content">
            <svg width="64" height="41" viewBox="0 0 64 41">
              <g transform="translate(0 1)" fill="none" fillRule="evenodd">
                <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse>
                <g fillRule="nonzero" stroke="#D9D9D9">
                  <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                  <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#FAFAFA"></path>
                </g>
              </g>
            </svg>
            <div className="empty-text">{emptyText}</div>
          </div>
        </ListEmpty>
      );
    }
    
    // 虚拟滚动渲染
    if (virtualScroll && data.length > 0) {
      const { start, end } = visibleRange;
      const visibleData = data.slice(start, end + 1);
      
      return (
        <div 
          className="virtual-scroll-container"
          style={{ 
            height: `${data.length * itemSize}px`,
            position: 'relative'
          }}
        >
          {visibleData.map((item, index) => {
            const actualIndex = start + index;
            return (
              <div
                key={keyExtractor(item, actualIndex)}
                style={{
                  position: 'absolute',
                  top: `${actualIndex * itemSize}px`,
                  width: '100%',
                  height: `${itemSize}px`
                }}
              >
                {renderItem(item, actualIndex)}
              </div>
            );
          })}
        </div>
      );
    }
    
    // 普通渲染
    return data.map((item, index) => (
      <div key={keyExtractor(item, index)}>
        {renderItem(item, index)}
      </div>
    ));
  };
  
  // 计算布局样式
  const getLayoutStyle = (): CSSProperties => {
    switch (layout) {
      case 'horizontal':
        return { 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          paddingBottom: '10px'
        };
      case 'grid':
        return {
          display: 'grid',
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          gap: `${itemSpacing}px`
        };
      default: // vertical
        return {
          display: 'flex',
          flexDirection: 'column',
          gap: `${itemSpacing}px`
        };
    }
  };
  
  // 渲染分页器
  const renderPagination = () => {
    if (!pagination) return null;
    
    const { current, pageSize, total } = pagination;
    const totalPages = Math.ceil(total / pageSize);
    
    if (totalPages <= 1) return null;
    
    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== current) {
        pagination.onChange(page, pageSize);
      }
    };
    
    return (
      <div css={paginationStyles}>
        <button 
          className="pagination-button"
          onClick={() => handlePageChange(current - 1)} 
          disabled={current <= 1}
        >
          &lt;
        </button>
        
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          let page = i + 1;
          
          // 当前页在中间时的页码显示逻辑
          if (current > 3 && totalPages > 5) {
            if (current > totalPages - 3) {
              page = totalPages - 4 + i;
            } else {
              page = Math.max(1, Math.min(totalPages - 4, current - 2)) + i;
            }
          }
          
          return (
            <button
              key={page}
              className={`pagination-button ${current === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}
        
        {totalPages > 5 && current < totalPages - 2 && (
          <span className="pagination-ellipsis">...</span>
        )}
        
        {totalPages > 5 && current < totalPages - 2 && (
          <button
            className={`pagination-button ${current === totalPages ? 'active' : ''}`}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        )}
        
        <button 
          className="pagination-button"
          onClick={() => handlePageChange(current + 1)} 
          disabled={current >= totalPages}
        >
          &gt;
        </button>
        
        <div className="pagination-info">
          第 {current} 页 / 共 {totalPages} 页
        </div>
      </div>
    );
  };
  
  return (
    <ListContainer 
      style={{ height, width, ...style }} 
      className={`solid-list ${className || ''}`}
      variant={variant}
    >
      {header && <ListHeader>{header}</ListHeader>}
      
      <ListWrapper 
        ref={containerRef}
        onScroll={handleScroll}
        virtualScroll={virtualScroll}
        style={{ position: 'relative' }} 
      >
        <ListContent 
          ref={contentRef}
          style={getLayoutStyle()}
          layout={layout}
          virtualScroll={virtualScroll}
        >
          {renderContent()}
        </ListContent>
        
        {loading && (
          <div css={loadingOverlayStyles}>
            <ListLoading>
              <div className="loading-spinner">
                <div className="spinner"></div>
                <div className="loading-text">{loadingText}</div>
              </div>
            </ListLoading>
          </div>
        )}
      </ListWrapper>
      
      {footer && <ListFooter>{footer}</ListFooter>}
      
      {pagination && renderPagination()}
    </ListContainer>
  );
}