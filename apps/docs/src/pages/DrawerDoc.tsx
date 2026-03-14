import React, { useState } from 'react';
import { Drawer, Button } from 'soli-ui';
import { CodeBlock } from '../components/CodeBlock';

const BasicExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开抽屉
      </Button>
      <Drawer
        title="基础抽屉"
        open={open}
        onClose={onClose}
      >
        <p>这是一些内容</p>
        <p>这是一些内容</p>
        <p>这是一些内容</p>
      </Drawer>
    </div>
  );
};

const PlacementExample: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right');

  const showDrawer = (newPlacement: 'left' | 'right' | 'top' | 'bottom') => {
    setPlacement(newPlacement);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant='primary' onClick={() => showDrawer('right')}>
        右侧弹出
      </Button>
      <Button variant='primary' onClick={() => showDrawer('left')}>
        左侧弹出
      </Button>
      <Button variant='primary' onClick={() => showDrawer('top')}>
        顶部弹出
      </Button>
      <Button variant='primary' onClick={() => showDrawer('bottom')}>
        底部弹出
      </Button>
      <Drawer
        title="自定义位置"
        open={open}
        onClose={onClose}
        placement={placement}
      >
        <p>当前弹出位置：{placement}</p>
      </Drawer>
    </div>
  );
};

const SizeExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开大尺寸抽屉
      </Button>
      <Drawer
        title="自定义尺寸"
        open={open}
        onClose={onClose}
        width={600}
      >
        <p>这是一个宽度为 600px 的抽屉</p>
        <p>可以通过 width 属性自定义宽度</p>
        <p>可以通过 height 属性自定义高度（当 placement 为 top 或 bottom 时）</p>
      </Drawer>
    </div>
  );
};

const NoMaskExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开无遮罩抽屉
      </Button>
      <Drawer
        title="无遮罩抽屉"
        open={open}
        onClose={onClose}
        mask={false}
      >
        <p>这是一个没有遮罩的抽屉</p>
        <p>点击遮罩不会关闭抽屉</p>
      </Drawer>
    </div>
  );
};

const MaskNotClosableExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开禁止点击遮罩关闭的抽屉
      </Button>
      <Drawer
        title="禁止点击遮罩关闭"
        open={open}
        onClose={onClose}
        maskClosable={false}
      >
        <p>点击遮罩不会关闭抽屉</p>
        <p>只能通过关闭按钮或调用 onClose 关闭</p>
      </Drawer>
    </div>
  );
};

const NoClosableExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开无关闭按钮的抽屉
      </Button>
      <Drawer
        title="无关闭按钮"
        open={open}
        onClose={onClose}
        closable={false}
      >
        <p>这是一个没有关闭按钮的抽屉</p>
        <p>只能通过点击遮罩或调用 onClose 关闭</p>
      </Drawer>
    </div>
  );
};

const FooterExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开带页脚的抽屉
      </Button>
      <Drawer
        title="带页脚的抽屉"
        open={open}
        onClose={onClose}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              取消
            </Button>
            <Button variant='primary' onClick={onClose}>
              确定
            </Button>
          </div>
        }
      >
        <p>这是一个带页脚的抽屉</p>
        <p>可以通过 footer 属性自定义页脚内容</p>
      </Drawer>
    </div>
  );
};

const DestroyOnCloseExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开关闭时销毁的抽屉
      </Button>
      <Drawer
        title="关闭时销毁"
        open={open}
        onClose={onClose}
        destroyOnClose={true}
      >
        <p>这是一个关闭时会销毁内容的抽屉</p>
        <p>每次打开都会重新渲染内容</p>
      </Drawer>
    </div>
  );
};

const ZIndexExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开高层级抽屉
      </Button>
      <Drawer
        title="自定义层级"
        open={open}
        onClose={onClose}
        zIndex={2000}
      >
        <p>这是一个层级为 2000 的抽屉</p>
        <p>可以通过 zIndex 属性自定义层级</p>
      </Drawer>
    </div>
  );
};

const TailwindExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开自定义样式的抽屉
      </Button>
      <Drawer
        title="使用 Tailwind CSS"
        open={open}
        onClose={onClose}
        className="bg-blue-50"
        style={{ backgroundColor: '#f0f9ff' }}
      >
        <p>这是一个使用 Tailwind CSS 覆盖样式的抽屉</p>
        <p>可以通过 className 属性添加 Tailwind CSS 类名</p>
      </Drawer>
    </div>
  );
};

const StyleExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开自定义样式的抽屉
      </Button>
      <Drawer
        title="使用 style 属性"
        open={open}
        onClose={onClose}
        style={{ backgroundColor: '#f0f9ff' }}
      >
        <p>这是一个使用 style 属性自定义样式的抽屉</p>
        <p>可以通过 style 属性添加自定义样式</p>
      </Drawer>
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

const DrawerDoc: React.FC = () => {
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
          Drawer 抽屉
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          屏幕边缘滑出的浮层面板。
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
            抽屉从屏幕侧边滑出，让用户在当前页面上下文中完成操作，同时保持上下文连贯性。
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
          description="点击按钮打开抽屉，点击遮罩或关闭按钮关闭抽屉。"
          preview={<BasicExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开抽屉
      </Button>
      <Drawer
        title="基础抽屉"
        open={open}
        onClose={onClose}
      >
        <p>这是一些内容</p>
        <p>这是一些内容</p>
        <p>这是一些内容</p>
      </Drawer>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="自定义位置"
          description="可以通过 placement 属性设置抽屉弹出位置。"
          preview={<PlacementExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');

  const showDrawer = (newPlacement) => {
    setPlacement(newPlacement);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={() => showDrawer('right')}>
        右侧弹出
      </Button>
      <Button variant='primary' onClick={() => showDrawer('left')}>
        左侧弹出
      </Button>
      <Button variant='primary' onClick={() => showDrawer('top')}>
        顶部弹出
      </Button>
      <Button variant='primary' onClick={() => showDrawer('bottom')}>
        底部弹出
      </Button>
      <Drawer
        title="自定义位置"
        open={open}
        onClose={onClose}
        placement={placement}
      >
        <p>当前弹出位置：{placement}</p>
      </Drawer>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="自定义尺寸"
          description="可以通过 width 和 height 属性设置抽屉的尺寸。"
          preview={<SizeExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开大尺寸抽屉
      </Button>
      <Drawer
        title="自定义尺寸"
        open={open}
        onClose={onClose}
        width={600}
      >
        <p>这是一个宽度为 600px 的抽屉</p>
        <p>可以通过 width 属性自定义宽度</p>
        <p>可以通过 height 属性自定义高度（当 placement 为 top 或 bottom 时）</p>
      </Drawer>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="不显示遮罩"
          description="可以通过 mask 属性设置是否显示遮罩。"
          preview={<NoMaskExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开无遮罩抽屉
      </Button>
      <Drawer
        title="无遮罩抽屉"
        open={open}
        onClose={onClose}
        mask={false}
      >
        <p>这是一个没有遮罩的抽屉</p>
        <p>点击遮罩不会关闭抽屉</p>
      </Drawer>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="禁止点击遮罩关闭"
          description="可以通过 maskClosable 属性设置是否允许点击遮罩关闭抽屉。"
          preview={<MaskNotClosableExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开禁止点击遮罩关闭的抽屉
      </Button>
      <Drawer
        title="禁止点击遮罩关闭"
        open={open}
        onClose={onClose}
        maskClosable={false}
      >
        <p>点击遮罩不会关闭抽屉</p>
        <p>只能通过关闭按钮或调用 onClose 关闭</p>
      </Drawer>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="不显示关闭按钮"
          description="可以通过 closable 属性设置是否显示关闭按钮。"
          preview={<NoClosableExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开无关闭按钮的抽屉
      </Button>
      <Drawer
        title="无关闭按钮"
        open={open}
        onClose={onClose}
        closable={false}
      >
        <p>这是一个没有关闭按钮的抽屉</p>
        <p>只能通过点击遮罩或调用 onClose 关闭</p>
      </Drawer>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="带页脚的抽屉"
          description="可以通过 footer 属性设置抽屉的页脚内容。"
          preview={<FooterExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开带页脚的抽屉
      </Button>
      <Drawer
        title="带页脚的抽屉"
        open={open}
        onClose={onClose}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              取消
            </Button>
            <Button variant='primary' onClick={onClose}>
              确定
            </Button>
          </div>
        }
      >
        <p>这是一个带页脚的抽屉</p>
        <p>可以通过 footer 属性自定义页脚内容</p>
      </Drawer>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="关闭时销毁内容"
          description="可以通过 destroyOnClose 属性设置是否在关闭时销毁抽屉内容。"
          preview={<DestroyOnCloseExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开关闭时销毁的抽屉
      </Button>
      <Drawer
        title="关闭时销毁"
        open={open}
        onClose={onClose}
        destroyOnClose={true}
      >
        <p>这是一个关闭时会销毁内容的抽屉</p>
        <p>每次打开都会重新渲染内容</p>
      </Drawer>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="自定义层级"
          description="可以通过 zIndex 属性设置抽屉的层级。"
          preview={<ZIndexExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开高层级抽屉
      </Button>
      <Drawer
        title="自定义层级"
        open={open}
        onClose={onClose}
        zIndex={2000}
      >
        <p>这是一个层级为 2000 的抽屉</p>
        <p>可以通过 zIndex 属性自定义层级</p>
      </Drawer>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="使用 Tailwind CSS 覆盖样式"
          description="可以通过 className 属性添加 Tailwind CSS 类名来覆盖样式。"
          preview={<TailwindExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开自定义样式的抽屉
      </Button>
      <Drawer
        title="使用 Tailwind CSS"
        open={open}
        onClose={onClose}
        className="bg-blue-50"
        style={{ backgroundColor: '#f0f9ff' }}
      >
        <p>这是一个使用 Tailwind CSS 覆盖样式的抽屉</p>
        <p>可以通过 className 属性添加 Tailwind CSS 类名</p>
      </Drawer>
    </div>
  );
}`}
        />

        <ExampleSection 
          title="使用 style 属性自定义样式"
          description="可以通过 style 属性添加自定义样式。"
          preview={<StyleExample />}
          code={`import { Drawer, Button } from 'soli-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={showDrawer}>
        打开自定义样式的抽屉
      </Button>
      <Drawer
        title="使用 style 属性"
        open={open}
        onClose={onClose}
        style={{ backgroundColor: '#f0f9ff' }}
      >
        <p>这是一个使用 style 属性自定义样式的抽屉</p>
        <p>可以通过 style 属性添加自定义样式</p>
      </Drawer>
    </div>
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
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Drawer</h3>
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
                    title
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标题</td>
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
                    open
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否打开抽屉</td>
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
                    onClose
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>关闭回调函数</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>{'() => void'}</code>
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
                    placement
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>弹出位置</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'left' | 'right' | 'top' | 'bottom'</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>'right'</code>
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
                    width
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>宽度</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>378</code>
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
                    height
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>高度（当 placement 为 top 或 bottom 时）</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>378</code>
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
                    closable
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否显示关闭按钮</td>
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
                    maskClosable
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否允许点击遮罩关闭</td>
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
                    mask
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>是否显示遮罩</td>
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
                    destroyOnClose
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>关闭时是否销毁内容</td>
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
                    footer
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>页脚内容</td>
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
                    className
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>类名</td>
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
                    style
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>样式</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>CSSProperties</code>
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
                    zIndex
                  </code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>层级</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>number</code>
                </td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>
                  <code style={{ fontSize: '12px', fontFamily: 'monospace' }}>1000</code>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerDoc;
