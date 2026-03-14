import React, { useState } from 'react';
import { Pagination } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

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

const BasicPaginationExample: React.FC = () => {
  const [current, setCurrent] = useState(1);
  return (
    <Pagination 
      current={current} 
      total={50} 
      onChange={setCurrent} 
    />
  );
};

const MorePagesExample: React.FC = () => {
  const [current, setCurrent] = useState(6);
  return (
    <Pagination 
      current={current} 
      total={500} 
      onChange={setCurrent} 
    />
  );
};

const SizeChangerExample: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  
  return (
    <Pagination 
      current={current} 
      total={500} 
      pageSize={pageSize}
      showSizeChanger
      onChange={setCurrent}
      onPageSizeChange={setPageSize}
    />
  );
};

const QuickJumperExample: React.FC = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Pagination 
        current={current} 
        total={500} 
        showQuickJumper
        onChange={setCurrent} 
      />
      <Pagination 
        current={current} 
        total={500} 
        showQuickJumper
        quickJumperType="simple"
        onChange={setCurrent} 
      />
    </div>
  );
};

const FullFeatureExample: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  
  return (
    <Pagination 
      current={current} 
      total={500} 
      pageSize={pageSize}
      showSizeChanger
      showQuickJumper
      pageSizeOptions={[10, 20, 50, 100]}
      onChange={setCurrent}
      onPageSizeChange={setPageSize}
    />
  );
};

const AlignExample: React.FC = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Pagination align="left" total={50} current={current} onChange={setCurrent} />
      <Pagination align="center" total={50} current={current} onChange={setCurrent} />
      <Pagination align="right" total={50} current={current} onChange={setCurrent} />
    </div>
  );
};

const ShowTotalExample: React.FC = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Pagination 
        total={50} 
        current={current} 
        onChange={setCurrent}
        showTotal={(total) => `Total ${total} items`} 
      />
      <Pagination 
        total={50} 
        current={current} 
        onChange={setCurrent}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} 
      />
      <Pagination 
        total={50} 
        current={current} 
        onChange={setCurrent}
        showTotal={false} 
      />
    </div>
  );
};

const PaginationDoc: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>Pagination 分页</h1>
      <p style={{ marginBottom: '40px', fontSize: '16px', color: '#666' }}>
        采用分页控制单页内的信息数量。
      </p>

      <ExampleSection
        title="基本用法"
        description="基础分页。"
        preview={<BasicPaginationExample />}
        code={`import { Pagination } from 'soli-ui';

const App = () => {
  const [current, setCurrent] = useState(1);
  return <Pagination current={current} total={50} onChange={setCurrent} />;
};`}
      />

      <ExampleSection
        title="更多页码"
        description="当页数较多时，会自动折叠。"
        preview={<MorePagesExample />}
        code={`import { Pagination } from 'soli-ui';

const App = () => {
  const [current, setCurrent] = useState(6);
  return <Pagination current={current} total={500} onChange={setCurrent} />;
};`}
      />

      <ExampleSection
        title="改变每页条数"
        description="可以切换每页显示的数量。"
        preview={<SizeChangerExample />}
        code={`import { Pagination } from 'soli-ui';

const App = () => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  
  return (
    <Pagination 
      current={current} 
      total={500} 
      pageSize={pageSize}
      showSizeChanger
      onChange={setCurrent}
      onPageSizeChange={setPageSize}
    />
  );
};`}
      />

      <ExampleSection
        title="快速跳转"
        description="可以快速跳转到特定页码。支持 default（带按钮）和 simple（回车跳转）两种模式。"
        preview={<QuickJumperExample />}
        code={`import { Pagination } from 'soli-ui';

const App = () => {
  const [current, setCurrent] = useState(1);
  return (
    <>
      <Pagination 
        current={current} 
        total={500} 
        showQuickJumper
        onChange={setCurrent} 
      />
      <Pagination 
        current={current} 
        total={500} 
        showQuickJumper
        quickJumperType="simple"
        onChange={setCurrent} 
      />
    </>
  );
};`}
      />

      <ExampleSection
        title="完整功能"
        description="组合使用所有功能。"
        preview={<FullFeatureExample />}
        code={`import { Pagination } from 'soli-ui';

const App = () => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  
  return (
    <Pagination 
      current={current} 
      total={500} 
      pageSize={pageSize}
      showSizeChanger
      showQuickJumper
      pageSizeOptions={[10, 20, 50, 100]}
      onChange={setCurrent}
      onPageSizeChange={setPageSize}
    />
  );
};`}
      />

      <ExampleSection
        title="对齐方式"
        description="通过 align 属性设置对齐方式。"
        preview={<AlignExample />}
        code={`<Pagination align="left" total={50} />
<Pagination align="center" total={50} />
<Pagination align="right" total={50} />`}
      />

      <ExampleSection
        title="总数展示"
        description="通过 showTotal 属性控制总数展示。"
        preview={<ShowTotalExample />}
        code={`<Pagination total={50} showTotal={(total) => \`Total \${total} items\`} />
<Pagination total={50} showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`} />
<Pagination total={50} showTotal={false} />`}
      />
      
      <div style={{ marginBottom: '48px', marginTop: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>API</h2>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>current</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>当前页数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>total</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>数据总数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>0</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>pageSize</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>每页条数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>10</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onChange</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>页码改变的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>(page: number) =&gt; void</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onPageSizeChange</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>pageSize 改变的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>(size: number) =&gt; void</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>showSizeChanger</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否展示 pageSize 切换器</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>showQuickJumper</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否可以快速跳转至某页</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>quickJumperType</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>快速跳转类型</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'default' | 'simple'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'default'</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>showTotal</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>用于显示数据总量和当前数据顺序</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean | (total, range) =&gt; ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>true</code></td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>align</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>对齐方式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'left' | 'center' | 'right'</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'center'</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaginationDoc;
