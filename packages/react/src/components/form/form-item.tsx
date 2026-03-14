import React, { useEffect, useId } from 'react';
import { 
  FormItemContainer, 
  FormItemLabel, 
  FormItemControl, 
  FormItemError 
} from './form.styles';
import type { FormInstance, ValidationRule } from './useForm';
import { useFormContext } from './form-context';

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  label?: React.ReactNode;
  children: React.ReactNode;
  rules?: ValidationRule[];
  required?: boolean;
  colon?: boolean;
  layout?: 'horizontal' | 'vertical' | 'inline';
  help?: React.ReactNode;
  form?: FormInstance;
  labelClassName?: string;
  controlClassName?: string;
  errorClassName?: string;
  labelWidth?: string | number;
}

export const FormItem: React.FC<FormItemProps> = ({
  name,
  label,
  children,
  rules = [],
  required = false,
  colon = true,
  layout: propLayout,
  help,
  form: propForm,
  className,
  labelClassName,
  controlClassName,
  errorClassName,
  labelWidth: propLabelWidth
}) => {
  const context = useFormContext();
  const form = propForm || context.form;
  const layout = propLayout || context.layout || 'horizontal';
  const labelWidth = propLabelWidth || context.labelWidth;

  const isRequired = required || rules.some(rule => rule.required);

  const error = form?.errors[name];
  const hasError = !!error;
  
  const uniqueId = useId();
  
  const id = `form-item-${name}-${uniqueId}`;
  
  // 注册字段验证规则
  useEffect(() => {
    if (form) {
      form.registerField(name, rules);
    }
  }, [name, form?.registerField, JSON.stringify(rules)]);
  
  // 验证字段值
  const validateField = async (value?: any) => {
    if (!form) return;
    
    const fieldValue = value !== undefined ? value : form.getFieldValue(name);
    const errorMessage = await form.validateField(name, fieldValue);
    
    if (errorMessage) {
      form.setErrors((prev: Record<string, string>) => ({ ...prev, [name]: errorMessage }));
    } else if (form.errors[name]) {
      form.setErrors((prev: Record<string, string>) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // 克隆子元素，注入值和变更处理
  const childNode = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<{
        id?: string;
        value?: any;
        onChange?: (...args: any[]) => void;
        onBlur?: (...args: any[]) => void;
        status?: 'error' | 'warning' | 'success';
      }>, {
        id,
        value: form?.getFieldValue(name),
        status: hasError ? 'error' : undefined,
        onChange: (...args: any[]) => {
          (children as React.ReactElement<{
            onChange?: (...args: any[]) => void;
          }>).props.onChange?.(...args);
          const e = args[0];
          const newValue = e.target?.value ?? e;
          form?.setFieldValue(name, newValue);
          validateField(newValue);
        },
        onBlur: (...args: any[]) => {
          (children as React.ReactElement<{
            onBlur?: (...args: any[]) => void;
          }>).props.onBlur?.(...args);
          validateField();
        }
      })
    : children;
  
  return (
    <FormItemContainer 
      layout={layout} 
      required={isRequired} 
      hasError={hasError}
      className={className}
    >
      {label && (
        <FormItemLabel 
          htmlFor={id}
          layout={layout} 
          colon={colon}
          className={labelClassName}
          labelWidth={labelWidth}
          required={isRequired}
        >
          {label}
        </FormItemLabel>
      )}
      
      <FormItemControl className={controlClassName} layout={layout}>
        {childNode}
        {hasError && <FormItemError className={errorClassName}>{error}</FormItemError>}
        {!hasError && help && <FormItemError style={{ color: '#666' }}>{help}</FormItemError>}
      </FormItemControl>
    </FormItemContainer>
  );
};
