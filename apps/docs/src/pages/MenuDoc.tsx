import React from 'react';
import { Menu, type MenuItemType } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const items: MenuItemType[] = [
  {
    key: '1',
    label: 'Dashboard',
    icon: <span>📊</span>,
    children: [
      { 
        key: '1-1', 
        label: 'Analytics',
        children: [
          { key: '1-1-1', label: 'Real-time' },
          { key: '1-1-2', label: 'Historical' },
        ]
      },
      { key: '1-2', label: 'Reports' },
    ],
  },
  {
    key: '2',
    label: 'Settings',
    icon: <span>⚙️</span>,
    children: [
      { key: '2-1', label: 'Profile' },
      { key: '2-2', label: 'Security' },
    ],
  },
  {
    key: '3',
    label: 'Messages',
    icon: <span>✉️</span>,
  },
];

const VerticalMenuExample: React.FC = () => {
  return (
    <div style={{ width: 256, border: '1px solid #e5e7eb', height: '100%' }}>
      <Menu
        mode="vertical"
        items={items}
        defaultOpenKeys={['1']}
        defaultActiveKey="1-1"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

const HorizontalMenuExample: React.FC = () => {
  return (
    <Menu
      mode="horizontal"
      items={items}
      defaultActiveKey="1"
      className="w-full border-b border-gray-200"
    />
  );
};

const DarkThemeExample: React.FC = () => {
  return (
    <div style={{ width: 256, height: 400 }}>
      <Menu
        mode="vertical"
        theme="dark"
        items={items}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

const AccordionExample: React.FC = () => {
  return (
    <div style={{ width: 256, border: '1px solid #e5e7eb', height: '100%' }}>
      <Menu
        mode="vertical"
        items={items}
        accordion
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

const CustomStyleExample: React.FC = () => {
  const customItems: MenuItemType[] = [
    { key: '1', label: 'Blue Background', className: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
    { key: '2', label: 'Red Text', className: 'text-red-500 font-bold' },
    { key: '3', label: 'Normal Item' },
  ];

  return (
    <Menu items={customItems} />
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

const MenuDoc: React.FC = () => {
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
          Menu 菜单
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          为页面和功能提供导航的菜单列表。
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
          title="垂直菜单"
          description="标准的垂直菜单，支持嵌套子菜单。"
          preview={<VerticalMenuExample />}
          code={`import { Menu } from 'soli-ui';

const items = [
  {
    key: '1',
    label: 'Dashboard',
    icon: <span>📊</span>,
    children: [
      { 
        key: '1-1', 
        label: 'Analytics',
        children: [
          { key: '1-1-1', label: 'Real-time' },
          { key: '1-1-2', label: 'Historical' },
        ]
      },
      { key: '1-2', label: 'Reports' },
    ],
  },
  {
    key: '2',
    label: 'Settings',
    icon: <span>⚙️</span>,
    children: [
      { key: '2-1', label: 'Profile' },
      { key: '2-2', label: 'Security' },
    ],
  },
  {
    key: '3',
    label: 'Messages',
    icon: <span>✉️</span>,
  },
];

export default function App() {
  return (
    <div style={{ width: 256, border: '1px solid #e5e7eb', height: '100%' }}>
      <Menu
        mode="vertical"
        items={items}
        defaultOpenKeys={['1']}
        defaultActiveKey="1-1"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}`}
        />

        <ExampleSection 
          title="水平菜单"
          description="水平导航菜单，支持鼠标移入展开子菜单。"
          preview={<HorizontalMenuExample />}
          code={`import { Menu } from 'soli-ui';

export default function App() {
  return (
    <Menu
      mode="horizontal"
      items={items}
      defaultActiveKey="1"
      className="w-full border-b border-gray-200"
    />
  );
}`}
        />

        <ExampleSection 
          title="暗色主题"
          description="内置暗色主题支持。"
          preview={<DarkThemeExample />}
          code={`import { Menu } from 'soli-ui';

export default function App() {
  return (
    <div style={{ width: 256, height: 400 }}>
      <Menu
        mode="vertical"
        theme="dark"
        items={items}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}`}
        />

        <ExampleSection 
          title="手风琴模式"
          description="手风琴模式下，一次只能展开一个子菜单。支持多级嵌套的手风琴效果。"
          preview={<AccordionExample />}
          code={`import { Menu } from 'soli-ui';

export default function App() {
  return (
    <div style={{ width: 256, border: '1px solid #e5e7eb', height: '100%' }}>
      <Menu
        mode="vertical"
        accordion
        items={items}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}`}
        />

        <ExampleSection 
          title="Tailwind 自定义"
          description="支持使用 Tailwind CSS 自定义菜单项样式。"
          preview={<CustomStyleExample />}
          code={`import { Menu } from 'soli-ui';

const customItems = [
  { key: '1', label: 'Blue Background', className: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
  { key: '2', label: 'Red Text', className: 'text-red-500 font-bold' },
  { key: '3', label: 'Normal Item' },
];

export default function App() {
  return (
    <Menu items={customItems} />
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
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Menu</h3>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>items</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>菜单数据</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>MenuItemType[]</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>[]</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>mode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>菜单模式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'vertical' | 'horizontal'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>'vertical'</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>theme</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>菜单主题</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'light' | 'dark'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>'light'</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>defaultActiveKey</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>默认选中的菜单项</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>accordion</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否开启手风琴模式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>false</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>defaultOpenKeys</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>默认展开的子菜单</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string[]</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>[]</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
               <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>style</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义样式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>CSSProperties</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', marginTop: '32px', color: '#000000d9' }}>MenuItemType</h3>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>key</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>唯一标识</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>label</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>菜单项文本</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
               <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>icon</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>图标</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
               <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>children</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>子菜单</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>MenuItemType[]</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义类名</td>
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

export default MenuDoc;
