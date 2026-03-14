import React from "react";
import { DividerStyled } from './divider.styles';
import type { ColorKey, VariantType, OrientationType } from './divider.styles';

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: VariantType;
  orientation?: OrientationType;
  color?: ColorKey;
  borderWidth?: number;
}

export const Divider = React.forwardRef<HTMLDivElement, DivProps>(
  ({ 
    variant = 'solid', 
    orientation = 'start',
    color = 'gray', 
    borderWidth = 1,
    children,
    ...props 
  }, ref) => {
    return (
      <DividerStyled
        ref={ref}
        variant={variant}
        orientation={orientation}
        color={color}
        borderWidth={borderWidth}
        {...props}
      >
        {children}
      </DividerStyled>
    );
  }
);

Divider.displayName = 'Divider';
