import React from 'react';
import { Button } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const ButtonDoc: React.FC = () => {
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
          Button 按钮
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          按钮用于开始一个即时操作。
        </p>
        <div style={{ 
          padding: '16px', 
          background: '#e6f7ff',
          border: '1px solid #91d5ff',
          borderRadius: '8px',
          color: '#000000d9',
          lineHeight: '1.6'
        }}>
          <strong>何时使用：</strong>
          <p style={{ margin: '8px 0 0 0' }}>
            标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
          </p>
        </div>
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
          description="使用 variant 属性来定义按钮的样式。"
          preview={
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant='primary'>Primary Button</Button>
              <Button variant='default'>Default Button</Button>
              <Button variant='outline'>Outline Button</Button>
              <Button variant='text'>Text Button</Button>
              <Button variant='link'>Link Button</Button>
            </div>
          }
          code={`import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant='primary'>Primary Button</Button>
      <Button variant='default'>Default Button</Button>
      <Button variant='outline'>Outline Button</Button>
      <Button variant='text'>Text Button</Button>
      <Button variant='link'>Link Button</Button>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="不同尺寸"
          description="按钮有大、中、小三种尺寸。通过设置 size 为 large、middle 或 small 分别把按钮设为大、中、小尺寸。"
          preview={
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Button size='sm'>Small</Button>
              <Button size='md'>Middle</Button>
              <Button size='lg'>Large</Button>
            </div>
          }
          code={`import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size='sm'>Small</Button>
      <Button size='md'>Middle</Button>
      <Button size='lg'>Large</Button>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="不同颜色"
          description="通过设置 color 属性来改变按钮颜色。"
          preview={
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant='primary' color='blue'>Blue</Button>
              <Button variant='primary' color='purple'>Purple</Button>
              <Button variant='primary' color='cyan'>Cyan</Button>
              <Button variant='primary' color='green'>Green</Button>
              <Button variant='primary' color='magenta'>Magenta</Button>
              <Button variant='primary' color='pink'>Pink</Button>
              <Button variant='primary' color='red'>Red</Button>
              <Button variant='primary' color='orange'>Orange</Button>
              <Button variant='primary' color='yellow'>Yellow</Button>
              <Button variant='primary' color='volcano'>Volcano</Button>
              <Button variant='primary' color='geekblue'>Geekblue</Button>
              <Button variant='primary' color='lime'>Lime</Button>
              <Button variant='primary' color='gold'>Gold</Button>
            </div>
          }
          code={`import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant='primary' color='blue'>Blue</Button>
      <Button variant='primary' color='purple'>Purple</Button>
      <Button variant='primary' color='cyan'>Cyan</Button>
      <Button variant='primary' color='green'>Green</Button>
      <Button variant='primary' color='magenta'>Magenta</Button>
      <Button variant='primary' color='pink'>Pink</Button>
      <Button variant='primary' color='red'>Red</Button>
      <Button variant='primary' color='orange'>Orange</Button>
      <Button variant='primary' color='yellow'>Yellow</Button>
      <Button variant='primary' color='volcano'>Volcano</Button>
      <Button variant='primary' color='geekblue'>Geekblue</Button>
      <Button variant='primary' color='lime'>Lime</Button>
      <Button variant='primary' color='gold'>Gold</Button>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="加载状态"
          description="添加 isLoading 属性即可让按钮进入加载状态。"
          preview={
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant='primary' isLoading={true}>加载中</Button>
              <Button variant='default' isLoading={true}>加载中</Button>
            </div>
          }
          code={`import { Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant='primary' isLoading={loading} onClick={handleClick}>
        点击加载
      </Button>
      <Button variant='default' isLoading={loading} onClick={handleClick}>
        点击加载
      </Button>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="禁用状态"
          description="添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。"
          preview={
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant='primary' disabled>
                Primary (Disabled)
              </Button>
              <Button variant='default' disabled>
                Default (Disabled)
              </Button>
            </div>
          }
          code={`import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant='primary' disabled>
        Primary (Disabled)
      </Button>
      <Button variant='default' disabled>
        Default (Disabled)
      </Button>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="图标按钮"
          description="按钮可以包含图标。"
          preview={
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant='primary'>
                <span style={{ marginRight: '8px' }}>✓</span>
                提交
              </Button>
              <Button variant='default'>
                <span style={{ marginRight: '8px' }}>✕</span>
                取消
              </Button>
            </div>
          }
          code={`import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant='primary'>
        <span style={{ marginRight: '8px' }}>✓</span>
        提交
      </Button>
      <Button variant='default'>
        <span style={{ marginRight: '8px' }}>✕</span>
        取消
      </Button>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="使用 Tailwind CSS 覆盖样式"
          description="组件支持通过 className 属性使用 Tailwind CSS 类名来覆盖样式。"
          preview={
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button 
                variant='primary' 
                className="!bg-red-500 hover:!bg-red-600"
              >
                红色按钮
              </Button>
              <Button 
                variant='primary' 
                className="!rounded-full px-8"
              >
                圆角按钮
              </Button>
              <Button 
                variant='primary' 
                className="!shadow-lg"
              >
                阴影按钮
              </Button>
            </div>
          }
          code={`import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button 
        variant='primary' 
        className="!bg-red-500 hover:!bg-red-600"
      >
        红色按钮
      </Button>
      <Button 
        variant='primary' 
        className="!rounded-full px-8"
      >
        圆角按钮
      </Button>
      <Button 
        variant='primary' 
        className="!shadow-lg"
      >
        阴影按钮
      </Button>
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

        <div style={{ 
          background: '#fafafa',
          borderRadius: '8px',
          padding: '24px',
          border: '1px solid #f0f0f0'
        }}>
          <table style={{ 
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px'
          }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  fontWeight: 600,
                  color: '#000000d9'
                }}>
                  参数
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  fontWeight: 600,
                  color: '#000000d9'
                }}>
                  说明
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  fontWeight: 600,
                  color: '#000000d9'
                }}>
                  类型
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  fontWeight: 600,
                  color: '#000000d9'
                }}>
                  默认值
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    variant
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>按钮类型</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                    'primary' | 'default' | 'outline' | 'text' | 'link'
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'default'</code>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    size
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>按钮大小</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                    'sm' | 'md' | 'lg'
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'md'</code>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    color
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>按钮颜色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                    'blue' | 'purple' | 'cyan' | 'green' | 'magenta' | 'pink' | 'red' | 'orange' | 'yellow' | 'volcano' | 'geekblue' | 'lime' | 'gold' | 'default'
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'default'</code>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    isLoading
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否为加载状态</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    disabled
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否禁用</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    className
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    style
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义样式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>CSSProperties</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default ButtonDoc;
