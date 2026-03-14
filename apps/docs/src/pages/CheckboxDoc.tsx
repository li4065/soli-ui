import React, { useState } from 'react';
import { Checkbox } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const CheckboxDoc: React.FC = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(true);
  const [indeterminate, setIndeterminate] = useState(true);
  const [groupValue1, setGroupValue1] = useState<string[]>(['Apple']);

  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];

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
          Checkbox 多选框
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          多选框。
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
            在一组可选项中进行多项选择时；
          </p>
          <p style={{ margin: '8px 0 0 0' }}>
            单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要配合提交操作。
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
          description="简单的 checkbox。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Checkbox checked={checked1} onChange={setChecked1}>Checkbox</Checkbox>
              <Checkbox checked={checked2} onChange={setChecked2}>Checkbox</Checkbox>
              <Checkbox checked={checked3} onChange={setChecked3}>Checkbox</Checkbox>
              <Checkbox checked={checked4} onChange={setChecked4}>Checkbox</Checkbox>
            </div>
          }
          code={`import { Checkbox } from 'soli-ui';

export default function App() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox checked={checked1} onChange={setChecked1}>Checkbox</Checkbox>
      <Checkbox checked={checked2} onChange={setChecked2}>Checkbox</Checkbox>
      <Checkbox checked={checked3} onChange={setChecked3}>Checkbox</Checkbox>
      <Checkbox checked={checked4} onChange={setChecked4}>Checkbox</Checkbox>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="受控组件"
          description="联动 checkbox。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Checkbox 
                checked={groupValue1.length === plainOptions.length}
                indeterminate={indeterminate && groupValue1.length > 0}
                onChange={(checked) => {
                  setGroupValue1(checked ? plainOptions : []);
                  setIndeterminate(false);
                }}
              >
                Check all
              </Checkbox>
              <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {plainOptions.map((option) => (
                  <Checkbox
                    key={option}
                    checked={groupValue1.includes(option)}
                    onChange={(checked) => {
                      const newValue = checked
                        ? [...groupValue1, option]
                        : groupValue1.filter((v) => v !== option);
                      setGroupValue1(newValue);
                      setIndeterminate(newValue.length > 0 && newValue.length < plainOptions.length);
                    }}
                  >
                    {option}
                  </Checkbox>
                ))}
              </div>
            </div>
          }
          code={`import { Checkbox } from 'soli-ui';

export default function App() {
  const [groupValue, setGroupValue] = useState<string[]>(['Apple']);
  const [indeterminate, setIndeterminate] = useState(true);
  const plainOptions = ['Apple', 'Pear', 'Orange'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox 
        checked={groupValue.length === plainOptions.length}
        indeterminate={indeterminate && groupValue.length > 0}
        onChange={(checked) => {
          setGroupValue(checked ? plainOptions : []);
          setIndeterminate(false);
        }}
      >
        Check all
      </Checkbox>
      <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {plainOptions.map((option) => (
          <Checkbox
            key={option}
            checked={groupValue.includes(option)}
            onChange={(checked) => {
              const newValue = checked
                ? [...groupValue, option]
                : groupValue.filter((v) => v !== option);
              setGroupValue(newValue);
              setIndeterminate(newValue.length > 0 && newValue.length < plainOptions.length);
            }}
          >
            {option}
          </Checkbox>
        ))}
      </div>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="禁用状态"
          description="checkbox 不可用状态。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Checkbox defaultChecked={false} disabled>Disabled</Checkbox>
              <Checkbox defaultChecked={true} disabled>Disabled</Checkbox>
            </div>
          }
          code={`import { Checkbox } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox defaultChecked={false} disabled>Disabled</Checkbox>
      <Checkbox defaultChecked={true} disabled>Disabled</Checkbox>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="半选状态"
          description="indeterminate 属性用于表示 checkbox 的状态是不确定的。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Checkbox indeterminate>Indeterminate</Checkbox>
            </div>
          }
          code={`import { Checkbox } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox indeterminate>Indeterminate</Checkbox>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="Checkbox 组 - 垂直排列"
          description="方便的从数组生成 Checkbox 组。"
          preview={
            <div>
              <Checkbox.Group 
                options={options} 
                defaultValue={['Apple']} 
                onChange={(values) => console.log(values)} 
              />
            </div>
          }
          code={`import { Checkbox } from 'soli-ui';

export default function App() {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];

  return (
    <Checkbox.Group 
      options={options} 
      defaultValue={['Apple']} 
      onChange={(values) => console.log(values)} 
    />
  );
}`}
        />

        <ExampleSection 
          title="Checkbox 组 - 水平排列"
          description="使用 direction 属性设置水平排列。"
          preview={
            <div>
              <Checkbox.Group 
                options={options} 
                defaultValue={['Apple']} 
                direction="horizontal"
                onChange={(values) => console.log(values)} 
              />
            </div>
          }
          code={`import { Checkbox } from 'soli-ui';

export default function App() {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];

  return (
    <Checkbox.Group 
      options={options} 
      defaultValue={['Apple']} 
      direction="horizontal"
      onChange={(values) => console.log(values)} 
    />
  );
}`}
        />

        <ExampleSection 
          title="Checkbox 组 - 整组禁用"
          description="使用 disabled 属性禁用整个组。"
          preview={
            <div>
              <Checkbox.Group 
                options={optionsWithDisabled} 
                defaultValue={['Apple']} 
                disabled
                onChange={(values) => console.log(values)} 
              />
            </div>
          }
          code={`import { Checkbox } from 'soli-ui';

export default function App() {
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];

  return (
    <Checkbox.Group 
      options={optionsWithDisabled} 
      defaultValue={['Apple']} 
      disabled
      onChange={(values) => console.log(values)} 
    />
  );
}`}
        />

        <ExampleSection
          title="选择框圆角"
          description="通过 borderRadius 参数控制选择框的圆角：数字为 px，字符串如 '50%' 表示圆形。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Checkbox defaultChecked={false} borderRadius={0}>直角 (0)</Checkbox>
              <Checkbox defaultChecked={false} borderRadius={4}>默认圆角 (4px)</Checkbox>
              <Checkbox defaultChecked={false} borderRadius={8}>大圆角 (8px)</Checkbox>
              <Checkbox defaultChecked={false} borderRadius="50%">圆形</Checkbox>
            </div>
          }
          code={`import { Checkbox } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox defaultChecked={false} borderRadius={0}>直角 (0)</Checkbox>
      <Checkbox defaultChecked={false} borderRadius={4}>默认圆角 (4px)</Checkbox>
      <Checkbox defaultChecked={false} borderRadius={8}>大圆角 (8px)</Checkbox>
      <Checkbox defaultChecked={false} borderRadius="50%">圆形</Checkbox>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="使用 Tailwind CSS 覆盖样式"
          description="通过 className 属性使用 Tailwind CSS 覆盖默认样式。"
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Checkbox 
                checked={checked1} 
                onChange={setChecked1}
                checkboxClassName="!bg-green-500 !border-green-500 !w-6 !h-6"
                labelClassName="!text-green-600 !font-bold !text-lg"
              >
                Green Checkbox
              </Checkbox>
              <Checkbox 
                checked={checked2} 
                onChange={setChecked2}
                checkboxClassName="!bg-purple-500 !border-purple-500 !w-6 !h-6 !rounded-full"
                labelClassName="!text-purple-600 !font-bold !text-lg"
              >
                Purple Checkbox (Round)
              </Checkbox>
              <Checkbox 
                checked={checked3} 
                onChange={setChecked3}
                checkboxClassName="!bg-orange-500 !border-orange-500 !w-6 !h-6"
                labelClassName="!text-orange-600 !font-bold !text-lg"
              >
                Orange Checkbox
              </Checkbox>
            </div>
          }
          code={`import { Checkbox } from 'soli-ui';

export default function App() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox 
        checked={checked1} 
        onChange={setChecked1}
        checkboxClassName="!bg-green-500 !border-green-500 !w-6 !h-6"
        labelClassName="!text-green-600 !font-bold !text-lg"
      >
        Green Checkbox
      </Checkbox>
      <Checkbox 
        checked={checked2} 
        onChange={setChecked2}
        checkboxClassName="!bg-purple-500 !border-purple-500 !w-6 !h-6 !rounded-full"
        labelClassName="!text-purple-600 !font-bold !text-lg"
      >
        Purple Checkbox (Round)
      </Checkbox>
      <Checkbox 
        checked={checked3} 
        onChange={setChecked3}
        checkboxClassName="!bg-orange-500 !border-orange-500 !w-6 !h-6"
        labelClassName="!text-orange-600 !font-bold !text-lg"
      >
        Orange Checkbox
      </Checkbox>
    </div>
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
          Checkbox
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
                    autoFocus
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自动获取焦点</td>
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
                    checked
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>指定当前是否选中</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
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
                    defaultChecked
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>初始是否选中</td>
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
                    disabled
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>禁用 Checkbox</td>
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
                    indeterminate
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>半选状态</td>
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
                    onChange
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>变化时回调函数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(e: ChangeEvent) => void'}</code>
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
                    borderRadius
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>选择框圆角：数字为 px，字符串如 '50%' 表示圆形</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number | string</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>4（与默认样式一致）</td>
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
                    checkboxClassName
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>复选框容器的自定义类名</td>
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
                    labelClassName
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标签的自定义类名</td>
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
          Checkbox.Group
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
                    defaultValue
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>默认选中的选项</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'string[] | number[]'}</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>[]</td>
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
                    value
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>指定选中的选项（受控模式）</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'string[] | number[]'}</code>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>变化时回调函数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(checkedValues) => void'}</code>
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
                    options
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>指定可选项</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'{ label, value, disabled }[]'}</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>[]</td>
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
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否禁用所有选项</td>
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
                    direction
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>排列方向</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'vertical | horizontal'}</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>vertical</td>
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

export default CheckboxDoc;
