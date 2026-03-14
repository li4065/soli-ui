import styled from '@emotion/styled';
import { css } from '@emotion/react';
// import type { Theme } from '@emotion/react';
import { type Theme } from '../../theme/theme';
import { getColor, getTextColor, getTextSize, getTextLineHeight, getBorderRadius } from '../../theme/theme-utils';

// 定义按钮变体类型 主按钮、次按钮、外框虚线按钮
type ButtonVariant = 'primary' | 'default' | 'outline' | 'text' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

type ColorKey = 'blue' | 'purple' | 'cyan' | 'green' | 'magenta' | 'pink' | 'red' | 'orange' | 'yellow' | 'volcano' | 'geekblue' | 'lime' | 'gold';
// color对应的颜色映射
const colorMap = {
    blue: 'blue500', 
    purple: 'purple500',
    cyan: 'cyan500',
    green: 'green500',
    magenta: 'magenta500',
    pink: 'pink500',
    red: 'red500',
    orange: 'orange500',
    yellow: 'yellow500',
    volcano: 'volcano500',
    geekblue: 'geekblue500',
    lime: 'lime500',
    gold: 'gold500',
} satisfies Record<ColorKey, string>;

const hoverColorMap = {
    blue: 'blue400', 
    purple: 'purple400',
    cyan: 'cyan400',
    green: 'green400',
    magenta: 'magenta400',
    pink: 'pink400',
    red: 'red400',
    orange: 'orange400',
    yellow: 'yellow400',
    volcano: 'volcano400',
    geekblue: 'geekblue400',
    lime: 'lime400',
    gold: 'gold400',
} satisfies Record<ColorKey, string>;

const bgColorMap = {
    blue: 'blue', 
    purple: 'purple',
    cyan: 'cyan',
    green: 'green',
    magenta: 'magenta',
    pink: 'pink',
    red: 'red',
    orange: 'orange',
    yellow: 'yellow',
    volcano: 'volcano',
    geekblue: 'geekblue',
    lime: 'lime',
    gold: 'gold',
} satisfies Record<ColorKey, string>;



interface StyledButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  isLoading: boolean;
  className?: string;
}

// 按钮的通用样式
const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    outline: none;
  };
`;

const loadingVariants = {
    true: css`
        cursor: not-allowed;
        opacity: 0.7;
    `,
    false: css`
        cursor: pointer;
        opacity: 1;
    `
}

const sizeVariants = (theme: Theme) => ({
    sm: css`
        --button-padding-x: 0.75rem;
        --button-padding-y: 0.375rem;
        --button-font-size: ${getTextSize(theme, 'sm')};
        --button-line-height: ${getTextLineHeight(theme, 'sm')};
        --button-border-radius: ${getBorderRadius(theme, 'sm')};
        
        padding: var(--button-padding-y) var(--button-padding-x);
        font-size: var(--button-font-size);
        line-height: var(--button-line-height);
        border-radius: var(--button-border-radius);
    `,
    md: css`
        --button-padding-x: 1rem;
        --button-padding-y: 0.5rem;
        --button-font-size: ${getTextSize(theme, 'base')};
        --button-line-height: ${getTextLineHeight(theme, 'base')};
        --button-border-radius: ${getBorderRadius(theme, 'md')};
        
        padding: var(--button-padding-y) var(--button-padding-x);
        font-size: var(--button-font-size);
        line-height: var(--button-line-height);
        border-radius: var(--button-border-radius);
    `,
    lg: css`
        --button-padding-x: 1.25rem;
        --button-padding-y: 0.625rem;
        --button-font-size: ${getTextSize(theme, 'lg')};
        --button-line-height: ${getTextLineHeight(theme, 'lg')};
        --button-border-radius: ${getBorderRadius(theme, 'lg')};
        
        padding: var(--button-padding-y) var(--button-padding-x);
        font-size: var(--button-font-size);
        line-height: var(--button-line-height);
        border-radius: var(--button-border-radius);
    `
});

const typeVariants = (theme: Theme, color?: ColorKey) => {
    const resolvedColor = color ? colorMap[color] : null;
    const hoverColor = color ? hoverColorMap[color] : null;
    const bgColor = color ? bgColorMap[color] : null;
    return {
        primary: css`
            --button-bg: ${getColor(theme, resolvedColor as ColorKey || 'primary')};
            --button-color: ${getTextColor(theme, 'white')};
            --button-hover-bg: ${getColor(theme, hoverColor as ColorKey || 'primary')};
            
            background-color: var(--button-bg);
            color: var(--button-color);
            &:hover:not(:disabled) {
                background-color: var(--button-hover-bg);
            };
        `,
        outline: css`
            --button-color: ${getColor(theme, resolvedColor as ColorKey || 'black')};
            --button-border-color: ${getColor(theme, resolvedColor as ColorKey || 'gray300')};
            --button-hover-color: ${getColor(theme, hoverColor as ColorKey || 'blue600')};
            --button-hover-border-color: ${getColor(theme, hoverColor as ColorKey || 'blue600')};
            
            background-color: transparent;
            color: var(--button-color);
            border: 1px dashed var(--button-border-color);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
            &:hover:not(:disabled) {
                color: var(--button-hover-color);
                border-color: var(--button-hover-border-color);
            };
        `,
        text: css`
            --button-color: ${getColor(theme, resolvedColor as ColorKey || 'gray900')};
            --button-hover-bg: ${getColor(theme, bgColor as ColorKey || 'gray600')};
            
            background-color: transparent;
            color: var(--button-color);
            border: none;
            
            &:hover:not(:disabled) {
                background-color: var(--button-hover-bg);
            };
        `,
        link: css`
            --button-color: ${getColor(theme, resolvedColor as ColorKey || 'blue600')};
            --button-hover-color: ${getColor(theme, hoverColor as ColorKey || 'blue400')};
            
            background-color: transparent;
            color: var(--button-color);
            border: none;
            
            &:hover:not(:disabled) {
                text-decoration: none;
                color: var(--button-hover-color);
            }
        `,
        default: css`
            --button-color: ${getColor(theme, resolvedColor as ColorKey || 'black')};
            --button-border-color: ${getColor(theme, resolvedColor as ColorKey || 'gray300')};
            --button-hover-color: ${getColor(theme, hoverColor as ColorKey || 'blue600')};
            --button-hover-border-color: ${getColor(theme, hoverColor as ColorKey || 'blue600')};
            
            background-color: transparent;
            color: var(--button-color);
            border: 1px solid var(--button-border-color);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
            &:hover:not(:disabled) {
                color: var(--button-hover-color);
                border-color: var(--button-hover-border-color);
            },
        `,
    }
}

// 创建样式化的按钮组件
export const StyledButton = styled.button<StyledButtonProps>`
    ${baseButtonStyles}

    // 根据 props 组合变体样式
    ${({ isLoading }) => loadingVariants[String(isLoading) as 'true' | 'false']}
    ${({ size, theme }) => sizeVariants(theme)[size]}
    ${({ variant, color, theme }) => typeVariants(theme, color as ColorKey)[variant]}

    // 应用外部 className，允许 Tailwind 覆盖样式
    ${({ className }) => className && css`
        ${className}
    `}

    /* 禁用状态样式 */
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    /* 加载状态特殊处理 */
    ${({ isLoading }) => isLoading && `
        position: relative;
        
        /* 防止按钮文字在加载时跳动 */
        &:after {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        margin-left: 0.5em;
        vertical-align: middle;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        animation: spin 0.75s linear infinite;
        }
        
        @keyframes spin {
        to { transform: rotate(360deg); }
        }
    `}
`;