import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface DrawerWrapperProps {
  placement: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

export interface DrawerMaskProps {
  visible?: boolean;
  className?: string;
}

// 遮罩层样式
export const DrawerMask = styled.div<DrawerMaskProps & React.HTMLAttributes<HTMLDivElement>>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  
  &.open {
    opacity: 1;
    pointer-events: all;
  }

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 抽屉容器
export const DrawerWrapper = styled.div<DrawerWrapperProps & React.HTMLAttributes<HTMLDivElement>>`
  position: fixed;
  background-color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, visibility 0.3s ease;
  visibility: hidden;
  
  // 根据位置设置初始位置和动画方向
  ${({ placement }) => {
    switch (placement) {
      case 'left':
        return css`
          top: 0;
          left: 0;
          bottom: 0;
          transform: translateX(-100%);
          &.open {
            transform: translateX(0);
            visibility: visible;
          }
        `;
      case 'right':
        return css`
          top: 0;
          right: 0;
          bottom: 0;
          transform: translateX(100%);
          &.open {
            transform: translateX(0);
            visibility: visible;
          }
        `;
      case 'top':
        return css`
          top: 0;
          left: 0;
          right: 0;
          transform: translateY(-100%);
          &.open {
            transform: translateY(0);
            visibility: visible;
          }
        `;
      case 'bottom':
        return css`
          bottom: 0;
          left: 0;
          right: 0;
          transform: translateY(100%);
          &.open {
            transform: translateY(0);
            visibility: visible;
          }
        `;
      default:
        return css`
          top: 0;
          right: 0;
          bottom: 0;
          transform: translateX(100%);
          &.open {
            transform: translateX(0);
            visibility: visible;
          }
        `;
    }
  }}

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 抽屉头部
export const DrawerHeader = styled.div<{ className?: string } & React.HTMLAttributes<HTMLDivElement>>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom:1px solid rgba(0, 0, 0, 0.08);
  font-size: 16px;
  font-weight: 500;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 抽屉标题
export const DrawerTitle = styled.div<{ className?: string } & React.HTMLAttributes<HTMLDivElement>>`
  flex: 1;
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 关闭按钮
export const DrawerClose = styled.button<{ className?: string } & React.HTMLAttributes<HTMLButtonElement>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  padding: 0;
  margin-left: 8px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.3s;
  border-radius: 4px;
  
  &:hover {
    color: rgba(0, 0, 0, 0.75);
    background-color: rgba(0, 0, 0, 0.03);
  }
  
  svg {
    display: block;
  }

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 抽屉内容区域
export const DrawerBody = styled.div<{ className?: string } & React.HTMLAttributes<HTMLDivElement>>`
  flex: 1;
  padding: 24px;
  overflow: auto;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// 抽屉页脚
export const DrawerFooter = styled.div<{ className?: string } & React.HTMLAttributes<HTMLDivElement>>`
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
  border-top:1px solid rgba(0, 0, 0, 0.08);
  gap: 8px;
  
  button + button {
    margin-left: 8px;
  }

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;