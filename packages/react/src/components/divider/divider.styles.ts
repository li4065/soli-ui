import styled from '@emotion/styled';
import { css, type SerializedStyles } from '@emotion/react';
import { type Theme } from '../../theme/theme';
import { getColor } from '../../theme/theme-utils';

export type VariantType = 'dashed' | 'dotted' | 'solid';
export type OrientationType = 'start' | 'end' | 'center';

interface DividerStyledProps {
  variant: VariantType;
  orientation: OrientationType;
  color?: ColorKey;
  borderWidth?: number;
}

export type ColorKey = keyof typeof defaultColorMap;

// color对应的颜色映射
const defaultColorMap  = {
    blue: 'blue200', 
    purple: 'purple200',
    cyan: 'cyan200',
    green: 'green200',
    magenta: 'magenta200',
    pink: 'pink200',
    red: 'red200',
    orange: 'orange200',
    yellow: 'yellow200',
    volcano: 'volcano200',
    geekblue: 'geekblue200',
    lime: 'lime200',
    gold: 'gold200',
    gray: 'gray200',
} as const;

const baseDividerStyled = css`
    display: flex;
    align-items: center;
    clear: both;
    width: 100%;
    min-width: 100%;
    margin: 24px 0;
    border: 0;
`;

const borderStyle = (variant: VariantType): SerializedStyles => css`
  border-block-start-style: ${variant};
`;

const borderColor = (theme: Theme, color: ColorKey): SerializedStyles => css`
  border-block-start-color: ${getColor(theme, defaultColorMap[color])};
`;

const borderWidthSet = (width: number): SerializedStyles => css`
  border-block-start-width: ${width}px;
`;

const textPosition = (orientation: OrientationType, borderWidth: number): SerializedStyles => {
  const justifyContentMap: Record<OrientationType, string> = {
    'start': 'flex-start',
    'center': 'center',
    'end': 'flex-end'
  };
  
  return css`
    &::before,
    &::after {
      content: '';
      flex: ${orientation === 'center' ? 1 : 'unset'};
      border-block-start: inherit;
      border-block-start-width: ${borderWidth}px;
    }
    
    &::before {
      margin-right: ${orientation === 'center' ? '0.5em' : '0'};
      width: ${orientation === 'start' ? '5%' : 'unset'};
    }
    
    &::after {
      margin-left: ${orientation === 'center' ? '0.5em' : '0'};
      flex: ${orientation !== 'end' ? 1 : 'unset'};
      width: ${orientation === 'end' ? '95%' : 'unset'};
    }
    
    justify-content: ${justifyContentMap[orientation]};
  `;
};



export const DividerStyled = styled.div<DividerStyledProps>`
  ${baseDividerStyled}
  ${({ variant }) => borderStyle(variant)}
  ${({ color = 'gray', theme }) => borderColor(theme, color)}
  ${({ borderWidth = 1 }) => borderWidthSet(borderWidth)}
  ${({ orientation, borderWidth = 1 }) => textPosition(orientation, borderWidth)}
  
  // 无文本时的样式
  &:empty {
    &::before, &::after {
      content: none;
    }
    border-block-start-width: ${({ borderWidth = 1 }) => borderWidth}px;
  }
`;