import React, { useState } from 'react';
import { Table, Tag } from 'soli-ui';
import type { ColumnType } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnType<DataType>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div style={{ display: 'flex', gap: '16px' }}>
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const BasicExample = () => <Table columns={columns} dataSource={data} />;

const SelectionExample = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    showSelectedInfo: true,
    renderTitle: (count: number) => (
      <span>
        Selected {count} items
      </span>
    ),
  };

  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};

const SelectionWithoutInfoExample = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    showSelectedInfo: false,
  };

  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};

const FixedHeaderExample = () => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(50);

  const dataSource = Array.from({ length: 100 }, (_, i) => ({
    key: i.toString(),
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    tags: ['nice', 'developer'],
  }));

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={{ y: 240 }}
      pagination={{
        current,
        pageSize,
        total: dataSource.length,
        onChange: (page, size) => {
          setCurrent(page);
          setPageSize(size);
        },
        pageSizeOptions: [10, 20, 50, 100],
        showSizeChanger: true,
      }}
    />
  );
};

const FixedColumnsExample = () => {
  const columns: ColumnType<DataType>[] = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
    { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
    { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
    { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
    { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
    { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
    { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
    { title: 'Column 8', dataIndex: 'address', key: '8', width: 150 },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(50);

  const dataSource = Array.from({ length: 100 }, (_, i) => ({
    key: i.toString(),
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    tags: ['nice', 'developer'],
  }));

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={{ x: 1500, y: 300 }}
      pagination={{
        current,
        pageSize,
        total: dataSource.length,
        onChange: (page, size) => {
          setCurrent(page);
          setPageSize(size);
        },
        pageSizeOptions: [10, 20, 50, 100],
        showSizeChanger: true,
      }}
    />
  );
};

const BorderlessExample = () => <Table columns={columns} dataSource={data} variant="borderless" />;

const TailwindSupportExample = () => (
  <Table 
    columns={columns} 
    dataSource={data} 
    className="border-2 border-indigo-100 rounded-lg shadow-sm"
  />
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

const TableDoc: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '38px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Table 表格</h1>
        <p style={{ fontSize: '16px', color: '#00000073', lineHeight: '1.8' }}>展示行列数据。</p>
      </div>

      <ExampleSection
        title="基本用法"
        description="简单的表格，最后一列是各种操作。"
        preview={<BasicExample />}
        code={`import React from 'react';
import { Table, Tag } from 'soli-ui';
import type { ColumnType } from 'soli-ui';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnType<DataType>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div style={{ display: 'flex', gap: '16px' }}>
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const App = () => <Table columns={columns} dataSource={data} />;

export default App;`}
      />

      <ExampleSection
        title="可选择"
        description="第一列是联动的选择框。"
        preview={<SelectionExample />}
        code={`import React, { useState } from 'react';
import { Table } from 'soli-ui';

// ... columns & data definition

const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};

export default App;`}
      />

      <ExampleSection
        title="可选择（不显示选中信息）"
        description="通过 rowSelection.showSelectedInfo = false 隐藏表格上方的「已选 x 条」信息条。"
        preview={<SelectionWithoutInfoExample />}
        code={`const rowSelection = {
  selectedRowKeys,
  onChange: onSelectChange,
  showSelectedInfo: false,  // 不显示选中信息条
};

return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;`}
      />

      <ExampleSection
        title="固定表头"
        description="方便一页内展示大量数据。"
        preview={<FixedHeaderExample />}
        code={`import React from 'react';
import { Table } from 'soli-ui';

const columns = [...]; // same as basic

const dataSource = Array.from({ length: 100 }, (_, i) => ({
  key: i.toString(),
  name: \`Edward King \${i}\`,
  age: 32,
  address: \`London, Park Lane no. \${i}\`,
  tags: ['nice', 'developer'],
}));

const App = () => (
  <Table
    columns={columns}
    dataSource={dataSource}
    scroll={{ y: 240 }}
    pagination={{ pageSize: 50 }}
  />
);

export default App;`}
      />

      <ExampleSection 
        title="固定列"
        description="对于列数很多的表格，可以固定前后的列，横向滚动查看其它数据。"
        preview={<FixedColumnsExample />}
        code={`import React from 'react';
import { Table } from 'soli-ui';

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8', width: 150 },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`,
  });
}

const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{ x: 1500, y: 300 }}
    pagination={{ pageSize: 50 }}
  />
);

export default App;`}
      />

      <ExampleSection
        title="无边框"
        description="无边框的表格容器。"
        preview={<BorderlessExample />}
        code={`import React from 'react';
import { Table } from 'soli-ui';

const App = () => <Table columns={columns} dataSource={data} variant="borderless" />;

export default App;`}
      />

      <ExampleSection
        title="Tailwind CSS 支持"
        description="通过 className 属性，可以使用 Tailwind CSS 类名来自定义表格容器的样式，例如自定义边框、圆角和阴影等。"
        preview={<TailwindSupportExample />}
        code={`import React from 'react';
import { Table } from 'soli-ui';

const App = () => (
  <Table 
    columns={columns} 
    dataSource={data} 
    className="border-2 border-indigo-100 rounded-lg shadow-sm"
  />
);

export default App;`}
      />

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
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Table</h3>
          <div style={{ 
            background: '#fafafa',
            borderRadius: '8px',
            padding: '24px',
            border: '1px solid #f0f0f0',
            overflowX: 'auto'
          }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
              minWidth: '600px'
            }}>
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
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>columns</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>表格列的配置描述</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ColumnType[]</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>dataSource</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>数据数组</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>object[]</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>rowKey</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>表格行 key 的取值</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string | function</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'key'</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>variant</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>表格变体</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'default' | 'borderless'</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'default'</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>bordered</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否展示外边框和列边框</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>striped</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否展示斑马纹</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>loading</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>页面是否加载中</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>pagination</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>分页器配置</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>object</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>rowSelection</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>表格行是否可选择。子属性 <code style={{ fontSize: '12px' }}>showSelectedInfo</code> 控制是否显示「已选 x 条」信息条（默认 true）</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>object</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>scroll</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>滚动区域设置</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{`{ x: number | string, y: number | string }`}</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义类名</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>style</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义样式</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>React.CSSProperties</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Column</h3>
          <div style={{ 
            background: '#fafafa',
            borderRadius: '8px',
            padding: '24px',
            border: '1px solid #f0f0f0',
            overflowX: 'auto'
          }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
              minWidth: '600px'
            }}>
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
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>title</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>列头显示文字</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>dataIndex</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>列数据在数据项中对应的 key</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>key</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>React 需要的 key</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>align</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>设置列的对齐方式</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'left' | 'right' | 'center'</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'left'</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>width</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>列宽度</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string | number</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>fixed</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>列是否固定</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'left' | 'right'</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>render</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>生成复杂数据的渲染函数</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>function(text, record, index)</code></td>
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

export default TableDoc;
