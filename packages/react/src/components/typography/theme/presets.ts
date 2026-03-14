// 预设字体大小（响应式）
const baseSizes = {
  h1: { xs: '2rem', sm: '2.5rem', md: '3rem' },
  h2: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
  h3: { xs: '1.5rem', sm: '1.75rem', md: '1.875rem' },
  h4: { xs: '1.25rem', sm: '1.5rem', md: '1.5rem' },
  h5: { xs: '1.125rem', sm: '1.25rem', md: '1.25rem' },
  h6: { xs: '1rem', sm: '1rem', md: '1rem' },
  p: { xs: '1rem', sm: '1rem', md: '1rem' },
  small: { xs: '0.875rem', sm: '0.875rem', md: '0.875rem' },
};

// 行高配置
const lineHeights = {
  h1: 1.2,
  h2: 1.3,
  h3: 1.35,
  h4: 1.4,
  h5: 1.5,
  h6: 1.6,
  p: 1.6,
  small: 1.6,
};

// 字重配置
const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
};

// 间距配置
const spacing = {
  gutterBottom: {
    h1: '0.67em',
    h2: '0.83em',
    h3: '1em',
    h4: '1.33em',
    h5: '1.67em',
    h6: '2.33em',
    p: '1em',
    default: '0.5em',
  },
};

export const typographyPresets = {
  baseSizes,
  lineHeights,
  fontWeights,
  spacing,
};