import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

// 定义Switch大小类型
export type SwitchSize = 'small' | 'middle' | 'large';

// 定义Switch样式props接口（使用 transient props）
export interface SwitchStyleProps {
  $size?: SwitchSize;
  $checked?: boolean;
  $disabled?: boolean; // 添加missing属性
  $loading?: boolean; // 添加missing属性
};

// 加载动画
const loadingKeyframes = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// 计算不同尺寸的样式值
const getSizeValues = (size: SwitchSize = 'middle') => {
  switch (size) {
    case 'small':
      return {
        width: '28px',
        height: '16px',
        handleSize: '12px',
        textFontSize: '12px',
        handleOffset: '2px',
        textPadding: '0 4px',
      };
    case 'large':
      return {
        width: '56px',
        height: '26px',
        handleSize: '22px',
        textFontSize: '14px',
        handleOffset: '2px',
        textPadding: '0 8px',
      };
    case 'middle':
    default:
      return {
        width: '44px',
        height: '22px',
        handleSize: '18px',
        textFontSize: '12px',
        handleOffset: '2px',
        textPadding: '0 7px',
      };
  }
};

// 定义Switch容器样式
export const SwitchContainer = styled.label<SwitchStyleProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: ${({ $disabled, $loading }) => ($disabled || $loading) ? 'not-allowed' : 'pointer'};
  opacity: ${({ $disabled }) => $disabled ? 0.65 : 1};
  
  /* 隐藏原始input */
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

// 定义Switch轨道样式（inline-flex 使内部文字/图标 span 按 flex 子项垂直居中，避免 inline 基线对齐导致偏上）
export const SwitchTrack = styled.span<SwitchStyleProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  /* 自动宽度支持 */
  min-width: ${({ $size }) => getSizeValues($size).width};
  height: ${({ $size }) => getSizeValues($size).height};
  width: auto;
  border-radius: 100px;
  background-color: ${({ $checked }) => $checked ? '#1890ff' : '#bfbfbf'};
  transition: all 0.2s;
  
  /* 加载动画 */
  ${({ $loading }) => $loading && css`
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      margin: -6px 0 0 -6px;
      border: 2px solid transparent;
      border-top-color: #fff;
      border-radius: 50%;
      animation: ${loadingKeyframes} 1s linear infinite;
    }
  `}
  
  /* 禁用状态 */
  ${({ $disabled }) => $disabled && css`
    opacity: 0.65;
  `}
`;

// 定义Switch手柄样式
export const SwitchHandle = styled.span<SwitchStyleProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $size }) => {
    const { handleSize, handleOffset } = getSizeValues($size);
    return css`
      width: ${handleSize};
      height: ${handleSize};
      left: ${handleOffset};
    `;
  }}
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  
  ${({ $checked, $size }) => {
    if ($checked) {
      const { handleSize, handleOffset } = getSizeValues($size);
      const left = `calc(100% - ${handleSize} - ${handleOffset})`;
      return css`
        left: ${left};
      `;
    }
    return null;
  }}
  
  /* 加载状态时隐藏手柄 */
  ${({ $loading }) => $loading && css`
    opacity: 0;
  `}
`;

// 定义开关文字样式
export const SwitchInnerText = styled.span<SwitchStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${({ $size }) => getSizeValues($size).textFontSize};
  line-height: 1;
  color: #fff;
  padding-left: ${({ $size }) => getSizeValues($size).textPadding.split(' ')[1]};
  padding-right: ${({ $size }) => `calc(${getSizeValues($size).handleSize} + 2px + ${getSizeValues($size).textPadding.split(' ')[1]})`};
  transition: all 0.2s;
  opacity: ${({ $checked }) => $checked ? 1 : 0};
  pointer-events: none;
  white-space: nowrap;
  
  /* 当不显示时，不占用布局空间，但需要保留宽度计算 */
  ${({ $checked }) => !$checked && css`
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  `}
`;

// 定义未选中时的文字容器（继承 SwitchInnerText，已含 line-height: 1 与 flex 居中）
export const SwitchUncheckedText = styled(SwitchInnerText)`
  opacity: ${({ $checked }) => $checked ? 0 : 1};
  padding-left: ${({ $size }) => `calc(${getSizeValues($size).handleSize} + 2px + ${getSizeValues($size).textPadding.split(' ')[1]})`};
  padding-right: ${({ $size }) => getSizeValues($size).textPadding.split(' ')[1]};
  
  ${({ $checked }) => $checked && css`
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  `}
  
  ${({ $checked }) => !$checked && css`
    position: relative;
    visibility: visible;
  `}
`;