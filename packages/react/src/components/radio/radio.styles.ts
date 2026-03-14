import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type RadioSize = 'small' | 'middle' | 'large';

export interface RadioStyleProps {
  size?: RadioSize;
  disabled?: boolean;
}

export interface RadioGroupStyleProps {
  direction?: 'horizontal' | 'vertical';
  gap?: 'small' | 'middle' | 'large' | string | number;
}

const getGapValue = (gap: RadioGroupStyleProps['gap']) => {
  if (gap === undefined) return undefined;
  
  const gapSizes = {
    small: '8px',
    middle: '16px',
    large: '24px',
  };
  
  if (typeof gap === 'string' && gapSizes[gap as keyof typeof gapSizes]) {
    return gapSizes[gap as keyof typeof gapSizes];
  }
  
  if (typeof gap === 'number') {
    return `${gap}px`;
  }
  
  return gap;
};

const baseRadioStyle = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  padding: 0;
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

export const RadioInput = styled.span<RadioStyleProps>`
  position: relative;
  display: inline-block;
  width: ${({ size }) => 
    size === 'large' ? '20px' : 
    size === 'small' ? '14px' : '16px'};
  height: ${({ size }) => 
    size === 'large' ? '20px' : 
    size === 'small' ? '14px' : '16px'};
  border-radius: 50%;
  border: 2px solid #d9d9d9;
  transition: all 0.2s;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: ${({ size }) => 
      size === 'large' ? '10px' : 
      size === 'small' ? '6px' : '8px'};
    height: ${({ size }) => 
      size === 'large' ? '10px' : 
      size === 'small' ? '6px' : '8px'};
    border-radius: 50%;
    background: #fff;
    transition: all 0.2s;
  }
`;

export const RadioLabel = styled.span<RadioStyleProps>`
  margin-left: 8px;
  font-size: ${({ size }) => 
    size === 'large' ? '16px' : 
    size === 'small' ? '12px' : '14px'};
  color: #333;
`;

export const RadioContainer = styled.label<RadioStyleProps>`
  ${baseRadioStyle}
  
  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
    opacity: 0.65;
  `}
  
  input:checked + span {
    background: #1890ff;
    border-color: #1890ff;
    
    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  &:hover span {
    border-color: ${({ disabled }) => !disabled ? '#1890ff' : '#d9d9d9'};
  }
  
  input:focus-visible + span {
    box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.2);
  }
`;

export const RadioGroupContainer = styled.div<RadioGroupStyleProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction === 'vertical' ? 'column' : 'row'};
  gap: ${({ gap }) => getGapValue(gap) || '0px'};
  
  ${({ direction }) => direction === 'vertical' 
    ? css`align-items: flex-start;` 
    : css`align-items: center;`}
`;