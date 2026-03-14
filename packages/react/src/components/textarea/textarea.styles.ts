import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 定义尺寸类型
type TextAreaSize = 'small' | 'middle' | 'large';
// 定义状态类型
type TextAreaStatus = 'error' | 'warning' | 'success';

// 组件Props接口
export interface TextAreaStyleProps {
  size?: TextAreaSize;
  status?: TextAreaStatus;
  disabled?: boolean;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  variant?: 'outlined' | 'borderless' | 'underlined' | 'filled';
}

// 尺寸映射
const sizeMap: Record<TextAreaSize, { padding: string; fontSize: string }> = {
  small: { padding: '5px 11px', fontSize: '12px' },
  middle: { padding: '8px 11px', fontSize: '14px' },
  large: { padding: '12px 11px', fontSize: '16px' },
};

// 状态颜色映射
const statusColors: Record<TextAreaStatus, string> = {
  error: '#ff4d4f',
  warning: '#faad14',
  success: '#52c41a',
};

// 基础文本域样式
export const TextAreaBase = styled.textarea<TextAreaStyleProps>`
  width: 100%;
  border-radius: 6px;
  outline: none;
  /* 仅对边框、阴影等做过渡，不包含 width/height，避免拖拽 resize 时卡顿 */
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  line-height: 1.5715;
  box-sizing: border-box;
  font-family: inherit;
  resize: ${({ autoSize }) => (autoSize ? 'none' : 'vertical')};
  min-height: ${({ autoSize }) => (autoSize ? 'auto' : '80px')};
  background-color: #fff;
  border: 1px solid #d9d9d9;

  // 尺寸处理
  ${({ size = 'middle' }) => css`
    padding: ${sizeMap[size].padding};
    font-size: ${sizeMap[size].fontSize};
  `}

  // 变体处理
  ${({ variant = 'outlined' }) => {
    if (variant === 'borderless') {
      return css`
        border-color: transparent;
        background-color: transparent;
        padding: 0;
        &:focus {
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
        &:focus {
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
        &:focus {
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
      &:focus {
        border-color: #40a9ff;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      }
    `;
  }}

  // 状态处理 (优先级高于变体)
  ${({ status }) => 
    status && css`
      border-color: ${statusColors[status]} !important;
      &:focus {
        box-shadow: 0 0 0 2px ${statusColors[status]}33 !important;
      }
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
    `
  }

  // 占位符样式
  &::placeholder {
    color: #bfbfbf;
  }
`;

// 容器样式
export const TextAreaContainer = styled.div<{ hasCounter?: boolean }>`
  position: relative;
  display: inline-flex;
  width: 100%;
  
  /* 为计数器预留空间 */
  ${({ hasCounter }) => hasCounter && css`
    margin-bottom: 24px;
  `}
`;

// 清空按钮
export const TextAreaClearButton = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  color: #999;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: #666;
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

// 计数器样式
export const Counter = styled.div<{ exceed: boolean }>`
  position: absolute;
  bottom: -20px;
  right: 0;
  font-size: 12px;
  color: ${({ exceed }) => (exceed ? '#ff4d4f' : '#999')};
  transition: color 0.3s;
`;