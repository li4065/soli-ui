import React from 'react';
import { CodeBlock } from './CodeBlock';

interface ExampleSectionProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
}

export const ExampleSection: React.FC<ExampleSectionProps> = ({
  title,
  description,
  code,
  children
}) => {
  return (
    <div className="mb-12 border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      
      <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 mb-6 overflow-auto">
        {children}
      </div>

      <CodeBlock code={code} />
    </div>
  );
};
