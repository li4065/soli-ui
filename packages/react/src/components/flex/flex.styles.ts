import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface FlexProps {
  vertical: Boolean;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center';
  gap?: 'small' | 'middle' | 'large' | string | number;
  wrap?: boolean | 'nowrap' | 'wrap' | 'wrap-reverse';
}

// 定义预设的 gap 尺寸
const gapSizes = {
  small: '8px',
  middle: '16px',
  large: '24px',
};

// 处理 gap 值的函数
const getGapValue = (gap: FlexProps['gap']) => {
  if (gap === undefined) return undefined;
  
  // 处理预设尺寸
  if (typeof gap === 'string' && gapSizes[gap as keyof typeof gapSizes]) {
    return gapSizes[gap as keyof typeof gapSizes];
  }
  
  // 处理数字值（添加 px 单位）
  if (typeof gap === 'number') {
    return `${gap}px`;
  }
  
  // 直接使用字符串值（如 '10px', '1rem', '2em' 等）
  return gap;
};

// 通用样式
const baseFlexStyles = css`
  display: flex;
  margin: 0;
  padding: 0;
`;

const verticalVariants = {
    true: css`
        flex-direction: column;
    `,
    false: css`
        flex-direction: row;
    `
}
const justifyVariants = {
  'flex-start': css`justify-content: flex-start;`,
  'flex-end': css`justify-content: flex-end;`,
  'center': css`justify-content: center;`,
  'space-between': css`justify-content: space-between;`,
  'space-around': css`justify-content: space-around;`,
  'space-evenly': css`justify-content: space-evenly;`
};

const alignVariants = {
  'flex-start': css`align-items: flex-start;`,
  'flex-end': css`align-items: flex-end;`,
  'center': css`align-items: center;`
};

// wrap 样式变体
const wrapVariants = {
  true: css`flex-wrap: wrap;`,
  false: css`flex-wrap: nowrap;`,
  'wrap': css`flex-wrap: wrap;`,
  'nowrap': css`flex-wrap: nowrap;`,
  'wrap-reverse': css`flex-wrap: wrap-reverse;`,
};


export const FlexStyled = styled('div', {
  shouldForwardProp: (prop) => 
    !['vertical', 'justify', 'align', 'gap', 'wrap'].includes(prop)
})<FlexProps>`
  ${baseFlexStyles}

  /* 垂直/水平方向 */
  ${({ vertical = false }) => 
    vertical ? verticalVariants.true : verticalVariants.false
  }
  
  /* 主轴对齐方式 */
  ${({ justify = 'flex-start' }) => justifyVariants[justify]}
  
  /* 交叉轴对齐方式 */
  ${({ align = 'flex-start' }) => alignVariants[align]}

  /* gap 处理 */
  ${({ gap }) => {
    const gapValue = getGapValue(gap);
    return gapValue ? css`gap: ${gapValue};` : undefined;
  }}

   /* flex-wrap 处理 */
  ${({ wrap }) => {
    // 处理布尔值
    if (typeof wrap === 'boolean') {
      return wrapVariants[String(wrap) as keyof typeof wrapVariants];
    }
    // 处理字符串值
    if (wrap) {
      return wrapVariants[wrap];
    }
    // 未设置时默认不换行
    return wrapVariants.false;
  }}

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
` 