import { useState, useCallback, useRef, useMemo } from 'react';

export type ValidationRule = {
  required?: boolean;
  message?: string;
  pattern?: RegExp;
  min?: number;
  max?: number;
  validator?: (value: any) => boolean | string | Promise<boolean | string>;
};

// type FieldConfig = {
//   name: string;
//   value: any;
//   rules?: ValidationRule[];
// };

export type FormInstance = {
  getFieldValue: (name: string) => any;
  getFieldsValue: () => Record<string, any>;
  setFieldValue: (name: string, value: any) => void;
  setFieldsValue: (values: Record<string, any>) => void;
  setInitialValues: (values: Record<string, any>) => void;
  resetFields: () => void;
  validate: () => Promise<boolean>;
  validateField: (name: string, value: any) => Promise<string | null>;
  submit: () => void;
  errors: Record<string, string>;
  registerField: (name: string, rules?: ValidationRule[]) => void;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
};

type FormErrors = Record<string, string>;

export const useForm = (initialValues: Record<string, any> = {}): FormInstance => {
  const [formData, setFormData] = useState<Record<string, any>>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const fieldRules = useRef<Record<string, ValidationRule[]>>({});
  const initialDataRef = useRef(initialValues);
  
  const getFieldValue = useCallback((name: string) => {
    return formData[name];
  }, [formData]);
  
  const getFieldsValue = useCallback(() => {
    return { ...formData };
  }, [formData]);
  
  const setFieldValue = useCallback((name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }, []);

  const setInitialValues = useCallback((values: Record<string, any>) => {
    initialDataRef.current = values;
    setFormData(values);
  }, []);
  
  const setFieldsValue = useCallback((values: Record<string, any>) => {
    setFormData(prev => ({ ...prev, ...values }));
    
    // 清除所有字段的错误
    setErrors({});
  }, []);
  
  const resetFields = useCallback(() => {
    setFormData(initialDataRef.current);
    setErrors({});
  }, []);
  
  // 注册字段验证规则
  const registerField = useCallback((name: string, rules: ValidationRule[] = []) => {
    fieldRules.current[name] = rules;
  }, []);
  
  
  // 验证单个字段
  const validateField = useCallback(async (name: string, value: any): Promise<string | null> => {
    const rules = fieldRules.current[name];
    if (!rules || rules.length === 0) return null;
    
    for (const rule of rules) {
      if (rule.required && (value === undefined || value === null || value === '')) {
        return rule.message || '此字段为必填项';
      }
      
      if (rule.pattern && value && !rule.pattern.test(value)) {
        return rule.message || '格式不正确';
      }
      
      if (rule.min !== undefined) {
        if (typeof value === 'number' && value < rule.min) {
          return rule.message || `最小值不能小于${rule.min}`;
        }
        if (typeof value === 'string' && value.length < rule.min) {
          return rule.message || `字符长度不能小于${rule.min}`;
        }
      }
      
      if (rule.max !== undefined) {
        if (typeof value === 'number' && value > rule.max) {
          return rule.message || `最大值不能大于${rule.max}`;
        }
        if (typeof value === 'string' && value.length > rule.max) {
          return rule.message || `字符长度不能大于${rule.max}`;
        }
      }
      
      if (rule.validator) {
        const result = rule.validator(value);
        if (result instanceof Promise) {
          const asyncResult = await result;
          if (asyncResult !== true) {
            return typeof asyncResult === 'string' ? asyncResult : '验证失败';
          }
        } else if (result !== true) {
          return typeof result === 'string' ? result : '验证失败';
        }
      }
    }
    
    return null;
  }, []);
  
  // 验证整个表单
  const validate = useCallback(async (): Promise<boolean> => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    // 验证所有已注册字段
    for (const [name, rules] of Object.entries(fieldRules.current)) {
      if (rules && rules.length > 0) {
        const value = formData[name];
        const error = await validateField(name, value);
        
        if (error) {
          newErrors[name] = error;
          isValid = false;
        }
      }
    }
    
    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);
  
  return useMemo(() => ({
    getFieldValue,
    getFieldsValue,
    setFieldValue,
    setFieldsValue,
    resetFields,
    validate,
    validateField,
    errors,
    registerField,
    setInitialValues,
    setErrors,
    submit: () => {} // 将在Form组件中实现
  }), [getFieldValue, getFieldsValue, setFieldValue, setFieldsValue, resetFields, validate, validateField, errors, registerField, setInitialValues, setErrors]);
};