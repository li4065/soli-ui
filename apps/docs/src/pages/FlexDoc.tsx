import React from 'react';
import { Flex, Button } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const BasicExample: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>水平布局</h4>
        <Flex gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>垂直布局</h4>
        <Flex vertical gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </div>
  );
};

const JustifyExample: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>flex-start</h4>
        <Flex justify="flex-start" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>center</h4>
        <Flex justify="center" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>flex-end</h4>
        <Flex justify="flex-end" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>space-between</h4>
        <Flex justify="space-between" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>space-around</h4>
        <Flex justify="space-around" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </div>
  );
};

const AlignExample: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>flex-start</h4>
        <Flex align="flex-start" gap="middle" style={{ height: 100, background: '#f0f0f0', padding: 16 }}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>center</h4>
        <Flex align="center" gap="middle" style={{ height: 100, background: '#f0f0f0', padding: 16 }}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>flex-end</h4>
        <Flex align="flex-end" gap="middle" style={{ height: 100, background: '#f0f0f0', padding: 16 }}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </div>
  );
};

const GapExample: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>small (8px)</h4>
        <Flex gap="small">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>middle (16px)</h4>
        <Flex gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>large (24px)</h4>
        <Flex gap="large">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>自定义值 (32px)</h4>
        <Flex gap={32}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>自定义值 (2rem)</h4>
        <Flex gap="2rem">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </div>
  );
};

const WrapExample: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>不换行</h4>
        <Flex wrap={false} gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
          <Button>按钮 4</Button>
          <Button>按钮 5</Button>
          <Button>按钮 6</Button>
          <Button>按钮 7</Button>
          <Button>按钮 8</Button>
          <Button>按钮 9</Button>
          <Button>按钮 10</Button>
          <Button>按钮 11</Button>
          <Button>按钮 12</Button>
          <Button>按钮 13</Button>
          <Button>按钮 14</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>换行</h4>
        <Flex wrap gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
          <Button>按钮 4</Button>
          <Button>按钮 5</Button>
          <Button>按钮 6</Button>
          <Button>按钮 7</Button>
          <Button>按钮 8</Button>
          <Button>按钮 9</Button>
          <Button>按钮 10</Button>
          <Button>按钮 11</Button>
          <Button>按钮 12</Button>
          <Button>按钮 13</Button>
          <Button>按钮 14</Button>
        </Flex>
      </div>
      
      <div>
        <h4 style={{ marginBottom: 12, fontSize: 14, color: '#000000d9' }}>反向换行</h4>
        <Flex wrap="wrap-reverse" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
          <Button>按钮 4</Button>
          <Button>按钮 5</Button>
          <Button>按钮 6</Button>
          <Button>按钮 7</Button>
          <Button>按钮 8</Button>
          <Button>按钮 9</Button>
          <Button>按钮 10</Button>
          <Button>按钮 11</Button>
          <Button>按钮 12</Button>
          <Button>按钮 13</Button>
          <Button>按钮 14</Button>
        </Flex>
      </div>
    </div>
  );
};

const CombinedExample: React.FC = () => {
  return (
    <Flex 
      vertical 
      justify="center" 
      align="center" 
      gap="large"
      style={{ height: 300, background: '#f0f0f0', padding: 16 }}
    >
      <Button>按钮 1</Button>
      <Button>按钮 2</Button>
      <Button>按钮 3</Button>
    </Flex>
  );
};

const TailwindExample: React.FC = () => {
  return (
    <Flex 
      className="p-4 bg-blue-50 rounded-lg shadow-md"
      justify="center" 
      align="center" 
      gap="middle"
    >
      <Button className="shadow-lg">按钮 1</Button>
      <Button className="shadow-lg">按钮 2</Button>
      <Button className="shadow-lg">按钮 3</Button>
    </Flex>
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

const FlexDoc: React.FC = () => {
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
          Flex 弹性布局
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          提供一种简单、高效的方式来布局、对齐和分配容器中项目之间的空间。
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
            需要快速构建弹性布局时，或需要控制元素的对齐方式和间距时。
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
          description="使用 vertical 属性控制方向。"
          preview={<BasicExample />}
          code={`import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <h4>水平布局</h4>
        <Flex gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4>垂直布局</h4>
        <Flex vertical gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </>
  );
}`}
        />

        <ExampleSection 
          title="对齐方式"
          description="使用 justify 属性控制主轴对齐方式。"
          preview={<JustifyExample />}
          code={`import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <h4>flex-start</h4>
        <Flex justify="flex-start" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>center</h4>
        <Flex justify="center" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>flex-end</h4>
        <Flex justify="flex-end" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>space-between</h4>
        <Flex justify="space-between" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4>space-around</h4>
        <Flex justify="space-around" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </>
  );
}`}
        />

        <ExampleSection 
          title="交叉轴对齐"
          description="使用 align 属性控制交叉轴对齐方式。"
          preview={<AlignExample />}
          code={`import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <h4>flex-start</h4>
        <Flex align="flex-start" gap="middle" style={{ height: 100, background: '#f0f0f0' }}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>center</h4>
        <Flex align="center" gap="middle" style={{ height: 100, background: '#f0f0f0' }}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4>flex-end</h4>
        <Flex align="flex-end" gap="middle" style={{ height: 100, background: '#f0f0f0' }}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </>
  );
}`}
        />

        <ExampleSection 
          title="间距"
          description="使用 gap 属性控制元素间距，支持预设值和自定义值。"
          preview={<GapExample />}
          code={`import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <h4>small (8px)</h4>
        <Flex gap="small">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>middle (16px)</h4>
        <Flex gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>large (24px)</h4>
        <Flex gap="large">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>自定义值 (32px)</h4>
        <Flex gap={32}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4>自定义值 (2rem)</h4>
        <Flex gap="2rem">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </>
  );
}`}
        />

        <ExampleSection 
          title="换行"
          description="使用 wrap 属性控制是否换行。"
          preview={<WrapExample />}
          code={`import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <h4>不换行</h4>
        <Flex wrap={false} gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
          <Button>按钮 4</Button>
          <Button>按钮 5</Button>
          <Button>按钮 6</Button>
          <Button>按钮 7</Button>
          <Button>按钮 8</Button>
          <Button>按钮 9</Button>
          <Button>按钮 10</Button>
          <Button>按钮 11</Button>
          <Button>按钮 12</Button>
          <Button>按钮 13</Button>
          <Button>按钮 14</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>换行</h4>
        <Flex wrap gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
          <Button>按钮 4</Button>
          <Button>按钮 5</Button>
          <Button>按钮 6</Button>
          <Button>按钮 7</Button>
          <Button>按钮 8</Button>
          <Button>按钮 9</Button>
          <Button>按钮 10</Button>
          <Button>按钮 11</Button>
          <Button>按钮 12</Button>
          <Button>按钮 13</Button>
          <Button>按钮 14</Button>
        </Flex>
      </div>
      
      <div>
        <h4>反向换行</h4>
        <Flex wrap="wrap-reverse" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
          <Button>按钮 4</Button>
          <Button>按钮 5</Button>
          <Button>按钮 6</Button>
          <Button>按钮 7</Button>
          <Button>按钮 8</Button>
          <Button>按钮 9</Button>
          <Button>按钮 10</Button>
          <Button>按钮 11</Button>
          <Button>按钮 12</Button>
          <Button>按钮 13</Button>
          <Button>按钮 14</Button>
        </Flex>
      </div>
    </>
  );
}`}
        />

        <ExampleSection 
          title="组合使用"
          description="可以组合使用多个属性。"
          preview={<CombinedExample />}
          code={`import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <Flex 
      vertical 
      justify="center" 
      align="center" 
      gap="large"
      style={{ height: 300, background: '#f0f0f0' }}
    >
      <Button>按钮 1</Button>
      <Button>按钮 2</Button>
      <Button>按钮 3</Button>
    </Flex>
  );
}`}
        />

        <ExampleSection 
          title="使用 Tailwind CSS"
          description="Flex 组件支持通过 className 属性使用 Tailwind CSS 类名来覆盖默认样式。"
          preview={<TailwindExample />}
          code={`import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <Flex 
      className="p-4 bg-blue-50 rounded-lg shadow-md"
      justify="center" 
      align="center" 
      gap="middle"
    >
      <Button className="shadow-lg">按钮 1</Button>
      <Button className="shadow-lg">按钮 2</Button>
      <Button className="shadow-lg">按钮 3</Button>
    </Flex>
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

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Flex</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  参数
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  说明
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  类型
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
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
                    vertical
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否垂直排列</td>
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
                    justify
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>主轴对齐方式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'flex-start'</code>
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
                    align
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>交叉轴对齐方式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'flex-start' | 'flex-end' | 'center'</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'flex-start'</code>
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
                    gap
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>间距</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'small' | 'middle' | 'large' | string | number</code>
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
                    wrap
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否换行</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean | 'nowrap' | 'wrap' | 'wrap-reverse'</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>gap 预设值</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  值
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  说明
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  实际值
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
                    small
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>小间距</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>8px</code>
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
                    middle
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>中间距</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>16px</code>
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
                    large
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>大间距</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>24px</code>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexDoc;
