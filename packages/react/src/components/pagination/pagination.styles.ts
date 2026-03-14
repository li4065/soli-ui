import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { type Theme } from '../../theme/theme';
import { getColor } from '../../theme/theme-utils';
import type { PaginationTheme } from './pagination.types';

interface PaginationStyleProps {
  theme?: Theme;
  paginationTheme?: PaginationTheme;
  align?: 'left' | 'center' | 'right';
  variant?: 'default' | 'outline';
}

interface PageItemStyleProps {
  isActive?: boolean;
  disabled?: boolean;
  paginationTheme?: PaginationTheme;
}

const lightTheme = (theme: Theme, variant: 'default' | 'outline' = 'default') => css`
  .pagination-item {
    background-color: ${variant === 'outline' ? 'transparent' : getColor(theme, 'gray')};
    color: ${getColor(theme, 'gray800')};
    border: 1px solid ${variant === 'outline' ? 'transparent' : getColor(theme, 'gray200')};
    
    &:hover:not(.disabled, .active) {
      background-color: ${variant === 'outline' ? 'transparent' : getColor(theme, 'gray100')};
      ${variant === 'outline' && css`
        color: ${getColor(theme, 'blue')};
      `}
    }
    
    &.active {
      background-color: ${variant === 'outline' ? 'transparent' : getColor(theme, 'blue')};
      color: ${variant === 'outline' ? getColor(theme, 'blue') : getColor(theme, 'gray900')};
      border-color: ${getColor(theme, 'blue500')};
    }
    
    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const darkTheme = (theme: Theme, variant: 'default' | 'outline' = 'default') => css`
  .pagination-item {
    background-color: ${variant === 'outline' ? 'transparent' : getColor(theme, 'gray800')};
    color: ${getColor(theme, 'gray200')};
    border: 1px solid ${variant === 'outline' ? 'transparent' : getColor(theme, 'gray700')};
    
    &:hover:not(.disabled, .active) {
      background-color: ${variant === 'outline' ? 'transparent' : getColor(theme, 'gray700')};
      ${variant === 'outline' && css`
        color: ${getColor(theme, 'blue400')};
      `}
    }
    
    &.active {
      background-color: ${variant === 'outline' ? 'transparent' : getColor(theme, 'blue600')};
      color: ${variant === 'outline' ? getColor(theme, 'blue400') : 'white'};
      border-color: ${getColor(theme, 'blue500')};
    }
    
    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const PaginationContainer = styled.div<PaginationStyleProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'};
  gap: 8px;
  font-size: 14px;
  padding: 12px 0;
  user-select: none;
  
  ${({ theme, paginationTheme, variant }) => paginationTheme === 'dark' ? darkTheme(theme, variant) : lightTheme(theme, variant)}
`;

export const PaginationItem = styled.div<PageItemStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(.disabled, .active) {
    transform: translateY(-2px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const PaginationDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  color: #999;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: #666;
    background-color: rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`;

export const PaginationSelect = styled.select`
  padding: 6px 32px 6px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #aaa;
  }
  
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const PaginationInput = styled.input`
  width: 64px;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #ddd;
  text-align: center;
  outline: none;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #aaa;
  }
  
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const PaginationText = styled.span`
  margin: 0 8px;
  color: #666;
  font-size: 14px;
`;