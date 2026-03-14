import { forwardRef, useState } from 'react';
import { Input, type InputProps } from './input';
import { EyeIcon, EyeOffIcon } from './input-icons';

export interface PasswordProps extends InputProps {
  visibilityToggle?: boolean;
}

export const Password = forwardRef<HTMLInputElement, PasswordProps>(
  ({ 
    visibilityToggle = true, 
    type = 'password',
    suffix,
    ...props 
  }, ref) => {
    const [visible, setVisible] = useState(false);

    const onToggle = () => {
      setVisible(!visible);
    };

    const toggleIcon = visibilityToggle ? (
      <span 
        onClick={onToggle} 
        style={{ 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center',
          color: '#999',
          pointerEvents: 'auto'
        }}
      >
        {visible ? <EyeIcon /> : <EyeOffIcon />}
      </span>
    ) : null;

    return (
      <Input
        {...props}
        ref={ref}
        type={visible ? 'text' : 'password'}
        suffix={
          <>
            {suffix}
            {toggleIcon}
          </>
        }
      />
    );
  }
);
