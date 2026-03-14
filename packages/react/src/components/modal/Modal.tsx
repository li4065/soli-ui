import React, { useEffect } from 'react';
import { 
  overlayStyle, 
  modalContainerStyle, 
  modalContentStyle, 
  modalHeaderStyle, 
  modalTitleStyle, 
  modalCloseStyle, 
  modalBodyStyle, 
  modalFooterStyle, 
  modalButtonStyle,
  getScrollbarWidth,
} from './Modal.styles';
import { CloseIcon } from '../icons';

export interface ModalProps {
  title?: React.ReactNode;
  visible: boolean;
  closing?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  closable?: boolean;
  maskClosable?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  visible,
  closing = false,
  onOk,
  onCancel,
  okText = '确定',
  cancelText = '取消',
  children,
  footer,
  closable = true,
  maskClosable = true,
}) => {
  // 处理键盘事件
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && visible && closable) {
        onCancel?.();
      }
    };
    
    if (visible) {
      document.addEventListener('keydown', handleKeyDown);
      // 防止背景滚动，并处理滚动条消失导致的页面晃动
      const scrollbarWidth = getScrollbarWidth();
      const hasScrollbar = document.body.scrollHeight > window.innerHeight;
      
      if (hasScrollbar && scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [visible, closable, onCancel]);

  // 处理遮罩层点击
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && maskClosable && closable) {
      onCancel?.();
    }
  };

  // 默认底部内容
  const defaultFooter = footer ?? (
    <>
      {cancelText && (
        <button css={modalButtonStyle()} onClick={onCancel}>
          {cancelText}
        </button>
      )}
      {okText && (
        <button css={modalButtonStyle(true)} onClick={onOk}>
          {okText}
        </button>
      )}
    </>
  );

  return (
    <>
      <div 
        css={overlayStyle(visible, closing)} 
        onClick={handleOverlayClick}
        aria-hidden={!visible}
      />
      
      <div 
        css={modalContainerStyle(visible, closing)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div css={modalContentStyle}>
          {title && (
            <div css={modalHeaderStyle}>
              <h2 css={modalTitleStyle} id="modal-title">
                {title}
              </h2>
              {closable && (
                <button css={modalCloseStyle} onClick={onCancel} aria-label="关闭">
                  <CloseIcon />
                </button>
              )}
            </div>
          )}
          
          <div css={modalBodyStyle}>
            {children}
          </div>
          
          {footer !== null && (
            <div css={modalFooterStyle}>
              {defaultFooter}
            </div>
          )}
        </div>
      </div>
    </>
  );
};