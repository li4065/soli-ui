import React, { useEffect, useState, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { 
  DrawerWrapper,
  DrawerMask,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerBody,
  DrawerFooter
} from './drawer.styles';

export interface DrawerProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  width?: number | string;
  height?: number | string;
  closable?: boolean;
  maskClosable?: boolean;
  mask?: boolean;
  destroyOnClose?: boolean;
  className?: string;
  maskClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  style?: React.CSSProperties;
  zIndex?: number;
}

export const Drawer: React.FC<DrawerProps> = ({
  title,
  children,
  footer,
  open,
  onClose,
  placement = 'right',
  width = 378,
  height = 378,
  closable = true,
  maskClosable = true,
  mask = true,
  destroyOnClose = false,
  className = '',
  maskClassName = '',
  headerClassName = '',
  titleClassName = '',
  bodyClassName = '',
  footerClassName = '',
  style,
  zIndex = 1000
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [isMounted, setIsMounted] = useState(open);
  const drawerRef = useRef<HTMLDivElement>(null);
  
  const handleTransitionEnd = useCallback(() => {
    if (!open && destroyOnClose) {
      setIsMounted(false);
    }
  }, [open, destroyOnClose]);

  const handleMaskClick = useCallback(() => {
    if (maskClosable && onClose) {
      onClose();
    }
  }, [maskClosable, onClose]);

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (open) {
      setIsMounted(true);
      requestAnimationFrame(() => setIsOpen(true));
      document.body.style.overflowX = 'hidden';
    } else {
      setIsOpen(false);
      document.body.style.overflow = '';
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open && onClose) {
        onClose();
      }
    };
    
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  const getDrawerSize = () => {
    if (placement === 'left' || placement === 'right') {
      return {
        width: typeof width === 'number' ? `${width}px` : width,
        height: '100%'
      };
    }
    
    return {
      width: '100%',
      height: typeof height === 'number' ? `${height}px` : height
    };
  };

  const renderDrawer = () => {
    if (!isMounted && destroyOnClose) return null;
    
    const drawerSize = getDrawerSize();
    
    return (
      <DrawerWrapper 
        key={placement}
        ref={drawerRef}
        className={`${className} ${isOpen ? 'open' : ''}`}
        placement={placement}
        style={{ 
          ...drawerSize, 
          ...style,
          zIndex: zIndex + 1
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <DrawerHeader className={headerClassName}>
          <DrawerTitle className={titleClassName}>{title}</DrawerTitle>
          {closable && (
            <DrawerClose onClick={handleClose}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </DrawerClose>
          )}
        </DrawerHeader>
        
        <DrawerBody className={bodyClassName}>{children}</DrawerBody>
        
        {footer && <DrawerFooter className={footerClassName}>{footer}</DrawerFooter>}
      </DrawerWrapper>
    );
  };

  return ReactDOM.createPortal(
    <>
      {mask && isMounted && (
        <DrawerMask 
          className={`${maskClassName} ${isOpen ? 'open' : ''}`}
          onClick={handleMaskClick}
          style={{ zIndex }}
        />
      )}
      {renderDrawer()}
    </>,
    document.body
  );
};
