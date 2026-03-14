import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { type Theme } from '../../theme/theme';
import { getColor } from '../../theme/theme-utils';
import type { SelectTheme, SelectColor } from './select.types';

/** 根据 color 预设或自定义色值返回背景色 */
const getSelectBackground = (color: SelectColor = 'default'): string | null => {
  if (!color || color === 'default') return null;
  const preset: Record<string, string> = {
    primary: '#e6f4ff',
    secondary: '#f5f5f5',
    success: '#f6ffed',
    warning: '#fffbe6',
    danger: '#fff2f0',
  };
  return preset[color] ?? color;
};

interface SelectContainerProps {
  theme?: Theme;
  selectTheme?: SelectTheme;
  variant?: 'outlined' | 'borderless' | 'underlined' | 'filled';
  selectColor?: SelectColor;
  isOpen: boolean;
  disabled?: boolean;
}

interface OptionItemProps {
  theme?: Theme;
  selectTheme?: SelectTheme;
  isSelected: boolean;
  isFocused: boolean;
  disabled?: boolean;
}

const getVariantStyles = (theme: Theme, variant: string = 'outlined', selectTheme: SelectTheme = 'light') => {
  const isDark = selectTheme === 'dark';
  const borderColor = isDark ? getColor(theme, 'gray700') : getColor(theme, 'gray200');
  const bg = isDark ? getColor(theme, 'gray800') : getColor(theme, 'gray');
  const color = isDark ? getColor(theme, 'gray200') : getColor(theme, 'gray800');
  const hoverBorderColor = isDark ? getColor(theme, 'gray600') : getColor(theme, 'gray400');
  const focusBorderColor = getColor(theme, 'blue500');

  switch (variant) {
    case 'filled':
      return css`
        background-color: ${isDark ? getColor(theme, 'gray700') : getColor(theme, 'gray100')};
        border: 1px solid transparent;
        color: ${color};
        &:hover {
          background-color: ${isDark ? getColor(theme, 'gray600') : getColor(theme, 'gray200')};
        }
        &:focus-within {
          background-color: ${bg};
          border-color: ${focusBorderColor};
        }
      `;
    case 'borderless':
      return css`
        background-color: transparent;
        border: 1px solid transparent;
        color: ${color};
        &:focus-within {
          box-shadow: none;
        }
      `;
    case 'underlined':
      return css`
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${borderColor};
        border-radius: 0;
        color: ${color};
        &:hover {
          border-bottom-color: ${hoverBorderColor};
        }
        &:focus-within {
          border-bottom-color: ${focusBorderColor};
          box-shadow: none;
        }
      `;
    case 'outlined':
    default:
      return css`
        background-color: ${bg};
        border: 1px solid ${borderColor};
        color: ${color};
        &:hover {
          border-color: ${hoverBorderColor};
        }
        &:focus-within {
          border-color: ${focusBorderColor};
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }
      `;
  }
};

export const SelectContainer = styled.div<SelectContainerProps>`
  position: relative;
  min-width: 120px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  
  ${({ theme, selectTheme, variant }) => getVariantStyles(theme, variant, selectTheme)}
  
  ${({ selectColor }) => {
    const bg = getSelectBackground(selectColor);
    return bg ? css` background-color: ${bg}; ` : null;
  }}
  
  ${({ isOpen, variant }) => isOpen && variant === 'outlined' && css`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
  
  ${({ disabled, theme }) => disabled && css`
    cursor: not-allowed;
    opacity: 1;
    background-color: ${getColor(theme, 'gray100')};
    border-color: ${getColor(theme, 'gray200')};
    color: ${getColor(theme, 'gray400')};
    pointer-events: none;
    
    &:hover {
      border-color: ${getColor(theme, 'gray200')};
    }
  `}
`;

export const SelectControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
`;

export const SelectPlaceholder = styled.span`
  color: #999;
`;

export const SelectValueContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const SelectSingleValue = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SelectMultiValue = styled.div`
  background-color: rgba(0, 123, 255, 0.1);
  border-radius: 4px;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SelectClearButton = styled.span`
  cursor: pointer;
  padding: 0 4px;
  font-size: 12px;
  color: #999;
  
  &:hover {
    color: #333;
  }
`;

export const SelectArrow = styled.span<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

export const SelectDropdown = styled.div<{ selectTheme?: SelectTheme }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  
  ${({ selectTheme, theme }) => selectTheme === 'dark' && css`
    background-color: ${getColor(theme, 'gray800')};
    color: ${getColor(theme, 'gray200')};
    border-color: ${getColor(theme, 'gray700')};
  `}
`;

export const OptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const OptionItem = styled.li<OptionItemProps>`
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${({ isSelected, theme, selectTheme }) => isSelected && css`
    background-color: ${selectTheme === 'dark' 
      ? getColor(theme, 'blue600') 
      : getColor(theme, 'blue')};
    color: ${getColor(theme, 'gray900')};;
  `}
  
  ${({ isSelected, isFocused, theme, selectTheme }) => !isSelected && isFocused && css`
    background-color: ${selectTheme === 'dark' 
      ? getColor(theme, 'gray700') 
      : getColor(theme, 'gray100')};
  `}
  
  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
  
  &:hover:not(.disabled) {
    background-color: ${({ theme, selectTheme }) => 
      selectTheme === 'dark' 
        ? getColor(theme, 'gray700') 
        : getColor(theme, 'gray100')};
  }
`;

export const SearchInput = styled.input<{ selectTheme?: SelectTheme; theme?: Theme;}>`
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
  background-color: transparent;
  
  ${({ theme, selectTheme }) => selectTheme === 'dark' && css`
    color: ${getColor(theme, 'gray200')};
    border-color: ${getColor(theme, 'gray700')};
    
    &::placeholder {
      color: ${getColor(theme, 'gray500')};
    }
  `}
`;

export const NoOptions = styled.div`
  padding: 8px 12px;
  text-align: center;
  color: #999;
`;