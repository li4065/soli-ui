import React from 'react';

export type TabPosition = 'top' | 'right' | 'bottom' | 'left';
export type TabsType = 'line' | 'card' | 'editable-card' | 'segment';

export interface TabItem {
  key: string;
  label: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  closable?: boolean;
}

export interface TabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (activeKey: string) => void;
  onEdit?: (targetKey: string, action: 'add' | 'remove') => void;
  onTabClick?: (key: string, event: React.MouseEvent) => void;
  items?: TabItem[];
  tabPosition?: TabPosition;
  type?: TabsType;
  className?: string;
  style?: React.CSSProperties;
  size?: 'large' | 'default' | 'small';
  tabBarExtraContent?: React.ReactNode;
  segmentColor?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | (string & {});
  tabHeight?: string | number;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}
