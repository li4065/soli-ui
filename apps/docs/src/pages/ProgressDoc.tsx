import React from 'react';
import { Progress } from 'soli-ui';
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '400px' }}>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} strokeColor="#40ffb9ff" />
      <Progress percent={50} showInfo={false} />
    </div>
  );
};

const CircleExample = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} />
    </div>
  );
};

const DashboardExample = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Progress type="dashboard" percent={75} />
      <Progress type="dashboard" percent={75} gapDegree={30} />
    </div>
  );
};

const TailwindExample = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-md">
      <div>
        <div className="mb-2 text-gray-500">Custom Gradient Bar:</div>
        <Progress 
          percent={80} 
          className="p-4 bg-gray-50 rounded-lg shadow-sm"
          barClassName="!bg-gradient-to-r !from-cyan-500 !to-blue-500"
          trackClassName="!bg-gray-200"
        />
      </div>

      <div>
        <div className="mb-2 text-gray-500">Custom Circle:</div>
        <Progress 
          type="circle"
          percent={60}
          barClassName="!stroke-purple-500"
          trackClassName="!stroke-purple-100"
          infoClassName="!text-purple-600 font-bold"
        />
      </div>
    </div>
  );
};

const ProgressDoc: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>Progress 进度条</h1>
      <p style={{ marginBottom: '40px', fontSize: '16px', color: '#666' }}>
        展示操作的当前进度。
      </p>

      <ExampleSection
        title="基本用法"
        description="标准的进度条。"
        preview={<BasicExample />}
        code={`import { Progress } from 'soli-ui';

const App = () => (
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} strokeColor="#40ffb9ff" />
    <Progress percent={50} showInfo={false} />
  </>
);`}
      />

      <ExampleSection
        title="进度圈"
        description="圈形的进度。"
        preview={<CircleExample />}
        code={`import { Progress } from 'soli-ui';

const App = () => (
  <>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </>
);`}
      />

      <ExampleSection
        title="仪表盘"
        description="仪表盘样式的进度条。"
        preview={<DashboardExample />}
        code={`import { Progress } from 'soli-ui';

const App = () => (
  <>
    <Progress type="dashboard" percent={75} />
    <Progress type="dashboard" percent={75} gapDegree={30} />
  </>
);`}
      />

      <ExampleSection
        title="Tailwind CSS 支持"
        description="支持通过 className, trackClassName, barClassName, infoClassName 自定义样式。"
        preview={<TailwindExample />}
        code={`import { Progress } from 'soli-ui';

const App = () => (
  <div className="flex flex-col gap-8 w-full max-w-md">
    {/* Custom Gradient Bar */}
    <Progress 
      percent={80} 
      className="p-4 bg-gray-50 rounded-lg shadow-sm"
      barClassName="!bg-gradient-to-r !from-cyan-500 !to-blue-500"
      trackClassName="!bg-gray-200"
    />

    {/* Custom Circle */}
    <Progress 
      type="circle"
      percent={60}
      barClassName="!stroke-purple-500"
      trackClassName="!stroke-purple-100"
      infoClassName="!text-purple-600 font-bold"
    />
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>percent</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>百分比</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>0</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>type</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>类型</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>line | circle | dashboard</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>line</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>status</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>状态</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>normal | success | exception | active</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>normal</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>showInfo</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否显示进度数值或状态图标</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>true</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>strokeColor</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>进度条颜色，当进度为 100% 时，完成图标也会使用此颜色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>trailColor</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>未完成分段的颜色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>#f5f5f5</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>容器类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>trackClassName</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>轨道类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>barClassName</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>进度条类名 (line) 或 路径类名 (circle/dashboard)</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>infoClassName</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>进度信息类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgressDoc;