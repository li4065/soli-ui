import React from 'react';
import { Tree } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const treeData = [
  {
    title: 'parent 1',
    id: '0-0',
    children: [
      {
        title: 'parent 1-0',
        id: '0-0-0',
        children: [
          { title: 'leaf', id: '0-0-0-0' },
          { title: 'leaf', id: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        id: '0-0-1',
        children: [{ title: 'leaf', id: '0-0-1-0' }],
      },
    ],
  },
];

const folderTreeData = [
  {
    title: 'Documents',
    id: 'docs',
    children: [
      {
        title: 'Work',
        id: 'work',
        children: [
          { title: 'Report.docx', id: 'report' },
          { title: 'Budget.xlsx', id: 'budget' },
        ],
      },
      {
        title: 'Personal',
        id: 'personal',
        children: [{ title: 'Photos', id: 'photos' }],
      },
    ],
  },
];

const customIconData = [
  {
    title: 'Application',
    id: 'app',
    icon: <span style={{ fontSize: '16px' }}>📱</span>,
    children: [
      { 
        title: 'Settings', 
        id: 'settings', 
        icon: <span style={{ fontSize: '16px' }}>⚙️</span> 
      },
      { 
        title: 'Notifications', 
        id: 'notifications', 
        icon: <span style={{ fontSize: '16px' }}>🔔</span> 
      },
    ],
  },
];

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

const TreeDoc: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '38px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Tree 树形控件</h1>
        <p style={{ fontSize: '16px', color: '#00000073', lineHeight: '1.8' }}>多层次的结构列表。</p>
      </div>

      <ExampleSection
        title="基本用法"
        description="最简单的用法，展示可展开、收起、选择的树形结构。"
        preview={<Tree data={treeData} defaultExpandedKeys={['0-0', '0-0-0']} />}
        code={`import React from 'react';
import { Tree } from 'soli-ui';

const treeData = [
  {
    title: 'parent 1',
    id: '0-0',
    children: [
      {
        title: 'parent 1-0',
        id: '0-0-0',
        children: [
          { title: 'leaf', id: '0-0-0-0' },
          { title: 'leaf', id: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        id: '0-0-1',
        children: [{ title: 'leaf', id: '0-0-1-0' }],
      },
    ],
  },
];

const App = () => (
  <Tree 
    data={treeData} 
    defaultExpandedKeys={['0-0', '0-0-0']} 
  />
);

export default App;`}
      />

      <ExampleSection
        title="显示文件夹图标"
        description="设置 showFolderIcon 属性可以显示文件夹图标，区分父节点和叶子节点。"
        preview={<Tree data={folderTreeData} showFolderIcon defaultExpandedKeys={['docs', 'work']} />}
        code={`import React from 'react';
import { Tree } from 'soli-ui';

const folderTreeData = [
  {
    title: 'Documents',
    id: 'docs',
    children: [
      {
        title: 'Work',
        id: 'work',
        children: [
          { title: 'Report.docx', id: 'report' },
          { title: 'Budget.xlsx', id: 'budget' },
        ],
      },
      {
        title: 'Personal',
        id: 'personal',
        children: [{ title: 'Photos', id: 'photos' }],
      },
    ],
  },
];

const App = () => (
  <Tree 
    data={folderTreeData} 
    showFolderIcon 
    defaultExpandedKeys={['docs', 'work']} 
  />
);

export default App;`}
      />

      <ExampleSection
        title="自定义图标"
        description="可以通过数据中的 icon 属性自定义节点图标，或者通过 expandIcon/collapseIcon 属性自定义展开/收起图标。"
        preview={
          <Tree 
            data={customIconData} 
            defaultExpandedKeys={['app']}
            expandIcon={<span>➕</span>}
            collapseIcon={<span>➖</span>}
          />
        }
        code={`import React from 'react';
import { Tree } from 'soli-ui';

const customIconData = [
  {
    title: 'Application',
    id: 'app',
    icon: <span>📱</span>,
    children: [
      { title: 'Settings', id: 'settings', icon: <span>⚙️</span> },
      { title: 'Notifications', id: 'notifications', icon: <span>🔔</span> },
    ],
  },
];

const App = () => (
  <Tree 
    data={customIconData} 
    defaultExpandedKeys={['app']}
    expandIcon={<span>➕</span>}
    collapseIcon={<span>➖</span>}
  />
);

export default App;`}
      />

      <ExampleSection
        title="Tailwind Support"
        description="支持使用 Tailwind CSS 自定义树节点的样式。"
        preview={
          <div className="p-4 border rounded-lg bg-gray-50">
            <Tree 
              data={treeData} 
              className="!font-medium !text-gray-700"
              defaultExpandedKeys={['0-0']}
            />
          </div>
        }
        code={`import React from 'react';
import { Tree } from 'soli-ui';

const App = () => (
  <div className="p-4 border rounded-lg bg-gray-50">
    <Tree 
      data={treeData} 
      className="!font-medium !text-gray-700"
      defaultExpandedKeys={['0-0']}
    />
  </div>
);

export default App;`}
      />

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>API</h2>
        
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Tree Props</h3>
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
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>data</code></td>
                  <td style={{ padding: '12px 16px' }}>树形数据</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>TreeDataNode[]</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>defaultExpandedKeys</code></td>
                  <td style={{ padding: '12px 16px' }}>默认展开的节点 ID 数组</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>string[]</code></td>
                  <td style={{ padding: '12px 16px' }}>[]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>defaultSelectedKey</code></td>
                  <td style={{ padding: '12px 16px' }}>默认选中的节点 ID</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>string</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>showFolderIcon</code></td>
                  <td style={{ padding: '12px 16px' }}>是否显示文件夹图标</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px' }}>false</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>expandIcon</code></td>
                  <td style={{ padding: '12px 16px' }}>自定义展开图标</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>ReactNode</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>collapseIcon</code></td>
                  <td style={{ padding: '12px 16px' }}>自定义收起图标</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>ReactNode</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>onSelect</code></td>
                  <td style={{ padding: '12px 16px' }}>节点被选中时的回调</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>{'(key: string, node: TreeDataNode) => void'}</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>onExpand</code></td>
                  <td style={{ padding: '12px 16px' }}>节点展开/收起时的回调</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>{'(keys: string[], node: TreeDataNode) => void'}</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
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
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>TreeDataNode</h3>
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
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>id</code></td>
                  <td style={{ padding: '12px 16px' }}>唯一标识</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>string</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>title</code></td>
                  <td style={{ padding: '12px 16px' }}>节点内容</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>ReactNode</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>children</code></td>
                  <td style={{ padding: '12px 16px' }}>子节点</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>TreeDataNode[]</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>icon</code></td>
                  <td style={{ padding: '12px 16px' }}>自定义节点图标</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>ReactNode</code></td>
                  <td style={{ padding: '12px 16px' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>selectable</code></td>
                  <td style={{ padding: '12px 16px' }}>是否可选</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px' }}>true</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>disabled</code></td>
                  <td style={{ padding: '12px 16px' }}>是否禁用</td>
                  <td style={{ padding: '12px 16px' }}><code style={{ fontSize: '12px' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px' }}>false</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeDoc;
