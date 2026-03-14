import React from 'react';
import { Divider } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const DividerDoc: React.FC = () => {
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
          Divider 分割线
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          区隔内容的分割线。
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
            对不同章节的文本段落进行分割。对行内文字/链接进行分割，例如表格的操作列。
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
          description="默认为水平分割线，可在中间添加文字。"
          preview={
            <div>
              <p style={{ marginBottom: '16px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
              </p>
              <Divider />
              <p>
                Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
              </p>
            </div>
          }
          code={`import { Divider } from 'soli-ui';

export default function App() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </p>
      <Divider />
      <p>
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </p>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="带文字的分割线"
          description="可以在分割线中间添加文字。"
          preview={
            <div>
              <p>Text</p>
              <Divider>Text</Divider>
              <p>Text</p>
              <Divider>Text</Divider>
              <p>Text</p>
            </div>
          }
          code={`import { Divider } from 'soli-ui';

export default function App() {
  return (
    <div>
      <p>Text</p>
      <Divider>Text</Divider>
      <p>Text</p>
      <Divider>Text</Divider>
      <p>Text</p>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="不同样式"
          description="通过 variant 属性来改变分割线的样式。"
          preview={
            <div>
              <Divider variant='solid'>Solid</Divider>
              <Divider variant='dashed'>Dashed</Divider>
              <Divider variant='dotted'>Dotted</Divider>
            </div>
          }
          code={`import { Divider } from 'soli-ui';

export default function App() {
  return (
    <div>
      <Divider variant='solid'>Solid</Divider>
      <Divider variant='dashed'>Dashed</Divider>
      <Divider variant='dotted'>Dotted</Divider>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="文字位置"
          description="通过 orientation 属性来改变文字在分割线中的位置。"
          preview={
            <div>
              <Divider orientation='start'>Start</Divider>
              <Divider orientation='center'>Center</Divider>
              <Divider orientation='end'>End</Divider>
            </div>
          }
          code={`import { Divider } from 'soli-ui';

export default function App() {
  return (
    <div>
      <Divider orientation='start'>Start</Divider>
      <Divider orientation='center'>Center</Divider>
      <Divider orientation='end'>End</Divider>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="不同颜色"
          description="通过 color 属性来改变分割线的颜色。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Divider color='blue'>Blue</Divider>
              <Divider color='purple'>Purple</Divider>
              <Divider color='cyan'>Cyan</Divider>
              <Divider color='green'>Green</Divider>
              <Divider color='magenta'>Magenta</Divider>
              <Divider color='pink'>Pink</Divider>
              <Divider color='red'>Red</Divider>
              <Divider color='orange'>Orange</Divider>
              <Divider color='yellow'>Yellow</Divider>
              <Divider color='volcano'>Volcano</Divider>
              <Divider color='geekblue'>Geekblue</Divider>
              <Divider color='lime'>Lime</Divider>
              <Divider color='gold'>Gold</Divider>
            </div>
          }
          code={`import { Divider } from 'soli-ui';

export default function App() {
  return (
    <div>
      <Divider color='blue'>Blue</Divider>
      <Divider color='purple'>Purple</Divider>
      <Divider color='cyan'>Cyan</Divider>
      <Divider color='green'>Green</Divider>
      <Divider color='magenta'>Magenta</Divider>
      <Divider color='pink'>Pink</Divider>
      <Divider color='red'>Red</Divider>
      <Divider color='orange'>Orange</Divider>
      <Divider color='yellow'>Yellow</Divider>
      <Divider color='volcano'>Volcano</Divider>
      <Divider color='geekblue'>Geekblue</Divider>
      <Divider color='lime'>Lime</Divider>
      <Divider color='gold'>Gold</Divider>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="自定义线宽"
          description="通过 borderWidth 属性来改变分割线的宽度。"
          preview={
            <div>
              <Divider borderWidth={1}>1px</Divider>
              <Divider borderWidth={2}>2px</Divider>
              <Divider borderWidth={3}>3px</Divider>
              <Divider borderWidth={4}>4px</Divider>
            </div>
          }
          code={`import { Divider } from 'soli-ui';

export default function App() {
  return (
    <div>
      <Divider borderWidth={1}>1px</Divider>
      <Divider borderWidth={2}>2px</Divider>
      <Divider borderWidth={3}>3px</Divider>
      <Divider borderWidth={4}>4px</Divider>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="使用 Tailwind CSS 覆盖样式"
          description="组件支持通过 className 属性使用 Tailwind CSS 类名来覆盖样式。"
          preview={
            <div>
              <Divider className="!border-t-red-500" />
              <Divider className="!border-t-2" />
            </div>
          }
          code={`import { Divider } from 'soli-ui';

export default function App() {
  return (
    <div>
      <Divider className="!border-t-red-500" />
      <Divider className="!border-t-2" />
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>分割线样式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                    'dashed' | 'dotted' | 'solid'
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'solid'</code>
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
                    orientation
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>文字位置</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                    'start' | 'end' | 'center'
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'start'</code>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>分割线颜色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                    'blue' | 'purple' | 'cyan' | 'green' | 'magenta' | 'pink' | 'red' | 'orange' | 'yellow' | 'volcano' | 'geekblue' | 'lime' | 'gold' | 'gray'
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'gray'</code>
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
                    borderWidth
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>分割线宽度</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>1</code>
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
                    children
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>分割线文字</td>
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

export default DividerDoc;
