import { css, keyframes } from '@emotion/react';

// 计算滚动条宽度
export const getScrollbarWidth = () => {
  if (typeof document === 'undefined') return 0;
  
  const scrollDiv = document.createElement('div');
  scrollDiv.style.cssText = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

// 全局滚动条样式
export const scrollbarStyle = css`
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;

// 动画定义
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const zoomIn = keyframes`
  from { transform: translate(-50%, -50%) scale(0.7); opacity: 0; }
  to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
`;

const zoomOut = keyframes`
  from { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  to { transform: translate(-50%, -50%) scale(0.7); opacity: 0; }
`;

// 遮罩层样式
export const overlayStyle = (visible: boolean, closing: boolean) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${visible ? 'block' : 'none'};
  animation: ${visible ? fadeIn : (closing ? fadeOut : 'none')} 0.3s ease-out;
  animation-fill-mode: forwards;
  
  /* 禁用滚动时的背景样式 */
  body.modal-open & {
    overflow: hidden;
    padding-right: ${getScrollbarWidth()}px;
  }
`;

// 模态框容器样式
export const modalContainerStyle = (visible: boolean, closing: boolean) => css`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  display: ${visible ? 'block' : 'none'};
  animation: ${visible ? zoomIn : (closing ? zoomOut : 'none')} 0.2s ease-out;
  animation-fill-mode: forwards;
`;

// 模态框内容样式
export const modalContentStyle = css`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 400px;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

// 头部样式
export const modalHeaderStyle = css`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 标题样式
export const modalTitleStyle = css`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
`;

// 关闭按钮样式
export const modalCloseStyle = css`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 16px;
  color: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  transition: color 0.2s;
  
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

// 内容样式
export const modalBodyStyle = css`
  padding: 24px;
  flex: 1;
  overflow-y: auto;
`;

// 底部样式
export const modalFooterStyle = css`
  padding: 10px 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

// 按钮样式
export const modalButtonStyle = (primary?: boolean) => css`
  padding: 6px 16px;
  border-radius: 4px;
  border: 1px solid ${primary ? '#1890ff' : '#d9d9d9'};
  background-color: ${primary ? '#1890ff' : 'white'};
  color: ${primary ? 'white' : 'rgba(0, 0, 0, 0.85)'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: ${primary ? '#40a9ff' : '#40a9ff'};
    background-color: ${primary ? '#40a9ff' : 'white'};
    color: ${primary ? 'white' : '#40a9ff'};
  }
`;