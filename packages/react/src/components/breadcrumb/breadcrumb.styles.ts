import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 尺寸类型
export type BreadcrumbSize = 'sm' | 'md' | 'lg';

const sizeMap: Record<BreadcrumbSize, { fontSize: string; padding: string }> = {
  sm: { fontSize: '12px', padding: '4px 0' },
  md: { fontSize: '14px', padding: '8px 0' },
  lg: { fontSize: '16px', padding: '12px 0' },
};

// 面包屑容器样式
export const BreadcrumbContainer = styled.nav<{ className?: string }>`
  display: flex;
  align-items: center;
  font-family: var(--breadcrumb-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial);
  font-size: var(--breadcrumb-font-size, 14px);
  line-height: var(--breadcrumb-line-height, 1.5);
  padding: var(--breadcrumb-padding, 8px 0);
  margin: 0;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 面包屑项容器 - 基础样式
export const BreadcrumbItemBase = styled.span<{ className?: string }>`
  display: inline-flex;
  align-items: center;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 残通项样式
export const BreadcrumbItemNormal = styled(BreadcrumbItemBase)`
  color: var(--breadcrumb-item-color, rgba(0, 0, 0, 0.45));
`;

// 最后一项样式
export const BreadcrumbItemLast = styled(BreadcrumbItemBase)`
  color: var(--breadcrumb-item-last-color, rgba(0, 0, 0, 0.85));
`;

// 隐藏项样式
export const BreadcrumbItemHidden = styled(BreadcrumbItemBase)`
  display: none;
`;

// 省略号项样式
export const BreadcrumbItemEllipsis = styled(BreadcrumbItemBase)`
  margin-right: var(--breadcrumb-ellipsis-margin-right, 8px);  
  &::before {
    content: '...';
  }
`;

// 项内容包装（用于 icon + 文本 布局）
export const BreadcrumbItemInner = styled.span<{ className?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 图标包装
export const BreadcrumbIconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;

// 链接样式
export const BreadcrumbLink = styled.a<{ className?: string }>`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: var(--breadcrumb-link-hover-color, #1890ff);
    text-decoration: none;
    cursor: pointer;
  }

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 当前项样式（不可点击）
export const BreadcrumbCurrent = styled.span<{ className?: string }>`
  color: inherit;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 分隔符样式
export const BreadcrumbSeparator = styled.span<{ custom?: boolean }>`
  margin: 0 var(--breadcrumb-separator-margin, 8px);
  color: var(--breadcrumb-separator-color, rgba(0, 0, 0, 0.45));
  
  ${({ custom }) => !custom && `
    &::after {
      content: '/';
    }
  `}
`;

// 响应式：省略号容器（小屏显示，大屏隐藏）
export const BreadcrumbEllipsisWrap = styled.span`
  display: none;
  align-items: center;
  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

// 响应式：中间项容器（大屏显示，小屏隐藏）
export const BreadcrumbItemResponsiveMiddle = styled.span`
  display: inline-flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none !important;
  }
`;

// 响应式面包屑容器
export const ResponsiveBreadcrumb = styled.div<{ responsive?: boolean; size?: BreadcrumbSize; className?: string }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: ${({ size = 'md' }) => sizeMap[size].fontSize};
  padding: ${({ size = 'md' }) => sizeMap[size].padding};

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;