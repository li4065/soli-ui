import React from 'react';
import { Typography } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const { Title, Paragraph, Text, Link } = Typography;

interface ExampleSectionProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}

const ExampleSection: React.FC<ExampleSectionProps> = ({ title, description, preview, code }) => {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#000000d9' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#00000073', marginBottom: '16px', lineHeight: '1.6' }}>{description}</p>
      <div style={{ padding: '24px', border: '1px solid #f0f0f0', borderRadius: '8px', marginBottom: '16px', background: '#fff' }}>
        {preview}
      </div>
      <CodeBlock code={code} />
    </div>
  );
};

const TypographyDoc: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '38px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Typography 排版</h1>
        <p style={{ fontSize: '16px', color: '#00000073', lineHeight: '1.8' }}>文本的基本格式。</p>
      </div>

      <ExampleSection
        title="标题"
        description="展示不同级别的标题。"
        preview={
          <div>
            <Title>h1. Soli</Title>
            <Title level={2}>h2. Soli</Title>
            <Title level={3}>h3. Soli</Title>
            <Title level={4}>h4. Soli</Title>
            <Title level={5}>h5. Soli</Title>
          </div>
        }
        code={`import React from 'react';
import { Typography } from 'soli-ui';

const { Title } = Typography;

const App = () => (
  <>
    <Title>h1. Soli</Title>
    <Title level={2}>h2. Soli</Title>
    <Title level={3}>h3. Soli</Title>
    <Title level={4}>h4. Soli</Title>
    <Title level={5}>h5. Soli</Title>
  </>
);

export default App;`}
      />

      <ExampleSection
        title="文本和段落"
        description="内置不同样式的文本和段落。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text>Soli (default)</Text>
            <Text color="secondary">Soli (secondary)</Text>
            <Text color="success">Soli (success)</Text>
            <Text color="warning">Soli (warning)</Text>
            <Text color="error">Soli (error)</Text>
            <Text variant="strong">Soli (strong)</Text>
            <Text italic>Soli (italic)</Text>
            <Text underline>Soli (underline)</Text>
            <Text variant="delete">Soli (delete)</Text>
            <Text variant="mark">Soli (mark)</Text>
            <Text variant="code">Soli (code)</Text>
            <Link href="https://ant.design" target="_blank">
              Soli (Link)
            </Link>
          </div>
        }
        code={`import React from 'react';
import { Typography } from 'soli-ui';

const { Text, Link } = Typography;

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <Text>Soli (default)</Text>
    <Text color="secondary">Soli (secondary)</Text>
    <Text color="success">Soli (success)</Text>
    <Text color="warning">Soli (warning)</Text>
    <Text color="error">Soli (error)</Text>
    <Text variant="strong">Soli (strong)</Text>
    <Text italic>Soli (italic)</Text>
    <Text underline>Soli (underline)</Text>
    <Text variant="delete">Soli (delete)</Text>
    <Text variant="mark">Soli (mark)</Text>
    <Text variant="code">Soli (code)</Text>
    <Link href="https://ant.design" target="_blank">
      Soli (Link)
    </Link>
  </div>
);

export default App;`}
      />

      <ExampleSection
        title="交互功能"
        description="提供复制和省略功能。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Paragraph copyable>This is a copyable text.</Paragraph>
            <Paragraph copyable={{ text: 'Hello, Soli!' }}>
              Replace copy text.
            </Paragraph>
            <Paragraph ellipsis>
              Soli, a design language for background applications, a design language for 
              background applications. a design language for background applications，a design language for background applications。
            </Paragraph>
            <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
              Soli, a design language for background applications,  a design language for background 
              applications,  a design language for background applications,  a design language for background
              applications,  a design language for background applications,  a design language for 
              background applications,  a design language for background applications,  a design 
              language for background applications,  a design language for background applications,  a 
              design language for background applications,  a design language for background applications。
            </Paragraph>
          </div>
        }
        code={`import React from 'react';
import { Typography } from 'soli-ui';

const { Paragraph } = Typography;

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Paragraph copyable>This is a copyable text.</Paragraph>
    <Paragraph copyable={{ text: 'Hello, Soli!' }}>
      Replace copy text.
    </Paragraph>
    <Paragraph ellipsis>
      Soli, a design language for background applications, a design language for 
      background applications. a design language for background applications
    </Paragraph>
    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
      Soli, a design language for background applications,  a design language for background 
      applications,  a design language for background applications,  a design language for background
      applications,  a design language for background applications,  a design language for 
      background applications,  a design language for background applications,  a design 
      language for background applications,  a design language for background applications,  a 
      design language for background applications,  a design language for background applications。
    </Paragraph>
  </div>
);

export default App;`}
      />

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>API</h2>
        
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Typography / Text / Paragraph / Title / Link</h3>
          <p style={{ fontSize: '14px', color: '#00000073', marginBottom: '16px' }}>共享的通用属性。</p>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '20%' }}>参数</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '35%' }}>说明</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '30%' }}>类型</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '15%' }}>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>variant</code></td>
                  <td style={{ padding: '12px 16px' }}>文本变体</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>'h1' | 'h2' | 'p' | 'span' | 'strong' | 'code' | ...</code></td>
                  <td style={{ padding: '12px 16px' }}>p</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>color</code></td>
                  <td style={{ padding: '12px 16px' }}>文本颜色</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>'primary' | 'secondary' | 'success' | 'warning' | 'error' | string</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>copyable</code></td>
                  <td style={{ padding: '12px 16px' }}>是否可拷贝</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>boolean | CopyConfig</code></td>
                  <td style={{ padding: '12px 16px' }}>false</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>ellipsis</code></td>
                  <td style={{ padding: '12px 16px' }}>自动溢出省略</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>boolean | EllipsisConfig</code></td>
                  <td style={{ padding: '12px 16px' }}>false</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>italic</code></td>
                  <td style={{ padding: '12px 16px' }}>是否斜体</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px' }}>false</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>underline</code></td>
                  <td style={{ padding: '12px 16px' }}>是否添加下划线</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px' }}>false</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>strikethrough</code></td>
                  <td style={{ padding: '12px 16px' }}>是否添加删除线</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px' }}>false</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>className</code></td>
                  <td style={{ padding: '12px 16px' }}>自定义类名</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>string</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>style</code></td>
                  <td style={{ padding: '12px 16px' }}>自定义样式</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>CSSProperties</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Title</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '20%' }}>参数</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '35%' }}>说明</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '30%' }}>类型</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '15%' }}>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>level</code></td>
                  <td style={{ padding: '12px 16px' }}>标题级别</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>1 | 2 | 3 | 4 | 5 | 6</code></td>
                  <td style={{ padding: '12px 16px' }}>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>EllipsisConfig</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '20%' }}>参数</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '35%' }}>说明</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '30%' }}>类型</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '15%' }}>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>rows</code></td>
                  <td style={{ padding: '12px 16px' }}>最多显示行数</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>number</code></td>
                  <td style={{ padding: '12px 16px' }}>1</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>expandable</code></td>
                  <td style={{ padding: '12px 16px' }}>是否可展开</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px' }}>false</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>symbol</code></td>
                  <td style={{ padding: '12px 16px' }}>展开操作符</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>ReactNode</code></td>
                  <td style={{ padding: '12px 16px' }}>'Expand'</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

         <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>CopyConfig</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '20%' }}>参数</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '35%' }}>说明</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '30%' }}>类型</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#000000d9', width: '15%' }}>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>text</code></td>
                  <td style={{ padding: '12px 16px' }}>复制的文本内容</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>string</code></td>
                  <td style={{ padding: '12px 16px' }}>children</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>onCopy</code></td>
                  <td style={{ padding: '12px 16px' }}>复制成功的回调</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>{'() => void'}</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>icon</code></td>
                  <td style={{ padding: '12px 16px' }}>自定义复制图标</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>ReactNode</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                 <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>tooltips</code></td>
                  <td style={{ padding: '12px 16px' }}>复制按钮提示文案</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>[ReactNode, ReactNode]</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TypographyDoc;
