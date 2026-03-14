import React from 'react';
import { Input } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const BasicExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <Input placeholder="Basic usage" />
    </div>
  );
};

const SizeExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input size="large" placeholder="Large size" />
      <Input size="middle" placeholder="Middle size" />
      <Input size="small" placeholder="Small size" />
    </div>
  );
};

const PrefixSuffixExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input prefix="￥" suffix="RMB" placeholder="Price" />
      <Input prefix="User" placeholder="Username (Text Prefix)" />
      <Input suffix=".com" placeholder="Website" />
    </div>
  );
};

const DisabledExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input disabled placeholder="Disabled input" />
      <Input disabled prefix="User" placeholder="Disabled with prefix" />
    </div>
  );
};

const VariantExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input placeholder="Outlined (Default)" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="borderless" placeholder="Borderless" />
      <Input variant="underlined" placeholder="Underlined" />
    </div>
  );
};

const RadiusExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input radius="none" placeholder="radius: none" />
      <Input radius="sm" placeholder="radius: sm" />
      <Input radius="md" placeholder="radius: md（默认）" />
      <Input radius="lg" placeholder="radius: lg" />
      <Input radius="full" placeholder="radius: full" />
    </div>
  );
};

const BackgroundColorExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input backgroundColor="default" placeholder="default" />
      <Input backgroundColor="primary" placeholder="primary" />
      <Input backgroundColor="secondary" placeholder="secondary" />
      <Input backgroundColor="success" placeholder="success" />
      <Input backgroundColor="warning" placeholder="warning" />
      <Input backgroundColor="danger" placeholder="danger" />
    </div>
  );
};

const PasswordExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input.Password placeholder="Password with toggle" />
      <Input.Password visibilityToggle={false} placeholder="No toggle" />
    </div>
  );
};

const StatusExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input status="error" placeholder="Error status" />
      <Input status="warning" placeholder="Warning status" />
    </div>
  );
};

const CountExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input showCount maxLength={20} placeholder="Max length 20" />
      <Input showCount maxLength={100} counterPosition="inside" placeholder="Inside counter" />
    </div>
  );
};

const TailwindExample: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <div>
        <div style={{ marginBottom: '8px', color: '#666' }}>Wrapper styling (Layout/Width):</div>
        <Input 
          className="w-full shadow-md rounded-lg" 
          placeholder="Shadow and rounded wrapper" 
        />
      </div>

      <div>
        <div style={{ marginBottom: '8px', color: '#666' }}>Inner input styling (Colors/Fonts):</div>
        <Input 
          inputClassName="bg-blue-50 text-blue-700 placeholder-blue-300 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
          placeholder="Blue themed input" 
        />
      </div>

      <div>
        <div style={{ marginBottom: '8px', color: '#666' }}>Mixed Usage:</div>
        <Input 
          className="mt-2"
          inputClassName="bg-gray-100 border-0 rounded-full px-4 text-gray-800"
          placeholder="Rounded gray input" 
          prefix={<span className="text-gray-400">🔍</span>}
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

const InputDoc: React.FC = () => {
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
          Input 输入框
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          通过鼠标或键盘输入内容，是最基础的表单域的包装。
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
          code={`import { Input } from 'soli-ui';

export default function App() {
  return <Input placeholder="Basic usage" />;
}`}
        />

        <ExampleSection 
          title="三种大小"
          description="我们为 <Input /> 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。"
          preview={<SizeExample />}
          code={`import { Input } from 'soli-ui';

export default function App() {
  return (
    <>
      <Input size="large" placeholder="Large size" />
      <Input size="middle" placeholder="Middle size" />
      <Input size="small" placeholder="Small size" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="前缀和后缀"
          description="在输入框上添加前缀或后缀图标。"
          preview={<PrefixSuffixExample />}
          code={`import { Input } from 'soli-ui';

export default function App() {
  return (
    <>
      <Input prefix="￥" suffix="RMB" placeholder="Price" />
      <Input prefix="User" placeholder="Username (Text Prefix)" />
      <Input suffix=".com" placeholder="Website" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="禁用状态"
          description="通过 disabled 属性设置禁用状态。"
          preview={<DisabledExample />}
          code={`import { Input } from 'soli-ui';

export default function App() {
  return (
    <>
      <Input disabled placeholder="Disabled input" />
      <Input disabled prefix="User" placeholder="Disabled with prefix" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="多种形态"
          description="支持 outlined（默认）、filled、borderless、underlined 四种形态。"
          preview={<VariantExample />}
          code={`import { Input } from 'soli-ui';

export default function App() {
  return (
    <>
      <Input placeholder="Outlined (Default)" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="borderless" placeholder="Borderless" />
      <Input variant="underlined" placeholder="Underlined" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="圆角"
          description="通过 radius 设置边框圆角：full、lg、md、sm、none，仅在有边框的形态下生效。"
          preview={<RadiusExample />}
          code={`import { Input } from 'soli-ui';

export default function App() {
  return (
    <>
      <Input radius="none" placeholder="radius: none" />
      <Input radius="sm" placeholder="radius: sm" />
      <Input radius="md" placeholder="radius: md（默认）" />
      <Input radius="lg" placeholder="radius: lg" />
      <Input radius="full" placeholder="radius: full" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="背景色"
          description="通过 backgroundColor 设置背景色：default、primary、secondary、success、warning、danger。"
          preview={<BackgroundColorExample />}
          code={`import { Input } from 'soli-ui';

export default function App() {
  return (
    <>
      <Input backgroundColor="default" placeholder="default" />
      <Input backgroundColor="primary" placeholder="primary" />
      <Input backgroundColor="secondary" placeholder="secondary" />
      <Input backgroundColor="success" placeholder="success" />
      <Input backgroundColor="warning" placeholder="warning" />
      <Input backgroundColor="danger" placeholder="danger" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="密码框"
          description="使用 Input.Password 渲染密码框，支持显隐切换。"
          preview={<PasswordExample />}
          code={`import { Input } from 'soli-ui';

export default function App() {
  return (
    <>
      <Input.Password placeholder="Password with toggle" />
      <Input.Password visibilityToggle={false} placeholder="No toggle" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="状态"
          description="支持 error 和 warning 两种校验状态。"
          preview={<StatusExample />}
          code={`import { Input } from 'soli-ui';

export default function App() {
  return (
    <>
      <Input status="error" placeholder="Error status" />
      <Input status="warning" placeholder="Warning status" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="带字数统计"
          description="展示字数统计，需同时设置 maxLength。"
          preview={<CountExample />}
          code={`import { Input } from 'soli-ui';

export default function App() {
  return (
    <>
      <Input showCount maxLength={20} placeholder="Max length 20" />
      <Input showCount maxLength={100} counterPosition="inside" placeholder="Inside counter" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="Tailwind CSS 支持"
          description="支持通过 className 设置容器样式，通过 inputClassName 设置内部输入框样式。"
          preview={<TailwindExample />}
          code={`import { Input } from 'soli-ui';

export default function App() {
  return (
    <div className="flex flex-col gap-6">
      {/* 容器样式 */}
      <Input 
        className="w-full shadow-md rounded-lg" 
        placeholder="Shadow and rounded wrapper" 
      />

      {/* 内部输入框样式 */}
      <Input 
        inputClassName="bg-blue-50 text-blue-700 placeholder-blue-300 border-blue-200 focus:border-blue-500" 
        placeholder="Blue themed input" 
      />

      {/* 混合使用 */}
      <Input 
        className="mt-2"
        inputClassName="bg-gray-100 border-0 rounded-full px-4 text-gray-800"
        placeholder="Rounded gray input" 
        prefix={<span className="text-gray-400">🔍</span>}
      />
    </div>
  );
}`}
        />
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 600,
          marginBottom: '24px',
          paddingBottom: '12px',
          borderBottom: '1px solid #f0f0f0'
        }}>
          API
        </h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Input</h3>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>inputClassName</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>内部输入框类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>prefix</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>带有前缀图标的 input</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>suffix</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>带有后缀图标的 input</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>disabled</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否禁用</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>variant</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>变体形态</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'outlined' | 'filled' | 'borderless' | 'underlined'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'outlined'</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>radius</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>边框圆角，仅在有边框时生效</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'full' | 'lg' | 'md' | 'sm' | 'none'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'md'</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>backgroundColor</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>背景色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
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

export default InputDoc;
