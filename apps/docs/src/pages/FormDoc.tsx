import React, { useState } from 'react';
import { Form, FormItem, Input, Button, FormActions, FormGroup } from 'soli-ui';
import { useForm } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const BasicExample: React.FC = () => {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} onFinish={onFinish} labelWidth={100}>
      <FormItem name="username" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem name="password" label="密码" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password placeholder="请输入密码" />
      </FormItem>
      <FormActions>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
};

const VerticalExample: React.FC = () => {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <FormItem name="username" label="用户名" rules={[{ required: true }]}>
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem name="email" label="邮箱" rules={[{ required: true }]}>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormActions>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
};

const InlineExample: React.FC = () => {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} layout="inline" onFinish={onFinish}>
      <FormItem name="username" label="用户名" rules={[{ required: true }]}>
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem name="email" label="邮箱" rules={[{ required: true }]}>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormActions>
        <Button variant="primary" type="submit">搜索</Button>
      </FormActions>
    </Form>
  );
};

const ValidationExample: React.FC = () => {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} onFinish={onFinish} labelWidth={100}>
      <FormItem 
        name="username" 
        label="用户名" 
        rules={[
          { required: true, message: '请输入用户名' },
          { min: 3, message: '用户名至少3个字符' },
          { max: 20, message: '用户名最多20个字符' }
        ]}
      >
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem 
        name="email" 
        label="邮箱" 
        rules={[
          { required: true, message: '请输入邮箱' },
          { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: '邮箱格式不正确' }
        ]}
      >
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormActions>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
};

const CustomValidationExample: React.FC = () => {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  const validatePassword = (value: string) => {
    if (value.length < 6) {
      return '密码至少6个字符';
    }
    if (!/[A-Z]/.test(value)) {
      return '密码必须包含大写字母';
    }
    if (!/[0-9]/.test(value)) {
      return '密码必须包含数字';
    }
    return true;
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <FormItem 
        name="password" 
        label="密码" 
        rules={[
          { required: true, message: '请输入密码' },
          { validator: validatePassword }
        ]}
      >
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormActions>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
};

const ResetExample: React.FC = () => {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} labelWidth={100}>
      <FormItem name="username" label="用户名" rules={[{ required: true }]}>
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem name="email" label="邮箱" rules={[{ required: true }]}>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormActions>
        <Button onClick={onReset}>重置</Button>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
};

const GroupExample: React.FC = () => {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} onFinish={onFinish} labelWidth={100}>
      <FormGroup title="基本信息">
        <FormItem name="username" label="用户名" rules={[{ required: true }]}>
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem name="email" label="邮箱" rules={[{ required: true }]}>
          <Input placeholder="请输入邮箱" />
        </FormItem>
      </FormGroup>
      <FormGroup title="详细信息">
        <FormItem name="phone" label="手机号" rules={[{ required: true }]}>
          <Input placeholder="请输入手机号" />
        </FormItem>
        <FormItem name="address" label="地址">
          <Input placeholder="请输入地址" />
        </FormItem>
      </FormGroup>
      <FormActions>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
};

const DynamicExample: React.FC = () => {
  const form = useForm();
  const [fields, setFields] = useState([{ name: 'field1' }]);

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  const addField = () => {
    const newField = { name: `field${fields.length + 1}` };
    setFields([...fields, newField]);
  };

  const removeField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  return (
    <Form form={form} onFinish={onFinish} labelWidth={100}>
      {fields.map((field, index) => (
        <FormItem key={field.name} name={field.name} label={`字段 ${index + 1}`}>
          <Input placeholder="请输入内容" />
          {fields.length > 1 && (
            <Button onClick={() => removeField(index)} style={{ marginLeft: 8 }}>
              删除
            </Button>
          )}
        </FormItem>
      ))}
      <FormActions>
        <Button onClick={addField}>添加字段</Button>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
};

const TailwindExample: React.FC = () => {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form 
      form={form} 
      onFinish={onFinish}
      labelWidth={80}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <FormItem 
        name="username" 
        label="用户名" 
        rules={[{ required: true, message: '请输入用户名' }]}
        className="mb-4"
        labelClassName="text-gray-700 font-medium"
      >
        <Input 
          placeholder="请输入用户名" 
          className="border-gray-300 focus:border-blue-500 rounded-md"
        />
      </FormItem>
      <FormItem 
        name="password" 
        label="密码" 
        rules={[{ required: true, message: '请输入密码' }]}
        className="mb-6"
        labelClassName="text-gray-700 font-medium"
      >
        <Input.Password 
          placeholder="请输入密码"
          className="border-gray-300 focus:border-blue-500 rounded-md"
        />
      </FormItem>
      <FormActions>
        <Button 
          variant="primary" 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition-colors"
        >
          提交
        </Button>
      </FormActions>
    </Form>
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

const FormDoc: React.FC = () => {
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
          Form 表单
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          具有数据收集、校验和提交功能的表单。
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
            需要对用户输入进行校验时，或需要收集表单数据时。
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
          title="基础用法"
          description="基础表单用法，包含数据收集、校验和提交。"
          preview={<BasicExample />}
          code={`import { Form, FormItem, Input, Button } from 'soli-ui';

export default function App() {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <FormItem name="username" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem name="password" label="密码" rules={[{ required: true, message: '请输入密码' }]}>
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormActions>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
}`}
        />

        <ExampleSection 
          title="垂直布局"
          description="使用 layout='vertical' 设置垂直布局。"
          preview={<VerticalExample />}
          code={`import { Form, FormItem, Input, Button } from 'soli-ui';

export default function App() {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <FormItem name="username" label="用户名" rules={[{ required: true }]}>
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem name="email" label="邮箱" rules={[{ required: true }]}>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormActions>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
}`}
        />

        <ExampleSection 
          title="内联布局"
          description="使用 layout='inline' 设置内联布局。"
          preview={<InlineExample />}
          code={`import { Form, FormItem, Input, Button } from 'soli-ui';

export default function App() {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} layout="inline" onFinish={onFinish}>
      <FormItem name="username" label="用户名" rules={[{ required: true }]}>
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem name="email" label="邮箱" rules={[{ required: true }]}>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormActions>
        <Button variant="primary" type="submit">搜索</Button>
      </FormActions>
    </Form>
  );
}`}
        />

        <ExampleSection 
          title="表单验证"
          description="使用 rules 属性设置验证规则。同时可以通过 labelWidth 属性统一设置标签宽度，实现表单项对齐。"
          preview={<ValidationExample />}
          code={`import { Form, FormItem, Input, Button } from 'soli-ui';

export default function App() {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} onFinish={onFinish} labelWidth={100}>
      <FormItem 
        name="username" 
        label="用户名" 
        rules={[
          { required: true, message: '请输入用户名' },
          { min: 3, message: '用户名至少3个字符' },
          { max: 20, message: '用户名最多20个字符' }
        ]}
      >
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem 
        name="email" 
        label="邮箱" 
        rules={[
          { required: true, message: '请输入邮箱' },
          { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: '邮箱格式不正确' }
        ]}
      >
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormActions>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
}`}
        />

        <ExampleSection 
          title="自定义验证"
          description="使用 validator 函数进行自定义验证。"
          preview={<CustomValidationExample />}
          code={`import { Form, FormItem, Input, Button } from 'soli-ui';

export default function App() {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  const validatePassword = (value: string) => {
    if (value.length < 6) {
      return '密码至少6个字符';
    }
    if (!/[A-Z]/.test(value)) {
      return '密码必须包含大写字母';
    }
    if (!/[0-9]/.test(value)) {
      return '密码必须包含数字';
    }
    return true;
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <FormItem 
        name="password" 
        label="密码" 
        rules={[
          { required: true, message: '请输入密码' },
          { validator: validatePassword }
        ]}
      >
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormActions>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
}`}
        />

        <ExampleSection 
          title="重置表单"
          description="使用 resetFields 方法重置表单。"
          preview={<ResetExample />}
          code={`import { Form, FormItem, Input, Button } from 'soli-ui';

export default function App() {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <FormItem name="username" label="用户名" rules={[{ required: true }]}>
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem name="email" label="邮箱" rules={[{ required: true }]}>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormActions>
        <Button onClick={onReset}>重置</Button>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
}`}
        />

        <ExampleSection 
          title="表单组"
          description="使用 FormGroup 组件对表单项进行分组。"
          preview={<GroupExample />}
          code={`import { Form, FormItem, FormGroup, Input, Button } from 'soli-ui';

export default function App() {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <FormGroup title="基本信息">
        <FormItem name="username" label="用户名" rules={[{ required: true }]}>
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem name="email" label="邮箱" rules={[{ required: true }]}>
          <Input placeholder="请输入邮箱" />
        </FormItem>
      </FormGroup>
      <FormGroup title="详细信息">
        <FormItem name="phone" label="手机号" rules={[{ required: true }]}>
          <Input placeholder="请输入手机号" />
        </FormItem>
        <FormItem name="address" label="地址">
          <Input placeholder="请输入地址" />
        </FormItem>
      </FormGroup>
      <FormActions>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
}`}
        />

        <ExampleSection 
          title="动态表单"
          description="动态添加和删除表单项。"
          preview={<DynamicExample />}
          code={`import { Form, FormItem, Input, Button } from 'soli-ui';

export default function App() {
  const form = useForm();
  const [fields, setFields] = useState([{ name: 'field1' }]);

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  const addField = () => {
    const newField = { name: \`field\${fields.length + 1}\` };
    setFields([...fields, newField]);
  };

  const removeField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  return (
    <Form form={form} onFinish={onFinish}>
      {fields.map((field, index) => (
        <FormItem key={field.name} name={field.name} label={\`字段 \${index + 1}\`}>
          <Input placeholder="请输入内容" />
          {fields.length > 1 && (
            <Button onClick={() => removeField(index)} style={{ marginLeft: 8 }}>
              删除
            </Button>
          )}
        </FormItem>
      ))}
      <FormActions>
        <Button onClick={addField}>添加字段</Button>
        <Button variant="primary" type="submit">提交</Button>
      </FormActions>
    </Form>
  );
}`}
        />

        <ExampleSection 
          title="使用 Tailwind CSS"
          description="Form 组件及其子组件支持通过 className 属性使用 Tailwind CSS 类名来覆盖默认样式。"
          preview={<TailwindExample />}
          code={`import { Form, FormItem, Input, Button } from 'soli-ui';

export default function App() {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form 
      form={form} 
      onFinish={onFinish}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <FormItem 
        name="username" 
        label="用户名" 
        rules={[{ required: true, message: '请输入用户名' }]}
        className="mb-4"
      >
        <Input 
          placeholder="请输入用户名" 
          className="border-gray-300 focus:border-blue-500"
        />
      </FormItem>
      <FormItem 
        name="password" 
        label="密码" 
        rules={[{ required: true, message: '请输入密码' }]}
        className="mb-4"
      >
        <Input 
          type="password" 
          placeholder="请输入密码"
          className="border-gray-300 focus:border-blue-500"
        />
      </FormItem>
      <FormActions className="mt-6">
        <Button 
          variant="primary" 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          提交
        </Button>
      </FormActions>
    </Form>
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
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Form</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  参数
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  说明
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  类型
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
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
                    form
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>表单实例</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>FormInstance</code>
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
                    layout
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>表单布局</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'horizontal' | 'vertical' | 'inline'</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'horizontal'</code>
                </td>
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
                    initialValues
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>表单初始值</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'Record<string, any>'}</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'{}'}</code>
                </td>
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
                    onFinish
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>提交成功回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(values: Record<string, any>) => void'}</code>
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
                    onFinishFailed
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>验证失败回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(errors: Record<string, string>) => void'}</code>
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
                    className
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>类名</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    labelWidth
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标签宽度，支持数字(px)或字符串(如'100px', '20%')</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string | number</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>FormItem</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  参数
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  说明
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  类型
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
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
                    name
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>字段名</td>
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
                    label
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标签文本</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code>
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
                    rules
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>验证规则</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ValidationRule[]</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>[]</code>
                </td>
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
                    required
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否必填</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code>
                </td>
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
                    colon
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否显示冒号</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>true</code>
                </td>
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
                    layout
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>布局方式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'horizontal' | 'vertical' | 'inline'</code>
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
                    help
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>帮助文本</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code>
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
                    form
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>表单实例</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>FormInstance</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    labelWidth
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>设置当前表单项标签的宽度，优先级高于Form组件的labelWidth</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string | number</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>FormInstance</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  方法
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  说明
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  类型
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
                    getFieldValue
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>获取字段值</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(name: string) => any'}</code>
                </td>
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
                    getFieldsValue
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>获取所有字段值</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'() => Record<string, any>'}</code>
                </td>
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
                    setFieldValue
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>设置字段值</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(name: string, value: any) => void'}</code>
                </td>
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
                    setFieldsValue
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>批量设置字段值</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(values: Record<string, any>) => void'}</code>
                </td>
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
                    resetFields
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>重置表单</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'() => void'}</code>
                </td>
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
                    validate
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>验证整个表单</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'() => Promise<boolean>'}</code>
                </td>
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
                    validateField
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>验证单个字段</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(name: string, value: any) => Promise<string | null>'}</code>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    errors
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>表单错误信息</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'Record<string, string>'}</code>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>ValidationRule</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  参数
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  说明
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
                }}>
                  类型
                </th>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left',
                  color: '#000000d9',
                  fontWeight: 600
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
                    required
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否必填</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>false</code>
                </td>
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
                    message
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>错误提示信息</td>
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
                    pattern
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>正则表达式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>RegExp</code>
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
                    min
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>最小值</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code>
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
                    max
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>最大值</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ 
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace'
                  }}>
                    validator
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>自定义验证函数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'(value: any) => boolean | string | Promise<boolean | string>'}</code>
                </td>
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

export default FormDoc;
