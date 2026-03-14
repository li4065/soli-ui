import React, { useContext } from 'react';
import { SelectContext } from './select.context';
import { OptionItem } from './select.styles';
import type { SelectOption } from './select.types';

interface OptionProps {
  option: SelectOption;
  index: number;
  isFocused: boolean;
}

export const Option: React.FC<OptionProps> = ({ option, index, isFocused }) => {
  const context = useContext(SelectContext);
  
  if (!context) {
    throw new Error('Option must be used within a Select');
  }
  
  const { value, label, disabled = false } = option;
  const { selectedValue, multiple, onSelect, closeDropdown } = context;
  
  const isSelected = multiple 
    ? Array.isArray(selectedValue) && selectedValue.includes(value)
    : selectedValue === value;
    
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 确保阻止事件冒泡
    
    if (!disabled) {
      console.log('Selecting option:', value);
      onSelect(value);
      
      // 只在单选模式下关闭下拉框
      if (!multiple) {
        console.log('Closing dropdown for single select');
        closeDropdown();
      }
    }
  };
  
  return (
    <OptionItem
      key={`option-${index}`}
      isSelected={isSelected}
      isFocused={isFocused}
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </OptionItem>
  );
};