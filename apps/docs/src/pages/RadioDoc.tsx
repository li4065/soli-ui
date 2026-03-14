import React, { useState } from 'react';
import { Radio, RadioGroup } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

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

const BasicExample = () => {
  return (
    <Radio>Radio</Radio>
  );
};

const RadioGroupExample = () => {
  const [value, setValue] = useState<string | number>(1);
  return (
    <RadioGroup onChange={(val) => setValue(val)} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </RadioGroup>
  );
};

const RadioGroupOptionsExample = () => {
  const [value, setValue] = useState<string | number>('Apple');
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  return (
    <RadioGroup options={options} onChange={(val) => setValue(val)} value={value} />
  );
};

const DisabledExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <Radio defaultChecked={false} disabled>Disabled</Radio>
        <Radio defaultChecked disabled style={{ marginLeft: 20 }}>Disabled</Radio>
      </div>
      <RadioGroup disabled defaultValue="a">
        <Radio value="a">Hangzhou</Radio>
        <Radio value="b">Shanghai</Radio>
        <Radio value="c">Beijing</Radio>
        <Radio value="d">Chengdu</Radio>
      </RadioGroup>
    </div>
  );
};

const VerticalExample = () => {
  return (
    <RadioGroup direction="vertical" defaultValue={1}>
      <Radio value={1}>Option A</Radio>
      <Radio value={2}>Option B</Radio>
      <Radio value={3}>Option C</Radio>
    </RadioGroup>
  );
};

const TailwindExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <Radio 
        className="p-4 border rounded-lg hover:bg-gray-50 transition-colors" 
        radioClassName="!border-purple-500"
        labelClassName="!text-purple-600 font-bold"
      >
        Custom Styled Radio
      </Radio>
      
      <RadioGroup className="bg-blue-50 p-4 rounded-xl" gap="large">
        <Radio value="1" labelClassName="!text-blue-700">Blue 1</Radio>
        <Radio value="2" labelClassName="!text-blue-700">Blue 2</Radio>
      </RadioGroup>
    </div>
  );
};

const RadioDoc: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>Radio 单选框</h1>
      <p style={{ marginBottom: '40px', fontSize: '16px', color: '#666' }}>
        单选框。
      </p>

      <ExampleSection
        title="基本用法"
        description="最简单的用法。"
        preview={<BasicExample />}
        code={`import { Radio } from 'soli-ui';

const App = () => (
  <Radio>Radio</Radio>
);`}
      />

      <ExampleSection
        title="单选组合"
        description="一组互斥的 Radio 配合使用。"
        preview={<RadioGroupExample />}
        code={`import React, { useState } from 'react';
import { Radio, RadioGroup } from 'soli-ui';

const App = () => {
  const [value, setValue] = useState(1);
  return (
    <RadioGroup onChange={(val) => setValue(val)} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </RadioGroup>
  );
};`}
      />

      <ExampleSection
        title="RadioGroup 组合 - 配置方式"
        description="通过配置 options 参数来渲染单选框。"
        preview={<RadioGroupOptionsExample />}
        code={`import React, { useState } from 'react';
import { RadioGroup } from 'soli-ui';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const App = () => {
  const [value, setValue] = useState('Apple');
  return (
    <RadioGroup options={options} onChange={(val) => setValue(val)} value={value} />
  );
};`}
      />

      <ExampleSection
        title="不可用"
        description="Radio 不可用。"
        preview={<DisabledExample />}
        code={`import { Radio, RadioGroup } from 'soli-ui';

const App = () => (
  <>
    <div>
      <Radio defaultChecked={false} disabled>Disabled</Radio>
      <Radio defaultChecked disabled style={{ marginLeft: 20 }}>Disabled</Radio>
    </div>
    <br />
    <RadioGroup disabled defaultValue="a">
      <Radio value="a">Hangzhou</Radio>
      <Radio value="b">Shanghai</Radio>
      <Radio value="c">Beijing</Radio>
      <Radio value="d">Chengdu</Radio>
    </RadioGroup>
  </>
);`}
      />

      <ExampleSection
        title="垂直"
        description="垂直的 RadioGroup。"
        preview={<VerticalExample />}
        code={`import { Radio, RadioGroup } from 'soli-ui';

const App = () => (
  <RadioGroup direction="vertical" defaultValue={1}>
    <Radio value={1}>Option A</Radio>
    <Radio value={2}>Option B</Radio>
    <Radio value={3}>Option C</Radio>
  </RadioGroup>
);`}
      />

      <ExampleSection
        title="Tailwind CSS 支持"
        description="支持通过 className, radioClassName, labelClassName 自定义样式。"
        preview={<TailwindExample />}
        code={`import { Radio, RadioGroup } from 'soli-ui';

const App = () => (
  <div className="flex flex-col gap-4">
    <Radio 
      className="p-4 border rounded-lg hover:bg-gray-50 transition-colors" 
      radioClassName="!border-purple-500"
      labelClassName="!text-purple-600 font-bold"
    >
      Custom Styled Radio
    </Radio>
    
    <RadioGroup className="bg-blue-50 p-4 rounded-xl" gap="large">
      <Radio value="1" labelClassName="!text-blue-700">Blue 1</Radio>
      <Radio value="2" labelClassName="!text-blue-700">Blue 2</Radio>
    </RadioGroup>
  </div>
);`}
      />

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
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Radio</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9' }}>参数</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9' }}>说明</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9' }}>类型</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9' }}>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>checked</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>指定当前是否选中</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>defaultChecked</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>初始是否选中</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>disabled</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>禁用 Radio</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>value</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>根据 value 进行比较，判断是否选中</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>any</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>radioClassName</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>单选框图标的类名</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>labelClassName</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>文本标签的类名</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>RadioGroup</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9' }}>参数</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9' }}>说明</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9' }}>类型</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9' }}>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>defaultValue</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>默认选中的值</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>any</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>disabled</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>禁选所有子单选器</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>name</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>RadioGroup 下所有 input[type="radio"] 的 name 属性</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>options</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>以配置形式设置子元素</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>RadioOption[]</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>value</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>用于设置当前选中的值</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>any</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onChange</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>选项变化时的回调函数</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>function(value: any)</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>direction</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>排列方向</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>horizontal | vertical</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>horizontal</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioDoc;