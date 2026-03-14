# soli-ui 组件库文档

基于 Tailwind CSS 开发的 React UI 组件库，专为 React 19+ 设计。

## 特性

- 🎨 **完整的设计系统** - 基于 OKLCH 颜色空间，提供 13 种预设颜色
- 🧩 **30+ 组件** - 涵盖基础、表单、数据展示、反馈、导航等场景
- 🎯 **TypeScript 支持** - 完整的类型定义
- 🎭 **样式可定制** - 支持 Tailwind CSS 和 CSS 变量覆盖
- ⚡ **轻量高效** - 基于 Emotion 和 React 19 优化

## 快速开始

### 安装

```bash
npm install soli-ui
```

### 使用

```tsx
import { Button } from 'soli-ui';

function App() {
  return <Button variant="primary">Hello World</Button>;
}
```

## 组件列表

### 基础组件

- [Button](./Button.md) - 按钮
- [Divider](./Divider.md) - 分割线
- [Flex](./Flex.md) - 弹性布局
- [Grid](./Grid.md) - 栅格布局
- [Typography](./Typography.md) - 排版

### 表单组件

- [Input](./Input.md) - 输入框
- [TextArea](./TextArea.md) - 文本域
- [Select](./Select.md) - 选择器
- [Checkbox](./Checkbox.md) - 复选框
- [Radio](./Radio.md) - 单选框
- [Switch](./Switch.md) - 开关
- [Rate](./Rate.md) - 评分
- [Form](./Form.md) - 表单

### 数据展示

- [Table](./Table.md) - 表格
- [List](./List.md) - 列表
- [Tree](./Tree.md) - 树形控件
- [Tag](./Tag.md) - 标签
- [Progress](./Progress.md) - 进度条

### 反馈组件

- [Alert](./Alert.md) - 警告提示
- [Message](./Message.md) - 全局提示
- [Modal](./Modal.md) - 对话框
- [Drawer](./Drawer.md) - 抽屉
- [Tooltip](./Tooltip.md) - 文字提示
- [Popconfirm](./Popconfirm.md) - 气泡确认框
- [Spin](./Spin.md) - 加载中

### 导航组件

- [Menu](./Menu.md) - 导航菜单
- [Pagination](./Pagination.md) - 分页
- [Breadcrumb](./Breadcrumb.md) - 面包屑
- [Collapse](./Collapse.md) - 折叠面板

## 样式定制

### 使用 Tailwind CSS

所有组件都支持通过 `className` 属性使用 Tailwind CSS 类名来覆盖样式。

```tsx
import { Button } from 'soli-ui';

<Button 
  variant="primary"
  className="!bg-red-500 hover:!bg-red-600"
>
  自定义按钮
</Button>
```

**注意**：由于 Emotion 样式的优先级较高，需要使用 `!important` 语法（`!` 前缀）来确保 Tailwind 样式生效。

### 使用 CSS 变量

组件使用 CSS 变量来定义样式，可以通过 `style` 属性直接覆盖这些变量。

```tsx
import { Button } from 'soli-ui';

<Button 
  variant="primary"
  style={{ 
    '--button-bg': '#ef4444',
    '--button-hover-bg': '#dc2626'
  } as React.CSSProperties}
>
  自定义按钮
</Button>
```

### 全局样式覆盖

也可以在全局 CSS 文件中覆盖 CSS 变量：

```css
/* 全局覆盖所有按钮 */
button {
  --button-bg: #3b82f6;
  --button-hover-bg: #2563eb;
}
```

## 主题系统

### 颜色规范

组件提供 13 种预设颜色：

- blue, purple, cyan, green
- magenta, pink, red, orange
- yellow, volcano, geekblue, lime, gold

每种颜色有 6 个色阶（100-600），基于 OKLCH 颜色空间。

### 尺寸规范

组件提供三种尺寸：small, middle, large。

## 设计原则

1. **一致性** - 所有组件遵循统一的设计规范
2. **可访问性** - 支持键盘操作和屏幕阅读器
3. **可定制** - 提供多种样式定制方式
4. **性能** - 基于 React 19 和 Emotion 优化

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

ISC
