import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 定义尺寸类型
type InputSize = 'small' | 'middle' | 'large';
// 定义状态类型
type InputStatus = 'error' | 'warning' | 'success';
// 计数器位置类型
type CounterPosition = 'bottom' | 'inside';
// 圆角类型
export type InputRadius = 'full' | 'lg' | 'md' | 'sm' | 'none';
// 背景色类型
export type InputBackgroundColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

// 组件Props接口
export interface InputStyleProps {
  size?: InputSize;
  status?: InputStatus;
  disabled?: boolean;
  hasPrefix?: boolean;
  hasSuffix?: boolean;
  hasCounter?: boolean;
  counterPosition?: CounterPosition;
  variant?: 'outlined' | 'borderless' | 'underlined' | 'filled';
  /** 边框圆角，仅在有边框的形态下生效 */
  radius?: InputRadius;
  /** 背景色 */
  backgroundColor?: InputBackgroundColor;
}

// 尺寸映射
const sizeMap: Record<InputSize, { height: string; fontSize: string; padding: string }> = {
  small: { height: '24px', fontSize: '12px', padding: '0 7px' },
  middle: { height: '32px', fontSize: '14px', padding: '0 11px' },
  large: { height: '40px', fontSize: '16px', padding: '0 11px' },
};

// 状态颜色映射
const statusColors: Record<InputStatus, string> = {
  error: '#ff4d4f',
  warning: '#faad14',
  success: '#52c41a',
};

// 圆角映射（仅在有边框时生效）
const radiusMap: Record<InputRadius, string> = {
  full: '9999px',
  lg: '12px',
  md: '6px',
  sm: '4px',
  none: '0',
};

// 背景色映射
const backgroundColorMap: Record<InputBackgroundColor, string> = {
  default: '#ffffff',
  primary: '#cce3fd',
  secondary: '#e4d4f4',
  success: '#d1f4e0',
  warning: '#fdedd3',
  danger: '#fdd0df',
};

// 容器样式 - 负责布局、边框、背景
export const InputContainer = styled.div<InputStyleProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: ${({ radius = 'md' }) => radiusMap[radius]};
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  background-color: #fff;
  border: 1px solid #d9d9d9;

  // 尺寸处理
  ${({ size = 'middle' }) => css`
    height: ${(sizeMap[('' + size in sizeMap) ? size as InputSize : 'middle'] || sizeMap.middle).height};
    font-size: ${(sizeMap[('' + size in sizeMap) ? size as InputSize : 'middle'] || sizeMap.middle).fontSize};
    padding: ${(sizeMap[('' + size in sizeMap) ? size as InputSize : 'middle'] || sizeMap.middle).padding};
  `}

  // 变体处理
  ${({ variant = 'outlined' }) => {
    if (variant === 'borderless') {
      return css`
        border-color: transparent;
        background-color: transparent;
        padding: 0; // borderless 可能不需要 padding，或者视情况而定
        &:focus-within {
          box-shadow: none;
        }
      `;
    }
    if (variant === 'underlined') {
      return css`
        border: none;
        border-bottom: 1px solid #d9d9d9;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0;
        &:focus-within {
          box-shadow: none;
          border-bottom-color: #40a9ff;
        }
      `;
    }
    if (variant === 'filled') {
      return css`
        border: 1px solid transparent;
        background-color: #f5f5f5;
        &:hover {
          background-color: #e8e8e8;
        }
        &:focus-within {
          background-color: #fff;
          border-color: #40a9ff;
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
        }
      `;
    }
    // Default outlined
    return css`
      &:hover {
        border-color: #40a9ff;
      }
      &:focus-within {
        border-color: #40a9ff;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      }
    `;
  }}

  // 状态处理 (优先级高于变体)
  ${({ status }) => 
    status && css`
      border-color: ${statusColors[status]} !important;
      &:focus-within {
        box-shadow: 0 0 0 2px ${statusColors[status]}33 !important;
      }
    `
  }

  // 背景色（传入时覆盖变体默认背景）
  ${({ backgroundColor }) => 
    backgroundColor !== undefined && css`
      background-color: ${backgroundColorMap[backgroundColor]};
    `
  }

  // 禁用状态
  ${({ disabled }) => 
    disabled && css`
      background-color: #f5f5f5;
      cursor: not-allowed;
      opacity: 1;
      border-color: #d9d9d9;
      color: #00000040;
      
      &:hover {
        border-color: #d9d9d9;
      }
      
      input {
        cursor: not-allowed;
        color: #00000040;
      }
    `
  }

  ${({ counterPosition }) => counterPosition === 'bottom' && css`
    margin-bottom: 24px;
  `}
`;

// 基础输入框样式 - 负责输入交互
export const InputBase = styled.input<InputStyleProps & { counterInside?: boolean }>`
  flex: 1;
  width: 100%;
  min-width: 0; // 允许 flex item 收缩
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 0;
  height: 100%;
  font-size: inherit;
  color: inherit;
  
  // 占位符样式
  &::placeholder {
    color: #bfbfbf;
  }
`;

// 前后缀样式
const affixStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.85);
  font-size: inherit;
  line-height: 1;
  white-space: nowrap; // 防止文本换行
`;

export const PrefixWrapper = styled.span`
  ${affixStyle}
  margin-right: 8px; // 增加间距
`;

export const SuffixWrapper = styled.span`
  ${affixStyle}
  margin-left: 8px; // 增加间距
`;

export const Counter = styled.div<{ exceed: boolean }>`
  position: absolute;
  bottom: -22px;
  right: 0;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ exceed }) => (exceed ? '#ff4d4f' : '#999')};
  transition: color 0.3s;
`;

// 内部计数器样式
export const InsideCounter = styled.span<{ exceed: boolean }>`
  margin-left: 8px;
  font-size: 12px;
  color: ${({ exceed }) => (exceed ? '#ff4d4f' : '#999')};
  transition: color 0.3s;
  pointer-events: none;
  white-space: nowrap;
`;