export type TextVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'p' | 'span' | 'div'
  | 'strong' | 'em'
  | 'code' | 'pre'
  | 'blockquote'
  | 'ul' | 'ol' | 'li'
  | 'a'
  | 'mark' | 'underline' | 'delete';

export type TextColor = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'muted'
  | string; // 支持自定义颜色

export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black' | number;

export interface EllipsisConfig {
  rows?: number;
  expandable?: boolean;
  suffix?: string;
  symbol?: React.ReactNode;
  onExpand?: React.MouseEventHandler<HTMLElement>;
  tooltip?: boolean | React.ReactNode;
}

export interface CopyConfig {
  text?: string;
  onCopy?: () => void;
  icon?: React.ReactNode;
  tooltips?: [React.ReactNode, React.ReactNode];
  format?: 'text/plain' | 'text/html';
}

export interface TypographyProps {
  variant?: TextVariant;
  component?: React.ElementType; // 覆盖默认渲染的组件
  color?: TextColor;
  align?: TextAlign;
  gutterBottom?: boolean; // 添加底部间距
  noWrap?: boolean; // 不换行
  ellipsis?: boolean | EllipsisConfig; // 省略号配置
  copyable?: boolean | CopyConfig; // 拷贝配置
  fontWeight?: FontWeight;
  transform?: TextTransform;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  theme?: 'light' | 'dark' | 'custom'; // 主题支持
  href?: string;
  target?: string;
  rel?: string;
}