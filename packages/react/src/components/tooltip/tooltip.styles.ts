import styled from '@emotion/styled';
import { css } from '@emotion/react'; 

export interface TooltipContentProps {
  placement: 
    'top' | 'topLeft' | 'topRight' | 
    'bottom' | 'bottomLeft' | 'bottomRight' | 
    'left' | 'leftTop' | 'leftBottom' | 
    'right' | 'rightTop' | 'rightBottom';
}

export interface TooltipArrowProps {
  backgroundColor: string;
  placement: TooltipContentProps['placement'];
}

export const TooltipContent = styled.div<TooltipContentProps>`
  position: absolute;
  padding: 6px 8px;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 
              0 6px 16px 0 rgba(0, 0, 0, 0.08),
              0 9px 28px 8px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  z-index: 1000;
  animation: fadeIn 0.15s ease-in-out;
  pointer-events: none;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .tooltip-inner {
    max-width: 100%;
    overflow-wrap: break-word;
    color: inherit;
  }
  
  ${({ placement }) => {
    if (placement.startsWith('top')) {
      return css`
        transform-origin: bottom center;
        animation: fadeInTop 0.15s ease-in-out;
        
        @keyframes fadeInTop {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
    }
    
    if (placement.startsWith('bottom')) {
      return css`
        transform-origin: top center;
        animation: fadeInBottom 0.15s ease-in-out;
        
        @keyframes fadeInBottom {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
    }
    
    if (placement.startsWith('left')) {
      return css`
        transform-origin: right center;
        animation: fadeInLeft 0.15s ease-in-out;
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `;
    }
    
    if (placement.startsWith('right')) {
      return css`
        transform-origin: left center;
        animation: fadeInRight 0.15s ease-in-out;
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `;
    }
    
    return css``;
  }}
`;

export const TooltipArrow = styled.div<TooltipArrowProps>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${({ backgroundColor }) => backgroundColor};
  transform: rotate(45deg);
  
  ${({ placement }) => {
    switch (placement) {
      case 'top':
      case 'topLeft':
      case 'topRight':
        return css`
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
      case 'bottom':
      case 'bottomLeft':
      case 'bottomRight':
        return css`
          top: -4px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
      case 'left':
      case 'leftTop':
      case 'leftBottom':
        return css`
          top: 50%;
          right: -4px;
          transform: translateY(-50%) rotate(45deg);
        `;
      case 'right':
      case 'rightTop':
      case 'rightBottom':
        return css`
          top: 50%;
          left: -4px;
          transform: translateY(-50%) rotate(45deg);
        `;
      default:
        return css`
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
    }
  }}
`;
