import React, { useState } from 'react';
import { Spin, Button } from 'soli-ui';
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
  return <Spin />;
};

const ContainerExample = () => {
  const [spinning, setSpinning] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Spin spinning={spinning}>
        <div style={{ 
          padding: '50px', 
          background: '#f0f2f5', 
          borderRadius: '4px',
          textAlign: 'center' 
        }}>
          Alert message title
          <br />
          Further details about the context of this alert.
        </div>
      </Spin>
      <div>
        Loading state: 
        <Button 
          onClick={() => setSpinning(!spinning)} 
          style={{ marginLeft: 8 }}
        >
          Toggle
        </Button>
      </div>
    </div>
  );
};

const SizeExample = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </div>
  );
};

const TipExample = () => {
  return (
    <Spin tip="Loading...">
      <div style={{ 
        padding: '50px', 
        background: '#f0f2f5', 
        borderRadius: '4px',
        textAlign: 'center' 
      }}>
        Alert message title
      </div>
    </Spin>
  );
};

const CustomIndicatorExample = () => {
  const antIcon = (
    <div style={{ fontSize: 24, animation: 'spin 1s infinite linear' }}>
      <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
      </svg>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
  return <Spin indicator={antIcon} />;
};

const TailwindExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2" style={{ minHeight: 40 }}>
        <span className="text-sm text-gray-500" style={{ lineHeight: 1 }}>Red Spinner:</span>
        <Spin className="text-red-500" />
      </div>
      <div className="flex items-center gap-2" style={{ minHeight: 40 }}>
        <span className="text-sm text-gray-500" style={{ lineHeight: 1 }}>Green Spinner:</span>
        <Spin className="text-green-500" size="large" />
      </div>
    </div>
  );
};

const SpinDoc: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>Spin 加载中</h1>
      <p style={{ marginBottom: '40px', fontSize: '16px', color: '#666' }}>
        用于页面和区块的加载中状态。
      </p>

      <ExampleSection
        title="基本用法"
        description="一个简单的 loading 状态。"
        preview={<BasicExample />}
        code={`import { Spin } from 'soli-ui';

const App = () => (
  <Spin />
);`}
      />

      <ExampleSection
        title="容器中"
        description="放入一个容器中。"
        preview={<ContainerExample />}
        code={`import { useState } from 'react';
import { Spin, Button } from 'soli-ui';

const App = () => {
  const [spinning, setSpinning] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Spin spinning={spinning}>
        <div style={{ 
          padding: '50px', 
          background: '#f0f2f5', 
          borderRadius: '4px',
          textAlign: 'center' 
        }}>
          Alert message title
          <br />
          Further details about the context of this alert.
        </div>
      </Spin>
      <div>
        Loading state: 
        <Button onClick={() => setSpinning(!spinning)}>Toggle</Button>
      </div>
    </div>
  );
};`}
      />

      <ExampleSection
        title="三种大小"
        description="小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。"
        preview={<SizeExample />}
        code={`import { Spin } from 'soli-ui';

const App = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>
);`}
      />

      <ExampleSection
        title="自定义描述文案"
        description="可以自定义加载文案。"
        preview={<TipExample />}
        code={`import { Spin } from 'soli-ui';

const App = () => (
  <Spin tip="Loading...">
    <div style={{ 
      padding: '50px', 
      background: '#f0f2f5', 
      borderRadius: '4px',
      textAlign: 'center' 
    }}>
      Alert message title
    </div>
  </Spin>
);`}
      />

      <ExampleSection
        title="自定义指示符"
        description="使用自定义指示符。"
        preview={<CustomIndicatorExample />}
        code={`import { Spin } from 'soli-ui';

const antIcon = (
  <div style={{ fontSize: 24, animation: 'spin 1s infinite linear' }}>
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
    </svg>
    <style>{\`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    \`}</style>
  </div>
);

const App = () => <Spin indicator={antIcon} />;`}
      />

      <ExampleSection
        title="Tailwind CSS 支持"
        description="通过 className 自定义颜色。"
        preview={<TailwindExample />}
        code={`import { Spin } from 'soli-ui';

const App = () => (
  <div className="flex flex-col gap-4">
    <div>
      <span className="mr-2 text-sm text-gray-500">Red Spinner:</span>
      <Spin className="text-red-500" />
    </div>
    <div>
      <span className="mr-2 text-sm text-gray-500">Green Spinner:</span>
      <Spin className="text-green-500" size="large" />
    </div>
  </div>
);`}
      />

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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>delay</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>延迟显示加载效果的时间（毫秒）</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>0</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>indicator</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>加载指示符</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>size</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>组件大小</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'small' | 'default' | 'large'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'default'</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>spinning</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否为加载中状态</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>true</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>tip</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>当作为包裹元素时，可以自定义描述文案</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>wrapperClassName</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>包装器的类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>style</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义样式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>CSSProperties</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>fullscreen</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否全屏显示</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpinDoc;
