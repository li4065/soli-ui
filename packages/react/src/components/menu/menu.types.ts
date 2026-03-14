import type { ReactNode } from 'react';

export type MenuMode = 'vertical' | 'horizontal';
export type MenuTheme = 'light' | 'dark';

export interface MenuContextProps {
  mode: MenuMode;
  theme: MenuTheme;
  accordion: boolean;
  activeKey: string;
  openKeys: string[];
  setActiveKey: (key: string) => void;
  toggleOpenKey: (key: string, level: number, parentKey?: string) => void;
  setOpenKey: (key: string, isOpen: boolean, parentKey?: string) => void;
}

export interface MenuItemType {
  /** 唯一标识 */
  key: string;
  /** 菜单项文本 */
  label: string;
  /** 菜单项图标 */
  icon?: ReactNode;
  /** 子菜单 */
  children?: MenuItemType[];
  /** 是否禁用 */
  disabled?: boolean;
  /** 路由路径（可选） */
  path?: string;
  /** 是否展开（内部状态） */
  isOpen?: boolean;
  /** 父级菜单键值（用于嵌套菜单） */
  parentKey?: string;
  /** 自定义类名 */
  className?: string;
}

export interface MenuProps {
  /** 菜单模式：垂直或水平 */
  mode?: MenuMode;
  /** 菜单主题 */
  theme?: MenuTheme;
  /** 是否手风琴模式（只展开一个菜单） */
  accordion?: boolean;
  /** 默认选中的菜单项key */
  defaultActiveKey?: string;
  /** 默认展开的菜单项keys */
  defaultOpenKeys?: string[];
  /** 点击菜单项触发的回调 */
  onSelect?: (key: string) => void;
  /** 菜单数据 */
  items: MenuItemType[];
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
}