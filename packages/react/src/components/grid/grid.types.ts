export type GridTemplateValue = 
  | number 
  | string 
  | (number | string)[]
  | { [key: string]: number | string | (number | string)[] };

// 定义 gap 值类型
export type GapValue = 
  | number 
  | string 
  | [number | string, number | string]  // [row, column]
  | Partial<Record<Breakpoint, number | string | [number | string, number | string]>>;

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// 定义 autoFlow 值类型
export type AutoFlowValue = 
  | 'row' 
  | 'column' 
  | 'dense' 
  | 'row dense' 
  | 'column dense'
  | Partial<Record<Breakpoint, 'row' | 'column' | 'dense' | 'row dense' | 'column dense'>>;

// 定义 areas 值类型
export type AreasValue = 
  | string[] // 每行一个字符串
  | { name: string; rows: number | [number, number]; columns: number | [number, number] }[] // 区域对象数组
  | Partial<Record<Breakpoint, string[] | { name: string; rows: number | [number, number]; columns: number | [number, number] }[]>>;

// 定义自动尺寸值类型
export type GridAutoValue = 
  | string 
  | number
  | Partial<Record<Breakpoint, string | number>>;

export type ResponsiveConfig<T> = Partial<Record<Breakpoint, T>>;

// 定义对齐属性值类型
export type AlignValue = 
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'baseline'
  | 'normal'
  | Partial<Record<Breakpoint, string>>;

// grid.item.types
export type gridItemValue = number | string | ResponsiveConfig<number | string>;
// grid.item 简写
export type gridItemSimpleValue = string | ResponsiveConfig<string>;