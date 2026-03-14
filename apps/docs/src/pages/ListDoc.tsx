import React, { useState } from 'react';
import { List, ListItem, Button } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const data = [
  {
    title: 'Soli Title 1',
    description: 'Soli, a design language for background applications, is refined by UED Team',
    avatar: 'https://q9.itc.cn/q_70/images03/20250730/7e535ac6918d44c4a0ab740ed9aa349d.jpeg',
  },
  {
    title: 'Soli Title 2',
    description: 'Soli, a design language for background applications, is refined by UED Team',
    avatar: 'https://q9.itc.cn/q_70/images03/20250730/7e535ac6918d44c4a0ab740ed9aa349d.jpeg',
  },
  {
    title: 'Soli Title 3',
    description: 'Soli, a design language for background applications, is refined by UED Team',
    avatar: 'https://q9.itc.cn/q_70/images03/20250730/7e535ac6918d44c4a0ab740ed9aa349d.jpeg',
  },
  {
    title: 'Soli Title 4',
    description: 'Soli, a design language for background applications, is refined by UED Team',
    avatar: 'https://q9.itc.cn/q_70/images03/20250730/7e535ac6918d44c4a0ab740ed9aa349d.jpeg',
  },
];

const BasicExample: React.FC = () => {
  return (
    <List
      data={data}
      renderItem={(item) => (
        <ListItem
          title={item.title}
          description={item.description}
          avatar={<img src={item.avatar} alt="avatar" style={{ width: 40, height: 40, borderRadius: '50%' }} />}
          actions={[<a key="edit">Edit</a>, <a key="more">More</a>]}
        />
      )}
    />
  );
};

const VariantExample: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: 16 }}>Outlined (Default)</h4>
        <List
          data={data.slice(0, 2)}
          variant="outlined"
          renderItem={(item) => (
            <ListItem title={item.title} description={item.description} />
          )}
        />
      </div>
      <div>
        <h4 style={{ marginBottom: 16 }}>Elevated</h4>
        <List
          data={data.slice(0, 2)}
          variant="elevated"
          renderItem={(item) => (
            <ListItem title={item.title} description={item.description} />
          )}
        />
      </div>
      <div>
        <h4 style={{ marginBottom: 16 }}>Filled</h4>
        <List
          data={data.slice(0, 2)}
          variant="filled"
          renderItem={(item) => (
            <ListItem title={item.title} description={item.description} />
          )}
        />
      </div>
      <div>
        <h4 style={{ marginBottom: 16 }}>Borderless</h4>
        <List
          data={data.slice(0, 2)}
          variant="borderless"
          renderItem={(item) => (
            <ListItem title={item.title} description={item.description} />
          )}
        />
      </div>
    </div>
  );
};

const GridExample: React.FC = () => {
  return (
    <List
      layout="grid"
      gridColumns={2}
      data={data}
      renderItem={(item) => (
        <ListItem
          bordered={true}
          style={{ height: '100%' }}
          title={item.title}
          description={item.description}
        />
      )}
    />
  );
};

const LoadMoreExample: React.FC = () => {
  const [listData, setListData] = useState(data.slice(0, 2));
  const [loading, setLoading] = useState(false);

  const onLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setListData(data);
      setLoading(false);
    }, 2000);
  };

  const loadMore = !loading && listData.length < data.length ? (
    <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
      <Button onClick={onLoadMore}>Loading More</Button>
    </div>
  ) : null;

  return (
    <List
      loading={loading}
      data={listData}
      footer={loadMore}
      renderItem={(item) => (
        <ListItem title={item.title} description={item.description} />
      )}
    />
  );
};

const TailwindExample: React.FC = () => {
  return (
    <List
      className="bg-blue-50 border-2 border-blue-200 rounded-xl shadow-lg"
      data={data.slice(0, 2)}
      renderItem={(item) => (
        <ListItem
          className="hover:bg-blue-100 transition-colors duration-300"
          title={<span className="text-blue-700 font-bold">{item.title}</span>}
          description={<span className="text-blue-500">{item.description}</span>}
          actions={[
            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
          ]}
        />
      )}
    />
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

const ListDoc: React.FC = () => {
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
          List 列表
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          通用列表。
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
          title="基础用法"
          description="基础列表。"
          preview={<BasicExample />}
          code={`import { List, ListItem } from 'soli-ui';

const data = [
  {
    title: 'Soli Title 1',
    description: 'Soli, a design language for background applications, is refined by Ant UED Team',
    avatar: 'https://joeschmoe.io/api/v1/random',
  },
  // ...
];

export default function App() {
  return (
    <List
      data={data}
      renderItem={(item) => (
        <ListItem
          title={item.title}
          description={item.description}
          avatar={<img src={item.avatar} alt="avatar" style={{ width: 40, height: 40, borderRadius: '50%' }} />}
          actions={[<a key="edit">Edit</a>, <a key="more">More</a>]}
        />
      )}
    />
  );
}`}
        />

        <ExampleSection 
          title="多种形态"
          description="支持 outlined（默认）、elevated、filled、borderless 四种形态。"
          preview={<VariantExample />}
          code={`import { List, ListItem } from 'soli-ui';

export default function App() {
  return (
    <>
      <List variant="outlined" data={data} renderItem={...} />
      <List variant="elevated" data={data} renderItem={...} />
      <List variant="filled" data={data} renderItem={...} />
      <List variant="borderless" data={data} renderItem={...} />
    </>
  );
}`}
        />

        <ExampleSection 
          title="栅格列表"
          description="通过 layout='grid' 和 gridColumns 属性实现栅格列表。"
          preview={<GridExample />}
          code={`import { List, ListItem } from 'soli-ui';

export default function App() {
  return (
    <List
      layout="grid"
      gridColumns={2}
      data={data}
      renderItem={(item) => (
        <ListItem
          bordered={true}
          style={{ height: '100%' }}
          title={item.title}
          description={item.description}
        />
      )}
    />
  );
}`}
        />

        <ExampleSection 
          title="加载更多"
          description="加载状态和加载更多示例。"
          preview={<LoadMoreExample />}
          code={`import { List, ListItem, Button } from 'soli-ui';

export default function App() {
  const [loading, setLoading] = useState(false);
  // ... logic
  
  return (
    <List
      loading={loading}
      data={listData}
      footer={<Button onClick={onLoadMore}>Loading More</Button>}
      renderItem={(item) => (
        <ListItem title={item.title} description={item.description} />
      )}
    />
  );
}`}
        />

        <ExampleSection 
          title="Tailwind CSS 支持"
          description="使用 Tailwind CSS 自定义列表和列表项样式。"
          preview={<TailwindExample />}
          code={`import { List, ListItem } from 'soli-ui';

export default function App() {
  return (
    <List
      className="bg-blue-50 border-2 border-blue-200 rounded-xl shadow-lg"
      data={data}
      renderItem={(item) => (
        <ListItem
          className="hover:bg-blue-100 transition-colors duration-300"
          title={<span className="text-blue-700 font-bold">{item.title}</span>}
          description={<span className="text-blue-500">{item.description}</span>}
          actions={[
            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
          ]}
        />
      )}
    />
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
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>List</h3>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>data</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>列表数据源</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>any[]</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>[]</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>renderItem</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义列表项渲染函数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(item, index) => ReactNode'}</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>variant</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>列表形态</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'outlined' | 'elevated' | 'filled' | 'borderless'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>'outlined'</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>layout</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>布局方式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'vertical' | 'horizontal' | 'grid'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>'vertical'</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>loading</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否加载中</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>false</td>
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

          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', marginTop: '32px', color: '#000000d9' }}>ListItem</h3>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>title</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标题</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>description</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>描述</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>avatar</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>头像</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>actions</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>列表操作组</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode[]</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>[]</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDoc;
