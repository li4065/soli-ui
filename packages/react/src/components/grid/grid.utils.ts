import type { GridTemplateValue, Breakpoint, GapValue, ResponsiveConfig, AutoFlowValue, AreasValue, GridAutoValue, AlignValue } from './grid.types'

const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

// 将单个值转换为有效的 CSS 值
const parseColumnValue = (value: number | string): string => {
  if (typeof value === 'number') {
    return value > 0 ? `${value}fr` : 'auto';
  }
  
  // 检查是否是有效的 CSS 单位
  const validUnits = ['fr', 'px', 'rem', 'em', '%', 'vw', 'vh', 'auto', 'min-content', 'max-content'];
  const hasUnit = validUnits.some(unit => value.includes(unit));
  
  return hasUnit ? value : `${value}fr`;
};

// 处理数组类型的列定义
const handleArrayValues = (columns: (number | string)[]): string => {
  return columns.map(col => parseColumnValue(col)).join(' ');
};

// 处理响应式列定义
const handleResponsiveValues = (values: { [key: string]: number | string | (number | string)[] }, property: 'columns' | 'rows'): string => {
  return Object.entries(values)
    .map(([breakpoint, value]) => {
      const minWidth = BREAKPOINTS[breakpoint as Breakpoint];
      
      let cssValue: string;
      
      if (Array.isArray(value)) {
        // 处理数组值
        cssValue = handleArrayValues(value);
      } else if (typeof value === 'number') {
        // 处理数字值 - 转换为 repeat(n, 1fr)
        cssValue = value > 1 ? `repeat(${value}, 1fr)` : '1fr';
      } else {
        // 处理字符串值
        cssValue = value;
      }
      
      return `@media (min-width: ${minWidth}px) {
        grid-template-${property}: ${cssValue};
      }`;
    })
    .join(' ');
};

// 转换grid-template-columns/rows的函数
export const convertGridTemplate = (
  value?: GridTemplateValue, 
  property: 'columns' | 'rows' = 'columns'
): string => {
  if (!value) return '';
  
  // 处理数字
  if (typeof value === 'number') {
    return value > 1 
      ? `grid-template-${property}: repeat(${value}, 1fr);` 
      : `grid-template-${property}: 1fr;`;
  }
  
  // 处理字符串
  if (typeof value === 'string') {
    return `grid-template-${property}: ${value};`;
  }
  
  // 处理数组
  if (Array.isArray(value)) {
    return `grid-template-${property}: ${handleArrayValues(value)};`;
  }
  
  // 处理响应式对象
  return handleResponsiveValues(value, property);
};

// 将值转换为有效的 CSS 值
const parseValue = (value: number | string): string => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};// 处理单个 gap 值
const parseGapValue = (value: number | string): string => {
  return parseValue(value);
};

// 处理数组类型的 gap 值
const parseGapArray = (gap: [number | string, number | string]): string => {
  const [row, column] = gap;
  return `${parseValue(row)} ${parseValue(column)}`;
};
// 处理响应式 gap 配置
const handleResponsiveGap = (gap: ResponsiveConfig<number | string | [number | string, number | string]>): string => {
  return Object.entries(gap)
    .map(([breakpoint, value]) => {
      const minWidth = BREAKPOINTS[breakpoint as Breakpoint];
      
      let cssValue: string;
      
      if (Array.isArray(value)) {
        // 处理数组值 [row, column]
        cssValue = parseGapArray(value);
      } else {
        // 处理单一值
        cssValue = parseGapValue(value);
      }
      
      return `@media (min-width: ${minWidth}px) {
        gap: ${cssValue};
      }`;
    })
    .join(' ');
};
// 转换gap的函数
export const convertGap = (gap?: GapValue): string => {
  if (!gap) return '';
  
  // 处理数字
  if (typeof gap === 'number') {
    return `gap: ${gap}px;`;
  }
  
  // 处理字符串
  if (typeof gap === 'string') {
    return `gap: ${gap};`;
  }
  
  // 处理数组
  if (Array.isArray(gap)) {
    return `gap: ${parseGapArray(gap)};`;
  }
  
  // 处理响应式对象
  return handleResponsiveGap(gap);
};

// 处理响应式 autoFlow 配置
const handleResponsiveAutoFlow = (autoFlow: ResponsiveConfig<string>): string => {
  return Object.entries(autoFlow)
    .map(([breakpoint, value]) => {
      const minWidth = BREAKPOINTS[breakpoint as Breakpoint];
      return `@media (min-width: ${minWidth}px) {
        grid-auto-flow: ${value};
      }`;
    })
    .join(' ');
};
// 主 autoFlow 转换函数
export const convertAutoFlow = (autoFlow?: AutoFlowValue): string => {
  if (!autoFlow) return '';
  
  // 处理字符串值
  if (typeof autoFlow === 'string') {
    return `grid-auto-flow: ${autoFlow};`;
  }
  
  // 处理响应式对象
  return handleResponsiveAutoFlow(autoFlow);
};

// 处理 areas 数组
const handleAreasArray = (areas: string[]): string => {
  const areasString = areas.map(row => `"${row}"`).join(' ');
  return `grid-template-areas: ${areasString};`;
};

// 处理区域对象数组
const handleAreasObjects = (areas: { name: string; rows: number | [number, number]; columns: number | [number, number] }[]): string => {
  const areaMap: Record<string, string> = {};
  
  // 创建区域定义
  areas.forEach(area => {
    const rowStart = typeof area.rows === 'number' ? area.rows : area.rows[0];
    const rowEnd = typeof area.rows === 'number' ? area.rows + 1 : area.rows[1] + 1;
    const colStart = typeof area.columns === 'number' ? area.columns : area.columns[0];
    const colEnd = typeof area.columns === 'number' ? area.columns + 1 : area.columns[1] + 1;
    
    areaMap[area.name] = `${area.name} ${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;
  });
  
  // 生成 grid-template-areas
  const maxRow = Math.max(...areas.map(a => 
    typeof a.rows === 'number' ? a.rows : a.rows[1]
  ));
  
  const maxCol = Math.max(...areas.map(a => 
    typeof a.columns === 'number' ? a.columns : a.columns[1]
  ));
  
  const gridTemplateAreas: string[] = [];
  
  for (let row = 0; row <= maxRow; row++) {
    const rowAreas: string[] = [];
    for (let col = 0; col <= maxCol; col++) {
      // 查找覆盖当前单元格的区域
      const area = areas.find(a => {
        const rowStart = typeof a.rows === 'number' ? a.rows : a.rows[0];
        const rowEnd = typeof a.rows === 'number' ? a.rows : a.rows[1];
        const colStart = typeof a.columns === 'number' ? a.columns : a.columns[0];
        const colEnd = typeof a.columns === 'number' ? a.columns : a.columns[1];
        
        return row >= rowStart && row <= rowEnd && 
               col >= colStart && col <= colEnd;
      });
      
      rowAreas.push(area ? area.name : '.');
    }
    gridTemplateAreas.push(rowAreas.join(' '));
  }
  
  return handleAreasArray(gridTemplateAreas);
};

// 处理响应式 areas 配置
const handleResponsiveAreas = (areas: ResponsiveConfig<string[] | { name: string; rows: number | [number, number]; columns: number | [number, number] }[]>): string => {
  return Object.entries(areas)
    .map(([breakpoint, value]) => {
      const minWidth = BREAKPOINTS[breakpoint as Breakpoint];
      
      let cssValue: string;
      
      if (Array.isArray(value) && typeof value[0] === 'string') {
        // 处理字符串数组
        cssValue = handleAreasArray(value as string[]);
      } else {
        // 处理区域对象数组
        cssValue = handleAreasObjects(value as { name: string; rows: number | [number, number]; columns: number | [number, number] }[]);
      }
      
      return `@media (min-width: ${minWidth}px) {
        ${cssValue}
      }`;
    })
    .join(' ');
};

// 主 areas 转换函数
export const convertAreas = (areas?: AreasValue): string => {
  if (!areas) return '';
  
  // 处理字符串数组
  if (Array.isArray(areas) && typeof areas[0] === 'string') {
    return handleAreasArray(areas as string[]);
  }
  
  // 处理区域对象数组
  if (Array.isArray(areas) && typeof areas[0] === 'object') {
    return handleAreasObjects(areas as { name: string; rows: number | [number, number]; columns: number | [number, number] }[]);
  }
  
  // 处理响应式对象
  return handleResponsiveAreas(areas as ResponsiveConfig<string[] | { name: string; rows: number | [number, number]; columns: number | [number, number] }[]>);
};

// 将值转换为有效的 CSS 尺寸值
const parseAutoSize = (value: string | number): string => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  
  // 检查是否是有效的 CSS 函数
  const cssFunctions = ['minmax', 'fit-content', 'repeat', 'min', 'max'];
  const isCssFunction = cssFunctions.some(fn => value.includes(`${fn}(`));
  
  return isCssFunction ? value : `${value}`;
};

// 处理响应式自动尺寸配置
const handleResponsiveAutoSize = (
  value: ResponsiveConfig<string | number>,
  property: 'rows' | 'columns'
): string => {
  return Object.entries(value)
    .map(([breakpoint, size]) => {
      const minWidth = BREAKPOINTS[breakpoint as Breakpoint];
      const cssValue = parseAutoSize(size);
      return `@media (min-width: ${minWidth}px) {
        grid-auto-${property}: ${cssValue};
      }`;
    })
    .join(' ');
};

// 主自动尺寸转换函数
export const convertAutoSize = (
  value?: GridAutoValue, 
  property: 'rows' | 'columns' = 'rows'
): string => {
  if (!value) return '';
  
  // 处理字符串或数字值
  if (typeof value === 'string' || typeof value === 'number') {
    return `grid-auto-${property}: ${parseAutoSize(value)};`;
  }
  
  // 处理响应式对象
  return handleResponsiveAutoSize(value, property);
};

// 处理响应式对齐属性
const handleResponsiveAlign = (
  value: ResponsiveConfig<string>,
  property: 'justify-items' | 'align-items' | 'justify-content' | 'align-content'
): string => {
  return Object.entries(value)
    .map(([breakpoint, alignValue]) => {
      const minWidth = BREAKPOINTS[breakpoint as Breakpoint];
      return `@media (min-width: ${minWidth}px) {
        ${property}: ${alignValue};
      }`;
    })
    .join(' ');
};

// 主对齐属性转换函数
export const convertAlign = (
  value?: AlignValue, 
  property: 'justify-items' | 'align-items' | 'justify-content' | 'align-content' = 'justify-items'
): string => {
  if (!value) return '';
  
  // 处理字符串值
  if (typeof value === 'string') {
    return `${property}: ${value};`;
  }
  
  // 处理响应式对象
  return handleResponsiveAlign(value, property);
};

// grid.item 处理方法
// 处理响应式定位属性
const handleResponsivePosition = (
  value: ResponsiveConfig<number | string>,
  property: string
): string => {
  return Object.entries(value)
    .map(([breakpoint, val]) => {
      const minWidth = BREAKPOINTS[breakpoint as Breakpoint];
      return `@media (min-width: ${minWidth}px) {
        ${property}: ${val};
      }`;
    })
    .join(' ');
};

// 主定位转换函数
export const convertPosition = (
  value?: number | string | ResponsiveConfig<number | string>,
  property: 'grid-column-start' | 'grid-column-end' | 'grid-row-start' | 'grid-row-end' = 'grid-column-start'
): string => {
  if (!value) return '';
  
  // 处理数字或字符串值
  if (typeof value === 'number' || typeof value === 'string') {
    return `${property}: ${value};`;
  }
  
  // 处理响应式对象
  return handleResponsivePosition(value, property);
};

// 简写属性转换
export const convertShorthand = (
  value?: string | ResponsiveConfig<string>,
  property: 'grid-column' | 'grid-row' | 'grid-area' = 'grid-column'
): string => {
  if (!value) return '';
  
  // 处理字符串值
  if (typeof value === 'string') {
    return `${property}: ${value};`;
  }
  
  // 处理响应式对象
  return Object.entries(value)
    .map(([breakpoint, val]) => {
      const minWidth = BREAKPOINTS[breakpoint as Breakpoint];
      return `@media (min-width: ${minWidth}px) {
        ${property}: ${val};
      }`;
    })
    .join(' ');
};