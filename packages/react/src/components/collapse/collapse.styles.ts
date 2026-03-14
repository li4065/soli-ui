import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface CollapseContainerProps {
  bordered?: boolean;
  className?: string;
}

export interface PanelContainerProps {
  disabled?: boolean;
  className?: string;
}

export interface PanelHeaderProps {
  className?: string;
  disabled?: boolean;
}

export interface PanelContentProps {
  expanded: boolean;
  className?: string;
}

export const CollapseContainer = styled.div<CollapseContainerProps>(
  ({ bordered, className }) => `
  width: 100%;
  background-color: var(--collapse-bg, #fff);
  border-radius: var(--collapse-border-radius, 6px);
  overflow: hidden;
  
  ${bordered 
    ? css`
        border: var(--collapse-border-width, 1px) solid var(--collapse-border-color, #e0e0e0);
        box-shadow: var(--collapse-shadow, 0 2px 8px rgba(0, 0, 0, 0.05));
      `
    : ''
  }
  
  ${className ? className : ''}
`
);

export const PanelContainer = styled.div<PanelContainerProps>(
  ({ disabled, className }) => `
  border-bottom: var(--panel-border-width, 1px) solid var(--panel-border-color, #f0f0f0);
  
  &:last-of-type {
    border-bottom: none;
  }
  
  ${disabled 
    ? css`
        opacity: var(--panel-disabled-opacity, 0.6);
        cursor: not-allowed;
      `
    : ''
  }
  
  ${className ? className : ''}
`
);

export const PanelHeader = styled.div<PanelHeaderProps>(
  ({ className, disabled }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--header-padding, 16px 24px);
  background-color: var(--header-bg, #fafafa);
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease;
  user-select: none;
  
  ${!disabled && css`
    &:hover {
      background-color: var(--header-hover-bg, #f5f5f5);
    }
  `}
  
  .panel-title {
    font-size: var(--header-font-size, 16px);
    font-weight: var(--header-font-weight, 500);
    color: var(--header-color, #333);
    margin: 0;
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .panel-extra {
    display: flex;
    align-items: center;
    gap: var(--header-extra-gap, 8px);
    flex-shrink: 0;
    white-space: nowrap;
  }
  
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    transform: rotate(0deg);
  }
  
  .icon-container.expanded {
    transform: rotate(90deg) !important;
  }
  
  &[data-disabled="true"] .panel-title {
    color: #999 !important;
  }
  
  &[data-disabled="true"] .icon-container {
    color: #999;
  }
  
  &[data-disabled="true"] .icon-container svg {
    stroke: #999;
  }
  
  ${className ? className : ''}
`
);

export const PanelContent = styled.div<PanelContentProps>`
  display: grid;
  grid-template-rows: 0fr;
  transition: 
    grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  
  > div {
    overflow: hidden;
    min-height: 0;
    transition: padding 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  ${({ expanded, className }) => css`
    ${expanded 
      ? css`
          grid-template-rows: 1fr;
          opacity: 1;
          > div {
            padding: var(--content-padding, 16px 24px);
          }
        `
      : css`
          grid-template-rows: 0fr;
          opacity: 0;
          > div {
            padding: 0;
          }
        `}
    ${className ? className : ''}
  `}
`;