import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const progressActive = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 32px 0;
  }
`;

// 通用容器样式
export const ProgressContainer = styled.div<{ type: 'line' | 'circle' | 'dashboard' }>`
  display: inline-flex;
  align-items: center;
  
  ${({ type }) => type === 'line' && css`
    width: 100%;
    gap: 8px;
  `}
  
  ${({ type }) => (type === 'circle' || type === 'dashboard') && css`
    position: relative;
  `}
`;

// 线性进度条样式
export const ProgressLine = styled.div<{ percent: number; status: string }>`
  position: relative;
  border-radius: 100px;
  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
  
  ${({ status }) => status === 'active' && css`
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 32px 32px;
    animation: ${progressActive} 0.8s linear infinite;
  `}
`;

// 新增：线性进度条轨道样式
export const ProgressLineTrack = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 100px;
  background-color: #f5f5f5;
  overflow: hidden;
  position: relative;
`;

// 新增：线性进度条轨道内部样式
export const ProgressLineInner = styled.div<{ percent: number; color: string }>`
  height: 100%;
  width: ${({ percent }) => percent}%;
  background-color: ${({ color }) => color};
  border-radius: 100px;
  transition: width 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
`;

// 圆形进度条容器
export const ProgressCircle = styled.svg<{ size: string | number }>`
  ${({ size }) => {
    if (typeof size === 'string') {
      switch (size) {
        case 'small': return css` width: 60px; height: 60px; `;
        case 'large': return css` width: 120px; height: 120px; `;
        default: return css` width: 80px; height: 80px; `;
      }
    }
    return css`
      width: ${size}px;
      height: ${size}px;
    `;
  }}
  
  .progress-trail {
    transition: stroke 0.3s;
  }
  
  .progress-path {
    transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease;
  }
`;

// 仪表盘进度条容器
export const ProgressDashboard = styled.svg<{ 
  size: string | number;
  gapDegree: number;
  gapPosition: string;
}>`
  ${({ size }) => {
    if (typeof size === 'string') {
      switch (size) {
        case 'small': return css` width: 60px; height: 60px; `;
        case 'large': return css` width: 120px; height: 120px; `;
        default: return css` width: 80px; height: 80px; `;
      }
    }
    return css`
      width: ${size}px;
      height: ${size}px;
    `;
  }}
  
  transform: rotate(-90deg);
  
  .progress-trail {
    transition: stroke 0.3s;
  }
  
  .progress-path {
    transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease;
  }
  
  ${({ gapDegree, gapPosition }) => {
    const gapRotation = {
      top: 0,
      right: 90,
      bottom: 180,
      left: 270
    }[gapPosition] || 0;
    
    return css`
      .progress-trail,
      .progress-path {
        stroke-dasharray: ${264 - gapDegree}, 264;
        transform-origin: center;
        transform: rotate(${gapRotation}deg);
      }
    `;
  }}
`;

// 进度文本样式
export const ProgressText = styled.span<{ 
  type: 'line' | 'circle' | 'dashboard'; 
  size: string | number;
  color?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({ color }) => color || 'rgba(0, 0, 0, 0.65)'};
  
  ${({ type, size }) => {
    if (type === 'line') return css`
      min-width: 40px;
      text-align: left;
    `;
    
    // 对于圆形和仪表盘，文本居中
    return css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: ${typeof size === 'number' 
        ? `${Math.max(12, size / 6)}px` 
        : size === 'small' 
          ? '12px' 
          : size === 'large' 
            ? '18px' 
            : '14px'};
    `;
  }}
  
  // 添加图标样式
  svg {
    vertical-align: middle;
    margin: 0 auto;
  }
`;