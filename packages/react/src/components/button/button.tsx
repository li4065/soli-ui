import React from "react";
import { StyledButton } from './button.styles'
import type { Theme } from "../../theme/theme";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'default' | 'outline' | 'text' | 'link';
    size?: 'sm' | 'md' | 'lg';
    color?: 'blue' | 'purple' | 'cyan' | 'green' | 'magenta' | 'pink' | 'red' | 'orange' | 'yellow' | 'volcano' | 'geekblue' | 'lime' | 'gold' | 'default';
    isLoading?: boolean;
    theme?: Theme;
  }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'default', 
    size = 'md', 
    isLoading = false,
    color = 'default', 
    children,
    ...props 
  }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        color={color}
        isLoading={isLoading}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span style={{ marginRight: '0.5rem' }}>⏳</span>
        ) : null}
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';