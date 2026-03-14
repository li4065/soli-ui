import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

// 定义尺寸类型
type RateSize = 'small' | 'middle' | 'large';

// 组件Props接口
export interface RateStyleProps {
  size?: RateSize;
  disabled?: boolean;
}

// 尺寸映射
const sizeMap: Record<RateSize, { fontSize: string; gap: string }> = {
  small: { fontSize: '16px', gap: '4px' },
  middle: { fontSize: '20px', gap: '6px' },
  large: { fontSize: '24px', gap: '8px' },
};

// 动画定义
const scaleUp = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// 基础容器样式
export const RateContainer = styled.div<RateStyleProps>`
  display: inline-flex;
  align-items: center;
  font-size: ${({ size = 'middle' }) => sizeMap[size].fontSize};
  color: #ffd666;
  
  // 禁用状态
  ${({ disabled }) => 
    disabled && css`
      cursor: not-allowed;
    `
  }
`;

// 星星容器样式
export const StarContainer = styled.div<RateStyleProps>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-right: ${({ size = 'middle' }) => sizeMap[size].gap};
  width: 1em;
  height: 1em;
  
  &:last-child {
    margin-right: 0;
  }
  
  // 禁用状态
  ${({ disabled }) => 
    disabled && css`
      cursor: default;
    `
  }
`;

// SVG 基础样式
const svgBase = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

// 星星背景样式
export const StarBackground = styled.div<RateStyleProps>`
  ${svgBase}
  color: #e8e8e8;
  z-index: 1;
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

// 星星前景样式
export const StarForeground = styled.div<{ active: boolean }>`
  ${svgBase}
  color: currentColor;
  z-index: 2;
  transform: ${({ active }) => active ? 'scale(1)' : 'scale(0)'};
  opacity: ${({ active }) => active ? 1 : 0};
  
  ${({ active }) => active && css`
    animation: ${scaleUp} 0.3s ease-out;
  `}
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

// 半星样式
export const HalfStar = styled.div<{ active: boolean }>`
  ${svgBase}
  width: 50%;
  overflow: hidden;
  color: currentColor;
  z-index: 3;
  transform: ${({ active }) => active ? 'scale(1)' : 'scale(0)'};
  opacity: ${({ active }) => active ? 1 : 0};
  
  ${({ active }) => active && css`
    animation: ${scaleUp} 0.3s ease-out;
  `}
  
  svg {
    width: 200%;
    height: 100%;
    fill: currentColor;
  }
`;

// 点击区域样式
export const ClickArea = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 10;
  cursor: pointer;
`;

export const FullClickArea = styled(ClickArea)`
  left: 0;
  width: 100%;
`;

export const LeftClickArea = styled(ClickArea)`
  left: 0;
  width: 50%;
`;

export const RightClickArea = styled(ClickArea)`
  right: 0;
  width: 50%;
`;

// 文本样式
export const RateText = styled.span<RateStyleProps>`
  margin-left: 8px;
  font-size: ${({ size = 'middle' }) => 
    parseInt(sizeMap[size].fontSize) * 0.8 + 'px'};
  color: #595959;
  transition: all 0.2s;
  
  ${({ size = 'middle' }) => css`
    font-size: ${parseInt(sizeMap[size].fontSize) * 0.8}px;
  `}
`;

// 活动状态指示器
export const ActiveIndicator = styled.div<{ active: boolean }>`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: currentColor;
  z-index: 5;
  opacity: ${({ active }) => active ? 1 : 0};
  transform: ${({ active }) => active ? 'scale(1)' : 'scale(0)'};
  transition: all 0.2s;
  box-shadow: 0 0 5px rgba(255, 214, 102, 0.5);
  animation: ${pulse} 1.5s infinite;
`;