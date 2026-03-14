import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 预设颜色
const presetColors = {
  default: {
    bg: '#f5f5f5',
    border: '#d9d9d9',
    text: 'rgba(0, 0, 0, 0.85)',
    hover: '#d9d9d9'
  },
  primary: {
    bg: '#e6f4ff',
    border: '#91caff',
    text: '#1677ff',
    hover: '#bae0ff'
  },
  success: {
    bg: '#f6ffed',
    border: '#b7eb8f',
    text: '#52c41a',
    hover: '#d9f7be'
  },
  warning: {
    bg: '#fffbe6',
    border: '#ffe58f',
    text: '#faad14',
    hover: '#fff1b8'
  },
  error: {
    bg: '#fff2f0',
    border: '#ffccc7',
    text: '#ff4d4f',
    hover: '#ffccc7'
  },
  processing: {
    bg: '#f0f5ff',
    border: '#adc6ff',
    text: '#2f54eb',
    hover: '#d6e4ff'
  },
  magenta: { bg: '#fff0f6', border: '#ffadd2', text: '#eb2f96', hover: '#ffadd2' },
  red: { bg: '#fff1f0', border: '#ffa39e', text: '#f5222d', hover: '#ffa39e' },
  volcano: { bg: '#fff2e8', border: '#ffbb96', text: '#fa541c', hover: '#ffbb96' },
  orange: { bg: '#fff7e6', border: '#ffd591', text: '#fa8c16', hover: '#ffd591' },
  gold: { bg: '#fffbe6', border: '#ffe58f', text: '#faad14', hover: '#ffe58f' },
  lime: { bg: '#fcffe6', border: '#eaff8f', text: '#a0d911', hover: '#eaff8f' },
  green: { bg: '#f6ffed', border: '#b7eb8f', text: '#52c41a', hover: '#b7eb8f' },
  cyan: { bg: '#e6fffb', border: '#87e8de', text: '#13c2c2', hover: '#87e8de' },
  blue: { bg: '#e6f7ff', border: '#91d5ff', text: '#1890ff', hover: '#91d5ff' },
  geekblue: { bg: '#f0f5ff', border: '#85a5ff', text: '#2f54eb', hover: '#85a5ff' },
  purple: { bg: '#f9f0ff', border: '#d3adf7', text: '#722ed1', hover: '#d3adf7' },
};

// 获取颜色配置
const getColorConfig = (color: string) => {
  if (presetColors[color as keyof typeof presetColors]) {
    return presetColors[color as keyof typeof presetColors];
  }
  
  // 自定义颜色
  return {
    bg: `${color}10`,
    border: `${color}30`,
    text: `${color}80`,
    hover: `${color}20`
  };
};

// 尺寸配置
const sizeConfig = {
  small: {
    padding: '0 7px',
    fontSize: '12px',
    height: '24px'
  },
  medium: {
    padding: '0 12px',
    fontSize: '14px',
    height: '32px'
  },
  large: {
    padding: '0 16px',
    fontSize: '16px',
    height: '40px'
  }
};

// 形状配置
const shapeConfig = {
  square: css`
    border-radius: 0;
  `,
  round: css`
    border-radius: 100px;
  `,
  rounded: css`
    border-radius: 4px;
  `
};

interface TagContainerProps {
  color: string;
  size: 'small' | 'medium' | 'large';
  shape: 'square' | 'round' | 'rounded';
  bordered: boolean;
  checkable: boolean;
  checked: boolean;
}

export const TagContainer = styled.span<TagContainerProps>`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.5715;
  cursor: ${({ checkable }) => checkable ? 'pointer' : 'default'};
  opacity: ${({ checked }) => checked ? 1 : 0.85};
  transition: all 0.2s ease;
  
  // 尺寸样式
  ${({ size }) => sizeConfig[size]}
  
  // 形状样式
  ${({ shape }) => shapeConfig[shape]}
  
  // 颜色样式
  ${({ color, bordered, checked }) => {
    const colorConfig = getColorConfig(color);
    
    return css`
      background-color: ${checked ? colorConfig.bg : 'transparent'};
      border: ${bordered ? `1px solid ${colorConfig.border}` : 'none'};
      color: ${colorConfig.text};
      
      &:hover {
        background-color: ${checked ? colorConfig.hover : 'transparent'};
      }
      
      &:active {
        opacity: 0.8;
      }
    `;
  }}
  
  // 可选中标签的选中状态
  ${({ checkable, checked }) => checkable && checked && css`
    // Removed arrow style as per user request
  `}
`;

export const TagText = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TagIcon = styled.span`
  display: inline-flex;
  margin-right: 6px;
  font-size: inherit;
  
  svg {
    display: block;
  }
`;

export const TagCloseIcon = styled.span`
  display: inline-flex;
  margin-left: 6px;
  font-size: inherit;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  
  svg {
    display: block;
  }
`;

export const TagCheckIcon = styled.span`
  display: inline-flex;
  margin-right: 4px;
  font-size: inherit;
  
  svg {
    display: block;
  }
`;