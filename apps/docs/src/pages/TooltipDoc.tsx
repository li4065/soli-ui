import React from 'react';
import { Tooltip, Button } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const PositionExample = () => {
  const buttonStyle = { width: '70px', textAlign: 'center' as const, padding: '4px 0', fontSize: '14px' };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '12px', marginLeft: '70px' }}>
        <Tooltip placement="topLeft" title="prompt text">
          <Button style={buttonStyle}>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title="prompt text">
          <Button style={buttonStyle}>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title="prompt text">
          <Button style={buttonStyle}>TR</Button>
        </Tooltip>
      </div>
      
      <div style={{ display: 'flex', width: '320px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Tooltip placement="leftTop" title="prompt text">
            <Button style={buttonStyle}>LT</Button>
          </Tooltip>
          <Tooltip placement="left" title="prompt text">
            <Button style={buttonStyle}>Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title="prompt text">
            <Button style={buttonStyle}>LB</Button>
          </Tooltip>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Tooltip placement="rightTop" title="prompt text">
            <Button style={buttonStyle}>RT</Button>
          </Tooltip>
          <Tooltip placement="right" title="prompt text">
            <Button style={buttonStyle}>Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title="prompt text">
            <Button style={buttonStyle}>RB</Button>
          </Tooltip>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', marginLeft: '70px' }}>
        <Tooltip placement="bottomLeft" title="prompt text">
          <Button style={buttonStyle}>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title="prompt text">
          <Button style={buttonStyle}>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title="prompt text">
          <Button style={buttonStyle}>BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};

const ColorExample = () => {
  const colors = [
    'pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 
    'geekblue', 'magenta', 'volcano', 'gold', 'lime'
  ];
  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {colors.map(color => (
        <Tooltip title="prompt text" backgroundColor={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
      <Tooltip title="prompt text" backgroundColor="#f50">
        <Button>#f50</Button>
      </Tooltip>
      <Tooltip title="prompt text" backgroundColor="#2db7f5">
        <Button>#2db7f5</Button>
      </Tooltip>
      <Tooltip title="prompt text" backgroundColor="#87d068">
        <Button>#87d068</Button>
      </Tooltip>
      <Tooltip title="prompt text" backgroundColor="#108ee9">
        <Button>#108ee9</Button>
      </Tooltip>
    </div>
  );
};

const TriggerExample = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tooltip title="Prompt text" trigger="hover">
        <Button>Hover me</Button>
      </Tooltip>
      <Tooltip title="Prompt text" trigger="click">
        <Button>Click me</Button>
      </Tooltip>
      <Tooltip title="Prompt text" trigger="focus">
        <Button>Focus me</Button>
      </Tooltip>
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
      <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#000000d9' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#00000073', marginBottom: '16px', lineHeight: '1.6' }}>{description}</p>
      <div style={{ padding: '24px', border: '1px solid #f0f0f0', borderRadius: '8px', marginBottom: '16px', background: '#fff' }}>
        {preview}
      </div>
      <CodeBlock code={code} />
    </div>
  );
};

const TooltipDoc: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '38px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Tooltip 文字提示</h1>
        <p style={{ fontSize: '16px', color: '#00000073', lineHeight: '1.8' }}>简单的文字提示气泡框。</p>
      </div>

      <ExampleSection
        title="基本用法"
        description="最简单的用法。"
        preview={
          <Tooltip title="prompt text">
            <Button>Tooltip will show on mouse enter.</Button>
          </Tooltip>
        }
        code={`import React from 'react';
import { Tooltip, Button } from 'soli-ui';

const App = () => (
  <Tooltip title="prompt text">
    <Button>Tooltip will show on mouse enter.</Button>
  </Tooltip>
);

export default App;`}
      />

      <ExampleSection
        title="位置"
        description="支持 12 个不同的方向显示。"
        preview={<PositionExample />}
        code={`import React from 'react';
import { Tooltip, Button } from 'soli-ui';

const App = () => {
  const buttonStyle = { width: '70px', textAlign: 'center' };
  
  return (
    <div>
      {/* Top */}
      <Tooltip placement="topLeft" title="prompt text"><Button style={buttonStyle}>TL</Button></Tooltip>
      <Tooltip placement="top" title="prompt text"><Button style={buttonStyle}>Top</Button></Tooltip>
      <Tooltip placement="topRight" title="prompt text"><Button style={buttonStyle}>TR</Button></Tooltip>
      
      {/* Left */}
      <Tooltip placement="leftTop" title="prompt text"><Button style={buttonStyle}>LT</Button></Tooltip>
      <Tooltip placement="left" title="prompt text"><Button style={buttonStyle}>Left</Button></Tooltip>
      <Tooltip placement="leftBottom" title="prompt text"><Button style={buttonStyle}>LB</Button></Tooltip>
      
      {/* Right */}
      <Tooltip placement="rightTop" title="prompt text"><Button style={buttonStyle}>RT</Button></Tooltip>
      <Tooltip placement="right" title="prompt text"><Button style={buttonStyle}>Right</Button></Tooltip>
      <Tooltip placement="rightBottom" title="prompt text"><Button style={buttonStyle}>RB</Button></Tooltip>
      
      {/* Bottom */}
      <Tooltip placement="bottomLeft" title="prompt text"><Button style={buttonStyle}>BL</Button></Tooltip>
      <Tooltip placement="bottom" title="prompt text"><Button style={buttonStyle}>Bottom</Button></Tooltip>
      <Tooltip placement="bottomRight" title="prompt text"><Button style={buttonStyle}>BR</Button></Tooltip>
    </div>
  );
};

export default App;`}
      />

      <ExampleSection
        title="多彩文字提示"
        description="我们添加了多种预设色彩的文字提示样式，也可以自定义颜色。"
        preview={<ColorExample />}
        code={`import React from 'react';
import { Tooltip, Button } from 'soli-ui';

const colors = [
  'pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 
  'geekblue', 'magenta', 'volcano', 'gold', 'lime'
];

const App = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
    {colors.map(color => (
      <Tooltip title="prompt text" backgroundColor={color} key={color}>
        <Button>{color}</Button>
      </Tooltip>
    ))}
    <Tooltip title="prompt text" backgroundColor="#f50">
      <Button>#f50</Button>
    </Tooltip>
    <Tooltip title="prompt text" backgroundColor="#2db7f5">
      <Button>#2db7f5</Button>
    </Tooltip>
  </div>
);

export default App;`}
      />

      <ExampleSection
        title="触发方式"
        description="支持 hover、click、focus 三种触发方式。"
        preview={<TriggerExample />}
        code={`import React from 'react';
import { Tooltip, Button } from 'soli-ui';

const App = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <Tooltip title="Prompt text" trigger="hover">
      <Button>Hover me</Button>
    </Tooltip>
    <Tooltip title="Prompt text" trigger="click">
      <Button>Click me</Button>
    </Tooltip>
    <Tooltip title="Prompt text" trigger="focus">
      <Button>Focus me</Button>
    </Tooltip>
  </div>
);

export default App;`}
      />

      <ExampleSection
        title="Tailwind Support"
        description="支持使用 Tailwind CSS 自定义样式。"
        preview={
          <div style={{ display: 'flex', gap: '20px' }}>
            <Tooltip 
              title="Tailwind Styled" 
              className="!bg-indigo-600 !text-white !px-4 !py-2 !rounded-lg"
              arrow={false}
            >
              <Button>Custom Style</Button>
            </Tooltip>
          </div>
        }
        code={`import React from 'react';
import { Tooltip, Button } from 'soli-ui';

const App = () => (
  <Tooltip 
    title="Tailwind Styled" 
    className="!bg-indigo-600 !text-white !px-4 !py-2 !rounded-lg"
    arrow={false}
  >
    <Button>Custom Style</Button>
  </Tooltip>
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
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>提示文字</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>placement</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>气泡框位置</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'top' | 'left' | 'right' | 'bottom' | 'topLeft' | ...</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'top'</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>color</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>文本颜色</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'#fff'</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>backgroundColor</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>背景颜色</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'rgba(0, 0, 0, 0.85)'</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>trigger</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>触发行为</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'hover' | 'focus' | 'click'</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'hover'</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>open</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>用于手动控制浮层显隐</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>defaultOpen</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>默认是否显隐</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onOpenChange</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>显示隐藏的回调</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{`(open: boolean) => void`}</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>arrow</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否显示箭头</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>true</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>delay</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>延迟显示时间（毫秒）</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>100</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>disabled</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否禁用</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>zIndex</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>设置 Tooltip 的 z-index</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>1000</code></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>className</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>设置浮层的类名</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code></td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                    <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>style</code>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}>设置浮层的样式</td>
                  <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>CSSProperties</code></td>
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

export default TooltipDoc;
