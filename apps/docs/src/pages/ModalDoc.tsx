import React, { useState } from 'react';
import { Modal, Button, ModalProvider, useModal, ModalApi } from 'soli-ui';
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

const BasicModalExample: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

const CustomFooterExample: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>
        Custom Footer
      </Button>
      <Modal
        title="Custom Footer"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <Button variant="outline" onClick={() => setVisible(false)}>Return</Button>
            <Button onClick={() => {
              alert('Submitted!');
              setVisible(false);
            }}>Submit</Button>
          </div>
        }
      >
        <p>This modal has a customized footer.</p>
      </Modal>
    </>
  );
};

const HookUsageExample: React.FC = () => {
  const { openModal } = useModal();

  const handleOpen = () => {
    openModal(
      <div>
        <p>This modal is opened via hook.</p>
        <p>It's convenient for imperative calls.</p>
      </div>,
      {
        title: 'Hook Modal',
        onOk: () => console.log('OK clicked'),
      }
    );
  };

  return (
    <Button onClick={handleOpen}>
      Open via Hook
    </Button>
  );
};

const StaticMethodExample: React.FC = () => {
  const showConfirm = () => {
    ModalApi.confirm({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk: () => {
        return new Promise<void>((resolve) => {
          setTimeout(resolve, 1000);
        });
      },
      onCancel: () => console.log('Cancel'),
    });
  };

  const showInfo = () => {
    ModalApi.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk: () => {},
    });
  };

  const showCustomText = () => {
    ModalApi.info({
      title: 'Custom Text',
      content: 'You can customize the button text.',
      okText: 'Good Job',
    });
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showInfo}>Info</Button>
      <Button onClick={() => ModalApi.success({ title: 'Success', content: 'This is a success message' })}>Success</Button>
      <Button onClick={() => ModalApi.error({ title: 'Error', content: 'This is an error message' })}>Error</Button>
      <Button onClick={() => ModalApi.warning({ content: 'This is a warning message' })}>Warning</Button>
      <Button onClick={showCustomText}>Custom Text</Button>
    </div>
  );
};

const ModalDoc: React.FC = () => {
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
          Modal 对话框
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#00000073',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          模态对话框，用于在当前页面打开一个浮层，承载相关操作。
        </p>
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
          description="最简单的使用方式。"
          preview={<BasicModalExample />}
          code={`import React, { useState } from 'react';
import { Modal, Button } from 'soli-ui';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};`}
        />

        <ExampleSection 
          title="自定义底部"
          description="可以自定义底部按钮。"
          preview={<CustomFooterExample />}
          code={`import React, { useState } from 'react';
import { Modal, Button } from 'soli-ui';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>
        Custom Footer
      </Button>
      <Modal
        title="Custom Footer"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <Button variant="outline" onClick={() => setVisible(false)}>Return</Button>
            <Button onClick={() => {
              alert('Submitted!');
              setVisible(false);
            }}>Submit</Button>
          </div>
        }
      >
        <p>This modal has a customized footer.</p>
      </Modal>
    </>
  );
};`}
        />

        <ExampleSection 
          title="使用 Hooks"
          description="使用 useModal 钩子来命令式地打开模态框。注意：需要确保应用根组件被 ModalProvider 包裹。"
          preview={
            <ModalProvider>
              <HookUsageExample />
            </ModalProvider>
          }
          code={`import React from 'react';
import { ModalProvider, useModal, Button } from 'soli-ui';

const HookUsageExample = () => {
  const { openModal } = useModal();

  const handleOpen = () => {
    openModal(
      <div>
        <p>This modal is opened via hook.</p>
        <p>It's convenient for imperative calls.</p>
      </div>,
      {
        title: 'Hook Modal',
        onOk: () => console.log('OK clicked'),
      }
    );
  };

  return (
    <Button onClick={handleOpen}>
      Open via Hook
    </Button>
  );
};

const App = () => (
  <ModalProvider>
    <HookUsageExample />
  </ModalProvider>
);`}
        />
        <ExampleSection 
          title="静态方法"
          description="使用 ModalApi.confirm() 等静态方法显示确认框。支持通过 okText 和 cancelText 属性覆盖默认文案。"
          preview={<StaticMethodExample />}
          code={`import React from 'react';
import { Button, ModalApi } from 'soli-ui';

const App = () => {
  const showConfirm = () => {
    ModalApi.confirm({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk: () => {
        return new Promise<void>((resolve) => {
          setTimeout(resolve, 1000);
        });
      },
      onCancel: () => console.log('Cancel'),
    });
  };

  const showInfo = () => {
    ModalApi.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk: () => {},
    });
  };

  const showCustomText = () => {
    ModalApi.info({
      title: 'Custom Text',
      content: 'You can customize the button text.',
      okText: 'Good Job',
    });
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showInfo}>Info</Button>
      <Button onClick={() => ModalApi.success({ title: 'Success', content: 'This is a success message' })}>Success</Button>
      <Button onClick={() => ModalApi.error({ title: 'Error', content: 'This is an error message' })}>Error</Button>
      <Button onClick={() => ModalApi.warning({ content: 'This is a warning message' })}>Warning</Button>
      <Button onClick={showCustomText}>Custom Text</Button>
    </div>
  );
};`}
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
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000d9' }}>Modal</h3>
          <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px', border: '1px solid #f0f0f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#000000d9', fontWeight: 600 }}>参数</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#000000d9', fontWeight: 600 }}>说明</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#000000d9', fontWeight: 600 }}>类型</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#000000d9', fontWeight: 600 }}>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>visible</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>对话框是否可见</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>boolean</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>false</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>title</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>标题</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onOk</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>点击确定回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>() ={'>'} void</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>onCancel</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>点击遮罩层或右上角叉或取消按钮的回调</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>() ={'>'} void</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>width</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>宽度</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>string | number</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>520</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>footer</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>底部内容，当不需要默认底部按钮时，可以设为 footer={'{null}'}</td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}><code style={{ fontSize: '12px', fontFamily: 'monospace' }}>ReactNode</code></td>
                <td style={{ padding: '12px 16px', color: '#000000d9' }}>确定取消按钮</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDoc;
