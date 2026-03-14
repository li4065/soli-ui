import React from 'react';
import { Button, useMessage } from 'soli-ui';
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

const BasicUsageExample: React.FC = () => {
  const [messageApi, contextHolder] = useMessage();

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {contextHolder}
      <Button onClick={() => messageApi.success('This is a success message')}>Success</Button>
      <Button onClick={() => messageApi.error('This is an error message')}>Error</Button>
      <Button onClick={() => messageApi.warning('This is a warning message')}>Warning</Button>
      <Button onClick={() => messageApi.info('This is an info message')}>Info</Button>
    </div>
  );
};

const DurationExample: React.FC = () => {
  const [messageApi, contextHolder] = useMessage();

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {contextHolder}
      <Button onClick={() => messageApi.success('This message will close in 10s', 10000)}>
        Custom Duration (10s)
      </Button>
      <Button onClick={() => messageApi.success('This message will never close automatically', 0)}>
        Never Close
      </Button>
    </div>
  );
};

const PositionExample: React.FC = () => {
  const [messageApi, contextHolder] = useMessage();

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {contextHolder}
      <Button onClick={() => messageApi.success('Top Message', 3000, 'top')}>Top</Button>
      <Button onClick={() => messageApi.success('Bottom Message', 3000, 'bottom')}>Bottom</Button>
      <Button onClick={() => messageApi.success('Top Left Message', 3000, 'top-left')}>Top Left</Button>
      <Button onClick={() => messageApi.success('Top Right Message', 3000, 'top-right')}>Top Right</Button>
      <Button onClick={() => messageApi.success('Bottom Left Message', 3000, 'bottom-left')}>Bottom Left</Button>
      <Button onClick={() => messageApi.success('Bottom Right Message', 3000, 'bottom-right')}>Bottom Right</Button>
    </div>
  );
};

const MessageDoc: React.FC = () => {
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
          Message 全局提示
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          全局展示操作反馈信息。
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
          title="基本用法"
          description="普通提示，提供成功、警告、错误等反馈信息。"
          preview={<BasicUsageExample />}
          code={`import { Button, useMessage } from 'soli-ui';

const App = () => {
  const [messageApi, contextHolder] = useMessage();

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {contextHolder}
      <Button onClick={() => messageApi.success('This is a success message')}>Success</Button>
      <Button onClick={() => messageApi.error('This is an error message')}>Error</Button>
      <Button onClick={() => messageApi.warning('This is a warning message')}>Warning</Button>
      <Button onClick={() => messageApi.info('This is an info message')}>Info</Button>
    </div>
  );
};`}
        />

        <ExampleSection 
          title="修改延时"
          description="自定义时长，10s 后自动关闭。设为 0 则不会自动关闭。"
          preview={<DurationExample />}
          code={`import { Button, useMessage } from 'soli-ui';

const App = () => {
  const [messageApi, contextHolder] = useMessage();

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {contextHolder}
      <Button onClick={() => messageApi.success('This message will close in 10s', 10000)}>
        Custom Duration (10s)
      </Button>
      <Button onClick={() => messageApi.success('This message will never close automatically', 0)}>
        Never Close
      </Button>
    </div>
  );
};`}
        />

        <ExampleSection 
          title="位置"
          description="可以自定义消息弹出的位置。"
          preview={<PositionExample />}
          code={`import { Button, useMessage } from 'soli-ui';

const App = () => {
  const [messageApi, contextHolder] = useMessage();

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {contextHolder}
      <Button onClick={() => messageApi.success('Top Message', 3000, 'top')}>Top</Button>
      <Button onClick={() => messageApi.success('Bottom Message', 3000, 'bottom')}>Bottom</Button>
      <Button onClick={() => messageApi.success('Top Left Message', 3000, 'top-left')}>Top Left</Button>
      <Button onClick={() => messageApi.success('Top Right Message', 3000, 'top-right')}>Top Right</Button>
      <Button onClick={() => messageApi.success('Bottom Left Message', 3000, 'bottom-left')}>Bottom Left</Button>
      <Button onClick={() => messageApi.success('Bottom Right Message', 3000, 'bottom-right')}>Bottom Right</Button>
    </div>
  );
};`}
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
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 600, 
            marginBottom: '16px',
            color: '#000000d9'
          }}>
            messageApi
          </h3>
          <p style={{ marginBottom: '16px', color: '#00000073' }}>
            组件提供了一些静态方法，使用方式和参数如下：
          </p>
          <ul style={{ marginBottom: '16px', color: '#00000073', paddingLeft: '20px' }}>
            <li><code>messageApi.success(content, [duration], [position])</code></li>
            <li><code>messageApi.error(content, [duration], [position])</code></li>
            <li><code>messageApi.info(content, [duration], [position])</code></li>
            <li><code>messageApi.warning(content, [duration], [position])</code></li>
          </ul>
          
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>content</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>提示内容</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode | string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>duration</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自动关闭的延时，单位毫秒。设为 0 时不自动关闭。</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>3000</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>position</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>弹出位置</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>'top'</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDoc;
