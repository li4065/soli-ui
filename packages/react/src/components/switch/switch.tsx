import React, { useState } from 'react';
import {
  SwitchContainer,
  SwitchTrack,
  SwitchHandle,
  SwitchInnerText,
  SwitchUncheckedText,
  type SwitchStyleProps,
  type SwitchSize
} from './switch.styles';

export interface SwitchProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'>,
          Omit<SwitchStyleProps, '$size' | '$checked'> {
  size?: SwitchSize | 'default';
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  checkedText?: React.ReactNode; // deprecated, alias to checkedChildren
  uncheckedText?: React.ReactNode; // deprecated, alias to unCheckedChildren
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
  ({ 
    size: propSize = 'default',
    disabled = false,
    loading = false,
    checked: propsChecked,
    defaultChecked = false,
    onChange,
    checkedChildren,
    unCheckedChildren,
    checkedText,
    uncheckedText,
    className,
    style,
    ...props 
  }, ref) => {
    
    // Normalize size
    const size = propSize === 'default' ? 'middle' : propSize;
    
    // Normalize children
    const finalCheckedChildren = checkedChildren || checkedText;
    const finalUnCheckedChildren = unCheckedChildren || uncheckedText;

    // 内部状态，用于非受控模式
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    
    // 判断是否受控
    const isControlled = propsChecked !== undefined;
    const checked = isControlled ? propsChecked : internalChecked;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || loading) return;
      
      const newChecked = e.target.checked;
      
      // 更新内部状态（非受控模式下）
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      
      // 调用外部onChange
      if (onChange) {
        onChange(newChecked, e);
      }
    };
    
    return (
      <SwitchContainer 
        ref={ref}
        className={className}
        style={style}
        $size={size as SwitchSize}
        $disabled={disabled}
        $loading={loading}
        data-state={checked ? 'checked' : 'unchecked'}
        data-disabled={disabled}
      >
        <input 
          type="checkbox"
          checked={checked}
          disabled={disabled || loading}
          onChange={handleChange}
          {...props}
        />
        <SwitchTrack 
          $size={size as SwitchSize}
          $disabled={disabled}
          $loading={loading}
          $checked={checked}
          className="solid-switch-track"
        >
          {/* 选中的文字 */}
          {finalCheckedChildren && (
            <SwitchInnerText 
              $size={size} 
              $checked={checked}
            >
              {finalCheckedChildren}
            </SwitchInnerText>
          )}
          
          {/* 未选中的文字 */}
          {finalUnCheckedChildren && (
            <SwitchUncheckedText 
              $size={size} 
              $checked={checked}
            >
              {finalUnCheckedChildren}
            </SwitchUncheckedText>
          )}
        </SwitchTrack>
        <SwitchHandle 
          $size={size as SwitchSize}
          $checked={checked}
          $loading={loading}
          className="solid-switch-handle"
        />
      </SwitchContainer>
    );
  }
);

Switch.displayName = 'Switch';