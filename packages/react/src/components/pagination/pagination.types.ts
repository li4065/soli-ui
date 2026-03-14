export type PaginationTheme = 'light' | 'dark';

export interface PaginationContextProps {
  current: number;
  total: number;
  pageSize: number;
  theme: PaginationTheme;
  onChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  showQuickJumper?: boolean;
  quickJumperType?: 'default' | 'simple';
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  showTotal?: boolean | ((total: number, range: [number, number]) => React.ReactNode);
  align?: 'left' | 'center' | 'right';
  variant?: 'default' | 'outline';
}

export interface PaginationProps {
  current: number;
  total: number;
  pageSize?: number;
  theme?: PaginationTheme;
  onChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  showQuickJumper?: boolean;
  quickJumperType?: 'default' | 'simple';
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  showTotal?: boolean | ((total: number, range: [number, number]) => React.ReactNode);
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
  variant?: 'default' | 'outline';
}

export interface PageItem {
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
  page?: number;
  disabled?: boolean;
}