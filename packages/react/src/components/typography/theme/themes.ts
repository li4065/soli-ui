import { typographyPresets } from './presets';

// 浅色主题
export const lightTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#666',
    success: '#22c55e',
    error: '#e53e3e',
    warning: '#f59e0b',
    info: '#3b82f6',
    light: '#f8f9fa',
    dark: '#111',
    muted: '#6c757d',
    text: '#333',
    background: '#fff',
  },
  ...typographyPresets,
};

// 深色主题
export const darkTheme = {
  colors: {
    primary: '#3291ff',
    secondary: '#888',
    success: '#2ed573',
    error: '#ff4d4d',
    warning: '#ffbe21',
    info: '#4dabf7',
    light: '#f8f9fa',
    dark: '#f1f1f1',
    muted: '#adb5bd',
    text: '#f1f1f1',
    background: '#121212',
  },
  ...typographyPresets,
};

// 主题映射
export const themes = {
  light: lightTheme,
  dark: darkTheme,
};