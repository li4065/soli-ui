import React, { useEffect, useRef } from 'react';
import { SelectionContainer } from './table.styles';

interface SelectionProps {
  type: 'checkbox' | 'radio';
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
}

export const Selection: React.FC<SelectionProps> = ({
  type,
  checked,
  onChange,
  disabled = false,
  indeterminate = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  

  return (
    <SelectionContainer>
      <input
        ref={inputRef}
        type={type}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
    </SelectionContainer>
  );
};