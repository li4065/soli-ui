import styled from '@emotion/styled';

export interface StyledCheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  className?: string;
  /** 选择框圆角，数字为 px，字符串如 '50%' 表示圆形 */
  borderRadius?: number | string;
}

export interface StyledContainerProps {
  disabled?: boolean;
  className?: string;
}

export interface StyledLabelProps {
  disabled?: boolean;
  className?: string;
}

export const CheckboxContainer = styled('label')<StyledContainerProps>(
  ({ disabled, className }) => `
  display: inline-flex;
  align-items: center;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  opacity: ${disabled ? 0.6 : 1};
  user-select: none;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  
  ${className ? className : ''}
`
);

// 隐藏原生input
export const HiddenInput = styled('input')`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

export const StyledCheckbox = styled('span')<StyledCheckboxProps>(
  ({ checked, indeterminate, disabled, className, borderRadius }) => {
    const radius = borderRadius !== undefined
      ? (typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius)
      : 'var(--checkbox-border-radius, 4px)';
    return `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--checkbox-width, 18px);
  height: var(--checkbox-height, 18px);
  border-radius: ${radius};
  border: var(--checkbox-border-width, 2px) solid;
  transition: all 0.2s;
  margin-right: var(--checkbox-margin-right, 8px);
  position: relative;
  
  background-color: var(
    --checkbox-bg,
    ${disabled 
      ? (checked || indeterminate ? '#e6e6e6' : '#f5f5f5') 
      : (checked || indeterminate ? '#1890ff' : '#fff')}
  );
  
  border-color: var(
    --checkbox-border-color,
    ${disabled 
      ? '#d9d9d9' 
      : (checked || indeterminate ? '#1890ff' : '#d9d9d9')}
  );
  
  ${className ? className : ''}
`;
  }
);

export const CheckboxIcon = styled('span')<{ className?: string }>(
  ({ className }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--checkbox-icon-color, #fff);
  font-size: var(--checkbox-icon-size, 14px);
  
  ${className ? className : ''}
`
);

export const CheckboxLabel = styled('span')<StyledLabelProps>(
  ({ disabled, className }) => `
  color: var(--checkbox-label-color, ${disabled ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.85)'});
  font-size: var(--checkbox-label-font-size, 14px);
  line-height: var(--checkbox-label-line-height, 1.5);
  
  ${className ? className : ''}
`
);

export const CheckboxGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// 新增：水平排列的Group样式
export const HorizontalGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;