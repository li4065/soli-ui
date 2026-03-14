// 定义主题类型
export type Theme = {
  colors?: {
    background?: string;
    border?: string;
    backgroundSecondary?: string;
    primary?: string;
    primaryHover?: string;
  };
  radii?: {
    medium?: string;
  };
  space?: {
    medium?: string;
  };
};