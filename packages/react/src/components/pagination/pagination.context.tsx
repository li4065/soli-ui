import { createContext, useContext } from 'react';
import type { PaginationContextProps } from './pagination.types';

export const PaginationContext = createContext<PaginationContextProps | null>(null); // 初始化为 null

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('usePaginationContext must be used within a PaginationProvider');
  }
  return context;
};