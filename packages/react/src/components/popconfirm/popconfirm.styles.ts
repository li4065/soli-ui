import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface PopconfirmStyleProps {
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

const getPlacementStyles = (placement: PopconfirmStyleProps['placement'] = 'top') => {
  switch (placement) {
    case 'top':
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
      `;
    case 'topLeft':
      return css`
        bottom: 100%;
        left: 0;
        margin-bottom: 10px;
      `;
    case 'topRight':
      return css`
        bottom: 100%;
        right: 0;
        margin-bottom: 10px;
      `;
    case 'bottom':
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
      `;
    case 'bottomLeft':
      return css`
        top: 100%;
        left: 0;
        margin-top: 10px;
      `;
    case 'bottomRight':
      return css`
        top: 100%;
        right: 0;
        margin-top: 10px;
      `;
    case 'left':
      return css`
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        margin-right: 10px;
      `;
    case 'right':
      return css`
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        margin-left: 10px;
      `;
    default:
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
      `;
  }
};

export const PopconfirmContainer = styled.div<PopconfirmStyleProps>`
  position: absolute;
  z-index: 1000;
  ${({ placement }) => getPlacementStyles(placement)}
`;

export const PopconfirmContent = styled.div`
  background: white;
  border-radius: 6px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 
              0 6px 16px 0 rgba(0, 0, 0, 0.08),
              0 9px 28px 8px rgba(0, 0, 0, 0.05);
  padding: 12px;
  min-width: 250px;
  font-size: 14px;
  
  .popconfirm-icon {
    float: left;
    margin-right: 8px;
    font-size: 1.2em;
    color: #faad14; /* 默认图标颜色 */
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 100%;
      height: 100%;
    }
  }
  
  .popconfirm-message {
    overflow: hidden;
  }
  
  .popconfirm-title {
    font-weight: 600;
    text-align: left;
  }
  
  .popconfirm-description {
    margin-top: 4px;
    color: #666;
    text-align: left;
  }
  
  .popconfirm-buttons {
    margin-top: 12px;
    text-align: right;
    
    button + button {
      margin-left: 8px;
    }
  }
  
  .popconfirm-cancel-btn {
    padding: 4px 8px;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #d9d9d9;
    cursor: pointer;
  }
  
  .popconfirm-ok-btn {
    padding: 4px 8px;
    border-radius: 4px;
    background: #1890ff;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export const PopconfirmArrow = styled.div<PopconfirmStyleProps>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  transform: rotate(45deg);
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 
              0 6px 16px 0 rgba(0, 0, 0, 0.08),
              0 9px 28px 8px rgba(0, 0, 0, 0.05);

  ${({ placement = 'top' }) => {
    switch (placement) {
      case 'top':
      case 'topLeft':
      case 'topRight':
        return css`
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
      case 'bottom':
      case 'bottomLeft':
      case 'bottomRight':
        return css`
          top: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
      case 'left':
        return css`
          top: 50%;
          right: -5px;
          transform: translateY(-50%) rotate(45deg);
        `;
      case 'right':
        return css`
          top: 50%;
          left: -5px;
          transform: translateY(-50%) rotate(45deg);
        `;
      default:
        return css`
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
    }
  }}
`;