import React from 'react';
import { Select } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const options = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
  { value: 'jerry', label: 'Jerry' },
];

const BasicExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <Select 
        options={options} 
        placeholder="Select a person" 
        onChange={(val) => console.log(val)} 
      />
    </div>
  );
};

const MultiExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <Select 
        multiple 
        options={options} 
        defaultValue={['lucy', 'tom']}
        placeholder="Select multiple people" 
        onChange={(val) => console.log('Multi select:', val)} 
      />
    </div>
  );
};

const SearchExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <Select 
        searchable
        options={options} 
        placeholder="Search specific person" 
      />
    </div>
  );
};

const VariantExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Select options={options} placeholder="Outlined (Default)" />
      <Select variant="filled" options={options} placeholder="Filled" />
      <Select variant="borderless" options={options} placeholder="Borderless" />
      <Select variant="underlined" options={options} placeholder="Underlined" />
    </div>
  );
};

const DisabledExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Select disabled options={options} placeholder="Disabled" />
      <Select disabled defaultValue="lucy" options={options} placeholder="Disabled with value" />
    </div>
  );
};

const AllowClearExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Select 
        options={options} 
        defaultValue="tom"
        placeholder="可清空（默认）" 
      />
      <Select 
        options={options} 
        defaultValue="lucy"
        allowClear={false}
        placeholder="禁用清空按钮" 
      />
    </div>
  );
};

const ColorExample: React.FC = () => {
  return (
    <div style={{ maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Select options={options} placeholder="default（跟随主题）" />
      <Select options={options} color="primary" placeholder="primary" />
      <Select options={options} color="success" placeholder="success" />
      <Select options={options} color="warning" placeholder="warning" />
      <Select options={options} color="danger" placeholder="danger" />
      <Select options={options} color="#f9f0ff" placeholder="自定义色值 #f9f0ff" />
    </div>
  );
};

const TailwindExample: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' }}>
      <div>
        <div style={{ marginBottom: '8px', color: '#666' }}>Custom Wrapper Style:</div>
        <Select 
          options={options}
          className="w-full shadow-lg rounded-xl border-2 border-purple-200 hover:border-purple-400" 
          placeholder="Purple themed select" 
        />
      </div>

      <div>
        <div style={{ marginBottom: '8px', color: '#666' }}>Custom Dropdown Style:</div>
        <Select 
          options={options}
          placeholder="Check the dropdown style"
          popupClassName="bg-purple-50 border-purple-200 shadow-xl"
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

const SelectDoc: React.FC = () => {
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
          Select 选择器
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          下拉选择器。
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
          description="最简单的用法。"
          preview={<BasicExample />}
          code={`import { Select } from 'soli-ui';

const options = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
];

export default function App() {
  return (
    <Select 
      options={options} 
      placeholder="Select a person" 
      onChange={(val) => console.log(val)} 
    />
  );
}`}
        />

        <ExampleSection 
          title="多选模式"
          description="开启 multiple 属性以支持多选。"
          preview={<MultiExample />}
          code={`import { Select } from 'soli-ui';

const options = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
  { value: 'jerry', label: 'Jerry' },
];

export default function App() {
  return (
    <Select 
      multiple 
      options={options} 
      defaultValue={['lucy', 'tom']}
      placeholder="Select multiple people" 
      onChange={(val) => console.log('Multi select:', val)} 
    />
  );
}`}
        />

        <ExampleSection 
          title="带搜索框"
          description="展开后可对选项进行搜索。"
          preview={<SearchExample />}
          code={`import { Select } from 'soli-ui';

export default function App() {
  return (
    <Select 
      searchable
      options={options} 
      placeholder="Search specific person" 
    />
  );
}`}
        />

        <ExampleSection 
          title="多种形态"
          description="支持 outlined（默认）、filled、borderless、underlined 四种形态。"
          preview={<VariantExample />}
          code={`import { Select } from 'soli-ui';

export default function App() {
  return (
    <>
      <Select options={options} placeholder="Outlined (Default)" />
      <Select variant="filled" options={options} placeholder="Filled" />
      <Select variant="borderless" options={options} placeholder="Borderless" />
      <Select variant="underlined" options={options} placeholder="Underlined" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="禁用状态"
          description="禁用选择器。"
          preview={<DisabledExample />}
          code={`import { Select } from 'soli-ui';

export default function App() {
  return (
    <>
      <Select disabled options={options} placeholder="Disabled" />
      <Select disabled defaultValue="lucy" options={options} placeholder="Disabled with value" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="清空按钮"
          description="通过 allowClear 控制是否显示清空按钮。"
          preview={<AllowClearExample />}
          code={`import { Select } from 'soli-ui';

const options = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
];

export default function App() {
  return (
    <>
      {/* 默认可清空 */}
      <Select 
        options={options} 
        defaultValue="tom"
        placeholder="可清空（默认）" 
      />

      {/* 禁用清空按钮 */}
      <Select 
        options={options} 
        defaultValue="lucy"
        allowClear={false}
        placeholder="禁用清空按钮" 
      />
    </>
  );
}`}
        />

        <ExampleSection 
          title="背景色 color"
          description="通过 color 设置不同的背景色，支持预设值和任意 CSS 颜色。"
          preview={<ColorExample />}
          code={`import { Select } from 'soli-ui';

const options = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
];

export default function App() {
  return (
    <>
      <Select options={options} placeholder="default（跟随主题）" />
      <Select options={options} color="primary" placeholder="primary" />
      <Select options={options} color="success" placeholder="success" />
      <Select options={options} color="warning" placeholder="warning" />
      <Select options={options} color="danger" placeholder="danger" />
      <Select options={options} color="#f9f0ff" placeholder="自定义色值 #f9f0ff" />
    </>
  );
}`}
        />

        <ExampleSection 
          title="Tailwind CSS 支持"
          description="通过 className 自定义选择器样式，popupClassName 自定义下拉框样式。"
          preview={<TailwindExample />}
          code={`import { Select } from 'soli-ui';

export default function App() {
  return (
    <div className="flex flex-col gap-6">
      {/* 自定义容器样式 */}
      <Select 
        options={options}
        className="w-full shadow-lg rounded-xl border-2 border-purple-200 hover:border-purple-400" 
        placeholder="Purple themed select" 
      />

      {/* 自定义下拉框样式 */}
      <Select 
        options={options}
        placeholder="Check the dropdown style"
        popupClassName="bg-purple-50 border-purple-200 shadow-xl"
      />
    </div>
  );
}`}
        />
      </div>

      <div>
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
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Select</h3>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>options</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>选项数据</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'{ label, value, disabled }[]'}</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>[]</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>value</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>指定当前选中的条目</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string | number | (string | number)[]</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>defaultValue</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>默认选中的条目</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string | number | (string | number)[]</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onChange</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>选中 option 时调用</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>function(value)</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>multiple</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>支持多选</td>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>searchable</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否可搜索</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>false</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>allowClear</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>有选中值时是否显示清空按钮</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>true</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>color</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>背景色：预设 default | primary | secondary | success | warning | danger 或任意 CSS 颜色值</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>'default'</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>popupClassName</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>下拉菜单自定义类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDoc;

