import React, { useState } from 'react';
import {
  AlertContainer,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertClose,
  AlertAction,
  type AlertStyleProps,
  type AlertType
} from './alert.styles';
import { CloseIcon } from '../icons';

// 默认图标组件
const DefaultIcons: Record<AlertType, React.ReactNode> = {
  success: (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
  info: (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
  warning: (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  ),
  error: (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
};

export interface AlertProps 
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
          AlertStyleProps {
  type?: AlertType;
  title?: React.ReactNode;
  description?: React.ReactNode;
  closable?: boolean;
  closeText?: React.ReactNode;
  showIcon?: boolean;
  icon?: React.ReactNode;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  afterClose?: () => void;
  action?: React.ReactNode;
  /** 边框圆角：full | lg | md | sm | none */
  radius?: 'full' | 'lg' | 'md' | 'sm' | 'none';
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  description,
  closable = false,
  closeText,
  showIcon = false,
  icon,
  onClose,
  afterClose,
  action,
  radius = 'md',
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);
  
  const hasTitle = Boolean(title);
  const descriptionContent = description || children;
  
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClosing(true);
    
    if (onClose) {
      onClose(e);
    }
    
    // 动画结束后移除组件
    setTimeout(() => {
      setVisible(false);
      if (afterClose) {
        afterClose();
      }
    }, 300);
  };
  
  // 如果不可见，返回 null
  if (!visible) {
    return null;
  }
  
  return (
    <AlertContainer
      type={type}
      closable={closable}
      showIcon={showIcon}
      hasTitle={hasTitle}
      visible={visible}
      closing={closing}
      radius={radius}
      {...props}
    >
      {/* 图标区域 */}
      {showIcon && (
        <AlertIcon type={type} hasTitle={hasTitle}>
          {icon || DefaultIcons[type]}
        </AlertIcon>
      )}
      
      {/* 内容区域 */}
      <AlertContent>
        {title && <AlertTitle>{title}</AlertTitle>}
        {descriptionContent && (
          <AlertDescription>{descriptionContent}</AlertDescription>
        )}
        
        {/* 操作区域 */}
        {action && <AlertAction>{action}</AlertAction>}
      </AlertContent>
      
      {/* 关闭按钮 */}
      {closable && (
        <AlertClose onClick={handleClose}>
          {closeText || <CloseIcon />}
        </AlertClose>
      )}
    </AlertContainer>
  );
};

Alert.displayName = 'Alert';