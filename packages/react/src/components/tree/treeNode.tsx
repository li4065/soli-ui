import React from 'react';
import { ToggleIcon, TreeNodeContent, TreeNodeStyled, FolderIconContainer, UnselectableNode } from './tree.styles';
import { CollapseIcon, ExpandIcon, FolderCloseIcon, FolderOpenIcon } from '../icons';

interface TreeNodeProps {
  id: string;
  title: React.ReactNode;
  level?: number;
  expanded?: boolean;
  hasChildren?: boolean;
  selected?: boolean;
  onToggle?: (id: string) => void;
  onSelect?: (id: string) => void;
  icon?: React.ReactNode;
  expandIcon?: React.ReactNode;
  collapseIcon?: React.ReactNode;
  showFolderIcon?: boolean; // 是否显示文件夹图标
  selectable?: boolean;     // 节点是否可选
}

export const TreeNode: React.FC<TreeNodeProps> = ({
  id,
  title,
  level = 0,
  expanded = false,
  hasChildren = false,
  selected = false,
  onToggle,
  onSelect,
  icon,
  expandIcon = <ExpandIcon />,
  collapseIcon = <CollapseIcon />,
  showFolderIcon = false,
  selectable = true
}) => {
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle?.(id);
  };

  const handleSelect = () => {
    if (!selectable) return;
    onSelect?.(id);
  };

  // 确定节点图标
  let nodeIcon = icon;
  if (showFolderIcon && hasChildren && !icon) {
    nodeIcon = (
      <FolderIconContainer>
        {expanded ? <FolderOpenIcon /> : <FolderCloseIcon />}
      </FolderIconContainer>
    );
  }

  return (
    <TreeNodeStyled 
      level={level} 
      selected={selected}
      onClick={handleSelect}
      css={!selectable ? UnselectableNode : undefined}
    >
      <TreeNodeContent>
        {hasChildren && (
          <ToggleIcon 
            expanded={expanded}
            onClick={handleToggle}
          >
            {expanded ? collapseIcon : expandIcon}
          </ToggleIcon>
        )}
        {!hasChildren && <span style={{ width: 16 }} />}
        {nodeIcon}
        <span>{title}</span>
      </TreeNodeContent>
    </TreeNodeStyled>
  );
};