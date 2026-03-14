import React from "react";
import { FlexStyled } from './flex.styles';

export interface FlexProps {
    vertical?: boolean;
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'flex-start' | 'flex-end' | 'center';
    gap?: 'small' | 'middle' | 'large' | string | number;
    wrap?: boolean | 'nowrap' | 'wrap' | 'wrap-reverse';
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ 
    vertical = false,
    justify = "flex-start",
    align = "flex-start",
    gap,
    wrap = false,
    children,
    className,
    style,
  }, ref) => {
    return (
      <FlexStyled
        ref={ref}
        justify={justify}
        align={align}
        vertical={vertical}
        gap={gap}
        wrap={wrap}
        className={className}
        style={style}
      >
        {children}
      </FlexStyled>
    );
  }
);

Flex.displayName = 'Flex';