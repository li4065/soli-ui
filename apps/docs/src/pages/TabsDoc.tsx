import React, { useState } from 'react';
import { Tabs, Button } from 'soli-ui';
import type { TabPosition } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

// Simple icon components for demo
const AppleIcon = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6-73.6 0-139.5 43.4-176.4 107.9-75.2 130.5-19.3 322.7 53.9 428.8 35.7 51.9 78.1 108.9 133.5 107.5 53.6-1.4 73.9-34.9 139-34.9 65.5 0 84.1 34.9 140.2 35.2 58.1.3 95-52.6 130.6-104.9 41.2-60.2 58.1-118.5 59-121.5-.3-.3-113.5-43.7-113.9-179.6zM616 266.8c36.3-43.8 60.8-104.8 54.1-165.6-53.1 2.2-117.3 35.2-155.3 80.6-32.9 39.4-61.9 101.9-54.6 162.4 58.5 4.5 119-33.6 155.8-77.4z" />
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path d="M667 220.7l61.5-86.7c3.4-4.8 2.2-11.4-2.6-14.8-4.8-3.4-11.4-2.2-14.8 2.6l-63 88.8c-42.3-19-89.4-29.8-139.1-29.8s-96.8 10.8-139.1 29.8l-63.1-88.8c-3.4-4.8-10-6-14.8-2.6-4.8 3.4-6 10-2.6 14.8l61.5 86.7C246 295.3 173 408.8 168.8 538.2h683.4c-4.2-129.4-77.2-242.9-185.2-317.5zM356.5 450.4c-22.3 0-40.4-18.1-40.4-40.4 0-22.3 18.1-40.4 40.4-40.4 22.3 0 40.4 18.1 40.4 40.4 0 22.3-18.1 40.4-40.4 40.4zm308 0c-22.3 0-40.4-18.1-40.4-40.4 0-22.3 18.1-40.4 40.4-40.4 22.3 0 40.4 18.1 40.4 40.4 0 22.3-18.1 40.4-40.4 40.4zM168.8 584.5h683.4c4.2 129.4 77.2 242.9 185.2 317.5l-61.5 86.7c-3.4 4.8-2.2 11.4 2.6 14.8 4.8 3.4 11.4 2.2 14.8-2.6l63-88.8c42.3 19 89.4 29.8 139.1 29.8s96.8-10.8 139.1-29.8l63.1 88.8c3.4 4.8 10 6 14.8 2.6 4.8-3.4 6-10 2.6-14.8l-61.5-86.7c108-74.6 181-188.1 185.2-317.5z" />
  </svg>
);

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

const TabsDoc = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>('top');
  
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  const itemsWithIcon = [
    {
      key: '1',
      label: 'Tab 1',
      icon: <AppleIcon />,
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      icon: <AndroidIcon />,
      children: 'Content of Tab Pane 2',
    },
  ];

  const [activeKey, setActiveKey] = useState('1');
  const [tabs, setTabs] = useState([
    { label: 'Tab 1', children: 'Content of Tab 1', key: '1' },
    { label: 'Tab 2', children: 'Content of Tab 2', key: '2' },
    { label: 'Tab 3', children: 'Content of Tab 3', key: '3', closable: false },
  ]);

  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      const newActiveKey = `newTab${tabs.length + 1}`;
      const newPanes = [...tabs, { label: 'New Tab', children: 'Content of New Tab', key: newActiveKey }];
      setTabs(newPanes);
      setActiveKey(newActiveKey);
    } else {
      const targetIndex = tabs.findIndex((pane) => pane.key === targetKey);
      const newPanes = tabs.filter((pane) => pane.key !== targetKey);
      if (newPanes.length && targetKey === activeKey) {
        const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
        setActiveKey(key);
      }
      setTabs(newPanes);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 600, marginBottom: '16px' }}>Tabs 标签页</h1>
      <p style={{ fontSize: '16px', color: '#00000073', marginBottom: '40px' }}>
        选项卡切换组件。提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
      </p>

      <ExampleSection
        title="基本用法"
        description="默认选中第一项。"
        preview={
          <Tabs defaultActiveKey="1" items={items} />
        }
        code={`
import { Tabs } from 'soli-ui';

const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

<Tabs defaultActiveKey="1" items={items} />
`}
      />

      <ExampleSection
        title="禁用"
        description="禁用某一项。"
        preview={
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: '1',
                label: 'Tab 1',
                children: 'Content of Tab Pane 1',
              },
              {
                key: '2',
                label: 'Tab 2',
                disabled: true,
                children: 'Content of Tab Pane 2',
              },
              {
                key: '3',
                label: 'Tab 3',
                children: 'Content of Tab Pane 3',
              },
            ]}
          />
        }
        code={`
<Tabs
  defaultActiveKey="1"
  items={[
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      disabled: true,
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ]}
/>
`}
      />

      <ExampleSection
        title="图标"
        description="有图标的标签。"
        preview={
          <Tabs defaultActiveKey="1" items={itemsWithIcon} />
        }
        code={`
const AppleIcon = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6-73.6 0-139.5 43.4-176.4 107.9-75.2 130.5-19.3 322.7 53.9 428.8 35.7 51.9 78.1 108.9 133.5 107.5 53.6-1.4 73.9-34.9 139-34.9 65.5 0 84.1 34.9 140.2 35.2 58.1.3 95-52.6 130.6-104.9 41.2-60.2 58.1-118.5 59-121.5-.3-.3-113.5-43.7-113.9-179.6zM616 266.8c36.3-43.8 60.8-104.8 54.1-165.6-53.1 2.2-117.3 35.2-155.3 80.6-32.9 39.4-61.9 101.9-54.6 162.4 58.5 4.5 119-33.6 155.8-77.4z" />
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path d="M667 220.7l61.5-86.7c3.4-4.8 2.2-11.4-2.6-14.8-4.8-3.4-11.4-2.2-14.8 2.6l-63 88.8c-42.3-19-89.4-29.8-139.1-29.8s-96.8 10.8-139.1 29.8l-63.1-88.8c-3.4-4.8-10-6-14.8-2.6-4.8 3.4-6 10-2.6 14.8l61.5 86.7C246 295.3 173 408.8 168.8 538.2h683.4c-4.2-129.4-77.2-242.9-185.2-317.5zM356.5 450.4c-22.3 0-40.4-18.1-40.4-40.4 0-22.3 18.1-40.4 40.4-40.4 22.3 0 40.4 18.1 40.4 40.4 0 22.3-18.1 40.4-40.4 40.4zm308 0c-22.3 0-40.4-18.1-40.4-40.4 0-22.3 18.1-40.4 40.4-40.4 22.3 0 40.4 18.1 40.4 40.4 0 22.3-18.1 40.4-40.4 40.4zM168.8 584.5h683.4c4.2 129.4 77.2 242.9 185.2 317.5l-61.5 86.7c-3.4 4.8-2.2 11.4 2.6 14.8 4.8 3.4 11.4 2.2 14.8-2.6l63-88.8c42.3 19 89.4 29.8 139.1 29.8s96.8-10.8 139.1-29.8l63.1 88.8c3.4 4.8 10 6 14.8 2.6 4.8-3.4 6-10 2.6-14.8l-61.5-86.7c108-74.6 181-188.1 185.2-317.5z" />
  </svg>
);

const items = [
  {
    key: '1',
    label: 'Tab 1',
    icon: <AppleOutlined />,
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    icon: <AndroidOutlined />,
    children: 'Content of Tab Pane 2',
  },
];

<Tabs defaultActiveKey="1" items={items} />
`}
      />

      <ExampleSection
        title="位置"
        description="支持上下左右四个位置。"
        preview={
          <div>
            <div style={{ marginBottom: 16 }}>
              Position: 
              <select 
                value={tabPosition} 
                onChange={e => setTabPosition(e.target.value as TabPosition)}
                style={{ marginLeft: 8, padding: '4px 8px' }}
              >
                <option value="top">top</option>
                <option value="bottom">bottom</option>
                <option value="left">left</option>
                <option value="right">right</option>
              </select>
            </div>
            <Tabs tabPosition={tabPosition} items={items} />
          </div>
        }
        code={`
const [tabPosition, setTabPosition] = useState('top');

<Tabs tabPosition={tabPosition} items={items} />
`}
      />

      <ExampleSection
        title="卡片式页签"
        description="另一种样式的页签，不提供竖直模式。"
        preview={
          <Tabs type="card" items={items} />
        }
        code={`
<Tabs type="card" items={items} />
`}
      />

      <ExampleSection
        title="动态增减页签"
        description="只有卡片样式的页签支持新增和关闭选项。"
        preview={
          <Tabs
            type="editable-card"
            onChange={setActiveKey}
            activeKey={activeKey}
            onEdit={onEdit}
            items={tabs}
          tabBarExtraContent={
            <Button size="sm" onClick={() => onEdit('', 'add')}>Add</Button>
          }
        />
      }
      code={`
const [activeKey, setActiveKey] = useState('1');
const [tabs, setTabs] = useState([
  { label: 'Tab 1', children: 'Content of Tab 1', key: '1' },
  { label: 'Tab 2', children: 'Content of Tab 2', key: '2' },
  { label: 'Tab 3', children: 'Content of Tab 3', key: '3', closable: false },
]);

const onEdit = (targetKey, action) => {
  if (action === 'add') {
    add();
  } else {
    remove(targetKey);
  }
};

<Tabs
  type="editable-card"
  onChange={setActiveKey}
  activeKey={activeKey}
  onEdit={onEdit}
  items={tabs}
/>
`}
      />

      <ExampleSection
        title="分段式页签"
        description="用于在同一层级内容之间进行切换。"
        preview={
          <div style={{ padding: 24, background: '#f5f5f5', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h4 style={{ marginBottom: 8 }}>基础用法</h4>
              <Tabs type="segment" items={items} />
            </div>
            
            <div>
              <h4 style={{ marginBottom: 8 }}>不同尺寸 (Small / Default / Large)</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Tabs type="segment" size="small" items={items} />
                <Tabs type="segment" items={items} />
                <Tabs type="segment" size="large" items={items} />
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: 8 }}>预设颜色</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Tabs type="segment" segmentColor="primary" items={items} />
                <Tabs type="segment" segmentColor="success" items={items} />
                <Tabs type="segment" segmentColor="warning" items={items} />
                <Tabs type="segment" segmentColor="danger" items={items} />
                <Tabs type="segment" segmentColor="secondary" items={items} />
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: 8 }}>自定义颜色与高度</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Tabs type="segment" segmentColor="#722ed1" items={items} />
                <Tabs type="segment" segmentColor="#eb2f96" tabHeight={50} items={items} />
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: 8 }}>自定义圆角 (Radius)</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Tabs type="segment" radius="full" items={items} />
                <Tabs type="segment" radius="lg" items={items} />
                <Tabs type="segment" radius="md" items={items} />
                <Tabs type="segment" radius="sm" items={items} />
                <Tabs type="segment" radius="none" items={items} />
              </div>
            </div>
          </div>
        }
        code={`
// 基础用法
<Tabs type="segment" items={items} />

// 不同尺寸
<Tabs type="segment" size="small" items={items} />
<Tabs type="segment" items={items} />
<Tabs type="segment" size="large" items={items} />

// 预设颜色
<Tabs type="segment" segmentColor="primary" items={items} />
<Tabs type="segment" segmentColor="success" items={items} />
<Tabs type="segment" segmentColor="warning" items={items} />
<Tabs type="segment" segmentColor="danger" items={items} />
<Tabs type="segment" segmentColor="secondary" items={items} />

// 自定义颜色与高度
<Tabs type="segment" segmentColor="#722ed1" items={items} />
<Tabs type="segment" segmentColor="#eb2f96" tabHeight={50} items={items} />

// 自定义圆角
<Tabs type="segment" radius="full" items={items} />
<Tabs type="segment" radius="lg" items={items} />
<Tabs type="segment" radius="md" items={items} />
<Tabs type="segment" radius="sm" items={items} />
<Tabs type="segment" radius="none" items={items} />
`}
      />

      <ExampleSection
        title="Tailwind 支持"
        description="支持使用 Tailwind CSS 类名自定义样式。"
        preview={
          <div className="flex flex-col gap-4">
            <Tabs
              defaultActiveKey="1"
              items={items}
              className="!bg-gray-50 !p-4 !rounded-lg border border-gray-200"
            />
            <Tabs
              defaultActiveKey="1"
              items={items}
              type="card"
              className="!bg-blue-50 !p-4 !rounded-lg"
            />
          </div>
        }
        code={`
<Tabs
  defaultActiveKey="1"
  items={items}
  className="!bg-gray-50 !p-4 !rounded-lg border border-gray-200"
/>
<Tabs
  defaultActiveKey="1"
  items={items}
  type="card"
  className="!bg-blue-50 !p-4 !rounded-lg"
/>
`}
      />

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>API</h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Tabs</h3>
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
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>activeKey</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>当前激活 tab 面板的 key</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>defaultActiveKey</code></td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>初始化选中面板的 key，如果没有设置 activeKey</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>string</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>items</code></td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>配置选项卡内容</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>TabItem[]</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>[]</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>onChange</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>切换面板的回调</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>(activeKey: string) =&gt; void</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>onTabClick</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>tab 被点击的回调</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>(key: string, event: React.MouseEvent) =&gt; void</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>onEdit</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>新增和删除页签的回调，在 type="editable-card" 时有效</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>(targetKey: string, action: 'add' | 'remove') =&gt; void</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>type</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>页签的基本样式，可选 line、card、editable-card、segment</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>'line' | 'card' | 'editable-card' | 'segment'</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>'line'</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>tabPosition</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>页签位置</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>'top' | 'right' | 'bottom' | 'left'</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>'top'</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>size</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>页签大小，仅在 type="segment" 时有效</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>'large' | 'default' | 'small'</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>'default'</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>segmentColor</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>分段式页签的颜色，支持预设颜色和自定义颜色值，仅在 type="segment" 时有效</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>string</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>'default'</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>tabHeight</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义页签高度，仅在 type="segment" 时有效</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>string | number</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>radius</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义分段式页签的圆角，仅在 type="segment" 时有效</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>'none' | 'sm' | 'md' | 'lg' | 'full'</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>'md'</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>tabBarExtraContent</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>tab bar 上额外的元素</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>React.ReactNode</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code></td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>容器类名</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
          </tbody>
        </table>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>TabItem</h3>
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
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>key</code></td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>对应 activeKey</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>string</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>label</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>选项卡头显示文字</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>React.ReactNode</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>children</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>选项卡头显示内容</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>React.ReactNode</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>disabled</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否禁用</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>boolean</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>false</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>closable</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否可关闭</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>boolean</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>icon</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>选项卡图标</td>
              <td style={{ padding: '12px 16px', color: '#000000d9' }}>React.ReactNode</td>
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

export default TabsDoc;
