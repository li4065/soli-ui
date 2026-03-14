# Flex 弹性布局

提供一种简单、高效的方式来布局、对齐和分配容器中项目之间的空间。

## 何时使用

- 需要快速构建弹性布局时
- 需要控制元素的对齐方式和间距时
- 需要实现响应式布局时

## 代码演示

### 基础用法

使用 `vertical` 属性控制方向。

```tsx
import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <h4>水平布局</h4>
        <Flex gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4>垂直布局</h4>
        <Flex vertical gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </>
  );
}
```

### 对齐方式

使用 `justify` 属性控制主轴对齐方式。

```tsx
import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <h4>flex-start</h4>
        <Flex justify="flex-start" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>center</h4>
        <Flex justify="center" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>flex-end</h4>
        <Flex justify="flex-end" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>space-between</h4>
        <Flex justify="space-between" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4>space-around</h4>
        <Flex justify="space-around" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </>
  );
}
```

### 交叉轴对齐

使用 `align` 属性控制交叉轴对齐方式。

```tsx
import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <h4>flex-start</h4>
        <Flex align="flex-start" gap="middle" style={{ height: 100, background: '#f0f0f0' }}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>center</h4>
        <Flex align="center" gap="middle" style={{ height: 100, background: '#f0f0f0' }}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4>flex-end</h4>
        <Flex align="flex-end" gap="middle" style={{ height: 100, background: '#f0f0f0' }}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </>
  );
}
```

### 间距

使用 `gap` 属性控制元素间距，支持预设值和自定义值。

```tsx
import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <h4>small (8px)</h4>
        <Flex gap="small">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>middle (16px)</h4>
        <Flex gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>large (24px)</h4>
        <Flex gap="large">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>自定义值 (32px)</h4>
        <Flex gap={32}>
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
      
      <div>
        <h4>自定义值 (2rem)</h4>
        <Flex gap="2rem">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Flex>
      </div>
    </>
  );
}
```

### 换行

使用 `wrap` 属性控制是否换行。

```tsx
import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <h4>不换行</h4>
        <Flex wrap={false} gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
          <Button>按钮 4</Button>
          <Button>按钮 5</Button>
        </Flex>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <h4>换行</h4>
        <Flex wrap gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
          <Button>按钮 4</Button>
          <Button>按钮 5</Button>
        </Flex>
      </div>
      
      <div>
        <h4>反向换行</h4>
        <Flex wrap="wrap-reverse" gap="middle">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
          <Button>按钮 4</Button>
          <Button>按钮 5</Button>
        </Flex>
      </div>
    </>
  );
}
```

### 组合使用

可以组合使用多个属性。

```tsx
import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <Flex 
      vertical 
      justify="center" 
      align="center" 
      gap="large"
      style={{ height: 300, background: '#f0f0f0' }}
    >
      <Button>按钮 1</Button>
      <Button>按钮 2</Button>
      <Button>按钮 3</Button>
    </Flex>
  );
}
```

## API

### Flex

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| vertical | 是否垂直排列 | `boolean` | `false` |
| justify | 主轴对齐方式 | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` |
| align | 交叉轴对齐方式 | `'flex-start' \| 'flex-end' \| 'center'` | `'flex-start'` |
| gap | 间距 | `'small' \| 'middle' \| 'large' \| string \| number` | - |
| wrap | 是否换行 | `boolean \| 'nowrap' \| 'wrap' \| 'wrap-reverse'` | `false` |
| className | 自定义类名，支持 Tailwind CSS | `string` | - |

### gap 预设值

| 值 | 说明 | 实际值 |
| --- | --- | --- |
| small | 小间距 | `8px` |
| middle | 中间距 | `16px` |
| large | 大间距 | `24px` |

### 使用 Tailwind CSS

Flex 组件支持通过 `className` 属性使用 Tailwind CSS 类名来覆盖默认样式。

```tsx
import { Flex, Button } from 'soli-ui';

export default function App() {
  return (
    <Flex 
      className="p-4 bg-blue-50 rounded-lg"
      justify="center" 
      align="center" 
      gap="middle"
    >
      <Button className="shadow-md">按钮 1</Button>
      <Button className="shadow-md">按钮 2</Button>
      <Button className="shadow-md">按钮 3</Button>
    </Flex>
  );
}
```
