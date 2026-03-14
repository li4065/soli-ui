import React, { useState, useCallback } from 'react';
import { 
  TagContainer,
  TagText,
  TagIcon,
  TagCloseIcon,
  TagCheckIcon
} from './tag.styles';

export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
  children: React.ReactNode;
  color?: 
    | 'default' 
    | 'primary' 
    | 'success' 
    | 'warning' 
    | 'error' 
    | 'processing'
    | string; // 支持自定义颜色
  size?: 'small' | 'medium' | 'large';
  shape?: 'square' | 'round' | 'rounded';
  closable?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  closeIcon?: React.ReactNode;
  icon?: React.ReactNode;
  bordered?: boolean;
  checkable?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
  className?: string;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(({
  children,
  color = 'default',
  size = 'medium',
  shape = 'rounded',
  closable = false,
  onClose,
  closeIcon,
  icon,
  bordered = true,
  checkable = false,
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  style,
  className = '',
  ...props
}, ref) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const [visible, setVisible] = useState(true);
  
  // 处理受控/非受控选中状态
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;
  
  // 处理关闭事件
  const handleClose = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (onClose) {
      onClose(e);
    }
    // 非受控模式下，点击关闭后隐藏
    if (!('visible' in props)) {
       setVisible(false);
    }
  }, [onClose, props]);
  
  // 处理点击事件（用于可选中标签）
  const handleClick = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    if (checkable) {
      const newChecked = !isChecked;
      if (controlledChecked === undefined) {
        setInternalChecked(newChecked);
      }
      if (onChange) {
        onChange(newChecked);
      }
    }
    
    if (props.onClick) {
      props.onClick(e);
    }
  }, [checkable, isChecked, controlledChecked, onChange, props.onClick]);
  
  // 如果标签已关闭，则不渲染
  // 注意：这里假设 visible 状态仅用于内部控制的关闭行为。
  // 如果外部控制 visible，应该通过 props 传入（这里暂未实现 visible prop，仅内部 state）
  if (!visible) {
    return null;
  }
  
  // 渲染关闭图标
  const renderCloseIcon = closable && (
    <TagCloseIcon onClick={handleClose}>
      {closeIcon || (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )}
    </TagCloseIcon>
  );
  
  // 渲染选中图标
  const renderCheckIcon = checkable && isChecked && (
    <TagCheckIcon>
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M11 4L5.5 11L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </TagCheckIcon>
  );
  
  // 渲染图标
  const renderIcon = icon && <TagIcon>{icon}</TagIcon>;
  
  return (
    <TagContainer
      ref={ref}
      className={`${className} ${isChecked ? 'checked' : ''}`}
      color={color}
      size={size}
      shape={shape}
      bordered={bordered}
      checkable={checkable}
      checked={isChecked}
      onClick={handleClick}
      style={style}
      {...props}
    >
      {renderCheckIcon}
      {renderIcon}
      <TagText>{children}</TagText>
      {renderCloseIcon}
    </TagContainer>
  );
});

Tag.displayName = 'Tag';

// 标签组组件
interface TagGroupProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const TagGroup: React.FC<TagGroupProps> = ({ 
  children, 
  style, 
  className = '' 
}) => {
  return (
    <div 
      className={`tag-group ${className}`} 
      style={{ display: 'flex', flexWrap: 'wrap', gap: 8, ...style }}
    >
      {children}
    </div>
  );
};