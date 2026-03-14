import { Checkbox as CheckboxBase, CheckboxGroup } from './checkbox';
import type { CheckboxProps, CheckboxGroupProps } from './checkbox';

// 扩展 Checkbox 类型，添加 Group 静态属性
export interface Checkbox extends React.ForwardRefExoticComponent<CheckboxProps> {
  Group: typeof CheckboxGroup;
}

export const Checkbox = CheckboxBase as Checkbox;
export { CheckboxGroup };
export type { CheckboxProps, CheckboxGroupProps };