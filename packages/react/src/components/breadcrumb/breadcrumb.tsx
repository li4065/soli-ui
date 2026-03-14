import React, { cloneElement, Children, type ReactElement } from 'react';
import { 
  ResponsiveBreadcrumb,
  BreadcrumbItemEllipsis,
  BreadcrumbSeparator,
  BreadcrumbEllipsisWrap,
  BreadcrumbItemResponsiveMiddle
} from './breadcrumb.styles';
import { BreadcrumbItem, type BreadcrumbItemProps } from './breadcrumbItem';
import { Tooltip } from '../tooltip/tooltip';

export interface BreadcrumbProps {
  /** 自定义分隔符 */
  separator?: React.ReactNode;
  /** 是否启用响应式（在小屏设备上只显示首尾项） */
  responsive?: boolean;
  /** 出现省略号时，是否可通过点击省略号在弹出框中展示被折叠的菜单 */
  ellipsisPopover?: boolean;
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 面包屑项 */
  children?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> & {
  Item: typeof BreadcrumbItem;
} = ({ 
  separator = '/', 
  responsive = true,
  ellipsisPopover = false,
  size = 'md',
  className,
  style,
  children
}) => {
  const renderOmittedList = (omitted: React.ReactNode[]) => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        minWidth: '80px',
        padding: '4px 0',
      }}>
        {omitted.map((item, i) => {
          if (React.isValidElement(item) && item.type === BreadcrumbItem) {
            const props = (item as ReactElement<BreadcrumbItemProps>).props;
            const { href, onClick, children: itemChildren } = props;
            const content = itemChildren;
            if (href) {
              return (
                <a
                  key={i}
                  href={href}
                  onClick={onClick}
                  style={{
                    color: 'rgba(0,0,0,0.85)',
                    textDecoration: 'none',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '14px',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#f5f5f5'; e.currentTarget.style.color = '#1890ff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(0,0,0,0.85)'; }}
                >
                  {content}
                </a>
              );
            }
            if (onClick) {
              return (
                <span
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={onClick}
                  onKeyDown={(e) => e.key === 'Enter' && onClick()}
                  style={{
                    color: 'rgba(0,0,0,0.85)',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#f5f5f5'; e.currentTarget.style.color = '#1890ff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(0,0,0,0.85)'; }}
                >
                  {content}
                </span>
              );
            }
            return (
              <span key={i} style={{ padding: '4px 12px', fontSize: '14px', color: 'rgba(0,0,0,0.85)' }}>
                {content}
              </span>
            );
          }
          return (
            <span key={i} style={{ padding: '4px 12px', fontSize: '14px', color: 'rgba(0,0,0,0.85)' }}>
              {item}
            </span>
          );
        })}
      </div>
    );
  };

  const renderItems = () => {
    const childrenArray = Children.toArray(children);
    const totalItems = childrenArray.length;
    
    // 非响应式模式，直接渲染所有项
    if (!responsive) {
      return childrenArray.map((child, index) => {
        const isLast = index === totalItems - 1;
        
        if (React.isValidElement(child) && child.type === BreadcrumbItem) {
          return cloneElement(child as ReactElement<BreadcrumbItemProps>, {
            key: (child as ReactElement).key ?? index,
            isCurrent: isLast,
            separator: (child as ReactElement<BreadcrumbItemProps>).props.separator || separator,
          });
        }
        
        return (
          <BreadcrumbItem
            key={index}
            isCurrent={isLast}
            separator={isLast ? null : separator}
          >
            {child}
          </BreadcrumbItem>
        );
      });
    }
    
    // 响应式且项数不超过 3：全部展示
    if (totalItems <= 3) {
      return childrenArray.map((child, index) => {
        const isLast = index === totalItems - 1;
        if (React.isValidElement(child) && child.type === BreadcrumbItem) {
          return cloneElement(child as ReactElement<BreadcrumbItemProps>, {
            key: (child as ReactElement).key ?? index,
            isCurrent: isLast,
            separator: (child as ReactElement<BreadcrumbItemProps>).props.separator || separator,
          });
        }
        return (
          <BreadcrumbItem key={index} isCurrent={isLast} separator={isLast ? null : separator}>
            {child}
          </BreadcrumbItem>
        );
      });
    }
    
    // 响应式且项数 > 3：首项 + 省略号（小屏显示）+ 中间项（大屏显示）+ 末两项
    const first = childrenArray[0];
    const middleItems = childrenArray.slice(1, totalItems - 2);
    const secondLast = childrenArray[totalItems - 2];
    const last = childrenArray[totalItems - 1];
    
    const firstEl = React.isValidElement(first) && first.type === BreadcrumbItem
      ? cloneElement(first as ReactElement<BreadcrumbItemProps>, {
          key: (first as ReactElement).key ?? 'first',
          separator: (first as ReactElement<BreadcrumbItemProps>).props.separator || separator,
        })
      : <BreadcrumbItem key="first" separator={separator}>{first}</BreadcrumbItem>;
    
    const ellipsisNode = ellipsisPopover ? (
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <Tooltip
          trigger="click"
          placement="bottomLeft"
          title={renderOmittedList(middleItems)}
          arrow={false}
          backgroundColor="#fff"
          overlayStyle={{
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            borderRadius: '8px',
            padding: '4px 0',
          }}
          delay={0}
        >
          <BreadcrumbItemEllipsis
            as="span"
            style={{ cursor: 'pointer', marginRight: 0 }}
            role="button"
            tabIndex={0}
          />
        </Tooltip>
        <BreadcrumbSeparator custom={!!separator}>{separator}</BreadcrumbSeparator>
      </span>
    ) : (
      <BreadcrumbItem ellipsis separator={separator} />
    );
    
    const secondLastEl = React.isValidElement(secondLast) && secondLast.type === BreadcrumbItem
      ? cloneElement(secondLast as ReactElement<BreadcrumbItemProps>, {
          key: (secondLast as ReactElement).key ?? 'secondLast',
          isCurrent: false,
          separator: (secondLast as ReactElement<BreadcrumbItemProps>).props.separator || separator,
        })
      : <BreadcrumbItem key="secondLast" separator={separator}>{secondLast}</BreadcrumbItem>;
    
    const lastEl = React.isValidElement(last) && last.type === BreadcrumbItem
      ? cloneElement(last as ReactElement<BreadcrumbItemProps>, {
          key: (last as ReactElement).key ?? 'last',
          isCurrent: true,
          separator: null,
        })
      : <BreadcrumbItem key="last" isCurrent separator={null}>{last}</BreadcrumbItem>;
    
    const middleEls = middleItems.map((child, index) => {
      const idx = index + 1;
      const el = React.isValidElement(child) && child.type === BreadcrumbItem
        ? cloneElement(child as ReactElement<BreadcrumbItemProps>, {
            key: (child as ReactElement).key ?? `middle-${idx}`,
            separator: (child as ReactElement<BreadcrumbItemProps>).props.separator || separator,
          })
        : <BreadcrumbItem key={`middle-${idx}`} separator={separator}>{child}</BreadcrumbItem>;
      return (
        <BreadcrumbItemResponsiveMiddle key={`wrap-${idx}`}>
          {el}
        </BreadcrumbItemResponsiveMiddle>
      );
    });
    
    return [
      firstEl,
      <BreadcrumbEllipsisWrap key="ellipsis-wrap">{ellipsisNode}</BreadcrumbEllipsisWrap>,
      ...middleEls,
      secondLastEl,
      lastEl,
    ];
  };
  
  return (
    <ResponsiveBreadcrumb 
      className={className} 
      style={style}
      responsive={responsive}
      size={size}
    >
      {renderItems()}
    </ResponsiveBreadcrumb>
  );
};

// 附加Item组件
Breadcrumb.Item = BreadcrumbItem;