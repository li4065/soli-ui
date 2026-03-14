import React, { useState } from 'react';
import { Collapse } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

// 受控模式下的优化示例：将 state 隔离到独立子组件，避免父级整页重渲染
const ControlledCollapseIsolated: React.FC = () => {
  const [activeKeys, setActiveKeys] = useState<string[]>(['1']);
  return (
    <Collapse
      activeKey={activeKeys}
      onChange={(keys) => setActiveKeys(Array.isArray(keys) ? keys : [keys])}
    >
      <Collapse.Panel header="This is panel header 1" panelKey="1">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 2" panelKey="2">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 3" panelKey="3">
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  );
};

const AccordionCollapseIsolated: React.FC = () => {
  const [accordionKey, setAccordionKey] = useState<string>('1');
  return (
    <Collapse
      accordion
      activeKey={accordionKey}
      onChange={(key) => setAccordionKey(key as string)}
    >
      <Collapse.Panel header="This is panel header 1" panelKey="1">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 2" panelKey="2">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 3" panelKey="3">
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  );
};

const CollapseDoc: React.FC = () => {

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
          Collapse 折叠面板
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          可以折叠/展开的内容区域。
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
            对复杂区域进行分组和隐藏，保持页面的整洁。
          </p>
          <p style={{ margin: '8px 0 0 0' }}>
            '手风琴' 是一种特殊的折叠面板，只允许单个内容区域展开。
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
          description="可以同时展开多个面板，这个例子默认展开了第一个。使用受控模式时，若在结构复杂的页面中感到收起展开动画有卡顿，可将 activeKey 状态隔离到独立子组件中，减少父级重渲染范围。"
          preview={<ControlledCollapseIsolated />}
          code={`import { Collapse } from 'soli-ui';

export default function App() {
  const [activeKeys, setActiveKeys] = useState<string[]>(['1']);

  const text = \`
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  \`;

  return (
    <Collapse
      activeKey={activeKeys}
      onChange={(keys) => setActiveKeys(Array.isArray(keys) ? keys : [keys])}
    >
      <Collapse.Panel header="This is panel header 1" panelKey="1">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 2" panelKey="2">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 3" panelKey="3">
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  );
}`}
        />

        <ExampleSection 
          title="手风琴"
          description="每次只展开一个面板。"
          preview={<AccordionCollapseIsolated />}
          code={`import { Collapse } from 'soli-ui';

export default function App() {
  const [accordionKey, setAccordionKey] = useState<string>('1');

  const text = \`
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  \`;

  return (
    <Collapse 
      accordion 
      activeKey={accordionKey} 
      onChange={(key) => setAccordionKey(key as string)}
    >
      <Collapse.Panel header="This is panel header 1" panelKey="1">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 2" panelKey="2">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 3" panelKey="3">
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  );
}`}
        />

        <ExampleSection 
          title="无边框"
          description="折叠面板默认不显示边框。"
          preview={
            <Collapse 
              bordered={false}
              defaultActiveKey={['1']}
            >
              <Collapse.Panel header="This is panel header 1" panelKey="1">
                <p>{text}</p>
              </Collapse.Panel>
              <Collapse.Panel header="This is panel header 2" panelKey="2">
                <p>{text}</p>
              </Collapse.Panel>
              <Collapse.Panel header="This is panel header 3" panelKey="3">
                <p>{text}</p>
              </Collapse.Panel>
            </Collapse>
          }
          code={`import { Collapse } from 'soli-ui';

export default function App() {
  const text = \`
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  \`;

  return (
    <Collapse 
      bordered={false}
      defaultActiveKey={['1']}
    >
      <Collapse.Panel header="This is panel header 1" panelKey="1">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 2" panelKey="2">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 3" panelKey="3">
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  );
}`}
        />

        <ExampleSection 
          title="禁用面板"
          description="禁用某个折叠面板。"
          preview={
            <Collapse 
              defaultActiveKey={['1']}
            >
              <Collapse.Panel header="This is panel header 1" panelKey="1">
                <p>{text}</p>
              </Collapse.Panel>
              <Collapse.Panel header="This is panel header 2" panelKey="2" disabled>
                <p>{text}</p>
              </Collapse.Panel>
              <Collapse.Panel header="This is panel header 3" panelKey="3" disabled>
                <p>{text}</p>
              </Collapse.Panel>
            </Collapse>
          }
          code={`import { Collapse } from 'soli-ui';

export default function App() {
  const text = \`
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  \`;

  return (
    <Collapse 
      defaultActiveKey={['1']}
    >
      <Collapse.Panel header="This is panel header 1" panelKey="1">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 2" panelKey="2" disabled>
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 3" panelKey="3" disabled>
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  );
}`}
        />

        <ExampleSection 
          title="自定义面板"
          description="自定义各个面板的样式。"
          preview={
            <Collapse 
              bordered={false}
              defaultActiveKey={['1']}
            >
              <Collapse.Panel 
                header="This is panel header 1" 
                panelKey="1"
                extra={<span style={{ color: '#1890ff' }}>Extra</span>}
              >
                <p>{text}</p>
              </Collapse.Panel>
              <Collapse.Panel 
                header="This is panel header 2" 
                panelKey="2"
                extra={<span style={{ color: '#52c41a' }}>Extra</span>}
              >
                <p>{text}</p>
              </Collapse.Panel>
              <Collapse.Panel 
                header="This is panel header 3" 
                panelKey="3"
                extra={<span style={{ color: '#faad14' }}>Extra</span>}
              >
                <p>{text}</p>
              </Collapse.Panel>
            </Collapse>
          }
          code={`import { Collapse } from 'soli-ui';

export default function App() {
  const text = \`
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  \`;

  return (
    <Collapse 
      bordered={false}
      defaultActiveKey={['1']}
    >
      <Collapse.Panel 
        header="This is panel header 1" 
        panelKey="1"
        extra={<span style={{ color: '#1890ff' }}>Extra</span>}
      >
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel 
        header="This is panel header 2" 
        panelKey="2"
        extra={<span style={{ color: '#52c41a' }}>Extra</span>}
      >
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel 
        header="This is panel header 3" 
        panelKey="3"
        extra={<span style={{ color: '#faad14' }}>Extra</span>}
      >
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  );
}`}
        />

        <ExampleSection 
          title="隐藏箭头"
          description="隐藏面板的箭头图标。"
          preview={
            <Collapse 
              defaultActiveKey={['1']}
            >
              <Collapse.Panel 
                header="This is panel header 1" 
                panelKey="1"
                showArrow={false}
              >
                <p>{text}</p>
              </Collapse.Panel>
              <Collapse.Panel 
                header="This is panel header 2" 
                panelKey="2"
                showArrow={false}
              >
                <p>{text}</p>
              </Collapse.Panel>
              <Collapse.Panel 
                header="This is panel header 3" 
                panelKey="3"
                showArrow={false}
              >
                <p>{text}</p>
              </Collapse.Panel>
            </Collapse>
          }
          code={`import { Collapse } from 'soli-ui';

export default function App() {
  const text = \`
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  \`;

  return (
    <Collapse 
      defaultActiveKey={['1']}
    >
      <Collapse.Panel 
        header="This is panel header 1" 
        panelKey="1"
        showArrow={false}
      >
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel 
        header="This is panel header 2" 
        panelKey="2"
        showArrow={false}
      >
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel 
        header="This is panel header 3" 
        panelKey="3"
        showArrow={false}
      >
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  );
}`}
        />

        <ExampleSection 
          title="使用 Tailwind CSS 覆盖样式"
          description="通过 className 属性使用 Tailwind CSS 覆盖默认样式。"
          preview={
            <Collapse 
              bordered={false}
              defaultActiveKey={['1']}
              containerClassName="!bg-blue-50 !rounded-lg"
            >
              <Collapse.Panel 
                header="This is panel header 1" 
                panelKey="1"
                headerClassName="!bg-blue-100 !hover:bg-blue-200"
                contentClassName="!bg-blue-50"
              >
                <p>{text}</p>
              </Collapse.Panel>
              <Collapse.Panel 
                header="This is panel header 2" 
                panelKey="2"
                headerClassName="!bg-green-100 !hover:bg-green-200"
                contentClassName="!bg-green-50"
              >
                <p>{text}</p>
              </Collapse.Panel>
              <Collapse.Panel 
                header="This is panel header 3" 
                panelKey="3"
                headerClassName="!bg-purple-100 !hover:bg-purple-200"
                contentClassName="!bg-purple-50"
              >
                <p>{text}</p>
              </Collapse.Panel>
            </Collapse>
          }
          code={`import { Collapse } from 'soli-ui';

export default function App() {
  const text = \`
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  \`;

  return (
    <Collapse 
      bordered={false}
      defaultActiveKey={['1']}
      containerClassName="!bg-blue-50 !rounded-lg"
    >
      <Collapse.Panel 
        header="This is panel header 1" 
        panelKey="1"
        headerClassName="!bg-blue-100 !hover:bg-blue-200"
        contentClassName="!bg-blue-50"
      >
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel 
        header="This is panel header 2" 
        panelKey="2"
        headerClassName="!bg-green-100 !hover:bg-green-200"
        contentClassName="!bg-green-50"
      >
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel 
        header="This is panel header 3" 
        panelKey="3"
        headerClassName="!bg-purple-100 !hover:bg-purple-200"
        contentClassName="!bg-purple-50"
      >
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  );
}`}
        />

        
      </div>

      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 600, 
          marginBottom: '24px',
          paddingBottom: '12px',
          borderBottom: '1px solid #f0f0f0'
        }}>
          API
        </h2>

        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000000d9'
        }}>
          Collapse
        </h3>

        <div style={{ 
          border: '1px solid #f0f0f0', 
          borderRadius: '8px', 
          overflow: 'hidden',
          marginBottom: '32px'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#fafafa' }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  参数
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  说明
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  类型
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
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
                    accordion
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>手风琴模式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>false</td>
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
                    activeKey
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>当前激活 tab 面板的 key</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'string | string[]'}</code>
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
                    defaultActiveKey
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>初始化选中面板的 key</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'string | string[]'}</code>
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
                    onChange
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>切换面板的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(key) => void'}</code>
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
                    bordered
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否显示边框</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>true</td>
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
                    expandIcon
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义展开图标</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'ReactNode | ((isActive: boolean) => ReactNode)'}</code>
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
                    containerClassName
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>容器的自定义类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000000d9'
        }}>
          Collapse.Panel
        </h3>

        <div style={{ 
          border: '1px solid #f0f0f0', 
          borderRadius: '8px', 
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#fafafa' }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  参数
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  说明
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  类型
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
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
                    header
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板标题</td>
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
                    panelKey
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>对应 activeKey</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code>
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
                    disabled
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否禁用面板</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>false</td>
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
                    extra
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义渲染每个面板右上角的内容</td>
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
                    showArrow
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否显示箭头图标</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>true</td>
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
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    headerClassName
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板标题的自定义类名</td>
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
                    contentClassName
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板内容的自定义类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 600, 
          marginBottom: '16px',
          marginTop: '32px',
          color: '#000000d9'
        }}>
          CSS 变量
        </h3>

        <div style={{ 
          border: '1px solid #f0f0f0', 
          borderRadius: '8px', 
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#fafafa' }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  变量名
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  说明
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontWeight: 600,
                  color: '#000000d9',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  默认值
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--collapse-bg</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>折叠容器背景色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>#fff</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--collapse-border-radius</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>折叠容器圆角</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>6px</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--collapse-border-width</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>折叠容器边框宽度</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>1px</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--collapse-border-color</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>折叠容器边框颜色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>#e0e0e0</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--collapse-shadow</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>折叠容器阴影</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>0 2px 8px rgba(0, 0, 0, 0.05)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--panel-border-width</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板边框宽度</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>1px</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--panel-border-color</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板边框颜色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>#f0f0f0</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--panel-disabled-opacity</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>禁用面板的透明度</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>0.6</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--header-padding</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板标题内边距</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>16px 24px</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--header-bg</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板标题背景色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>#fafafa</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--header-hover-bg</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板标题悬停背景色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>#f5f5f5</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--header-font-size</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板标题字体大小</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>16px</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--header-font-weight</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板标题字体粗细</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>500</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--header-color</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板标题文字颜色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>#333</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--header-extra-gap</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板标题额外内容间距</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>8px</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>--content-padding</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>面板内容内边距</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>16px 24px</td>
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
        fontSize: '18px', 
        fontWeight: 600, 
        marginBottom: '12px',
        color: '#000000d9'
      }}>
        {title}
      </h3>
      <p style={{ 
        fontSize: '14px', 
        color: '#00000073',
        marginBottom: '16px'
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

export default CollapseDoc;
