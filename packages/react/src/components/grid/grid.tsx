import React from "react";
import { GridStyled } from './grid.styles';
import type { GridTemplateValue, GapValue, AutoFlowValue, AreasValue, GridAutoValue, AlignValue } from './grid.types';
// columns 使用方式：columns={3} columns={["1fr", "2fr", "auto"]} columns="repeat(auto-fill, minmax(200px, 1fr))"
// columns={{
//     xs: 1,   // 手机: 1列 -> repeat(1, 1fr)
//     sm: 2,   // 平板: 2列 -> repeat(2, 1fr)
//     md: 3,   // 桌面: 3列 -> repeat(3, 1fr)
//     lg: 4    // 大屏: 4列 -> repeat(4, 1fr)
//   }}
// columns={{
//     xs: [1],               // 手机: 1fr
//     sm: ['1fr', '2fr'],    // 平板: 1fr 2fr
//     md: [150, '1fr', 200], // 桌面: 150px 1fr 200px
//     lg: 'repeat(4, minmax(100px, 1fr))' // 大屏: 复杂布局
//   }}
// gap使用方式 gap={16} 行列16px；gap={[8, 16]} 行8px 列16px；gap="1rem"；行列1rem；gap={["1em", "2rem"]}
// gap={{
//   xs: 8,       // 手机: 8px
//   sm: 16,      // 平板: 16px
//   md: [16, 24] // 桌面: 行16px, 列24px
// }}
// autoFlow 支持的值 'row' | 'column' | 'dense' | 'row dense' | 'column dense
// areas 属性语法
// areas={[
//   "header header header",
//   "sidebar content ads",
//   "footer footer footer"
// ]} 3行3列
// areas={[
//   { name: 'logo', rows: 0, columns: 0 },
//   { name: 'nav', rows: 0, columns: [1, 3] },
//   ...
// ]} 更精确地控制区域位置，rows 和 columns 可以是单个数字（起点）或元组 [start, end]
// areas={{
//   xs: [ /* 手机布局 */ ],
//   sm: [ /* 平板布局 */ ],
//   md: [ /* 桌面布局 */ ]
// }} 不同断点使用不同布局
// 设置area区域后，对应区域要使用，可以设置gridArea <div style={{ gridArea: 'content' }}>...</div>
// autoRows 和 autoColumns 属性
// autoRows="100px" // 所有行高度为 100px
// autoColumns="200px" // 所有列宽度为 200px
// autoRows="minmax(100px, auto)" 最小 100px，高度自适应内容
// autoColumns="minmax(200px, 1fr)" 最小 200px，最大占满可用空间
// autoRows="fit-content(200px)" 高度不超过 200px
// autoColumns="repeat(auto-fill, minmax(150px, 1fr))" 每一列至少 150px 宽，最多自动伸展填满容器，并根据容器宽度自动调整列数
// autoRows={{
//   xs: 'auto',      // 手机: 自适应高度
//   sm: '100px',     // 平板: 固定 100px
//   md: 'minmax(120px, auto)' // 桌面: 最小 120px，自适应
// }}
export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement> {
    columns?: GridTemplateValue;
    rows?: GridTemplateValue;
    gap?: GapValue;
    autoFlow?: AutoFlowValue;
    areas?: AreasValue;
    autoRows?: GridAutoValue;
    autoColumns?: GridAutoValue;
    justifyItems?: AlignValue;
    alignItems?: AlignValue;
    justifyContent?: AlignValue;
    alignContent?: AlignValue;
  }
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ 
    columns,
    rows,
    gap,
    autoFlow,
    areas,
    autoRows,
    autoColumns,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    children,
    ...props 
  }, ref) => {
    return (
      <GridStyled
        ref={ref}
        columns={columns}
        rows={rows}
        gap={gap}
        autoFlow={autoFlow}
        areas={areas}
        autoRows={autoRows}
        autoColumns={autoColumns}
        justifyItems={justifyItems}
        alignItems={alignItems}
        justifyContent={justifyContent}
        alignContent={alignContent}
        {...props}
      >
        {children}
      </GridStyled>
    );
  }
);

Grid.displayName = 'Grid';