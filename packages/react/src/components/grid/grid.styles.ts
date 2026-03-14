import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { convertGridTemplate, convertGap, convertAutoFlow, convertAreas, convertAutoSize, convertAlign  } from './grid.utils'
import type { GridTemplateValue, GapValue, AutoFlowValue, AreasValue, GridAutoValue, AlignValue } from './grid.types'

interface GridProps {
  columns?: GridTemplateValue; // 多少列
  rows?: GridTemplateValue;
  gap?: GapValue;
  autoFlow?: AutoFlowValue;
  areas?: AreasValue;
  autoRows?: GridAutoValue;
  autoColumns?: GridAutoValue;
  justifyItems?: AlignValue;
  alignItems?: AlignValue;
  justifyContent?: AlignValue;
  alignContent?: AlignValue;
}

// 按钮的通用样式
const baseGridStyles = css`
  display: grid;
`;

export const GridStyled = styled.div<GridProps>`
    ${baseGridStyles}

    /* 处理列布局 */
  ${({ columns }) => {
    const columnsCss = convertGridTemplate(columns, 'columns');
    return css`
      ${columnsCss}
    `;
  }}
  /* 处理行布局 */
  ${({ rows }) => {
    const rowsCss = convertGridTemplate(rows, 'rows');
    return rowsCss ? css`${rowsCss}` : '';
  }}
  /* 处理间距 */
  ${({ gap }) => {
    const gapCss = convertGap(gap);
    return gapCss ? css`${gapCss}` : '';
  }}
  /* 处理自动流 */
  ${({ autoFlow }) => {
    const autoFlowCss = convertAutoFlow(autoFlow);
    return autoFlowCss ? css`${autoFlowCss}` : '';
  }}
  /* 处理网格区域 */
  ${({ areas }) => {
    const areasCss = convertAreas(areas);
    return areasCss ? css`${areasCss}` : '';
  }}
  /* 处理自动行尺寸 */
  ${({ autoRows }) => {
    const autoRowsCss = convertAutoSize(autoRows, 'rows');
    return autoRowsCss ? css`${autoRowsCss}` : '';
  }}
  /* 处理自动列尺寸 */
  ${({ autoColumns }) => {
    const autoColumnsCss = convertAutoSize(autoColumns, 'columns');
    return autoColumnsCss ? css`${autoColumnsCss}` : '';
  }}
    /* 处理网格项行轴对齐 */
  ${({ justifyItems }) => {
    const justifyItemsCss = convertAlign(justifyItems, 'justify-items');
    return justifyItemsCss ? css`${justifyItemsCss}` : '';
  }}
  /* 处理网格项列轴对齐 */
  ${({ alignItems }) => {
    const alignItemsCss = convertAlign(alignItems, 'align-items');
    return alignItemsCss ? css`${alignItemsCss}` : '';
  }}
  /* 处理网格容器行轴对齐 */
  ${({ justifyContent }) => {
    const justifyContentCss = convertAlign(justifyContent, 'justify-content');
    return justifyContentCss ? css`${justifyContentCss}` : '';
  }}
  /* 处理网格容器列轴对齐 */
  ${({ alignContent }) => {
    const alignContentCss = convertAlign(alignContent, 'align-content');
    return alignContentCss ? css`${alignContentCss}` : '';
  }}
`;