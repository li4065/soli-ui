import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

// 定义Alert类型
export type AlertType = 'success' | 'info' | 'warning' | 'error';

// 圆角类型（与 Input 一致）
export type AlertRadius = 'full' | 'lg' | 'md' | 'sm' | 'none';

// 圆角映射
const radiusMap: Record<AlertRadius, string> = {
  full: '9999px',
  lg: '12px',
  md: '6px',
  sm: '4px',
  none: '0',
};

// 定义Alert样式props接口
export interface AlertStyleProps {
  type?: AlertType;
  closable?: boolean;
  showIcon?: boolean;
  hasTitle?: boolean;
  className?: string;
  /** 边框圆角 */
  radius?: AlertRadius;
}

// 动画定义
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
`;

// 类型对应的颜色
const typeColors = {
  success: {
    bg: '#f6ffed',
    border: '#b7eb8f',
    icon: '#52c41a',
    text: '#135200',
  },
  info: {
    bg: '#e6f7ff',
    border: '#91d5ff',
    icon: '#1890ff',
    text: '#003a8c',
  },
  warning: {
    bg: '#fffbe6',
    border: '#ffe58f',
    icon: '#faad14',
    text: '#613400',
  },
  error: {
    bg: '#fff2f0',
    border: '#ffccc7',
    icon: '#ff4d4f',
    text: '#820014',
  },
};

// 定义Alert容器样式
export const AlertContainer = styled.div<AlertStyleProps & { visible?: boolean; closing?: boolean }>`
  position: relative;
  display: flex;
  border-radius: ${({ radius = 'md' }) => radiusMap[radius]};
  margin-bottom: var(--alert-margin-bottom, 16px);
  border: 1px solid;
  transition: all 0.3s;
  animation: ${({ visible, closing }) => 
    visible ? css`${fadeIn} 0.3s ease-out` : 
    closing ? css`${fadeOut} 0.3s ease-out forwards` : 'none'};
  
  /* 根据类型设置颜色 */
  ${({ type = 'info' }) => {
    const colors = typeColors[type];
    return css`
      background-color: var(--alert-bg, ${colors.bg});
      border-color: var(--alert-border-color, ${colors.border});
      color: var(--alert-text, ${colors.text});
    `;
  }}
  
  /* 当有标题时的样式 */
  ${({ hasTitle }) => hasTitle && css`
    padding: var(--alert-padding-with-title, 16px);
    align-items: flex-start;
  `}
  
  /* 当没有标题时的样式 */
  ${({ hasTitle }) => !hasTitle && css`
    padding: var(--alert-padding-without-title, 12px 16px);
    align-items: center;
  `}

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 图标容器
export const AlertIcon = styled.div<AlertStyleProps>`
  display: flex;
  align-items: center;
  margin-right: var(--alert-icon-margin-right, 12px);
  font-size: var(--alert-icon-size-with-title, 20px);
  
  ${({ hasTitle }) => !hasTitle && css`
    font-size: var(--alert-icon-size-without-title, 18px);
  `}
  
  ${({ type = 'info' }) => css`
    color: var(--alert-icon-color, ${typeColors[type].icon});
  `}
`;

// 内容容器
export const AlertContent = styled.div`
  flex: 1;
  min-width: 0;
`;

// 标题样式
export const AlertTitle = styled.div`
  font-weight: 600;
  font-size: var(--alert-title-font-size, 16px);
  line-height: var(--alert-title-line-height, 1.4);
  margin-bottom: var(--alert-title-margin-bottom, 4px);
`;

// 描述样式
export const AlertDescription = styled.div`
  font-size: var(--alert-description-font-size, 14px);
  line-height: var(--alert-description-line-height, 1.5);
`;

// 关闭按钮样式
export const AlertClose = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: var(--alert-close-margin-left, 12px);
  color: var(--alert-close-color, rgba(0, 0, 0, 0.45));
  font-size: var(--alert-close-font-size, 14px);
  display: flex;
  align-items: center;
  transition: color 0.3s;
  
  &:hover {
    color: var(--alert-close-hover-color, rgba(0, 0, 0, 0.75));
  }
`;

// 操作区域样式
export const AlertAction = styled.div`
  margin-top: var(--alert-action-margin-top, 8px);
  display: flex;
  gap: var(--alert-action-gap, 8px);
`;