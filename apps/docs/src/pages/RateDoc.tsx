import React, { useState } from 'react';
import { Rate } from 'soli-ui';
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

const BasicExample = () => {
  const [value, setValue] = useState(3);
  return (
    <Rate value={value} onChange={setValue} />
  );
};

const HalfStarExample = () => {
  return (
    <Rate allowHalf defaultValue={2.5} />
  );
};

const ReadOnlyExample = () => {
  return (
    <Rate disabled defaultValue={2} />
  );
};

const CustomCountExample = () => {
  return (
    <Rate count={10} defaultValue={5} />
  );
};

const ShowScoreExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Rate defaultValue={3} showScore />
      <Rate defaultValue={4} count={10} showScore />
    </div>
  );
};

const CustomCharacterExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Rate character="A" allowHalf style={{ fontSize: 36 }} />
      <Rate character="好" allowHalf />
    </div>
  );
};

const TailwindExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="mr-2 text-sm text-gray-500">Red Stars:</span>
        <Rate className="!text-red-500" defaultValue={3} />
      </div>
      <div>
        <span className="mr-2 text-sm text-gray-500">Blue Stars:</span>
        <Rate className="!text-blue-500" defaultValue={4} />
      </div>
      <div>
        <span className="mr-2 text-sm text-gray-500">Large Green Stars:</span>
        <Rate className="!text-green-500 text-3xl" defaultValue={5} />
      </div>
    </div>
  );
};

const RateDoc: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>Rate 评分</h1>
      <p style={{ marginBottom: '40px', fontSize: '16px', color: '#666' }}>
        评分组件。
      </p>

      <ExampleSection
        title="基本用法"
        description="最简单的用法。"
        preview={<BasicExample />}
        code={`import React, { useState } from 'react';
import { Rate } from 'soli-ui';

const App = () => {
  const [value, setValue] = useState(3);
  return (
    <Rate value={value} onChange={setValue} />
  );
};`}
      />

      <ExampleSection
        title="半星"
        description="支持选中半星。"
        preview={<HalfStarExample />}
        code={`import { Rate } from 'soli-ui';

const App = () => (
  <Rate allowHalf defaultValue={2.5} />
);`}
      />

      <ExampleSection
        title="只读"
        description="只读，无法进行鼠标交互。"
        preview={<ReadOnlyExample />}
        code={`import { Rate } from 'soli-ui';

const App = () => (
  <Rate disabled defaultValue={2} />
);`}
      />

      <ExampleSection
        title="自定义字符"
        description="可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。"
        preview={<CustomCharacterExample />}
        code={`import { Rate } from 'soli-ui';

const App = () => (
  <>
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </>
);`}
      />
      
      <ExampleSection
        title="自定义数量"
        description="自定义星星数量。"
        preview={<CustomCountExample />}
        code={`import { Rate } from 'soli-ui';

const App = () => (
  <Rate count={10} defaultValue={5} />
);`}
      />

      <ExampleSection
        title="显示分数"
        description="显示当前分数。"
        preview={<ShowScoreExample />}
        code={`import { Rate } from 'soli-ui';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <Rate defaultValue={3} showScore />
    <Rate defaultValue={4} count={10} showScore />
  </div>
);`}
      />

      <ExampleSection
        title="Tailwind CSS 支持"
        description="支持通过 className 自定义颜色和大小。"
        preview={<TailwindExample />}
        code={`import { Rate } from 'soli-ui';

const App = () => (
  <div className="flex flex-col gap-4">
    <Rate className="!text-red-500" defaultValue={3} />
    <Rate className="!text-blue-500" defaultValue={4} />
    <Rate className="!text-green-500 text-3xl" defaultValue={5} />
  </div>
);`}
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

        <div style={{
          background: '#fafafa',
          borderRadius: '8px',
          padding: '24px',
          border: '1px solid #f0f0f0'
        }}>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>allowHalf</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否允许半选</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>character</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义字符</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>&lt;StarIcon /&gt;</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>count</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>star 总数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>5</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>defaultValue</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>默认值</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>0</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>disabled</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>只读，无法进行交互</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>value</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>当前数，受控值</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onChange</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>选择时的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>(value: number) =&gt; void</code></td>
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
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>starClassName</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义星星类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>showScore</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否显示分数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RateDoc;
