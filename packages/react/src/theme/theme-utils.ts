import { defaultTheme, type FullTheme, type Theme } from './theme';

// 安全获取主题值
export const getThemeValue = <
  T extends keyof FullTheme,
  K extends keyof FullTheme[T]
>(
  theme: Theme | undefined,
  category: T,
  key: K,
  defaultValue: FullTheme[T][K]
): FullTheme[T][K] => {
  // 检查主题是否存在且包含该类别
  if (!theme || !theme[category]) return defaultValue;
  
  // 检查类别中是否存在该键
  const categoryObj = theme[category] as Partial<FullTheme[T]>;
  return categoryObj[key] !== undefined 
    ? categoryObj[key] as FullTheme[T][K]
    : defaultValue;
};

// 特定类别的快捷方式
export const getColor = (theme: Theme | undefined, color: keyof FullTheme['colors']) => 
  getThemeValue(theme, 'colors', color, defaultTheme.colors[color]);

export const getTextColor = (theme: Theme | undefined, color: keyof FullTheme['textColors']) => 
  getThemeValue(theme, 'textColors', color, defaultTheme.textColors[color]);

export const getHoverColor = (theme: Theme | undefined, color: keyof FullTheme['hoverColors']) => 
  getThemeValue(theme, 'hoverColors', color, defaultTheme.hoverColors[color] || defaultTheme.colors[color]);

export const getTextSize = (theme: Theme | undefined, size: keyof FullTheme['textSizes']) => 
  getThemeValue(theme, 'textSizes', size, defaultTheme.textSizes[size]);

export const getTextLineHeight = (theme: Theme | undefined, size: keyof FullTheme['textLineHeight']) => 
  getThemeValue(theme, 'textLineHeight', size, defaultTheme.textLineHeight[size]);

export const getBorderRadius = (theme: Theme | undefined, size: keyof FullTheme['borderRadius']) => 
  getThemeValue(theme, 'borderRadius', size, defaultTheme.borderRadius[size]);

export const getBorderColors = (theme: Theme | undefined, value: keyof FullTheme['borderColors']) => 
  getThemeValue(theme, 'borderColors', value, defaultTheme.borderColors[value]);
