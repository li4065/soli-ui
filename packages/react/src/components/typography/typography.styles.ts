import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { TypographyProps, TextVariant } from './typography.types';
import { themes } from './theme/themes';

// 获取组件映射
export const getComponentMapping = (variant: TextVariant): React.ElementType => {
  const mapping: Record<TextVariant, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
    span: 'span',
    div: 'div',
    strong: 'strong',
    em: 'em',
    code: 'code',
    pre: 'pre',
    blockquote: 'blockquote',
    ul: 'ul',
    ol: 'ol',
    li: 'li',
    a: 'a',
    mark: 'mark',
    underline: 'u',
    delete: 'del',
  };
  
  return mapping[variant] || 'span';
};

// 样式组件
const BaseTypography = React.forwardRef((props: TypographyProps & { as?: React.ElementType }, ref) => {
  // 解构出自定义属性，确保它们不会传递给 DOM
  const {
    variant = 'p',
    theme = 'light',
    color,
    align,
    gutterBottom,
    noWrap,
    fontWeight,
    transform,
    italic = false,
    underline = false,
    strikethrough = false,
    ellipsis, // 解构出 ellipsis 避免传递给 DOM
    copyable, // 解构出 copyable 避免传递给 DOM
    as: ElementType,
    ...restProps  // 只包含原生 DOM 属性
  } = props;
  
  const Component = ElementType || getComponentMapping(variant);
  return React.createElement(Component as React.ElementType, { ...restProps, ref });
});

export const StyledTypography = styled(BaseTypography)<TypographyProps>`
  ${({ 
    variant = 'p', 
    theme = 'light', 
    color, 
    align, 
    gutterBottom, 
    noWrap, 
    fontWeight, 
    transform, 
    italic = false, 
    underline = false, 
    strikethrough = false,
    ellipsis
  }) => {
    const themeConfig = themes[theme as keyof typeof themes] || themes.light;
    const colors = themeConfig.colors;
    
    // 获取预设值
    const size = themeConfig.baseSizes[variant as keyof typeof themeConfig.baseSizes] || themeConfig.baseSizes.p;
    const lineHeight = themeConfig.lineHeights[variant as keyof typeof themeConfig.lineHeights] || themeConfig.lineHeights.p;
    const gutter = gutterBottom ? 
      (themeConfig.spacing.gutterBottom[variant as keyof typeof themeConfig.spacing.gutterBottom] || themeConfig.spacing.gutterBottom.default) : 
      '0';
    
    // 解析字重
    const isBoldVariant = variant === 'strong' || ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant);
    const boldWeight = themeConfig.fontWeights?.bold || 700;
    const normalWeight = themeConfig.fontWeights?.normal || 400;
    const defaultWeight = isBoldVariant ? boldWeight : normalWeight;
    
    const weight = typeof fontWeight === 'number' 
      ? fontWeight 
      : (fontWeight && themeConfig.fontWeights?.[fontWeight]) || defaultWeight;
    
    // 解析颜色
    const textColor = color && colors[color as keyof typeof colors] 
      ? colors[color as keyof typeof colors] 
      : color;

    // 解析文本修饰
    const textDecoration = (underline || variant === 'underline') ? 'underline' 
      : (strikethrough || variant === 'delete') ? 'line-through' 
      : 'none';

    // 解析省略号
    const ellipsisRows = typeof ellipsis === 'object' ? ellipsis.rows : 1;
    const isEllipsis = !!ellipsis;

    return css`
      margin: 0;
      padding: 0;
      margin-bottom: ${gutter};
      color: ${textColor || colors.text};
      text-align: ${align || 'inherit'};
      font-weight: ${weight};
      text-transform: ${transform || 'none'};
      font-style: ${italic || variant === 'em' ? 'italic' : 'normal'};
      text-decoration: ${textDecoration};
      
      /* 省略号样式 */
      ${isEllipsis && ellipsisRows === 1 && css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `}
      
      ${isEllipsis && ellipsisRows && ellipsisRows > 1 && css`
        display: -webkit-box;
        -webkit-line-clamp: ${ellipsisRows};
        -webkit-box-orient: vertical;
        overflow: hidden;
      `}

      ${!isEllipsis && css`
        white-space: ${noWrap ? 'nowrap' : 'normal'};
        overflow: ${noWrap ? 'hidden' : 'visible'};
        text-overflow: ${noWrap ? 'ellipsis' : 'clip'};
      `}

      line-height: ${lineHeight};
      
      // 响应式字体大小
      font-size: ${size.xs};
      
      @media (min-width: 576px) {
        font-size: ${size.sm};
      }
      
      @media (min-width: 768px) {
        font-size: ${size.md};
      }
      
      // 特殊元素样式
      ${variant === 'code' && css`
        font-family: 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        background-color: ${theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
        padding: 0.2em 0.4em;
        border-radius: 4px;
      `}
      
      ${variant === 'pre' && css`
        font-family: 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        background-color: ${theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
        padding: 1em;
        border-radius: 4px;
        overflow-x: auto;
        display: block;
      `}
      
      ${variant === 'blockquote' && css`
        border-left: 4px solid ${colors.primary};
        padding-left: 1em;
        margin-left: 0;
        color: ${colors.muted};
      `}
      
      ${(variant === 'ul' || variant === 'ol') && css`
        padding-left: 1.5em;
        margin-bottom: ${gutterBottom ? '1em' : '0'};
      `}
      
      ${variant === 'li' && css`
        margin-bottom: 0.25em;
      `}
      
      ${variant === 'mark' && css`
        background-color: #ffe58f;
        padding: 0.1em 0.2em;
        border-radius: 2px;
      `}

      ${variant === 'a' && css`
        color: ${textColor || '#1890ff'};
        cursor: pointer;
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
          color: #40a9ff;
          text-decoration: underline;
        }
      `}
    `;
  }}
`;