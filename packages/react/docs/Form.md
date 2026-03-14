# Form 表单

具有数据收集、校验和提交功能的表单。

## 何时使用

- 需要对用户输入进行校验时
- 需要收集表单数据时
- 需要重置表单时

## 代码演示

### 基础用法

基础表单用法，包含数据收集、校验和提交。

```tsx
import { Form, FormItem, Input, Button } from 'soli-ui';

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
}
```

### 垂直布局

使用 `layout="vertical"` 设置垂直布局。

```tsx
import { Form, FormItem, Input, Button } from 'soli-ui';

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
}
```

### 内联布局

使用 `layout="inline"` 设置内联布局。

```tsx
import { Form, FormItem, Input, Button } from 'soli-ui';

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
}
```

### 表单验证

使用 `rules` 属性设置验证规则。

```tsx
import { Form, FormItem, Input, Button } from 'soli-ui';

export default function App() {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
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
}
```

### 自定义验证

使用 `validator` 函数进行自定义验证。

```tsx
import { Form, FormItem, Input, Button } from 'soli-ui';

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
}
```

### 重置表单

使用 `resetFields` 方法重置表单。

```tsx
import { Form, FormItem, Input, Button } from 'soli-ui';

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
}
```

### 表单组

使用 `FormGroup` 组件对表单项进行分组。

```tsx
import { Form, FormItem, FormGroup, Input, Button } from 'soli-ui';

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
}
```

### 动态表单

动态添加和删除表单项。

```tsx
import { Form, FormItem, Input, Button } from 'soli-ui';

export default function App() {
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
    <Form form={form} onFinish={onFinish}>
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
}
```

## API

### Form

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | 表单实例 | `FormInstance` | - |
| layout | 表单布局 | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'` |
| initialValues | 表单初始值 | `Record<string, any>` | `{}` |
| onFinish | 提交成功回调 | `(values: Record<string, any>) => void` | - |
| onFinishFailed | 验证失败回调 | `(errors: Record<string, string>) => void` | - |
| className | 自定义类名，支持 Tailwind CSS | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |

### FormItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段名 | `string` | - |
| label | 标签文本 | `ReactNode` | - |
| rules | 验证规则 | `ValidationRule[]` | `[]` |
| required | 是否必填 | `boolean` | `false` |
| colon | 是否显示冒号 | `boolean` | `true` |
| layout | 布局方式 | `'horizontal' \| 'vertical' \| 'inline'` | - |
| help | 帮助文本 | `ReactNode` | - |
| form | 表单实例 | `FormInstance` | - |
| className | 自定义类名，支持 Tailwind CSS | `string` | - |

### FormActions

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 子元素 | `ReactNode` | - |
| layout | 布局方式 | `'horizontal' \| 'vertical' \| 'inline'` | - |
| className | 自定义类名，支持 Tailwind CSS | `string` | - |

### FormGroup

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 分组标题 | `string` | - |
| children | 子元素 | `ReactNode` | - |
| className | 自定义类名，支持 Tailwind CSS | `string` | - |

### FormInstance

| 方法 | 说明 | 类型 |
| --- | --- | --- |
| getFieldValue | 获取字段值 | `(name: string) => any` |
| getFieldsValue | 获取所有字段值 | `() => Record<string, any>` |
| setFieldValue | 设置字段值 | `(name: string, value: any) => void` |
| setFieldsValue | 批量设置字段值 | `(values: Record<string, any>) => void` |
| resetFields | 重置表单 | `() => void` |
| validate | 验证整个表单 | `() => Promise<boolean>` |
| validateField | 验证单个字段 | `(name: string, value: any) => Promise<string \| null>` |
| submit | 提交表单 | `() => void` |
| errors | 表单错误信息 | `Record<string, string>` |

### ValidationRule

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| required | 是否必填 | `boolean` | `false` |
| message | 错误提示信息 | `string` | - |
| pattern | 正则表达式 | `RegExp` | - |
| min | 最小值 | `number` | - |
| max | 最大值 | `number` | - |
| validator | 自定义验证函数 | `(value: any) => boolean \| string \| Promise<boolean \| string>` | - |

### useForm

获取表单实例的 Hook。

```tsx
const form = useForm();
```

返回类型：`FormInstance`

### 使用 Tailwind CSS

Form 组件及其子组件支持通过 `className` 属性使用 Tailwind CSS 类名来覆盖默认样式。

```tsx
import { Form, FormItem, Input, Button } from 'soli-ui';

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
}
```
