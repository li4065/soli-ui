import React, { 
  useState, 
  useRef, 
  useEffect, 
  useCallback,
  useMemo
} from 'react';
import { 
  SelectContainer, 
  SelectControl, 
  SelectValueContainer,
  SelectSingleValue,
  SelectMultiValue,
  SelectClearButton,
  SelectArrow,
  SelectDropdown,
  OptionList,
  SearchInput,
  NoOptions,
  SelectPlaceholder
} from './select.styles';
import { SelectContext } from './select.context';
import { Option } from './option';
import { CloseIcon, DownArrowIcon } from '../icons';
import type { 
  SelectProps, 
  SingleSelectValue, 
  MultiSelectValue 
} from './select.types';

export const Select: React.FC<SelectProps> = (props) => {
  const {
    value,
    defaultValue,
    onChange,
    options = [],
    placeholder = '请选择',
    theme = 'light',
    multiple = false,
    disabled = false,
    searchable = false,
    allowClear = true,
    color = 'default',
    className,
    popupClassName,
    style,
    variant = 'outlined',
  } = props;
  
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 初始化选中值
  const initialValue = useMemo(() => {
    if (value !== undefined) return value;
    if (defaultValue !== undefined) return defaultValue;
    return multiple ? [] : null;
  }, [value, defaultValue, multiple]);
  
  const [selectedValue, setSelectedValue] = useState<SingleSelectValue | MultiSelectValue>(initialValue as SingleSelectValue | MultiSelectValue);
  
  // 当外部value变化时更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);
  
  // 过滤选项
  const filteredOptions = useMemo(() => {
    if (!searchTerm || !searchable) return options;
    return options.filter(option => 
      String(option.label).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm, searchable]);
  
  // 计算显示的标签
  const displayValue = useMemo(() => {
    if (multiple) {
      const values = selectedValue as MultiSelectValue;
      return values.map(val => {
        const option = options.find(opt => opt.value === val);
        return option || { value: val, label: val };
      });
    } else {
      const val = selectedValue as SingleSelectValue;
      const option = val !== null ? options.find(opt => opt.value === val) : null;
      return option || null;
    }
  }, [selectedValue, options, multiple]);

    // 切换下拉框
  const toggleDropdown = () => {
    if (disabled) return;
    setIsOpen(prev => !prev);
  };
  
  // 关闭下拉框
  const closeDropdown = useCallback(() => {
    console.log('closeDropdown');
    setIsOpen(prevIsOpen => {
      if (prevIsOpen) {
        console.log('Actually closing dropdown');
        setSearchTerm('');
        setFocusedIndex(0);
        return false;
      }
      return prevIsOpen;
    });
  }, []);
  
  // 处理选择
 const handleSelect = useCallback((val: string | number) => {
    let newValue: SingleSelectValue | MultiSelectValue;
    
    if (multiple) {
      const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
      if (currentValues.includes(val)) {
        newValue = currentValues.filter(v => v !== val);
      } else {
        newValue = [...currentValues, val];
      }
    } else {
      newValue = val;
    }
    
    setSelectedValue(newValue);
    
    // 调用正确的 onChange 类型
    if (onChange) {
      if (multiple) {
        (onChange as (value: MultiSelectValue) => void)(newValue as MultiSelectValue);
      } else {
        (onChange as (value: SingleSelectValue) => void)(newValue as SingleSelectValue);
      }
    }
  }, [multiple, selectedValue, onChange]); // 添加 closeDropdown 依赖
  
  // 清除选择
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newValue = multiple ? [] : null;
    setSelectedValue(newValue);
    
    if (onChange) {
      if (multiple) {
        (onChange as (value: MultiSelectValue) => void)([]);
      } else {
        (onChange as (value: SingleSelectValue) => void)(null);
      }
    }
  };
  
  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeDropdown]);
  
  // 键盘导航
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        toggleDropdown();
      }
      return;
    }
    
    switch (e.key) {
      case 'Escape':
        closeDropdown();
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => (prev + 1) % filteredOptions.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => (prev - 1 + filteredOptions.length) % filteredOptions.length);
        break;
      case 'Enter':
      case ' ':
      case 'Spacebar':
        e.preventDefault();
        const option = filteredOptions[focusedIndex];
        if (option && !option.disabled) {
          handleSelect(option.value);
          // 单选模式下选择后立即关闭下拉框
          if (!multiple) {
            closeDropdown();
          }
        }
        break;
      default:
        break;
    }
  };
  
  // 上下文值
  const contextValue = {
    theme,
    selectedValue,
    multiple,
    onSelect: handleSelect,
    searchTerm,
    isOpen,
    closeDropdown,
  };
  
  // 检查是否有选中的值
  const hasValue = multiple 
    ? Array.isArray(selectedValue) && selectedValue.length > 0
    : selectedValue !== null;
  
  return (
    <SelectContext.Provider value={contextValue}>
      <SelectContainer
        ref={containerRef}
        selectTheme={theme}
        variant={variant}
        selectColor={color}
        isOpen={isOpen}
        disabled={disabled}
        className={`solid-select ${className || ''}`}
        style={style}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
      >
        <SelectControl>
          <SelectValueContainer>
            {multiple ? (
              Array.isArray(displayValue) && displayValue.length > 0 ? (
                displayValue.map(item => (
                  <SelectMultiValue key={item.value}>
                    <span>{item.label}</span>
                    {allowClear && (
                      <SelectClearButton onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(item.value);
                      }}>
                        <CloseIcon size={16} />
                      </SelectClearButton>
                    )}
                  </SelectMultiValue>
                ))
              ) : (
                <SelectPlaceholder>{placeholder}</SelectPlaceholder>
              )
            ) : (
              displayValue ? (
                <SelectSingleValue>{(!Array.isArray(displayValue) && displayValue?.label) || ''}</SelectSingleValue>
              ) : (
                <SelectPlaceholder>{placeholder}</SelectPlaceholder>
              )
            )}
          </SelectValueContainer>
          
          {hasValue && !disabled && allowClear && (
            <SelectClearButton onClick={handleClear}>
              <CloseIcon size={16} />
            </SelectClearButton>
          )}
          
            <SelectArrow isOpen={isOpen}>
                <DownArrowIcon size={16} />
            </SelectArrow>
        </SelectControl>
        
        {isOpen && !disabled && (
          <SelectDropdown selectTheme={theme} className={popupClassName} style={{ display: isOpen ? 'block' : 'none' }}>
            {searchable && (
              <SearchInput
                type="text"
                placeholder="搜索..."
                value={searchTerm}
                onClick={e => e.stopPropagation()}
                onChange={e => setSearchTerm(e.target.value)}
                selectTheme={theme}
              />
            )}
            
            <OptionList>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <Option
                    key={`option-${index}`}
                    option={option}
                    index={index}
                    isFocused={focusedIndex === index}
                  />
                ))
              ) : (
                <NoOptions>无匹配选项</NoOptions>
              )}
            </OptionList>
          </SelectDropdown>
        )}
      </SelectContainer>
    </SelectContext.Provider>
  );
};