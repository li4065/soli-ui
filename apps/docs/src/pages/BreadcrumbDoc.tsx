import React from 'react';
import { Breadcrumb } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const BreadcrumbDoc: React.FC = () => {
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
          Breadcrumb 面包屑
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          显示当前页面在系统层级结构中的位置，并能向上返回。
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
            当系统拥有超过两级以上的层级结构时，或者需要向上导航功能时。
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
          description="最简单的用法。"
          preview={
            <Breadcrumb>
              <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
              <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
              <Breadcrumb.Item>产品详情</Breadcrumb.Item>
            </Breadcrumb>
          }
          code={`import { Breadcrumb } from 'soli-ui';

export default function App() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
      <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
      <Breadcrumb.Item>产品详情</Breadcrumb.Item>
    </Breadcrumb>
  );
}`}
        />

        <ExampleSection 
          title="自定义分隔符"
          description="使用 separator 属性自定义分隔符。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Breadcrumb separator=">">
                <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
                <Breadcrumb.Item>产品详情</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb separator={<span style={{ margin: '0 8px' }}>→</span>}>
                <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
                <Breadcrumb.Item>产品详情</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          }
          code={`import { Breadcrumb } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
        <Breadcrumb.Item>产品详情</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb separator={<span style={{ margin: '0 8px' }}>→</span>}>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
        <Breadcrumb.Item>产品详情</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="带图标的分隔符"
          description="分隔符也可以是图标。"
          preview={
            <Breadcrumb separator={<span style={{ margin: '0 8px' }}>→</span>}>
              <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
              <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
              <Breadcrumb.Item>产品详情</Breadcrumb.Item>
            </Breadcrumb>
          }
          code={`import { Breadcrumb } from 'soli-ui';

export default function App() {
  return (
    <Breadcrumb separator={<span style={{ margin: '0 8px' }}>→</span>}>
      <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
      <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
      <Breadcrumb.Item>产品详情</Breadcrumb.Item>
    </Breadcrumb>
  );
}`}
        />

        <ExampleSection 
          title="尺寸"
          description="通过 size 设置面包屑尺寸：sm、md、lg。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Breadcrumb size="sm">
                <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
                <Breadcrumb.Item>产品详情</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb size="md">
                <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
                <Breadcrumb.Item>产品详情</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb size="lg">
                <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
                <Breadcrumb.Item>产品详情</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          }
          code={`import { Breadcrumb } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Breadcrumb size="sm">...</Breadcrumb>
      <Breadcrumb size="md">...</Breadcrumb>
      <Breadcrumb size="lg">...</Breadcrumb>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="带图标"
          description="通过 Breadcrumb.Item 的 icon 与 iconPosition 设置每项图标，图标可在文字前或后。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Breadcrumb separator=">" responsive={false}>
                <Breadcrumb.Item href="/" icon="🏠" iconPosition="before">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/music" icon="🎵" iconPosition="before">Music</Breadcrumb.Item>
                <Breadcrumb.Item href="/artist" icon="👤" iconPosition="before">Artist</Breadcrumb.Item>
                <Breadcrumb.Item href="/album" icon="📁" iconPosition="before">Album</Breadcrumb.Item>
                <Breadcrumb.Item icon="🎶" iconPosition="before">Song</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb separator=">" responsive={false}>
                <Breadcrumb.Item href="/" icon="🏠" iconPosition="after">首页</Breadcrumb.Item>
                <Breadcrumb.Item href="/products" icon="📦" iconPosition="after">产品</Breadcrumb.Item>
                <Breadcrumb.Item icon="📄" iconPosition="after">详情</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          }
          code={`import { Breadcrumb } from 'soli-ui';

export default function App() {
  return (
    <Breadcrumb separator=">" responsive={false}>
      <Breadcrumb.Item href="/" icon="🏠" iconPosition="before">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/music" icon="🎵" iconPosition="before">Music</Breadcrumb.Item>
      <Breadcrumb.Item href="/artist" icon="👤" iconPosition="before">Artist</Breadcrumb.Item>
      <Breadcrumb.Item href="/album" icon="📁" iconPosition="before">Album</Breadcrumb.Item>
      <Breadcrumb.Item icon="🎶" iconPosition="before">Song</Breadcrumb.Item>
    </Breadcrumb>
  );
}`}
        />

        <ExampleSection 
          title="使用 Tailwind CSS 覆盖样式"
          description="组件支持通过 className 属性使用 Tailwind CSS 类名来覆盖样式。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Breadcrumb className="!text-lg !font-bold">
                <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
                <Breadcrumb.Item>产品详情</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="!text-purple-600">
                <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
                <Breadcrumb.Item>产品详情</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          }
          code={`import { Breadcrumb } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Breadcrumb className="!text-lg !font-bold">
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
        <Breadcrumb.Item>产品详情</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb className="!text-purple-600">
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">产品中心</Breadcrumb.Item>
        <Breadcrumb.Item>产品详情</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="响应式与省略号弹出层"
          description="responsive 为 true 且项数超过 3 时，小屏下仅展示首项、省略号与末两项。设置 ellipsisPopover 为 true 后，点击省略号可在弹出框中查看被折叠的菜单项。"
          preview={
            <Breadcrumb separator=">" responsive ellipsisPopover>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/music">Music</Breadcrumb.Item>
              <Breadcrumb.Item href="/artist">Artist</Breadcrumb.Item>
              <Breadcrumb.Item href="/album">Album</Breadcrumb.Item>
              <Breadcrumb.Item href="/featured">Featured</Breadcrumb.Item>
              <Breadcrumb.Item>Song</Breadcrumb.Item>
            </Breadcrumb>
          }
          code={`import { Breadcrumb } from 'soli-ui';

export default function App() {
  return (
    <Breadcrumb separator=">" responsive ellipsisPopover>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/music">Music</Breadcrumb.Item>
      <Breadcrumb.Item href="/artist">Artist</Breadcrumb.Item>
      <Breadcrumb.Item href="/album">Album</Breadcrumb.Item>
      <Breadcrumb.Item href="/featured">Featured</Breadcrumb.Item>
      <Breadcrumb.Item>Song</Breadcrumb.Item>
    </Breadcrumb>
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
                    separator
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义分隔符</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'/'</code>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>尺寸</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'sm' | 'md' | 'lg'</code>
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
                    responsive
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否启用响应式；为 true 时在项数超过 3 个且小屏下会折叠中间项并显示省略号，仅展示首项与最后两项</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>true</code>
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
                    ellipsisPopover
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>出现省略号时，是否可通过点击省略号在弹出框中展示被折叠的菜单；仅在 responsive 且项数大于 3 时生效</td>
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

        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', marginTop: '32px', color: '#000000d9' }}>
          Breadcrumb.Item
        </h3>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>href</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>链接地址</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>icon</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>该项的图标</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>iconPosition</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>图标位置：在文字前或后</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'before' | 'after'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'before'</code></td>
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

export default BreadcrumbDoc;
