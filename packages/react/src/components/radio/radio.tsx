import React, { useContext } from 'react';
import { 
  RadioContainer, 
  RadioInput, 
  RadioLabel,
  RadioGroupContainer
} from './radio.styles';
import type { RadioSize, RadioStyleProps, RadioGroupStyleProps } from './radio.styles';

export interface RadioProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'>, 
          RadioStyleProps {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  radioClassName?: string;
  labelClassName?: string;
}

export interface RadioOption {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps 
  extends RadioGroupStyleProps, 
          Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  size?: RadioSize;
  onChange?: (value: string | number) => void;
  children?: React.ReactNode;
  options?: RadioOption[]; // 新增options属性
}

// 创建RadioGroup上下文
const RadioGroupContext = React.createContext<{
  value?: string | number;
  disabled?: boolean;
  size?: RadioSize;
  onChange?: (value: string | number) => void;
}>({});

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(
  ({ 
    size = 'middle',
    disabled = false,
    children,
    value,
    onChange,
    className,
    style,
    radioClassName,
    labelClassName,
    ...props 
  }, ref) => {
    const groupContext = useContext(RadioGroupContext);
    
    // 如果Radio在Group中，使用Group的上下文值
    const isInGroup = !!groupContext.onChange;
    const checked = isInGroup ? groupContext.value === value : props.checked;
    const disabledState = isInGroup ? (groupContext.disabled || disabled) : disabled;
    const sizeState = isInGroup ? (groupContext.size || size) : size;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabledState) return;
      
      if (onChange) {
        onChange(e);
      }
      
      if (isInGroup && groupContext.onChange && value !== undefined) {
        groupContext.onChange(value);
      }
    };
    
    return (
      <RadioContainer 
        ref={ref}
        size={sizeState}
        disabled={disabledState}
        className={className}
        style={style}
      >
        <input 
          type="radio"
          checked={checked}
          disabled={disabledState}
          onChange={handleChange}
          value={value}
          {...props}
        />
        <RadioInput className={radioClassName} as="span" size={sizeState} />
        {children && <RadioLabel className={labelClassName} size={sizeState}>{children}</RadioLabel>}
      </RadioContainer>
    );
  }
);

Radio.displayName = 'Radio';

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({
    direction = 'horizontal',
    gap = 'middle',
    disabled = false,
    size = 'middle',
    value,
    defaultValue,
    onChange,
    children,
    options, // 新增的options属性
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const isControlled = value !== undefined;
    const finalValue = isControlled ? value : internalValue;

    const handleChange = (val: string | number) => {
      if (!isControlled) {
        setInternalValue(val);
      }
      onChange?.(val);
    };

    const contextValue = {
      value: finalValue,
      disabled,
      size,
      onChange: handleChange
    };
    
    return (
      <RadioGroupContext.Provider value={contextValue}>
        <RadioGroupContainer
          ref={ref}
          direction={direction}
          gap={gap}
          {...props}
        >
          {/* 优先渲染options，如果options存在则忽略children */}
          {options ? (
            options.map(option => (
              <Radio 
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </Radio>
            ))
          ) : (
            children
          )}
        </RadioGroupContainer>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';