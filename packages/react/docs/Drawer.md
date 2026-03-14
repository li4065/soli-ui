# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 何时使用

- 需要在一个独立的对话框中展示信息时
- 需要保持当前页面上下文时
- 需要展示复杂的内容或表单时

## 代码演示

### 基础用法

基础抽屉用法，点击遮罩层关闭。

```tsx
import { Drawer, Button } from 'soli-ui';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        title="抽屉标题"
      >
        <p>这是抽屉的内容区域。</p>
      </Drawer>
    </>
  );
}
```

### 自定义位置

使用 `placement` 属性控制抽屉弹出位置。

```tsx
import { Drawer, Button } from 'soli-ui';

export default function App() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={() => setOpen(true)}>右侧弹出</Button>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={() => { setPlacement('left'); setOpen(true); }}>左侧弹出</Button>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={() => { setPlacement('top'); setOpen(true); }}>顶部弹出</Button>
      </div>
      <div>
        <Button onClick={() => { setPlacement('bottom'); setOpen(true); }}>底部弹出</Button>
      </div>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        title="抽屉标题"
        placement={placement}
      >
        <p>这是抽屉的内容区域。</p>
      </Drawer>
    </>
  );
}
```

### 自定义尺寸

使用 `width` 和 `height` 属性控制抽屉尺寸。

```tsx
import { Drawer, Button } from 'soli-ui';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={() => setOpen(true)}>默认宽度 (378px)</Button>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={() => setOpen(true)}>自定义宽度 (600px)</Button>
      </div>
      <div>
        <Button onClick={() => setOpen(true)}>自定义宽度 (80%)</Button>
      </div>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        title="抽屉标题"
        width={600}
      >
        <p>这是抽屉的内容区域。</p>
      </Drawer>
    </>
  );
}
```

### 不显示遮罩

设置 `mask={false}` 不显示遮罩层。

```tsx
import { Drawer, Button } from 'soli-ui';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        title="抽屉标题"
        mask={false}
      >
        <p>这是抽屉的内容区域。</p>
      </Drawer>
    </>
  );
}
```

### 禁止点击遮罩关闭

设置 `maskClosable={false}` 禁止点击遮罩层关闭。

```tsx
import { Drawer, Button } from 'soli-ui';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        title="抽屉标题"
        maskClosable={false}
      >
        <p>这是抽屉的内容区域。</p>
        <Button onClick={() => setOpen(false)}>关闭</Button>
      </Drawer>
    </>
  );
}
```

### 带页脚

使用 `footer` 属性设置页脚内容。

```tsx
import { Drawer, Button } from 'soli-ui';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        title="抽屉标题"
        footer={
          <>
            <Button onClick={() => setOpen(false)}>取消</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>确定</Button>
          </>
        }
      >
        <p>这是抽屉的内容区域。</p>
      </Drawer>
    </>
  );
}
```

### 销毁时移除

设置 `destroyOnClose={true}` 关闭时销毁 DOM 元素。

```tsx
import { Drawer, Button } from 'soli-ui';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        title="抽屉标题"
        destroyOnClose={true}
      >
        <p>这是抽屉的内容区域。</p>
      </Drawer>
    </>
  );
}
```

## API

### Drawer

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `ReactNode` | - |
| children | 内容 | `ReactNode` | - |
| footer | 页脚内容 | `ReactNode` | - |
| open | 是否打开 | `boolean` | `false` |
| onClose | 关闭回调 | `() => void` | - |
| placement | 弹出位置 | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` |
| width | 宽度（左右弹出时） | `number \| string` | `378` |
| height | 高度（上下弹出时） | `number \| string` | `378` |
| closable | 是否显示关闭按钮 | `boolean` | `true` |
| maskClosable | 点击遮罩是否关闭 | `boolean` | `true` |
| mask | 是否显示遮罩 | `boolean` | `true` |
| destroyOnClose | 关闭时是否销毁 | `boolean` | `false` |
| className | 自定义类名，支持 Tailwind CSS | `string` | - |
| maskClassName | 遮罩层自定义类名，支持 Tailwind CSS | `string` | - |
| headerClassName | 头部自定义类名，支持 Tailwind CSS | `string` | - |
| titleClassName | 标题自定义类名，支持 Tailwind CSS | `string` | - |
| bodyClassName | 内容区域自定义类名，支持 Tailwind CSS | `string` | - |
| footerClassName | 页脚自定义类名，支持 Tailwind CSS | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| zIndex | 层级 | `number` | `1000` |

### 使用 Tailwind CSS

Drawer 组件支持通过 `className` 及其子组件的 `className` 属性使用 Tailwind CSS 类名来覆盖默认样式。

```tsx
import { Drawer, Button } from 'soli-ui';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setOpen(true)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        打开抽屉
      </Button>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        title="抽屉标题"
        className="shadow-2xl"
        maskClassName="bg-gray-900/50"
        headerClassName="bg-blue-50"
        titleClassName="text-blue-900"
        bodyClassName="p-8"
        footerClassName="bg-gray-50"
        footer={
          <>
            <Button onClick={() => setOpen(false)}>取消</Button>
            <Button 
              variant="primary" 
              onClick={() => setOpen(false)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              确定
            </Button>
          </>
        }
      >
        <p className="text-gray-700">这是抽屉的内容区域。</p>
      </Drawer>
    </>
  );
}
```
