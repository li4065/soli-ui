import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface TreeNodeStyleProps {
  level?: number;
  selected?: boolean;
}

// 缩进计算
const getIndentSize = (level: number = 0) => `${level * 16}px`;

// 节点基础样式
export const TreeNodeStyled = styled.div<TreeNodeStyleProps>`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  transition: background-color 0.2s;
  margin-left: ${({ level = 0 }) => getIndentSize(level)};

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #e6f7ff;
      font-weight: 500;
    `}
`;

// 节点内容容器
export const TreeNodeContent = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

// 切换图标样式
export const ToggleIcon = styled.span<{ expanded?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
  
  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(90deg);
    `}
`;

// 树容器样式
export const TreeStyled = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.85);
`;

export const UnselectableNode = css`
  cursor: not-allowed;
  opacity: 0.6;
  &:hover {
    background-color: inherit !important;
  }
`;

// 新增：文件夹图标容器
export const FolderIconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;
