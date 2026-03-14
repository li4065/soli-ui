import React, { useState } from 'react';
import { TreeStyled } from './tree.styles';
import { TreeNode } from './treeNode';

export interface TreeDataNode {
  id: string;
  title: React.ReactNode;
  children?: TreeDataNode[];
  icon?: React.ReactNode;
  disabled?: boolean;
  selectable?: boolean; // 新增：节点是否可选
}

export interface TreeProps {
  data: TreeDataNode[];
  defaultExpandedKeys?: string[];
  defaultSelectedKey?: string;
  expandIcon?: React.ReactNode;
  collapseIcon?: React.ReactNode;
  showFolderIcon?: boolean; // 新增：是否显示文件夹图标
  onSelect?: (selectedKey: string, node: TreeDataNode) => void;
  onExpand?: (expandedKeys: string[], node: TreeDataNode) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Tree = React.forwardRef<HTMLDivElement, TreeProps>(({
  data,
  defaultExpandedKeys = [],
  defaultSelectedKey,
  expandIcon,
  collapseIcon,
  showFolderIcon = false, // 默认不显示
  onSelect,
  onExpand,
  className,
  style,
  ...props
}, ref) => {
  const [expandedKeys, setExpandedKeys] = useState<string[]>(defaultExpandedKeys);
  const [selectedKey, setSelectedKey] = useState<string | undefined>(defaultSelectedKey);

  const handleToggle = (id: string) => {
    const newExpandedKeys = expandedKeys.includes(id)
      ? expandedKeys.filter(key => key !== id)
      : [...expandedKeys, id];
    
    setExpandedKeys(newExpandedKeys);
    
    // 查找当前节点
    const findNode = (nodes: TreeDataNode[]): TreeDataNode | undefined => {
      for (const node of nodes) {
        if (node.id === id) return node;
        if (node.children) {
          const found = findNode(node.children);
          if (found) return found;
        }
      }
    };
    
    const node = findNode(data);
    if (node) onExpand?.(newExpandedKeys, node);
  };

  const handleSelect = (id: string) => {
    // 查找当前节点
    const findNode = (nodes: TreeDataNode[]): TreeDataNode | undefined => {
      for (const node of nodes) {
        if (node.id === id) return node;
        if (node.children) {
          const found = findNode(node.children);
          if (found) return found;
        }
      }
    };
    
    const node = findNode(data);
    if (node) {
      // 如果节点不可选（selectable为false）或节点被禁用（disabled），则不触发选择
      if (node.disabled || node.selectable === false) {
        return;
      }
      setSelectedKey(id);
      onSelect?.(id, node);
    }
  };

  const renderTreeNodes = (nodes: TreeDataNode[], level = 0) => {
    return nodes.map(node => (
      <React.Fragment key={node.id}>
        <TreeNode
          id={node.id}
          title={node.title}
          level={level}
          icon={node.icon}
          expanded={expandedKeys.includes(node.id)}
          hasChildren={!!node.children?.length}
          selected={selectedKey === node.id}
          onToggle={handleToggle}
          onSelect={handleSelect}
          expandIcon={expandIcon}
          collapseIcon={collapseIcon}
          showFolderIcon={showFolderIcon}
          selectable={node.selectable !== false} // 默认为true，除非显式设置为false
        />
        {node.children && expandedKeys.includes(node.id) && (
          <div>
            {renderTreeNodes(node.children, level + 1)}
          </div>
        )}
      </React.Fragment>
    ));
  };

  return <TreeStyled ref={ref} className={className} style={style} {...props}>{renderTreeNodes(data)}</TreeStyled>;
});