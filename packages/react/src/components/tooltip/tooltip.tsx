import React, { 
  useState, 
  useRef, 
  useEffect, 
  useCallback,
  type ReactElement,
  cloneElement
} from 'react';
import ReactDOM from 'react-dom';
import { 
  TooltipContent,
  TooltipArrow
} from './tooltip.styles';

export interface TooltipProps {
  title: React.ReactNode;
  children: ReactElement;
  placement?: 
    'top' | 'topLeft' | 'topRight' | 
    'bottom' | 'bottomLeft' | 'bottomRight' | 
    'left' | 'leftTop' | 'leftBottom' | 
    'right' | 'rightTop' | 'rightBottom';
  color?: string;
  backgroundColor?: string;
  delay?: number;
  trigger?: 'hover' | 'click' | 'focus';
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string; // Applied to the tooltip popup
  overlayStyle?: React.CSSProperties; // Applied to the tooltip popup
  style?: React.CSSProperties; // Applied to the tooltip popup (alias for overlayStyle for back-compat if needed, but usually style on Tooltip applies to the wrapper? No, Tooltip has no wrapper now)
  arrow?: boolean;
  disabled?: boolean;
  zIndex?: number;
  maxWidth?: number;
  offset?: number;
  textColor?: string;
}

const mergeRefs = <T extends HTMLElement>(
  ...refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> => {
  return (node: T | null) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref && typeof ref === 'object') {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
};

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  placement = 'top',
  color = '#fff',
  backgroundColor = 'rgba(0, 0, 0, 0.85)',
  delay = 100,
  trigger = 'hover',
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className = '',
  overlayStyle,
  style, // We'll treat this as overlayStyle if overlayStyle is not provided
  arrow = true,
  disabled = false,
  zIndex = 1000,
  maxWidth = 250,
  offset = 8,
  textColor
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [calculatedPosition, setCalculatedPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 预设颜色映射
  const presetColors: Record<string, string> = {
    pink: '#eb2f96',
    red: '#f5222d',
    yellow: '#fadb14',
    orange: '#fa8c16',
    cyan: '#13c2c2',
    green: '#52c41a',
    blue: '#1890ff',
    purple: '#722ed1',
    geekblue: '#2f54eb',
    magenta: '#eb2f96',
    volcano: '#fa541c',
    gold: '#faad14',
    lime: '#a0d911',
  };

  const finalBackgroundColor = presetColors[backgroundColor] || backgroundColor;
  const finalColor = textColor || color;
  
  // 处理受控和非受控状态
  const open = controlledOpen !== undefined ? controlledOpen : isOpen;
  
  // 计算位置
  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;
    
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;
    
    let top = 0;
    let left = 0;
    
    const baseTop = triggerRect.top + scrollY;
    const baseLeft = triggerRect.left + scrollX;
    const triggerWidth = triggerRect.width;
    const triggerHeight = triggerRect.height;
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;
    
    // 根据位置计算
    switch (placement) {
      case 'top':
        top = baseTop - tooltipHeight - offset;
        left = baseLeft + triggerWidth / 2 - tooltipWidth / 2;
        break;
      case 'topLeft':
        top = baseTop - tooltipHeight - offset;
        left = baseLeft;
        break;
      case 'topRight':
        top = baseTop - tooltipHeight - offset;
        left = baseLeft + triggerWidth - tooltipWidth;
        break;
      case 'bottom':
        top = baseTop + triggerHeight + offset;
        left = baseLeft + triggerWidth / 2 - tooltipWidth / 2;
        break;
      case 'bottomLeft':
        top = baseTop + triggerHeight + offset;
        left = baseLeft;
        break;
      case 'bottomRight':
        top = baseTop + triggerHeight + offset;
        left = baseLeft + triggerWidth - tooltipWidth;
        break;
      case 'left':
        top = baseTop + triggerHeight / 2 - tooltipHeight / 2;
        left = baseLeft - tooltipWidth - offset;
        break;
      case 'leftTop':
        top = baseTop;
        left = baseLeft - tooltipWidth - offset;
        break;
      case 'leftBottom':
        top = baseTop + triggerHeight - tooltipHeight;
        left = baseLeft - tooltipWidth - offset;
        break;
      case 'right':
        top = baseTop + triggerHeight / 2 - tooltipHeight / 2;
        left = baseLeft + triggerWidth + offset;
        break;
      case 'rightTop':
        top = baseTop;
        left = baseLeft + triggerWidth + offset;
        break;
      case 'rightBottom':
        top = baseTop + triggerHeight - tooltipHeight;
        left = baseLeft + triggerWidth + offset;
        break;
      default:
        top = baseTop - tooltipHeight - offset;
        left = baseLeft + triggerWidth / 2 - tooltipWidth / 2;
    }
    
    // 边界检查 - 确保不超出视口
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // 右边超出
    if (left + tooltipWidth > viewportWidth + scrollX) {
      left = viewportWidth + scrollX - tooltipWidth - 5;
    }
    
    // 左边超出
    if (left < scrollX) {
      left = scrollX + 5;
    }
    
    // 底部超出
    if (top + tooltipHeight > viewportHeight + scrollY) {
      top = viewportHeight + scrollY - tooltipHeight - 5;
    }
    
    // 顶部超出
    if (top < scrollY) {
      top = scrollY + 5;
    }
    
    setCalculatedPosition({ top, left });
  }, [placement, offset]);

  // 打开 tooltip
  const openTooltip = useCallback(() => {
    if (disabled) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
      onOpenChange?.(true);
    }, delay);
  }, [delay, disabled, onOpenChange]);

  // 关闭 tooltip
  const closeTooltip = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setIsOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange]);

  // 事件处理
  const handleMouseEnter = useCallback(() => {
    if (trigger === 'hover') {
      openTooltip();
    }
  }, [trigger, openTooltip]);

  const handleMouseLeave = useCallback(() => {
    if (trigger === 'hover') {
      closeTooltip();
    }
  }, [trigger, closeTooltip]);

  const handleClick = useCallback(() => {
    if (trigger === 'click') {
      open ? closeTooltip() : openTooltip();
    }
  }, [trigger, open, openTooltip, closeTooltip]);

  const handleFocus = useCallback(() => {
    if (trigger === 'focus') {
      openTooltip();
    }
  }, [trigger, openTooltip]);

  const handleBlur = useCallback(() => {
    if (trigger === 'focus') {
      closeTooltip();
    }
  }, [trigger, closeTooltip]);

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        trigger === 'click' && 
        open && 
        tooltipRef.current && 
        !tooltipRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        closeTooltip();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, trigger, closeTooltip]);

  // 监听窗口变化
  useEffect(() => {
    if (open) {
      calculatePosition();
      const handleResize = () => calculatePosition();
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleResize, true);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleResize, true);
      };
    }
  }, [open, calculatePosition]);

  // 渲染 tooltip 内容
  const renderTooltipContent = () => {
    if (!open) return null;
    
    const finalStyle = {
      ...calculatedPosition,
      backgroundColor: finalBackgroundColor,
      color: finalColor,
      maxWidth,
      zIndex,
      ...(overlayStyle || style)
    };

    return (
      <TooltipContent
        ref={tooltipRef}
        className={`solid-tooltip ${className}`}
        style={finalStyle}
        placement={placement}
        role="tooltip"
      >
        <div className="tooltip-inner">
          {title}
        </div>
        {arrow && (
          <TooltipArrow 
            backgroundColor={finalBackgroundColor}
            placement={placement}
          />
        )}
      </TooltipContent>
    );
  };

  const refProp = {
    ref: mergeRefs(
      triggerRef as React.Ref<HTMLElement>,
      (children as any).ref
    )
  };

  // Clone the child and attach events/refs
  const enhancedChild = cloneElement(children, {
    ...refProp,
    onMouseEnter: (e: React.MouseEvent) => {
      handleMouseEnter();
      (children.props as any).onMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouseLeave();
      (children.props as any).onMouseLeave?.(e);
    },
    onClick: (e: React.MouseEvent) => {
      handleClick();
      (children.props as any).onClick?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      handleFocus();
      (children.props as any).onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      handleBlur();
      (children.props as any).onBlur?.(e);
    },
    'aria-describedby': open ? 'tooltip-content' : undefined
  } as React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }) as React.ReactElement;

  return (
    <>
      {enhancedChild}
      
      {ReactDOM.createPortal(
        renderTooltipContent(),
        document.body
      )}
    </>
  );
};
