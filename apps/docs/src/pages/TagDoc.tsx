import React, { useState } from 'react';
import { Tag } from 'soli-ui';
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
        marginBottom: '16px', 
        color: '#00000073',
        fontSize: '14px'
      }}>
        {description}
      </p>
      <div style={{ 
        border: '1px solid #f0f0f0', 
        borderRadius: '2px' 
      }}>
        <div style={{ 
          padding: '42px 24px 50px', 
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          {preview}
        </div>
        <div style={{ position: 'relative' }}>
          <CodeBlock code={code} />
        </div>
      </div>
    </div>
  );
};

const BasicExample = () => {
  return (
    <div className="flex gap-2">
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://github.com/solidjs/solid" target="_blank" rel="noreferrer">
          Link
        </a>
      </Tag>
      <Tag closable>Closable</Tag>
      <Tag closable onClose={(e) => { e.preventDefault(); console.log('Clicked!'); }}>
        Prevent Default
      </Tag>
    </div>
  );
};

const ColorExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Tag color="default">Default</Tag>
        <Tag color="primary">Primary</Tag>
        <Tag color="success">Success</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="error">Error</Tag>
        <Tag color="processing">Processing</Tag>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </div>
    </div>
  );
};

const CheckableExample = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <div className="flex gap-2">
      <Tag checkable checked={checked1} onChange={setChecked1}>
        Tag 1
      </Tag>
      <Tag checkable checked={checked2} onChange={setChecked2}>
        Tag 2
      </Tag>
      <Tag checkable checked={checked3} onChange={setChecked3}>
        Tag 3
      </Tag>
    </div>
  );
};

const IconExample = () => {
  const TwitterIcon = () => (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
      <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.5A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a170.6 170.6 0 01-44.9 6.1c-10.9 0-21.6-1.1-32.2-3.2 21.6 67.7 84.7 117 158.8 118.4-58.3 45.7-131.5 72.9-211.2 72.9-13.7 0-27.2-.8-40.6-2.3 75.3 48.3 164.7 76.4 260.6 76.4 312.7 0 483.7-259.1 483.7-483.7 0-7.4-.2-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-89.9z" />
    </svg>
  );

  const YoutubeIcon = () => (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
      <path d="M880 298.4a76.06 76.06 0 00-53.6-54.1C779 231.4 512 231.4 512 231.4s-267 0-314.4 12.9c-26.2 7.1-46.7 27.8-53.6 54.1C131 345.8 131 448 131 448s0 102.2 13 149.6c6.9 26.3 27.4 47 53.6 54.1C325.3 664.6 512 664.6 512 664.6s267 0 314.4-12.9c26.2-7.1 46.7-27.8 53.6-54.1 13-47.4 13-149.6 13-149.6s0-102.2-13-149.6zM415.4 532.3V363.7l150.3 84.3-150.3 84.3z" />
    </svg>
  );

  return (
    <div className="flex gap-2">
      <Tag icon={<TwitterIcon />} color="#55acee">
        Twitter
      </Tag>
      <Tag icon={<YoutubeIcon />} color="#cd201f">
        Youtube
      </Tag>
    </div>
  );
};

const TailwindExample = () => {
  return (
    <div className="flex gap-2">
      <Tag className="!bg-purple-100 !text-purple-600 !border-purple-300">
        Tailwind Purple
      </Tag>
      <Tag className="!bg-indigo-100 !text-indigo-600 !border-indigo-300 !rounded-full">
        Tailwind Indigo Round
      </Tag>
    </div>
  );
};

const TagDoc: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>Tag 标签</h1>
      <p style={{ marginBottom: '40px', fontSize: '16px', color: '#666' }}>
        进行标记和分类的小标签。
      </p>

      <ExampleSection
        title="基本用法"
        description="基本标签的用法，可以通过 closable 设置为可关闭，也可通过 href 转为链接。"
        preview={<BasicExample />}
        code={`import { Tag } from 'soli-ui';

const App = () => (
  <div className="flex gap-2">
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/solidjs/solid" target="_blank" rel="noreferrer">
        Link
      </a>
    </Tag>
    <Tag closable>Closable</Tag>
    <Tag closable onClose={(e) => { e.preventDefault(); console.log('Clicked!'); }}>
      Prevent Default
    </Tag>
  </div>
);`}
      />

      <ExampleSection
        title="多彩标签"
        description="我们添加了多种预设色彩的标签样式，以其代表不同的语义。"
        preview={<ColorExample />}
        code={`import { Tag } from 'soli-ui';

const App = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-2 flex-wrap">
      <Tag color="default">Default</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="error">Error</Tag>
      <Tag color="processing">Processing</Tag>
    </div>
    <div className="flex gap-2 flex-wrap">
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </div>
  </div>
);`}
      />

      <ExampleSection
        title="可选择"
        description="可通过 checkable 实现类似 Checkbox 的效果，点击切换选中效果。"
        preview={<CheckableExample />}
        code={`import React, { useState } from 'react';
import { Tag } from 'soli-ui';

const App = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <div className="flex gap-2">
      <Tag checkable checked={checked1} onChange={setChecked1}>
        Tag 1
      </Tag>
      <Tag checkable checked={checked2} onChange={setChecked2}>
        Tag 2
      </Tag>
      <Tag checkable checked={checked3} onChange={setChecked3}>
        Tag 3
      </Tag>
    </div>
  );
};`}
      />

      <ExampleSection
        title="图标按钮"
        description="当需要在 Tag 内嵌入图标时，可以设置 icon 属性，或者直接在 children 中嵌入 Icon 组件。"
        preview={<IconExample />}
        code={`import { Tag } from 'soli-ui';

const App = () => (
  <div className="flex gap-2">
    <Tag icon={<TwitterIcon />} color="#55acee">
      Twitter
    </Tag>
    <Tag icon={<YoutubeIcon />} color="#cd201f">
      Youtube
    </Tag>
  </div>
);`}
      />

      <ExampleSection
        title="Tailwind 支持"
        description="支持使用 Tailwind CSS 类名自定义样式。"
        preview={<TailwindExample />}
        code={`import { Tag } from 'soli-ui';

const App = () => (
  <div className="flex gap-2">
    <Tag className="!bg-purple-100 !text-purple-600 !border-purple-300">
      Tailwind Purple
    </Tag>
    <Tag className="!bg-indigo-100 !text-indigo-600 !border-indigo-300 !rounded-full">
      Tailwind Indigo Round
    </Tag>
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
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>closable</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标签是否可以关闭</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>closeIcon</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义关闭图标</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>color</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标签色</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>default</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>icon</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>设置图标</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onClose</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>关闭时的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>(e) =&gt; void</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>checkable</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否可选中</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>checked</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>设置标签的选中状态</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onChange</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>点击标签时触发的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>(checked) =&gt; void</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>size</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标签大小</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>small | medium | large</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>medium</code></td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>shape</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标签形状</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>square | round | rounded</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>rounded</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TagDoc;
