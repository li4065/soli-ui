import styled from '@emotion/styled'
import { convertPosition, convertShorthand } from './grid.utils'
import type { gridItemValue, gridItemSimpleValue } from './grid.types'

interface GridItemProps {
  columnStart?: gridItemValue;
  columnEnd?: gridItemValue;
  rowStart?: gridItemValue;
  rowEnd?: gridItemValue;
  
  // 简写属性
  gridColumn?: gridItemSimpleValue;
  gridRow?: gridItemSimpleValue;
  gridArea?: gridItemSimpleValue;

}

export const GridItemStyled = styled.div<GridItemProps>`
  /* 列起始位置 */
  ${({ columnStart }) => convertPosition(columnStart, 'grid-column-start')}
  
  /* 列结束位置 */
  ${({ columnEnd }) => convertPosition(columnEnd, 'grid-column-end')}
  
  /* 行起始位置 */
  ${({ rowStart }) => convertPosition(rowStart, 'grid-row-start')}
  
  /* 行结束位置 */
  ${({ rowEnd }) => convertPosition(rowEnd, 'grid-row-end')}
  
  /* 列简写 */
  ${({ gridColumn }) => convertShorthand(gridColumn, 'grid-column')}
  
  /* 行简写 */
  ${({ gridRow }) => convertShorthand(gridRow, 'grid-row')}
  
  /* 区域简写 */
  ${({ gridArea }) => convertShorthand(gridArea, 'grid-area')}
`