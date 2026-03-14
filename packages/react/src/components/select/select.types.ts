import type { ReactNode } from 'react';

export type SelectTheme = 'light' | 'dark';

export interface SelectOption {
  value: string | number;
  label: ReactNode;
  disabled?: boolean;
}

export interface SelectContextProps {
  theme: SelectTheme;
  selectedValue: SingleSelectValue | MultiSelectValue;
  multiple: boolean;
  onSelect: (value: string | number) => void;
  searchTerm: string;
  isOpen: boolean;
  closeDropdown: () => void;
}

// 定义单选和多选的值类型
export type SingleSelectValue = string | number | null;
export type MultiSelectValue = (string | number)[];

/** 预设背景色名或任意合法 CSS 颜色值 */
export type SelectColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | string;

// 区分单选和多选的 props
export interface BaseSelectProps {
  options?: SelectOption[];
  placeholder?: string;
  theme?: SelectTheme;
  variant?: 'outlined' | 'borderless' | 'underlined' | 'filled';
  disabled?: boolean;
  searchable?: boolean;
  /** 是否有选中值时显示清空按钮，默认 true */
  allowClear?: boolean;
  /** 控件背景色：预设 "default" | "primary" | "secondary" | "success" | "warning" | "danger" 或具体色值 */
  color?: SelectColor;
  className?: string;
  popupClassName?: string;
  style?: React.CSSProperties;
}

export interface SingleSelectProps extends BaseSelectProps {
  multiple?: false;
  value?: SingleSelectValue;
  defaultValue?: SingleSelectValue;
  onChange?: (value: SingleSelectValue) => void;
}

export interface MultiSelectProps extends BaseSelectProps {
  multiple: true;
  value?: MultiSelectValue;
  defaultValue?: MultiSelectValue;
  onChange?: (value: MultiSelectValue) => void;
}

// 联合类型
export type SelectProps = SingleSelectProps | MultiSelectProps;