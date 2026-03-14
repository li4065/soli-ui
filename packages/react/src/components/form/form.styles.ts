import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { type Theme } from '../../theme/theme';
import { getColor, getBorderColors, getTextSize, getBorderRadius } from '../../theme/theme-utils';

// 表单容器
export const FormContainer = styled('form', {
  shouldForwardProp: (prop) => prop !== 'layout'
})<{ layout: 'horizontal' | 'vertical' | 'inline' }>`
  display: ${({ layout }) => layout === 'inline' ? 'inline-flex' : 'block'};
  flex-wrap: wrap;
  gap: ${({ layout }) => layout === 'inline' ? '16px' : '0'};
  width: ${({ layout }) => layout === 'inline' ? 'auto' : '100%'};
`;

// 表单项容器
export const FormItemContainer = styled('div', {
  shouldForwardProp: (prop) => !['layout', 'required', 'hasError'].includes(prop)
})<{ 
  layout: 'horizontal' | 'vertical' | 'inline';
  required: boolean;
  hasError: boolean;
  theme?: Theme;
}>`
  display: ${({ layout }) => layout === 'inline' ? 'inline-flex' : 'flex'};
  flex-direction: ${({ layout }) => layout === 'vertical' ? 'column' : 'row'};
  margin-bottom: ${({ layout }) => layout === 'vertical' ? '24px' : '24px'};
  position: relative;
  
  ${({ hasError, theme }) => hasError && css`
    .form-item-control {
      input, textarea, select {
        border-color: ${getColor(theme, 'red500')};
      }
    }
  `}
`;

// 表单标签
export const FormItemLabel = styled('label', {
  shouldForwardProp: (prop) => !['layout', 'colon', 'labelWidth', 'required'].includes(prop)
})<{ 
  layout: 'horizontal' | 'vertical' | 'inline';
  colon: boolean;
  theme?: Theme;
  labelWidth?: string | number;
  required?: boolean;
}>`
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: ${({ layout }) => layout === 'vertical' ? '0 0 8px 0' : '4px 8px 4px 0'};
  text-align: ${({ layout }) => layout === 'vertical' ? 'left' : 'right'};
  justify-content: ${({ layout }) => layout === 'vertical' ? 'flex-start' : 'flex-end'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: ${({ layout, labelWidth }) => {
    if (layout === 'vertical') return 'none';
    if (labelWidth) return `0 0 ${typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth}`;
    return '0 0 auto';
  }};
  width: ${({ layout, labelWidth }) => {
    if (layout === 'vertical') return '100%';
    if (labelWidth) return typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth;
    return 'auto';
  }};
  font-size: ${({ theme }) => getTextSize(theme, 'sm')};
  
  &::before {
    display: ${({ required }) => required ? 'inline-block' : 'none'};
    margin-right: 4px;
    color: ${({ theme }) => getColor(theme, 'red500')};
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*";
  }
  
  &::after {
    content: ${({ colon }) => colon ? '"："' : '""'};
    position: relative;
    margin: 0 4px 0 1px;
  }
`;

// 表单控件容器
export const FormItemControl = styled('div', {
  shouldForwardProp: (prop) => prop !== 'layout'
})<{ 
  className?: string; 
  layout?: 'horizontal' | 'vertical' | 'inline';
}>`
  position: relative;
  flex: 1;
  min-width: 0;
  
  ${({ layout }) => layout === 'inline' && css`
    min-width: 160px;
  `}
`;

// 错误消息
export const FormItemError = styled('div')<{ className?: string; theme?: Theme }>`
  color: ${({ theme }) => getColor(theme, 'red500')};
  transition: all 0.3s;
  min-height: 22px;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 2px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;

// 表单操作区域
export const FormActions = styled('div', {
  shouldForwardProp: (prop) => prop !== 'layout'
})<{ layout: 'horizontal' | 'vertical' | 'inline'; className?: string }>`
  display: flex;
  justify-content: ${({ layout }) => layout === 'vertical' ? 'flex-start' : 'center'};
  gap: 12px;
  margin-top: 24px;
  padding: ${({ layout }) => layout === 'horizontal' ? '0 0 0 120px' : '0'};
  width: 100%;
`;

// 表单组
export const FormGroup = styled.div<{ className?: string; theme?: Theme }>`
  border: 1px solid ${({ theme }) => getBorderColors(theme, 'gray300')};
  border-radius: ${({ theme }) => getBorderRadius(theme, 'md')};
  padding: 16px;
  margin-bottom: 24px;
  
  .form-group-title {
    font-weight: 600;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => getColor(theme, 'gray200')};
  }
`;
