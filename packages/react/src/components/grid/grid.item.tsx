import React from 'react';
import { GridItemStyled } from './grid.item.styles'
import type { gridItemValue, gridItemSimpleValue } from './grid.types'

export interface GridItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
    columnStart?: gridItemValue;
    columnEnd?: gridItemValue;
    rowStart?: gridItemValue;
    rowEnd?: gridItemValue;

    // 简写属性
    gridColumn?: gridItemSimpleValue;
    gridRow?: gridItemSimpleValue;
    gridArea?: gridItemSimpleValue;
  }
export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ 
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    gridColumn,
    gridRow,
    gridArea,
    children,
    ...props 
  }, ref) => {
    return (
      <GridItemStyled
        ref={ref}
        columnStart={columnStart}
        columnEnd={columnEnd}
        rowStart={rowStart}
        rowEnd={rowEnd}
        gridColumn={gridColumn}
        gridRow={gridRow}
        gridArea={gridArea}
        {...props}
      >
        {children}
      </GridItemStyled>
    );
  }
);

GridItem.displayName = 'GridItem';