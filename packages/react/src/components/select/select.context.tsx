import { createContext } from 'react';
import type { SelectContextProps } from './select.types';

export const SelectContext = createContext<SelectContextProps | null>(null);