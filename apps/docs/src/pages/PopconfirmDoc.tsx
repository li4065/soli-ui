import React from 'react';
import { Popconfirm, Button } from 'soli-ui';
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
  const confirm = () => {
    console.log('Clicked confirm');
  };

  const cancel = () => {
    console.log('Clicked cancel');
  };

  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button color="red">Delete</Button>
    </Popconfirm>
  );
};

const PlacementExample = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <Popconfirm placement="top" title="Are you sure?" okText="Yes" cancelText="No">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm placement="bottom" title="Are you sure?" okText="Yes" cancelText="No">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm placement="left" title="Are you sure?" okText="Yes" cancelText="No">
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm placement="right" title="Are you sure?" okText="Yes" cancelText="No">
        <Button>Right</Button>
      </Popconfirm>
    </div>
  );
};

const TailwindExample = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div style={{ marginBottom: '8px', color: '#666' }}>Wrapper styling:</div>
        <Popconfirm
          title="Styled Wrapper"
          className="inline-block p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50"
        >
          <Button>Custom Wrapper</Button>
        </Popconfirm>
      </div>

      <div>
        <div style={{ marginBottom: '8px', color: '#666' }}>Popup Content styling:</div>
        <Popconfirm
          title={<span className="text-white">Dark Theme</span>}
          description={<span className="text-gray-300">Custom dark theme popup</span>}
          contentClassName="!bg-slate-800 !text-white !border-slate-700"
          arrowClassName="!bg-slate-800"
          cancelButtonProps={{ className: "!text-black !border-slate-600" }}
          okText="Yes"
          cancelText="No"
        >
          <Button>Dark Theme Popup</Button>
        </Popconfirm>
      </div>
    </div>
  );
};

const PopconfirmDoc: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>Popconfirm 气泡确认框</h1>
      <p style={{ marginBottom: '40px', fontSize: '16px', color: '#666' }}>
        点击元素，弹出气泡确认框。
      </p>

      <ExampleSection
        title="基本用法"
        description="最简单的用法。"
        preview={<BasicExample />}
        code={`import { Popconfirm, Button } from 'soli-ui';

const App = () => {
  const confirm = () => {
    console.log('Clicked confirm');
  };

  const cancel = () => {
    console.log('Clicked cancel');
  };

  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button color="red">Delete</Button>
    </Popconfirm>
  );
};`}
      />

      <ExampleSection
        title="位置"
        description="支持 12 个方向（目前主要实现上下左右）。"
        preview={<PlacementExample />}
        code={`import { Popconfirm, Button } from 'soli-ui';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Popconfirm placement="top" title="Are you sure?" okText="Yes" cancelText="No">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm placement="bottom" title="Are you sure?" okText="Yes" cancelText="No">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm placement="left" title="Are you sure?" okText="Yes" cancelText="No">
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm placement="right" title="Are you sure?" okText="Yes" cancelText="No">
        <Button>Right</Button>
      </Popconfirm>
    </div>
  );
};`}
      />

      <div style={{ marginTop: '48px' }}><ExampleSection
        title="Tailwind CSS 支持"
        description="支持通过 className 设置容器样式，通过 contentClassName 和 arrowClassName 设置弹出层样式。"
        preview={<TailwindExample />}
        code={`import { Popconfirm, Button } from 'soli-ui';

export default function App() {
  return (
    <div className="flex flex-col gap-8">
      {/* Wrapper styling */}
      <Popconfirm
        title="Styled Wrapper"
        className="inline-block p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50"
      >
        <Button>Custom Wrapper</Button>
      </Popconfirm>

      {/* Popup styling */}
      <Popconfirm
        title={<span className="text-white">Dark Theme</span>}
        description={<span className="text-gray-300">Custom dark theme popup</span>}
        contentClassName="!bg-slate-800 !text-white !border-slate-700"
        arrowClassName="!bg-slate-800"
        cancelButtonProps={{ className: "!text-black !border-slate-600" }}
      >
        <Button>Dark Theme Popup</Button>
      </Popconfirm>
    </div>
  );
}`}
      />
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>API</h2>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>title</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>确认框的标题</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>description</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>确认框的描述</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onConfirm</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>点击确认的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>() =&gt; void</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onCancel</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>点击取消的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>() =&gt; void</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>okText</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>确认按钮文字</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>确定</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>cancelText</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>取消按钮文字</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>取消</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>placement</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>气泡框位置</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>top | bottom | left | right 等</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>top</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>disabled</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否禁用</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>icon</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义图标</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>包裹容器的类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>style</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>包裹容器的样式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>CSSProperties</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>popupClassName</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>弹出层容器类名（用于定位层）</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>contentClassName</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>内容区域类名（用于视觉样式）</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>arrowClassName</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>小箭头的类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>okButtonProps</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>确认按钮的属性</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ButtonHTMLAttributes</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>cancelButtonProps</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>取消按钮的属性</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ButtonHTMLAttributes</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PopconfirmDoc;
