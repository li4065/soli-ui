import React, { forwardRef, useState, useEffect, useCallback } from 'react';
import {
  InputBase,
  InputContainer,
  PrefixWrapper,
  SuffixWrapper,
  Counter,
  InsideCounter,
  type InputStyleProps
} from './input.styles';

type CounterPosition = 'bottom' | 'inside';
// 扩展原生input属性
export interface InputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
    InputStyleProps {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  maxLength?: number;
  showCount?: boolean;
  counterPosition?: CounterPosition;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
  variant?: 'outlined' | 'borderless' | 'underlined' | 'filled';
  /** 边框圆角：full | lg | md | sm | none，仅在有边框时生效 */
  radius?: 'full' | 'lg' | 'md' | 'sm' | 'none';
  /** 背景色：default | primary | secondary | success | warning | danger */
  backgroundColor?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({  
    size = 'middle',
    status,
    disabled = false,
    prefix,
    suffix,
    maxLength,
    showCount = false,
    counterPosition = 'bottom',
    value: propValue,
    defaultValue,
    onChange,
    className,
    style,
    inputClassName,
    inputStyle,
    variant = 'outlined',
    radius = 'md',
    backgroundColor,
    ...props 
  }, ref) => {
    const [inputValue, setInputValue] = useState<string>(
      propValue !== undefined ? String(propValue) : defaultValue !== undefined ? String(defaultValue) : ''
    );
    const [charCount, setCharCount] = useState<number>(inputValue.length);
    const [exceedLimit, setExceedLimit] = useState<boolean>(false);
    
    // 同步外部值变化
    useEffect(() => {
      if (propValue !== undefined) {
        const newValue = String(propValue);
        setInputValue(newValue);
        setCharCount(newValue.length);
      }
    }, [propValue]);
    
    // 检查是否超出限制
    useEffect(() => {
      if (maxLength !== undefined) {
        setExceedLimit(charCount > maxLength);
      }
    }, [charCount, maxLength]);
    
    // 处理输入变化
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      
      const newValue = e.target.value;
      
      // 更新内部状态
      setInputValue(newValue);
      setCharCount(newValue.length);
      
      // 调用外部onChange
      if (onChange) {
        onChange(e);
      }
    }, [onChange, disabled]);
    
    // 计算显示的计数器文本
    const counterText = maxLength ? `${charCount}/${maxLength}` : `${charCount}`;
    const shouldShowCount = showCount || maxLength !== undefined;
    
    // 根据计数器位置决定是否显示后缀
    const effectiveSuffix = counterPosition === 'inside' ? null : suffix;
    const hasEffectiveSuffix = !!effectiveSuffix;
    
    // 确定计数器的显示位置
    const counterInside = shouldShowCount && counterPosition === 'inside';
    
    return (
      <InputContainer 
        className={className}
        style={style}
        size={size}
        status={exceedLimit ? 'error' : status}
        disabled={disabled}
        variant={variant}
        radius={radius}
        backgroundColor={backgroundColor}
        counterPosition={shouldShowCount ? counterPosition : undefined}
      >
        {prefix && <PrefixWrapper>{prefix}</PrefixWrapper>}
        <InputBase
          ref={ref}
          className={inputClassName}
          style={inputStyle}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          maxLength={maxLength}
          {...props}
        />
        {hasEffectiveSuffix && <SuffixWrapper>{effectiveSuffix}</SuffixWrapper>}
        {counterInside && (
          <InsideCounter exceed={exceedLimit}>
            {counterText}
          </InsideCounter>
        )}
        {shouldShowCount && counterPosition === 'bottom' && (
          <Counter exceed={exceedLimit}>
            {counterText}
          </Counter>
        )}
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';