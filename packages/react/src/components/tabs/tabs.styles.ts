import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { TabPosition, TabsType } from './tabs.types';

export const TabsContainer = styled.div<{ $position: TabPosition }>`
  display: flex;
  flex-direction: ${({ $position }) => {
    if ($position === 'bottom') return 'column-reverse';
    if ($position === 'left') return 'row';
    if ($position === 'right') return 'row-reverse';
    return 'column';
  }};
  width: 100%;
  overflow: hidden;
`;

export const TabsNav = styled.div<{ 
  $position: TabPosition; 
  $type: TabsType; 
  $size?: 'large' | 'default' | 'small';
  $radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}>`
  display: flex;
  flex: none;
  position: relative;
  margin: 0;
  
  /* Border Logic - Implemented as pseudo-element to allow active tab to overlap */
  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    pointer-events: none;
    ${({ $position, $type }) => {
      if ($type === 'segment') return css`display: none;`;

      const color = '#e8e8e8';

      switch ($position) {
        case 'top':
          return css`
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: ${color};
          `;
        case 'bottom':
          return css`
            left: 0;
            top: 0;
            width: 100%;
            height: 1px;
            background: ${color};
          `;
        case 'left':
          return css`
            right: 0;
            top: 0;
            width: 1px;
            height: 100%;
            background: ${color};
          `;
        case 'right':
          return css`
            left: 0;
            top: 0;
            width: 1px;
            height: 100%;
            background: ${color};
          `;
        default:
          return css`display: none;`;
      }
    }}
  }

  /* Old border logic removed in favor of ::before */
   ${({ $position: _position, $type, $radius }) => {
     if ($type === 'segment') {
       let borderRadius = '6px';
       
       if ($radius) {
         switch ($radius) {
           case 'none': borderRadius = '0'; break;
           case 'sm': borderRadius = '4px'; break;
           case 'md': borderRadius = '6px'; break;
           case 'lg': borderRadius = '10px'; break;
           case 'full': borderRadius = '9999px'; break;
         }
       }

       return css`
         background-color: #f5f5f5;
         padding: 4px;
         border-radius: ${borderRadius};
         display: inline-flex;
       `;
     }
     return css``;
   }}

  flex-direction: ${({ $position }) => 
    ($position === 'left' || $position === 'right') ? 'column' : 'row'};
    
  white-space: nowrap;
  overflow: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

export const TabPane = styled.div<{ $active: boolean }>`
  flex: auto;
  display: ${({ $active }) => ($active ? 'block' : 'none')};
  padding: 16px;
  background: #fff;
`;

export const TabNavItem = styled.div<{ 
  $active: boolean; 
  $disabled: boolean; 
  $position: TabPosition;
  $type: TabsType;
  $segmentColor?: string;
  $size?: 'large' | 'default' | 'small';
  $height?: string | number;
  $radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  transition: all 0.3s;
  
  /* Padding & Margin based on Type/Position */
  ${({ $type, $position, $size, $height, $radius }) => {
    if ($type === 'segment') {
      let height = '32px';
      let padding = '4px 12px';
      let fontSize = '14px';
      let borderRadius = '4px';

      if ($size === 'large') {
        height = '40px';
        padding = '6px 20px';
        fontSize = '16px';
      } else if ($size === 'small') {
        height = '24px';
        padding = '2px 8px';
        fontSize = '12px';
      }

      if ($height) {
        height = typeof $height === 'number' ? `${$height}px` : $height;
      }

      if ($radius) {
        switch ($radius) {
          case 'none': borderRadius = '0'; break;
          case 'sm': borderRadius = '2px'; break;
          case 'md': borderRadius = '4px'; break;
          case 'lg': borderRadius = '8px'; break;
          case 'full': borderRadius = '9999px'; break;
        }
      }

      return css`
        padding: ${padding};
        height: ${height};
        font-size: ${fontSize};
        margin: 0;
        border-radius: ${borderRadius};
        border: none;
        background: transparent;
        flex: 1;
        text-align: center;
      `;
    }

    if ($type === 'card' || $type === 'editable-card') {
      return css`
        padding: 8px 16px;
        margin-right: 2px;
        border: 1px solid #e8e8e8;
        border-radius: 4px 4px 0 0;
        background: #fafafa;
      `;
    }
    
    // Line Type
    if ($position === 'left' || $position === 'right') {
      return css`
        padding: 12px 24px;
        margin: 0;
      `;
    }
    
    return css`
      padding: 12px 0;
      margin: 0 32px 0 0;
    `;
  }}

  /* Active State */
  ${({ $active, $type, $disabled, $segmentColor }) => {
    if ($disabled) {
      return css`
        color: #00000040;
      `;
    }
    
    if ($active) {
      if ($type === 'segment') {
        let color = '#000';
        let bg = '#fff';

        switch ($segmentColor) {
          case 'primary':
            color = '#fff';
            bg = '#1677ff';
            break;
          case 'secondary':
            color = '#fff';
            bg = '#722ed1';
            break;
          case 'success':
            color = '#fff';
            bg = '#52c41a';
            break;
          case 'warning':
            color = '#fff';
            bg = '#faad14';
            break;
          case 'danger':
            color = '#fff';
            bg = '#ff4d4f';
            break;
          default:
            // Custom color support
            if ($segmentColor) {
              color = '#fff';
              bg = $segmentColor;
            }
            break;
        }

        return css`
          color: ${color};
          background: ${bg};
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          font-weight: 500;
        `;
      }

      if ($type === 'card' || $type === 'editable-card') {
        return css`
          color: #1890ff;
          background: #fff;
          border-bottom-color: #fff;
          font-weight: 500;
          z-index: 1;
        `;
      }
      return css`
        color: #1890ff;
        font-weight: 500;
      `;
    }
    
    if ($type === 'segment') {
      return css`
        color: #666;
        &:hover {
          color: #333;
          background: rgba(0, 0, 0, 0.04);
        }
      `;
    }

    return css`
      color: #000000d9;
      &:hover {
        color: #40a9ff;
      }
    `;
  }}

  /* Bottom Border for Line Type */
  &::after {
    content: '';
    position: absolute;
    background-color: #1890ff;
    transition: all 0.3s;
    
    ${({ $active, $type, $position }) => {
      if ($type !== 'line' || !$active) return css`transform: scale(0); opacity: 0;`;
      
      switch ($position) {
        case 'top':
          return css`
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 2px;
            transform: scale(1);
            opacity: 1;
          `;
        case 'bottom':
          return css`
            left: 0;
            top: -1px;
            width: 100%;
            height: 2px;
            transform: scale(1);
            opacity: 1;
          `;
        case 'left':
          return css`
            right: -1px;
            top: 0;
            width: 2px;
            height: 100%;
            transform: scale(1);
            opacity: 1;
          `;
        case 'right':
          return css`
            left: -1px;
            top: 0;
            width: 2px;
            height: 100%;
            transform: scale(1);
            opacity: 1;
          `;
        default:
          return '';
      }
    }}
  }
`;

export const TabIcon = styled.span`
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
`;

export const CloseButton = styled.span`
  margin-left: 8px;
  font-size: 12px;
  color: #00000073;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  padding: 2px;

  &:hover {
    color: #000000d9;
    background: rgba(0, 0, 0, 0.06);
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
