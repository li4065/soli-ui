import { createContext, useContext } from 'react';
import type { FormInstance } from './useForm';

export type FormLayout = 'horizontal' | 'vertical' | 'inline';

export interface FormContextType {
  form?: FormInstance;
  layout?: FormLayout;
  labelWidth?: string | number;
}

export const FormContext = createContext<FormContextType>({});

export const useFormContext = () => {
  return useContext(FormContext);
};
