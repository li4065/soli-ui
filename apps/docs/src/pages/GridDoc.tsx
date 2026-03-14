import React from 'react';
import { Grid, GridItem } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const BasicExample: React.FC = () => {
  return (
    <Grid columns={3} gap={16}>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 1</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 2</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 3</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 4</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 5</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 6</div>
    </Grid>
  );
};

const ResponsiveExample: React.FC = () => {
  return (
    <Grid 
      columns={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4
      }} 
      gap={16}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>
          Item {i + 1}
        </div>
      ))}
    </Grid>
  );
};

const AreasExample: React.FC = () => {
  return (
    <Grid
      areas={[
        "header header header",
        "sidebar content content",
        "footer footer footer"
      ]}
      columns={["200px", "1fr", "1fr"]}
      rows={["60px", "200px", "60px"]}
      gap={8}
    >
      <GridItem gridArea="header" style={{ background: '#0092ff', padding: '16px', color: '#fff' }}>
        Header
      </GridItem>
      <GridItem gridArea="sidebar" style={{ background: '#1890ff', padding: '16px', color: '#fff' }}>
        Sidebar
      </GridItem>
      <GridItem gridArea="content" style={{ background: '#40a9ff', padding: '16px', color: '#fff' }}>
        Content
      </GridItem>
      <GridItem gridArea="footer" style={{ background: '#69c0ff', padding: '16px', color: '#fff' }}>
        Footer
      </GridItem>
    </Grid>
  );
};

const ItemSpanExample: React.FC = () => {
  return (
    <Grid columns={3} gap={16}>
      <GridItem columnStart={1} columnEnd={3} style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>
        Span 2 Columns
      </GridItem>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 3</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 1</div>
      <GridItem gridColumn="span 2" style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>
        Span 2 Columns (Shorthand)
      </GridItem>
    </Grid>
  );
};

const TailwindExample: React.FC = () => {
  return (
    <Grid 
      columns={3} 
      gap={16}
      className="p-6 bg-gray-50 rounded-xl shadow-inner border border-gray-200"
    >
      <div className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-md transition-colors flex items-center justify-center">
        Tailwind Item 1
      </div>
      <div className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg shadow-md transition-colors flex items-center justify-center">
        Tailwind Item 2
      </div>
      <div className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-lg shadow-md transition-colors flex items-center justify-center">
        Tailwind Item 3
      </div>
      <GridItem 
        gridColumn="span 3" 
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg shadow-md transition-colors text-center font-bold"
      >
        Full Width Item
      </GridItem>
    </Grid>
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

const GridDoc: React.FC = () => {
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
          Grid 网格布局
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          强大的网格布局系统，支持响应式布局、区域命名和自动排列。
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
            需要复杂的二维布局时，或者需要精确控制行和列的尺寸和位置时。
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
          description="使用 columns 属性定义列数，gap 属性定义间距。"
          preview={<BasicExample />}
          code={`import { Grid } from 'soli-ui';

export default function App() {
  return (
    <Grid columns={3} gap={16}>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 1</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 2</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 3</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 4</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 5</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 6</div>
    </Grid>
  );
}`}
        />

        <ExampleSection 
          title="响应式布局"
          description="columns 属性支持传入对象，根据屏幕宽度自动调整列数。"
          preview={<ResponsiveExample />}
          code={`import { Grid } from 'soli-ui';

export default function App() {
  return (
    <Grid 
      columns={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4
      }} 
      gap={16}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>
          Item {i + 1}
        </div>
      ))}
    </Grid>
  );
}`}
        />

        <ExampleSection 
          title="网格区域"
          description="使用 areas 属性定义网格区域，GridItem 使用 gridArea 指定所属区域。"
          preview={<AreasExample />}
          code={`import { Grid, GridItem } from 'soli-ui';

export default function App() {
  return (
    <Grid
      areas={[
        "header header header",
        "sidebar content content",
        "footer footer footer"
      ]}
      columns={["200px", "1fr", "1fr"]}
      rows={["60px", "200px", "60px"]}
      gap={8}
    >
      <GridItem gridArea="header" style={{ background: '#0092ff', padding: '16px', color: '#fff' }}>
        Header
      </GridItem>
      <GridItem gridArea="sidebar" style={{ background: '#1890ff', padding: '16px', color: '#fff' }}>
        Sidebar
      </GridItem>
      <GridItem gridArea="content" style={{ background: '#40a9ff', padding: '16px', color: '#fff' }}>
        Content
      </GridItem>
      <GridItem gridArea="footer" style={{ background: '#69c0ff', padding: '16px', color: '#fff' }}>
        Footer
      </GridItem>
    </Grid>
  );
}`}
        />

        <ExampleSection 
          title="跨列与跨行"
          description="GridItem 支持 columnStart/columnEnd 等属性，也支持 gridColumn 简写。"
          preview={<ItemSpanExample />}
          code={`import { Grid, GridItem } from 'soli-ui';

export default function App() {
  return (
    <Grid columns={3} gap={16}>
      <GridItem columnStart={1} columnEnd={3} style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>
        Span 2 Columns
      </GridItem>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 3</div>
      <div style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>Col 1</div>
      <GridItem gridColumn="span 2" style={{ background: '#0092ff', padding: '16px', color: '#fff', textAlign: 'center' }}>
        Span 2 Columns (Shorthand)
      </GridItem>
    </Grid>
  );
}`}
        />

        <ExampleSection 
          title="使用 Tailwind CSS"
          description="Grid 和 GridItem 组件完全支持 Tailwind CSS 类名，可用于设置背景、边框、阴影等样式。"
          preview={<TailwindExample />}
          code={`import { Grid, GridItem } from 'soli-ui';

export default function App() {
  return (
    <Grid 
      columns={3} 
      gap={16}
      className="p-6 bg-gray-50 rounded-xl shadow-inner border border-gray-200"
    >
      <div className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-md transition-colors flex items-center justify-center">
        Tailwind Item 1
      </div>
      <div className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg shadow-md transition-colors flex items-center justify-center">
        Tailwind Item 2
      </div>
      <div className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-lg shadow-md transition-colors flex items-center justify-center">
        Tailwind Item 3
      </div>
      <GridItem 
        gridColumn="span 3" 
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg shadow-md transition-colors text-center font-bold"
      >
        Full Width Item
      </GridItem>
    </Grid>
  );
}`}
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
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Grid</h3>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>columns</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>列模板定义，支持数字(列数)、数组(每列宽度)或对象(响应式)</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number | string | string[] | object</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>rows</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>行模板定义</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number | string | string[] | object</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>gap</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>网格间距</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number | string | [number, number] | object</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>areas</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>网格区域定义</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string[] | object</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>GridItem</h3>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>gridArea</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>指定的网格区域名称</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>gridColumn</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>列范围简写 (例如 "span 2")</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>gridRow</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>行范围简写</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridDoc;