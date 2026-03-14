import React from 'react';
import { Alert } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const AlertDoc: React.FC = () => {
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
          Alert 警告提示
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          警告提示，展现需要关注的信息。
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
            当某个页面需要向用户显示警告的信息时。
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
          title="基本用法"
          description="适用于简洁的警告提示。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Alert type="success" description="成功提示的文案" />
              <Alert type="info" description="消息提示的文案" />
              <Alert type="warning" description="警告提示的文案" />
              <Alert type="error" description="错误提示的文案" />
            </div>
          }
          code={`import { Alert } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Alert type="success" description="成功提示的文案" />
      <Alert type="info" description="消息提示的文案" />
      <Alert type="warning" description="警告提示的文案" />
      <Alert type="error" description="错误提示的文案" />
    </div>
  );
}`}
        />

        <ExampleSection 
          title="带有标题"
          description="显示标题。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Alert 
                type="success" 
                title="成功提示" 
                description="成功提示的文案" 
              />
              <Alert 
                type="info" 
                title="消息提示" 
                description="消息提示的文案" 
              />
              <Alert 
                type="warning" 
                title="警告提示" 
                description="警告提示的文案" 
              />
              <Alert 
                type="error" 
                title="错误提示" 
                description="错误提示的文案" 
              />
            </div>
          }
          code={`import { Alert } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Alert 
        type="success" 
        title="成功提示" 
        description="成功提示的文案" 
      />
      <Alert 
        type="info" 
        title="消息提示" 
        description="消息提示的文案" 
      />
      <Alert 
        type="warning" 
        title="警告提示" 
        description="警告提示的文案" 
      />
      <Alert 
        type="error" 
        title="错误提示" 
        description="错误提示的文案" 
      />
    </div>
  );
}`}
        />

        <ExampleSection 
          title="可关闭"
          description="显示关闭按钮，点击可关闭警告提示。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Alert 
                type="info" 
                description="消息提示的文案" 
                closable 
              />
              <Alert 
                type="warning" 
                description="警告提示的文案" 
                closable 
              />
            </div>
          }
          code={`import { Alert } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Alert 
        type="info" 
        description="消息提示的文案" 
        closable 
      />
      <Alert 
        type="warning" 
        description="警告提示的文案" 
        closable 
      />
    </div>
  );
}`}
        />

        <ExampleSection 
          title="带有图标"
          description="显示图标。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Alert 
                type="success" 
                description="成功提示的文案" 
                showIcon 
              />
              <Alert 
                type="info" 
                description="消息提示的文案" 
                showIcon 
              />
              <Alert 
                type="warning" 
                description="警告提示的文案" 
                showIcon 
              />
              <Alert 
                type="error" 
                description="错误提示的文案" 
                showIcon 
              />
            </div>
          }
          code={`import { Alert } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Alert 
        type="success" 
        description="成功提示的文案" 
        showIcon 
      />
      <Alert 
        type="info" 
        description="消息提示的文案" 
        showIcon 
      />
      <Alert 
        type="warning" 
        description="警告提示的文案" 
        showIcon 
      />
      <Alert 
        type="error" 
        description="错误提示的文案" 
        showIcon 
      />
    </div>
  );
}`}
        />

        <ExampleSection 
          title="自定义关闭文字"
          description="自定义关闭按钮的文字。"
          preview={
            <Alert 
              type="info" 
              description="消息提示的文案" 
              closable 
              closeText="不再提示" 
            />
          }
          code={`import { Alert } from 'soli-ui';

export default function App() {
  return (
    <Alert 
      type="info" 
      description="消息提示的文案" 
      closable 
      closeText="不再提示" 
    />
  );
}`}
        />

        <ExampleSection 
          title="圆角"
          description="通过 radius 设置边框圆角：full、lg、md、sm、none。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Alert type="info" description="radius: none" radius="none" />
              <Alert type="info" description="radius: sm" radius="sm" />
              <Alert type="info" description="radius: md（默认）" radius="md" />
              <Alert type="info" description="radius: lg" radius="lg" />
              <Alert type="info" description="radius: full" radius="full" />
            </div>
          }
          code={`import { Alert } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Alert type="info" description="radius: none" radius="none" />
      <Alert type="info" description="radius: sm" radius="sm" />
      <Alert type="info" description="radius: md（默认）" radius="md" />
      <Alert type="info" description="radius: lg" radius="lg" />
      <Alert type="info" description="radius: full" radius="full" />
    </div>
  );
}`}
        />

        <ExampleSection 
          title="带有操作"
          description="在警告提示中放置操作按钮。"
          preview={
            <Alert 
              type="info" 
              description="消息提示的文案" 
              action={
                <button style={{ 
                  padding: '4px 12px', 
                  background: '#1890ff', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}>
                  查看详情
                </button>
              } 
            />
          }
          code={`import { Alert } from 'soli-ui';

export default function App() {
  return (
    <Alert 
      type="info" 
      description="消息提示的文案" 
      action={
        <button style={{ 
          padding: '4px 12px', 
          background: '#1890ff', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}>
          查看详情
        </button>
      } 
    />
  );
}`}
        />

        <ExampleSection 
          title="使用 Tailwind CSS 覆盖样式"
          description="组件支持通过 className 属性使用 Tailwind CSS 类名来覆盖样式。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Alert 
                type="info" 
                description="自定义背景色的提示" 
                className="!bg-purple-100 !border-purple-300" 
              />
              <Alert 
                type="warning" 
                description="自定义圆角的提示" 
                className="!rounded-full" 
              />
            </div>
          }
          code={`import { Alert } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Alert 
        type="info" 
        description="自定义背景色的提示" 
        className="!bg-purple-100 !border-purple-300" 
      />
      <Alert 
        type="warning" 
        description="自定义圆角的提示" 
        className="!rounded-full" 
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
                    type
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>警告类型</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                    'success' | 'info' | 'warning' | 'error'
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'info'</code>
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
                    title
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标题</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
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
                    description
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>描述内容</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
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
                    closable
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否显示关闭按钮</td>
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
                    closeText
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义关闭按钮文字</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
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
                    showIcon
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否显示图标</td>
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
                    icon
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义图标</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
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
                    onClose
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>关闭时的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(event: MouseEvent) => void'}</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
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
                    afterClose
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>关闭动画结束后的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'() => void'}</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
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
                    action
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>操作区域</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
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
                    radius
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>边框圆角</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'full' | 'lg' | 'md' | 'sm' | 'none'</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'md'</code>
                </td>
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
                    className
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code>
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

export default AlertDoc;
