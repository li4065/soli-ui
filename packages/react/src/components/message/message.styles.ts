import { css, keyframes } from '@emotion/react';
import type { CSSObject } from '@emotion/react';

// 消息类型
export type MessageType = 'success' | 'info' | 'warning' | 'error';

// 消息位置
export type MessagePosition = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';

// 消息项类型
export interface MessageItem {
  id: string;
  content: React.ReactNode;
  type: MessageType;
  duration?: number;
  position?: MessagePosition;
  onClose?: () => void;
  closable?: boolean;
}

// 动画定义
const slideIn = keyframes`
  from { 
    opacity: 0;
    transform: translateY(-20px); 
  }
  to { 
    opacity: 1;
    transform: translateY(0); 
  }
`;

const slideOut = keyframes`
  from { 
    opacity: 1;
    transform: translateY(0); 
  }
  to { 
    opacity: 0;
    transform: translateY(-20px); 
  }
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

// 获取位置样式
export const getPositionStyle = (position: MessagePosition): CSSObject => {
  switch (position) {
    case 'top':
      return {
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    case 'top-left':
      return {
        top: '20px',
        left: '20px',
      };
    case 'top-right':
      return {
        top: '20px',
        right: '20px',
      };
    case 'bottom':
      return {
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    case 'bottom-left':
      return {
        bottom: '20px',
        left: '20px',
      };
    case 'bottom-right':
      return {
        bottom: '20px',
        right: '20px',
      };
    default:
      return {
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
      };
  }
};

// 消息容器样式
export const messageContainerStyle = (position: MessagePosition) => css`
  position: fixed;
  z-index: 1050;
  ${getPositionStyle(position)}
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
`;

// 消息项样式
export const messageItemStyle = (type: MessageType, closing?: boolean) => css`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 300px;
  max-width: 500px;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  animation: ${slideIn} 0.3s ease-out;
  
  ${closing && css`
    animation: ${slideOut} 0.3s ease-out forwards;
  `}
  
  /* 根据类型设置颜色 */
  background-color: ${typeColors[type].bg};
  border: 1px solid ${typeColors[type].border};
  color: ${typeColors[type].text};
`;

// 图标样式
export const messageIconStyle = (type: MessageType) => css`
  display: flex;
  align-items: center;
  margin-right: 12px;
  font-size: 18px;
  
  svg {
    width: 1em;
    height: 1em;
    fill: ${typeColors[type].icon};
  }
`;

// 内容样式
export const messageContentStyle = css`
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
  padding-right: 24px;
`;

// 关闭按钮样式
export const messageCloseStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.2s;
  
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

// 进度条样式
export const messageProgressStyle = (duration: number, closing?: boolean) => css`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0 8px;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: currentColor;
    border-radius: 0 0 0 8px;
    animation: ${keyframes`
      from { width: 100%; }
      to { width: 0; }
    `} ${duration}ms linear forwards;
    
    ${closing && css`
      animation: none;
      width: 0;
    `}
  }
`;