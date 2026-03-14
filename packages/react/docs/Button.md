# Button 按钮组件

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 基础用法

使用 `variant` 属性来定义按钮的样式。

```tsx
import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button variant='primary'>Primary Button</Button>
      <Button variant='default'>Default Button</Button>
      <Button variant='outline'>Outline Button</Button>
      <Button variant='text'>Text Button</Button>
      <Button variant='link'>Link Button</Button>
    </div>
  );
}
```

### 不同尺寸

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large`、`middle` 或 `small` 分别把按钮设为大、中、小尺寸。若不设置 `size`，则尺寸为 `middle`。

```tsx
import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button size='sm'>Small</Button>
      <Button size='md'>Middle</Button>
      <Button size='lg'>Large</Button>
    </div>
  );
}
```

### 不同颜色

通过设置 `color` 属性来改变按钮颜色。

```tsx
import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant='primary' color='blue'>Blue</Button>
      <Button variant='primary' color='purple'>Purple</Button>
      <Button variant='primary' color='cyan'>Cyan</Button>
      <Button variant='primary' color='green'>Green</Button>
      <Button variant='primary' color='magenta'>Magenta</Button>
      <Button variant='primary' color='pink'>Pink</Button>
      <Button variant='primary' color='red'>Red</Button>
      <Button variant='primary' color='orange'>Orange</Button>
      <Button variant='primary' color='yellow'>Yellow</Button>
      <Button variant='primary' color='volcano'>Volcano</Button>
      <Button variant='primary' color='geekblue'>Geekblue</Button>
      <Button variant='primary' color='lime'>Lime</Button>
      <Button variant='primary' color='gold'>Gold</Button>
    </div>
  );
}
```

### 加载状态

添加 `isLoading` 属性即可让按钮进入加载状态。

```tsx
import { Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Button variant='primary' isLoading={loading} onClick={handleClick}>
      点击加载
    </Button>
  );
}
```

### 禁用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```tsx
import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button variant='primary' disabled>
        Primary (Disabled)
      </Button>
      <Button variant='default' disabled>
        Default (Disabled)
      </Button>
    </div>
  );
}
```

### 图标按钮

按钮可以包含图标。

```tsx
import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button variant='primary'>
        <span style={{ marginRight: '8px' }}>✓</span>
        提交
      </Button>
      <Button variant='default'>
        <span style={{ marginRight: '8px' }}>✕</span>
        取消
      </Button>
    </div>
  );
}
```

## API

### Button Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 按钮类型 | `'primary' \| 'default' \| 'outline' \| 'text' \| 'link'` | `'default'` |
| size | 按钮大小 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| color | 按钮颜色 | `'blue' \| 'purple' \| 'cyan' \| 'green' \| 'magenta' \| 'pink' \| 'red' \| 'orange' \| 'yellow' \| 'volcano' \| 'geekblue' \| 'lime' \| 'gold' \| 'default'` | `'default'` |
| isLoading | 是否为加载状态 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | 点击按钮时的回调 | `(event: MouseEvent) => void` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| ... | 其他原生 button 属性 | `ButtonHTMLAttributes<HTMLButtonElement>` | - |

## 样式定制

### 使用 Tailwind CSS 覆盖样式

组件支持通过 `className` 属性使用 Tailwind CSS 类名来覆盖样式。

```tsx
import { Button } from 'soli-ui';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button 
        variant='primary' 
        className="!bg-red-500 hover:!bg-red-600"
      >
        红色按钮
      </Button>
      <Button 
        variant='primary' 
        className="!rounded-full px-8"
      >
        圆角按钮
      </Button>
    </div>
  );
}
```

**注意**：由于 Emotion 样式的优先级较高，需要使用 `!important` 语法（`!` 前缀）来确保 Tailwind 样式生效。

### 使用 CSS 变量覆盖样式

组件使用 CSS 变量来定义样式，可以通过 `style` 属性直接覆盖这些变量。

```tsx
import { Button } from 'soli-ui';

export default function App() {
  return (
    <Button 
      variant='primary'
      style={{ 
        '--button-bg': '#ef4444',
        '--button-hover-bg': '#dc2626',
        '--button-border-radius': '9999px'
      } as React.CSSProperties}
    >
      自定义样式
    </Button>
  );
}
```

### 可用的 CSS 变量

| 变量名 | 说明 | 默认值 |
|---------|------|--------|
| `--button-bg` | 背景色 | 根据颜色主题 |
| `--button-color` | 文字颜色 | 根据颜色主题 |
| `--button-hover-bg` | 悬停背景色 | 根据颜色主题 |
| `--button-hover-color` | 悬停文字颜色 | 根据颜色主题 |
| `--button-border-color` | 边框颜色 | 根据颜色主题 |
| `--button-hover-border-color` | 悬停边框颜色 | 根据颜色主题 |
| `--button-padding-x` | 水平内边距 | 根据尺寸 |
| `--button-padding-y` | 垂直内边距 | 根据尺寸 |
| `--button-font-size` | 字体大小 | 根据尺寸 |
| `--button-line-height` | 行高 | 根据尺寸 |
| `--button-border-radius` | 圆角 | 根据尺寸 |

### 使用全局 CSS 覆盖

也可以在全局 CSS 文件中覆盖 CSS 变量：

```css
/* 全局覆盖所有按钮 */
button {
  --button-bg: #3b82f6;
  --button-hover-bg: #2563eb;
}

/* 通过类名覆盖特定按钮 */
.my-custom-button {
  --button-bg: #ef4444;
  --button-hover-bg: #dc2626;
}
```

## 设计规范

### 按钮尺寸规范

| 尺寸 | 高度 | 字体大小 | 圆角 |
|------|------|----------|------|
| Small | 32px | 12px | 4px |
| Middle | 40px | 14px | 6px |
| Large | 48px | 16px | 8px |

### 按钮颜色规范

组件提供 13 种预设颜色，基于 OKLCH 颜色空间，确保在不同主题下都有良好的可读性。

## 注意事项

1. **加载状态**：当按钮处于加载状态时，按钮会被自动禁用，无法点击。
2. **样式覆盖**：使用 Tailwind 类名时，建议使用 `!` 前缀来确保样式生效。
3. **ref 支持**：组件支持 `ref`，可以获取按钮的 DOM 引用。
4. **无障碍**：按钮支持键盘操作（Enter 和 Space 键）。

## 相关组件

- [Icon](./Icon.md) - 图标组件
- [ButtonGroup](./ButtonGroup.md) - 按钮组组件
