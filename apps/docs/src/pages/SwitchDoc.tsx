import React, { useState } from 'react';
import { Switch, Button } from 'soli-ui';
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
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return <Switch defaultChecked onChange={onChange} />;
};

const DisabledExample = () => {
  const [disabled, setDisabled] = useState(true);
  
  const toggle = () => {
    setDisabled(!disabled);
  };
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Switch disabled={disabled} defaultChecked />
        <Switch disabled={disabled} />
      </div>
      <div>
        <Button onClick={toggle}>
          Toggle disabled
        </Button>
      </div>
    </div>
  );
};



const SizeExample = () => {
  return (
    <div className="flex gap-4 items-center">
      <Switch defaultChecked />
      <Switch size="small" defaultChecked />
    </div>
  );
};

const TextAndIconExample = () => {
  const CheckIcon = () => (
    <span style={{ display: 'inline-flex', color: '#fff', fontSize: 12 }}>✓</span>
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch
          defaultChecked
          checkedChildren="开启"
          unCheckedChildren="关闭"
        />
      </div>
      <div className="flex items-center gap-2">
        <Switch
          checkedChildren="1"
          unCheckedChildren="0"
        />
      </div>
      <div className="flex items-center gap-2">
        <Switch
          defaultChecked
          checkedChildren={<CheckIcon />}
          unCheckedChildren={null}
        />
      </div>
    </div>
  );
};

const LoadingExample = () => {
  const [loading, setLoading] = useState(true);
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Switch loading={loading} defaultChecked />
        <Switch size="small" loading={loading} />
      </div>
      <div>
        <span className="mr-2">Loading state:</span>
        <Switch checked={loading} onChange={setLoading} />
      </div>
    </div>
  );
};

const TailwindExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Red (Checked):</span>
        <Switch 
          defaultChecked 
          className="[&_.solid-switch-track]:!bg-red-500 [&[data-state=unchecked]_.solid-switch-track]:!bg-gray-300" 
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Green (Checked):</span>
        <Switch 
          defaultChecked 
          className="[&_.solid-switch-track]:!bg-green-500" 
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Custom Handle:</span>
        <Switch 
          defaultChecked 
          className="[&_.solid-switch-handle]:!bg-yellow-300" 
        />
      </div>
    </div>
  );
};

const SwitchDoc: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>Switch 开关</h1>
      <p style={{ marginBottom: '40px', fontSize: '16px', color: '#666' }}>
        开关选择器。
      </p>

      <ExampleSection
        title="基本用法"
        description="最简单的用法。"
        preview={<BasicExample />}
        code={`import { Switch } from 'soli-ui';

const App = () => {
  const onChange = (checked: boolean) => {
    console.log(\`switch to \${checked}\`);
  };
  return <Switch defaultChecked onChange={onChange} />;
};`}
      />

      <ExampleSection
        title="不可用"
        description="Switch 失效状态。"
        preview={<DisabledExample />}
        code={`import { useState } from 'react';
import { Switch, Button } from 'soli-ui';

const App = () => {
  const [disabled, setDisabled] = useState(true);
  
  const toggle = () => {
    setDisabled(!disabled);
  };
  
  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Switch disabled={disabled} />
      <div style={{ marginTop: 20 }}>
        <Button onClick={toggle}>Toggle disabled</Button>
      </div>
    </>
  );
};`}
      />

      <ExampleSection
        title="两种大小"
        description="size='small' 表示小号开关。"
        preview={<SizeExample />}
        code={`import { Switch } from 'soli-ui';

const App = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);`}
      />

      <ExampleSection
        title="文字与图标"
        description="通过 checkedChildren 和 unCheckedChildren 在开关内显示文字或图标。"
        preview={<TextAndIconExample />}
        code={`import { Switch } from 'soli-ui';

// 图标示例：可用自定义 ReactNode
const CheckIcon = () => <span style={{ color: '#fff', fontSize: 12 }}>✓</span>;

const App = () => (
  <>
    <Switch defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch defaultChecked checkedChildren={<CheckIcon />} unCheckedChildren={null} />
  </>
);`}
      />

      <ExampleSection
        title="加载中"
        description="标识开关操作仍在执行中。"
        preview={<LoadingExample />}
        code={`import { Switch } from 'soli-ui';

const App = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);`}
      />

      <ExampleSection
        title="Tailwind 样式覆盖"
        description="使用 className 和 data-state 属性自定义样式。"
        preview={<TailwindExample />}
        code={`import { Switch } from 'soli-ui';

const App = () => (
  <>
    {/* Red Track when checked */}
    <Switch 
      defaultChecked 
      className="[&_.solid-switch-track]:!bg-red-500 [&[data-state=unchecked]_.solid-switch-track]:!bg-gray-300" 
    />
    
    {/* Green Track when checked */}
    <Switch 
      defaultChecked 
      className="[&_.solid-switch-track]:!bg-green-500"
    />
    
    {/* Custom Handle Color */}
    <Switch 
      defaultChecked 
      className="[&_.solid-switch-handle]:!bg-yellow-300" 
    />
  </>
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

        <div style={{
          background: '#fafafa',
          borderRadius: '8px',
          padding: '24px',
          border: '1px solid #f0f0f0'
        }}>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onChange</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>变化时回调函数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>(checked: boolean, event: Event) =&gt; void</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>checkedChildren</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>选中时的内容</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>unCheckedChildren</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>非选中时的内容</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>disabled</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否禁用</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>loading</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>加载中的开关</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>size</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>开关大小</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'small' | 'middle' | 'large'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'middle'</code></td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', marginTop: '48px', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>Theme Variables & CSS Selectors</h2>
        <p style={{ marginBottom: '16px', color: '#666' }}>
          组件内部使用了稳定的 class 类名和 data 属性，方便使用 Tailwind CSS 或 CSS 覆盖样式。
        </p>
        <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9' }}>选择器 / 属性</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9' }}>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>.solid-switch-track</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>开关的轨道元素（背景部分）。</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>.solid-switch-handle</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>开关的把手元素（圆形按钮）。</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>[data-state="checked"]</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>开关处于开启状态时的 data 属性。</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>[data-state="unchecked"]</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>开关处于关闭状态时的 data 属性。</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>[data-disabled="true"]</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>开关处于禁用状态时的 data 属性。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SwitchDoc;
