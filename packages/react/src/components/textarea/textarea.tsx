import React, { 
  forwardRef, 
  useState, 
  useEffect, 
  useCallback, 
  useRef 
} from 'react';
import { 
  TextAreaBase, 
  TextAreaContainer, 
  Counter,
  TextAreaClearButton,
  type TextAreaStyleProps 
} from './textarea.styles';
import { CloseIcon } from '../icons';

// 扩展原生textarea属性
export interface TextAreaProps 
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    TextAreaStyleProps {
  maxLength?: number;
  showCount?: boolean;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  /** 有输入时是否显示清空按钮，默认 true */
  allowClear?: boolean;
  textareaClassName?: string;
  textareaStyle?: React.CSSProperties;
  variant?: 'outlined' | 'borderless' | 'underlined' | 'filled';
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ 
    size = 'middle',
    status,
    disabled = false,
    maxLength,
    showCount = false,
    autoSize = false,
    allowClear = true,
    value: propValue,
    defaultValue,
    onChange,
    className,
    style,
    textareaClassName,
    textareaStyle,
    variant = 'outlined',
    ...props 
  }, ref) => {
    // 状态管理
    const [inputValue, setInputValue] = useState<string>(
      propValue !== undefined ? String(propValue) : defaultValue !== undefined ? String(defaultValue) : ''
    );
    const [charCount, setCharCount] = useState<number>(inputValue.length);
    const [exceedLimit, setExceedLimit] = useState<boolean>(false);
    
    // 内部ref用于自动调整高度
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textareaRef = ref || internalRef;
    
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
    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    
    // 自动调整高度
    useEffect(() => {
      if (!autoSize || !textareaRef || !("current" in textareaRef) || !textareaRef.current) return;
      
      const textarea = textareaRef.current;
      
      // 重置高度
      textarea.style.height = 'auto';
      
      // 计算行高
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 20;
      const paddingTop = parseInt(getComputedStyle(textarea).paddingTop) || 0;
      const paddingBottom = parseInt(getComputedStyle(textarea).paddingBottom) || 0;
      
      // 计算内容高度
      const contentHeight = textarea.scrollHeight - paddingTop - paddingBottom;
      const rows = Math.ceil(contentHeight / lineHeight);
      
      // 应用最小/最大行数
      let minRows = 2;
      let maxRows = 6;
      
      if (typeof autoSize === 'object') {
        if (autoSize.minRows) minRows = autoSize.minRows;
        if (autoSize.maxRows) maxRows = autoSize.maxRows;
      }
      
      const targetRows = Math.max(minRows, Math.min(rows, maxRows));
      const targetHeight = targetRows * lineHeight + paddingTop + paddingBottom;
      
      textarea.style.height = `${targetHeight}px`;
    }, [inputValue, autoSize, textareaRef]);
    
    // 处理清空
    const handleClear = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      setInputValue('');
      setCharCount(0);
      if (onChange) {
        const target = typeof textareaRef === 'object' && textareaRef?.current
          ? textareaRef.current
          : null;
        const syntheticEvent = {
          target: { value: '' },
          currentTarget: target,
        } as React.ChangeEvent<HTMLTextAreaElement>;
        onChange(syntheticEvent);
      }
    }, [onChange, textareaRef]);

    // 计算显示的计数器文本
    const counterText = maxLength ? `${charCount}/${maxLength}` : `${charCount}`;
    
    // 确定是否显示计数器
    const shouldShowCount = showCount || maxLength !== undefined;

    const hasValue = inputValue.length > 0;
    
    return (
      <TextAreaContainer 
        className={className}
        style={style}
        hasCounter={shouldShowCount}
      >
        <TextAreaBase
          ref={textareaRef}
          size={size}
          status={exceedLimit ? 'error' : status}
          disabled={disabled}
          autoSize={autoSize}
          value={inputValue}
          onChange={handleChange}
          maxLength={maxLength}
          className={textareaClassName}
          style={textareaStyle}
          variant={variant}
          {...props}
        />
        
        {hasValue && !disabled && allowClear && (
          <TextAreaClearButton onClick={handleClear} aria-label="清空">
            <CloseIcon size={14} />
          </TextAreaClearButton>
        )}
        
        {/* 字符计数器 */}
        {shouldShowCount && (
          <Counter exceed={exceedLimit}>
            {counterText}
          </Counter>
        )}
      </TextAreaContainer>
    );
  }
);

TextArea.displayName = 'TextArea';