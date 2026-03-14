import React from 'react';
import { TextArea } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const BasicExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <TextArea placeholder="Basic usage" />
    </div>
  );
};

const AutoSizeExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextArea 
        placeholder="Autosize height based on content lines" 
        autoSize 
      />
      <TextArea 
        placeholder="Autosize with minRows and maxRows" 
        autoSize={{ minRows: 2, maxRows: 6 }} 
      />
    </div>
  );
};

const CountExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextArea showCount maxLength={100} placeholder="Max length 100" />
    </div>
  );
};

const DisabledExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <TextArea disabled placeholder="Disabled textarea" />
    </div>
  );
};

const VariantExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextArea placeholder="Outlined (Default)" />
      <TextArea variant="filled" placeholder="Filled" />
      <TextArea variant="borderless" placeholder="Borderless" />
      <TextArea variant="underlined" placeholder="Underlined" />
    </div>
  );
};

const ClearExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextArea defaultValue="输入后显示清空按钮" placeholder="输入文字后点击右上角清空" />
      <TextArea allowClear={false} defaultValue="禁用清空按钮" placeholder="allowClear={false}" />
    </div>
  );
};

const TailwindExample: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <div>
        <div style={{ marginBottom: '8px', color: '#666' }}>Wrapper styling:</div>
        <TextArea 
          className="w-full shadow-md rounded-lg p-2" 
          placeholder="Shadow and rounded wrapper" 
        />
      </div>

      <div>
        <div style={{ marginBottom: '8px', color: '#666' }}>Inner textarea styling:</div>
        <TextArea 
          textareaClassName="bg-blue-50 text-blue-700 placeholder-blue-300 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
          placeholder="Blue themed textarea" 
        />
      </div>
    </div>
  );
};

interface ExampleSectionProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}

const ExampleSection: React.FC<ExampleSectionProps> = ({ title, description, preview, code }) => {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h3 style={{ 
        fontSize: '20px', 
        fontWeight: 600, 
        marginBottom: '12px',
        color: '#000000d9'
      }}>
        {title}
      </h3>
      <p style={{ 
        fontSize: '14px', 
        color: '#00000073',
        marginBottom: '16px',
        lineHeight: '1.6'
      }}>
        {description}
      </p>
      
      <div style={{ 
        padding: '24px', 
        border: '1px solid #f0f0f0',
        borderRadius: '8px',
        marginBottom: '16px',
        background: '#fff'
      }}>
        {preview}
      </div>
      
      <CodeBlock code={code} />
    </div>
  );
};

const TextareaDoc: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '40px 24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ 
          fontSize: '38px', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000000d9'
        }}>
          TextArea 文本域
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          用于多行输入。
        </p>
      </div>

      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 600, 
          marginBottom: '24px',
          paddingBottom: '12px',
          borderBottom: '1px solid #f0f0f0'
        }}>
          代码演示
        </h2>

        <ExampleSection 
          title="基础用法"
          description="基本使用。"
          preview={<BasicExample />}
          code={`import { TextArea } from 'soli-ui';

export default function App() {
  return <TextArea placeholder="Basic usage" />;
}`}
        />

        <ExampleSection 
          title="适应文本高度"
          description="autoSize 属性可以使文本域自动适应内容高度。可设置 minRows 和 maxRows 限制行数。"
          preview={<AutoSizeExample />}
          code={`import { TextArea } from 'soli-ui';

export default function App() {
  return (
    <>
      <TextArea 
        placeholder="Autosize height based on content lines" 
        autoSize 
      />
      <TextArea 
        placeholder="Autosize with minRows and maxRows" 
        autoSize={{ minRows: 2, maxRows: 6 }} 
      />
    </>
  );
}`}
        />

        <ExampleSection 
          title="带字数统计"
          description="展示字数统计，需同时设置 maxLength。"
          preview={<CountExample />}
          code={`import { TextArea } from 'soli-ui';

export default function App() {
  return <TextArea showCount maxLength={100} placeholder="Max length 100" />;
}`}
        />

        <ExampleSection 
          title="禁用状态"
          description="通过 disabled 属性设置禁用状态。"
          preview={<DisabledExample />}
          code={`import { TextArea } from 'soli-ui';

export default function App() {
  return <TextArea disabled placeholder="Disabled textarea" />;
}`}
        />

        <ExampleSection 
          title="清空按钮"
          description="有输入时显示清空按钮，可通过 allowClear 控制是否显示。"
          preview={<ClearExample />}
          code={`import { TextArea } from 'soli-ui';

export default function App() {
  return (
    <>
      <TextArea defaultValue="输入后显示清空按钮" placeholder="输入文字后点击右上角清空" />
      <TextArea allowClear={false} defaultValue="禁用清空按钮" placeholder="allowClear={false}" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="多种形态"
          description="支持 outlined（默认）、filled、borderless、underlined 四种形态。"
          preview={<VariantExample />}
          code={`import { TextArea } from 'soli-ui';

export default function App() {
  return (
    <>
      <TextArea placeholder="Outlined (Default)" />
      <TextArea variant="filled" placeholder="Filled" />
      <TextArea variant="borderless" placeholder="Borderless" />
      <TextArea variant="underlined" placeholder="Underlined" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="Tailwind CSS 支持"
          description="支持通过 className 设置容器样式，通过 textareaClassName 设置内部文本域样式。"
          preview={<TailwindExample />}
          code={`import { TextArea } from 'soli-ui';

export default function App() {
  return (
    <div className="flex flex-col gap-6">
      {/* 容器样式 */}
      <TextArea 
        className="w-full shadow-md rounded-lg p-2" 
        placeholder="Shadow and rounded wrapper" 
      />

      {/* 内部文本域样式 */}
      <TextArea 
        textareaClassName="bg-blue-50 text-blue-700 placeholder-blue-300 border-blue-200 focus:border-blue-500" 
        placeholder="Blue themed textarea" 
      />
    </div>
  );
}`}
        />
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>
          API
        </h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>TextArea</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#000000d9', fontWeight: 600 }}>参数</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#000000d9', fontWeight: 600 }}>说明</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#000000d9', fontWeight: 600 }}>类型</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#000000d9', fontWeight: 600 }}>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>容器类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>textareaClassName</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>内部文本域类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>autoSize</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自适应内容高度</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean | {'{ minRows: number, maxRows: number }'}</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>false</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>maxLength</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>最大长度</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>showCount</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否展示字数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>false</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>variant</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>变体形态</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'outlined' | 'filled' | 'borderless' | 'underlined'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>'outlined'</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>disabled</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否禁用</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>false</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>allowClear</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>有输入时是否显示清空按钮</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>true</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>status</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>校验状态</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'error' | 'warning'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>size</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>控件大小</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'large' | 'middle' | 'small'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'middle'</code></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextareaDoc;
