import React from 'react';
import { 
  BreadcrumbItemNormal,
  BreadcrumbItemLast,
  BreadcrumbItemHidden,
  BreadcrumbItemEllipsis,
  BreadcrumbLink, 
  BreadcrumbCurrent,
  BreadcrumbSeparator,
  BreadcrumbItemInner,
  BreadcrumbIconWrap
} from './breadcrumb.styles';

export interface BreadcrumbItemProps {
  /** 面包屑项内容 */
  children?: React.ReactNode;
  /** 链接地址 */
  href?: string;
  /** 点击事件 */
  onClick?: () => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否当前项（最后一项） */
  isCurrent?: boolean;
  /** 自定义分隔符 */
  separator?: React.ReactNode;
  /** 是否在响应式下隐藏 */
  hidden?: boolean;
  /** 是否显示为省略号 */
  ellipsis?: boolean;
  /** 该项的图标 */
  icon?: React.ReactNode;
  /** 图标位置：'before' 在文字前，'after' 在文字后 */
  iconPosition?: 'before' | 'after';
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  href,
  onClick,
  disabled = false,
  isCurrent = false,
  separator,
  hidden = false,
  ellipsis = false,
  icon,
  iconPosition = 'before',
  className,
  style
}) => {
  // 选择正确的容器组件
  let Container = BreadcrumbItemNormal;
  if (ellipsis) Container = BreadcrumbItemEllipsis;
  else if (hidden) Container = BreadcrumbItemHidden;
  else if (isCurrent) Container = BreadcrumbItemLast;
  
  const iconNode = icon ? (
    <BreadcrumbIconWrap>{icon}</BreadcrumbIconWrap>
  ) : null;
  
  const wrapWithIcon = (content: React.ReactNode) => {
    if (!iconNode) return content;
    return (
      <BreadcrumbItemInner>
        {iconPosition === 'before' ? (
          <>
            {iconNode}
            {content}
          </>
        ) : (
          <>
            {content}
            {iconNode}
          </>
        )}
      </BreadcrumbItemInner>
    );
  };
  
  // 渲染内容
  const renderContent = () => {
    if (ellipsis) {
      return <span>{children}</span>;
    }
    
    if (isCurrent || disabled) {
      return (
        <BreadcrumbCurrent>
          {wrapWithIcon(children)}
        </BreadcrumbCurrent>
      );
    }
    
    if (href || onClick) {
      return (
        <BreadcrumbLink 
          href={href} 
          onClick={onClick}
        >
          {wrapWithIcon(children)}
        </BreadcrumbLink>
      );
    }
    
    return <span>{wrapWithIcon(children)}</span>;
  };
  
  return (
    <Container className={className} style={style}>
      {renderContent()}
      {!isCurrent && !ellipsis && !hidden && (
        <BreadcrumbSeparator custom={!!separator}>
          {separator}
        </BreadcrumbSeparator>
      )}
    </Container>
  );
};