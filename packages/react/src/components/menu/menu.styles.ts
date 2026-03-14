import styled from '@emotion/styled';
import { css, type SerializedStyles } from '@emotion/react';
import { type Theme } from '../../theme/theme';
import { getColor } from '../../theme/theme-utils';

type MenuMode = 'vertical' | 'horizontal';
type MenuTheme = 'light' | 'dark';

interface MenuStyleProps {
  theme?: Theme;
  menuTheme?: MenuTheme;
  mode?: MenuMode;
}

interface MenuItemStyleProps {
  isActive?: boolean;
  isOpen?: boolean;
  disabled?: boolean;
  level?: number;
  hasChildren?: boolean;
  menuTheme?: MenuTheme;
  mode?: MenuMode;
}

const lightTheme = (theme: Theme): SerializedStyles => css`
  background-color: ${getColor(theme, 'gray')};
  color: ${getColor(theme, 'gray800')};
  
  .menu-item {
    padding: 10px 16px;
    transition: all 0.2s ease;
    &:hover {
      background-color: ${getColor(theme, 'gray100')};
    }
    
    &.active {
      background-color: ${getColor(theme, 'blue')};
      color: ${getColor(theme, 'blue500')};
      border-right: 3px solid ${getColor(theme, 'blue500')};
    }
  }
`;

const darkTheme = (theme: Theme): SerializedStyles => css`
  background-color: ${getColor(theme, 'gray800')};
  color: ${getColor(theme, 'gray200')};
  
  .menu-item {
    padding: 10px 16px;
    transition: all 0.2s ease;
    color: ${getColor(theme, 'gray400')};
    &:hover {
      color: ${getColor(theme, 'gray')};
      background-color: ${getColor(theme, 'gray800')};
    }
    
    &.active {
      background-color: ${getColor(theme, 'blue600')};
      color: ${getColor(theme, 'blue200')};
      border-radius: 8px;
    }
  }
`;

export const MenuContainer = styled.div<MenuStyleProps>`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: ${({ mode }) => mode === 'vertical' ? '240px' : '100%'};
  height: ${({ mode }) => mode === 'vertical' ? '100%' : 'auto'};
  transition: width 0.3s ease;
  overflow: visible; /* Change from hidden to visible to allow dropdowns */
  user-select: none;
  
  ${({ theme, menuTheme }) => menuTheme === 'dark' ? darkTheme(theme) : lightTheme(theme)}
`;

export const MenuList = styled.ul<{ mode?: MenuMode }>`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: ${({ mode }) => mode === 'horizontal' ? 'flex' : 'block'};
  flex-direction: ${({ mode }) => mode === 'horizontal' ? 'row' : 'column'};
`;


export const SubMenuList = styled.ul<{ level: number; mode?: MenuMode; menuTheme?: MenuTheme }>`
  list-style: none;
  padding: 0;
  margin: 0;
  
  /* 嵌套层级缩进 (Vertical only) */
  padding-left: ${({ level = 0, mode }) => mode === 'vertical' ? `${level * 8}px` : '0'};

  /* Horizontal Mode Styles */
  ${({ mode, theme, menuTheme }) => mode === 'horizontal' && css`
    min-width: 160px;
    background-color: ${menuTheme === 'dark' ? getColor(theme, 'gray800') : '#fff'};
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 4px 0;
    
    /* Ensure text color is correct if not inherited */
    color: ${menuTheme === 'dark' ? getColor(theme, 'gray200') : getColor(theme, 'gray800')};
  `}

  /* 防止动画闪烁 */
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform;
`;

export const MenuItemContentStyled = styled.div<MenuItemStyleProps>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  position: relative;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  padding-left: ${({ level = 0, mode }) => mode === 'horizontal' ? '16px' : `${level * 16}px`};
  
  &:hover {
    background-color: ${({ theme, menuTheme }) => 
      menuTheme === 'dark' ? getColor(theme, 'gray800') : getColor(theme, 'gray100')};
  }
  
  ${({ isActive, theme, menuTheme }) => isActive && `
    background-color: ${menuTheme === 'dark' ? getColor(theme, 'blue600') : getColor(theme, 'blue')};
    color: ${menuTheme === 'dark' ? getColor(theme, 'blue200') : getColor(theme, 'blue500')};
    font-weight: 500;
  `}
`;

export const MenuItemWrapper = styled.li<MenuItemStyleProps>`
  position: relative;
  transition: all 0.2s ease;
  
  &:hover {
    .menu-item-arrow {
      transition: transform 0.3s ease;
      opacity: 1;
    }
  }
  &.menu-active {
    > .menu-item {
      color: ${({ theme, menuTheme }) => 
        menuTheme === 'dark' 
          ? getColor(theme, 'gray') 
          : getColor(theme, 'blue600')};
      font-weight: 500;
    }
  }

  .menu-item-content {
    display: flex;
    align-items: center;
    width: calc(100% - 8px);
  }
  
  .menu-item-icon {
    margin-right: 12px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
  }
  
  .menu-item-text {
    flex: auto;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const SubMenuContainer = styled.div<{ isOpen: boolean; height: number  }>`
  height: ${({ isOpen, height }) => isOpen ? `${height}px` : '0'};
  overflow: hidden;
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: height;
`;

export const SubMenuInner = styled.div`
  min-height: 0;
  overflow: hidden;
`;

export const MenuDivider = styled.div`
  height: 1px;
  margin: 8px 16px;
  background-color: rgba(0, 0, 0, 0.1);
`;
