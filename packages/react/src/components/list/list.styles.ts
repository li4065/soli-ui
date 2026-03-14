import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { type Theme } from '../../theme/theme';
import { getColor } from '../../theme/theme-utils';

// 旋转动画
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export type ListVariant = 'outlined' | 'borderless' | 'elevated' | 'filled';

interface ListContainerProps {
  variant?: ListVariant;
  theme?: Theme;
}

interface ListWrapperProps {
  virtualScroll?: boolean;
}

interface ListContentProps {
  layout?: 'vertical' | 'horizontal' | 'grid';
  virtualScroll?: boolean;
}

const getVariantStyles = (theme: Theme, variant: ListVariant = 'outlined') => {
  switch (variant) {
    case 'borderless':
      return css`
        border: none;
        box-shadow: none;
        background: transparent;
      `;
    case 'elevated':
      return css`
        border: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      `;
    case 'filled':
      return css`
        border: none;
        box-shadow: none;
        background-color: ${getColor(theme, 'gray100')};
      `;
    case 'outlined':
    default:
      return css`
        border: 1px solid ${getColor(theme, 'gray200')};
        box-shadow: none;
      `;
  }
};

export const ListContainer = styled.div<ListContainerProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 6px;
  background-color: #fff;
  transition: all 0.3s;
  
  ${({ theme, variant }) => getVariantStyles(theme, variant)}
`;

export const ListWrapper = styled.div<ListWrapperProps>`
  position: relative;
  overflow-y: ${({ virtualScroll }) => virtualScroll ? 'auto' : 'visible'};
  flex: 1;
  -webkit-overflow-scrolling: touch;
`;

export const ListContent = styled.div<ListContentProps>`
  position: relative;
  min-height: 100px;
  
  ${({ virtualScroll }) => virtualScroll && css`
    overflow: hidden;
  `}
`;

export const ListHeader = styled.div`
  padding: 16px;
  background-color: #fafafa;
  border-bottom: 1px solid #e8e8e8;
  font-weight: 500;
`;

export const ListFooter = styled.div`
  padding: 16px;
  background-color: #fafafa;
  border-top: 1px solid #e8e8e8;
`;

export const ListLoading = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  
  .loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  .spinner {
    width: 24px;
    height: 24px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: #1890ff;
    animation: ${spin} 1s ease-in-out infinite;
  }
  
  .loading-text {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
`;

export const ListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px 0;
  color: rgba(0, 0, 0, 0.25);
  
  .empty-content {
    text-align: center;
    max-width: 300px;
  }
  
  .empty-text {
    margin-top: 16px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
  }
`;

// 分页器样式
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #e8e8e8;
  
  button {
    min-width: 32px;
    height: 32px;
    margin: 0 4px;
    padding: 0 8px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover:not(:disabled) {
      color: #1890ff;
      border-color: #1890ff;
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    &.active {
      color: #fff;
      background-color: #1890ff;
      border-color: #1890ff;
    }
  }
  
  .ellipsis {
    margin: 0 8px;
  }
  
  .pagination-info {
    margin-left: 16px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const ListItemContainer = styled.div<{ hoverable?: boolean; bordered?: boolean; theme?: Theme }>`
  display: flex;
  padding: 16px;
  transition: all 0.3s;
  border-bottom: ${({ bordered, theme }) => bordered ? `1px solid ${getColor(theme, 'gray200')}` : 'none'};
  background-color: ${({ theme }) => getColor(theme, 'white')};
  
  ${({ hoverable, theme }) => hoverable && css`
    &:hover {
      background-color: ${getColor(theme, 'gray100')};
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transform: translateY(-1px);
    }
  `}
`;

export const ListItemAvatar = styled.div`
  margin-right: 16px;
  
  > * {
    display: block;
  }
`;

export const ListItemContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ListItemTitle = styled.div<{ theme?: Theme }>`
  margin-bottom: 4px;
  color: ${({ theme }) => getColor(theme, 'gray900')};
  font-weight: 500;
  font-size: 16px;
`;

export const ListItemDescription = styled.div<{ theme?: Theme }>`
  color: ${({ theme }) => getColor(theme, 'gray500')};
  font-size: 14px;
`;

export const ListItemExtra = styled.div<{ theme?: Theme }>`
  margin-left: 48px;
  color: ${({ theme }) => getColor(theme, 'gray500')};
  font-size: 14px;
`;

export const ListItemActions = styled.div<{ theme?: Theme }>`
  display: flex;
  margin-top: 12px;
  gap: 8px;
  
  > * {
    cursor: pointer;
    color: ${({ theme }) => getColor(theme, 'gray500')};
    transition: color 0.3s;
    
    &:hover {
      color: ${({ theme }) => getColor(theme, 'gray900')};
    }
  }
`;

export const paginationStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  
  .pagination-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    height: 32px;
    padding: 0 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    background: #fff;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      color: #1890ff;
      border-color: #1890ff;
    }
    
    &:disabled {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
      cursor: not-allowed;
    }
    
    &.active {
      color: #fff;
      background: #1890ff;
      border-color: #1890ff;
      font-weight: 500;
      cursor: default;
      
      &:hover {
        background: #40a9ff;
        border-color: #40a9ff;
      }
    }
  }
  
  .pagination-ellipsis {
    display: inline-flex;
    align-items: center;
    height: 32px;
    padding: 0 8px;
    color: rgba(0, 0, 0, 0.45);
  }
  
  .pagination-info {
    margin-left: 16px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
`;

export const loadingOverlayStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  backdrop-filter: blur(2px);
`;