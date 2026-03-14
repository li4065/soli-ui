import React, { useContext, forwardRef, useImperativeHandle, useEffect, useRef, useMemo } from 'react';
import { FormContainer, FormActions as StyledFormActions, FormGroup as StyledFormGroup } from './form.styles';
import { FormItem } from './form-item';
import type { FormInstance } from './useForm';
import { useForm } from './useForm';
import { FormContext } from './form-context';

interface FormProps {
  form?: FormInstance;
  layout?: 'horizontal' | 'vertical' | 'inline';
  children: React.ReactNode;
  onFinish?: (values: Record<string, any>) => void;
  onFinishFailed?: (errors: Record<string, string>) => void;
  initialValues?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  labelWidth?: string | number;
}

export const Form = forwardRef<FormInstance, FormProps>(({
  form: propForm,
  layout = 'horizontal',
  children,
  onFinish,
  onFinishFailed,
  initialValues = {},
  className,
  style,
  labelWidth
}, ref) => {
  const formResult = useForm(initialValues);
  const internalForm = formResult;
  const form = propForm || internalForm;
  const formRef = useRef(form);
  
  formRef.current = form;

  const stableInitialValues = useMemo(() => initialValues, [JSON.stringify(initialValues)]);

  useImperativeHandle(ref, () => formRef.current as any, []);

  useEffect(() => {
    if (stableInitialValues && Object.keys(stableInitialValues).length > 0) {
      formRef.current.setInitialValues(stableInitialValues);
    }
  }, [stableInitialValues])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = await formRef.current.validate();
    if (isValid) {
      onFinish?.(formRef.current.getFieldsValue());
    } else {
      onFinishFailed?.(formRef.current.errors);
    }
  };
  
  return (
    <FormContext.Provider value={{ form: formRef.current, layout, labelWidth }}>
      <FormContainer 
        layout={layout}
        className={className}
        style={style}
        onSubmit={handleSubmit}
      >
        {children}
      </FormContainer>
    </FormContext.Provider>
  );
});

// 表单组组件
export const FormGroup: React.FC<{ title?: string; children: React.ReactNode; className?: string }> = ({ 
  title, 
  children,
  className
}) => {
  return (
    <StyledFormGroup className={className}>
      {title && <div className="form-group-title">{title}</div>}
      {children}
    </StyledFormGroup>
  );
};

// 表单操作区域组件
export const FormActions: React.FC<{ children: React.ReactNode; layout?: 'horizontal' | 'vertical' | 'inline'; className?: string }> = ({ 
  children,
  layout,
  className
}) => {
  const context = useContext(FormContext);
  const actualLayout = layout || context.layout;
  return <StyledFormActions layout={actualLayout as any} className={className}>{children}</StyledFormActions>;
};

// 表单项组件
export { FormItem };
export type { FormItemProps } from './form-item';
export { useFormContext } from './form-context';
