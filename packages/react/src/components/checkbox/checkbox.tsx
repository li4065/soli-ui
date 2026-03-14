import React, { forwardRef, useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { 
  CheckboxContainer, 
  HiddenInput, 
  StyledCheckbox, 
  CheckboxIcon,
  CheckboxLabel,
  CheckboxGroupContainer,
  HorizontalGroup
} from './checkbox.styles';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** 指定当前是否选中 */
  checked?: boolean;
  /** 初始是否选中 */
  defaultChecked?: boolean;
  /** 半选状态，仅负责样式控制 */
  indeterminate?: boolean;
  /** 变化时回调函数 */
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 自定义选中时的图标 */
  checkedIcon?: React.ReactNode;
  /** 自定义半选时的图标 */
  indeterminateIcon?: React.ReactNode;
  /** 选择框圆角：数字为 px（如 4），字符串如 '50%' 表示圆形 */
  borderRadius?: number | string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 标签文本 */
  label?: React.ReactNode;
  value?: string | number;
  /** 复选框容器的自定义类名 */
  checkboxClassName?: string;
  /** 标签的自定义类名 */
  labelClassName?: string;
}

export interface CheckboxGroupProps {
  /** 选项列表 */
  options: Array<{
    label: React.ReactNode;
    value: string | number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }>;
  
  /** 默认选中的值 */
  defaultValue?: (string | number)[];
  
  /** 当前选中的值（受控模式） */
  value?: (string | number)[];
  
  /** 变化时回调函数 */
  onChange?: (checkedValues: (string | number)[]) => void;
  
  /** 是否禁用所有选项 */
  disabled?: boolean;
  
  /** 排列方向 */
  direction?: 'vertical' | 'horizontal';
  
  /** 自定义样式 */
  style?: React.CSSProperties;
  
  /** 自定义类名 */
  className?: string;
}

 // 默认的选中图标
const DefaultCheckedIcon = (
    <svg width="14" height="14" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
    </svg>
);

// 默认的半选图标
const DefaultIndeterminateIcon = (
    <svg width="14" height="14" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
    </svg>
);

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      indeterminate = false,
      disabled = false,
      onChange,
      icon,
      checkedIcon = DefaultCheckedIcon,
      indeterminateIcon = DefaultIndeterminateIcon,
      label,
      style,
      className,
      value,
      borderRadius,
      checkboxClassName,
      labelClassName,
      children,
      dangerouslySetInnerHTML,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const isControlled = controlledChecked !== undefined;
    const [localChecked, setLocalChecked] = useState(defaultChecked);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      
      const newChecked = e.target.checked;
      
      // 对于非受控组件，更新本地状态
      if (!isControlled) {
        setLocalChecked(newChecked);
      }
      
      onChange?.(newChecked, e);
    }, [disabled, isControlled, onChange]);

    const actualChecked = isControlled ? controlledChecked : localChecked;

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.checked = !!actualChecked;
      }
    }, [actualChecked]);

    // 确定显示的图标
    let displayIcon: React.ReactNode | null = null;
    
    if (indeterminate) {
      displayIcon = indeterminateIcon;
    } else if (actualChecked) {
      displayIcon = checkedIcon;
    } else {
      displayIcon = icon;
    }

    return (
      <CheckboxContainer
        ref={ref}
        style={style}
        className={className}
        disabled={disabled}
      >
        <HiddenInput
          ref={inputRef}
          type="checkbox"
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <StyledCheckbox
          checked={actualChecked}
          indeterminate={indeterminate}
          disabled={disabled}
          borderRadius={borderRadius}
          className={checkboxClassName}
        >
          {(actualChecked || indeterminate) && displayIcon && (
            <CheckboxIcon>
              {displayIcon}
            </CheckboxIcon>
          )}
        </StyledCheckbox>
        {label && <CheckboxLabel disabled={disabled} className={labelClassName}>{label}</CheckboxLabel>}
        {children}
      </CheckboxContainer>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  defaultValue = [],
  value: controlledValue,
  onChange,
  disabled: groupDisabled = false,
  direction = 'vertical',
  style,
  className
}) => {
  const isControlled = controlledValue !== undefined;
  const [localValue, setLocalValue] = useState<(string | number)[]>(defaultValue);
  
  // 当前选中的值
  const selectedValues = isControlled ? controlledValue : localValue;
  
  const handleChange = useCallback((value: string | number, checked: boolean) => {
    let newValues: (string | number)[];
    
    if (checked) {
      // 添加选中项
      newValues = [...selectedValues, value];
    } else {
      // 移除选中项
      newValues = selectedValues.filter(v => v !== value);
    }
    
    if (!isControlled) {
      setLocalValue(newValues);
    }
    
    onChange?.(newValues);
  }, [isControlled, selectedValues, onChange]);
  
  // 渲染Group内容
  const renderOptions = useMemo(() => {
    return options.map(option => (
      <Checkbox
        key={option.value}
        checked={selectedValues.includes(option.value)}
        onChange={(checked) => handleChange(option.value, checked)}
        disabled={groupDisabled || option.disabled}
        label={option.label}
        value={option.value}
        className={option.className}
        style={option.style}
      />
    ));
  }, [options, selectedValues, groupDisabled, handleChange]);
  
  // 根据方向选择容器
  const GroupContainer = direction === 'horizontal' 
    ? HorizontalGroup 
    : CheckboxGroupContainer;

  return (
    <GroupContainer 
      className={className}
      style={style}
    >
      {renderOptions}
    </GroupContainer>
  );
};

// 将Group组件附加到Checkbox上
(Checkbox as any).Group = CheckboxGroup;