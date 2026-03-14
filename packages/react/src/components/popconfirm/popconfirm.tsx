import React, { useState, useRef, useEffect } from 'react';
import { 
  PopconfirmContainer, 
  PopconfirmContent, 
  PopconfirmArrow 
} from './popconfirm.styles';
import { WarningIcon } from '../icons';

export interface PopconfirmProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  icon?: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  children: React.ReactElement;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  popupClassName?: string;
  contentClassName?: string;
  arrowClassName?: string;
  okButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  cancelButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Popconfirm = ({
  title,
  description,
  onConfirm,
  onCancel,
  okText = '确定',
  cancelText = '取消',
  icon,
  placement = 'top',
  children,
  disabled = false,
  className,
  style,
  popupClassName,
  contentClassName,
  arrowClassName,
  okButtonProps,
  cancelButtonProps
}: PopconfirmProps) => {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const renderIcon = icon === undefined ? <WarningIcon /> : icon;

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;
    e.stopPropagation();
    setVisible(!visible);
  };

  const handleConfirm = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
    onConfirm?.();
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
    onCancel?.();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current && 
        !popupRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible]);

  return (
    <div className={className} style={{ position: 'relative', display: 'inline-block', ...style }}>
      <div ref={triggerRef} onClick={handleClick}>
        {children}
      </div>
      
      {visible && (
        <PopconfirmContainer ref={popupRef} placement={placement} className={popupClassName}>
          <PopconfirmArrow placement={placement} className={arrowClassName} />
          
          <PopconfirmContent className={contentClassName}>
            <div className="popconfirm-icon">
              {renderIcon}
            </div>
            
            <div className="popconfirm-message">
              <div className="popconfirm-title">{title}</div>
              {description && <div className="popconfirm-description">{description}</div>}
            </div>
            
            <div className="popconfirm-buttons">
              <button 
                {...cancelButtonProps}
                onClick={handleCancel} 
                className={`popconfirm-cancel-btn ${cancelButtonProps?.className || ''}`}
              >
                {cancelText}
              </button>
              <button 
                {...okButtonProps}
                onClick={handleConfirm} 
                className={`popconfirm-ok-btn ${okButtonProps?.className || ''}`}
              >
                {okText}
              </button>
            </div>
          </PopconfirmContent>
        </PopconfirmContainer>
      )}
    </div>
  );
};