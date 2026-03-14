import '@emotion/react';
import { Theme as CustomTheme } from '../theme/theme';

declare module '@emotion/react' {
  // 扩展 Emotion 的主题接口
  export interface Theme extends CustomTheme {}
}