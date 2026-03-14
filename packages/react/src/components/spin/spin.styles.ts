import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

// 定义旋转动画
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 定义点动画
const dot1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const moveRightSmall = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(16px); }
`;

const moveRightDefault = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(24px); }
`;

const moveRightLarge = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(32px); }
`;

const dot3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

// 容器样式（无子元素时绝对定位的 SpinContent 不占位，容器会塌陷为 0，导致指示器偏左；给最小宽高使居中生效）
export const SpinContainer = styled.div<{ fullscreen?: boolean }>`
  position: relative;
  display: inline-block;
  min-width: 80px;
  min-height: 40px;

  ${({ fullscreen }) => fullscreen && css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 0;
    min-height: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
  `}
`;

// 遮罩样式
export const SpinMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  z-index: 10;
`;

// 内容容器
export const SpinContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 指示器容器
export const SpinIndicator = styled.div`
  display: inline-block;
`;

// 点状指示器
export const SpinDot = styled.div<{ size: string }>`
  position: relative;
  display: inline-block;
  width: ${({ size }) => 
    size === 'small' ? '40px' : 
    size === 'large' ? '80px' : '60px'};
  height: ${({ size }) => 
    size === 'small' ? '20px' : 
    size === 'large' ? '40px' : '30px'};
`;

// 点状指示器项目
export const SpinDotItem = styled.span<{ size: string }>`
  position: absolute;
  width: ${({ size }) => 
    size === 'small' ? '6px' : 
    size === 'large' ? '12px' : '9px'};
  height: ${({ size }) => 
    size === 'small' ? '6px' : 
    size === 'large' ? '12px' : '9px'};
  border-radius: 50%;
  background-color: currentColor;
  transform: scale(0);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  
  &:nth-of-type(1) {
    top: ${({ size }) => 
      size === 'small' ? '7px' : 
      size === 'large' ? '14px' : '10.5px'};
    left: 0;
    animation: ${dot1} 0.6s infinite;
  }
  
  &:nth-of-type(2) {
    top: ${({ size }) => 
      size === 'small' ? '7px' : 
      size === 'large' ? '14px' : '10.5px'};
    left: 0;
    animation: ${({ size }) => 
      size === 'small' ? moveRightSmall : 
      size === 'large' ? moveRightLarge : moveRightDefault} 0.6s infinite;
  }
  
  &:nth-of-type(3) {
    top: ${({ size }) => 
      size === 'small' ? '7px' : 
      size === 'large' ? '14px' : '10.5px'};
    left: ${({ size }) => 
      size === 'small' ? '16px' : 
      size === 'large' ? '32px' : '24px'};
    animation: ${({ size }) => 
      size === 'small' ? moveRightSmall : 
      size === 'large' ? moveRightLarge : moveRightDefault} 0.6s infinite;
  }
  
  &:nth-of-type(4) {
    top: ${({ size }) => 
      size === 'small' ? '7px' : 
      size === 'large' ? '14px' : '10.5px'};
    left: ${({ size }) => 
      size === 'small' ? '32px' : 
      size === 'large' ? '64px' : '48px'};
    animation: ${dot3} 0.6s infinite;
  }
`;

// 文本样式
export const SpinText = styled.div<{ size: string }>`
  margin-top: ${({ size }) => 
    size === 'small' ? '8px' : 
    size === 'large' ? '16px' : '12px'};
  color: rgba(0, 0, 0, 0.65);
  font-size: ${({ size }) => 
    size === 'small' ? '12px' : 
    size === 'large' ? '16px' : '14px'};
`;

// 自定义图标样式
export const CustomSpinIcon = styled.div<{ size: string }>`
  display: inline-block;
  animation: ${spin} 1s infinite linear;
  font-size: ${({ size }) => 
    size === 'small' ? '16px' : 
    size === 'large' ? '32px' : '24px'};
  color: #1890ff;
  
  svg {
    display: block;
  }
`;