import React from 'react';
import { createRoot } from 'react-dom/client';
import { Modal, type ModalProps } from './Modal';
import { InfoIcon, SuccessIcon, ErrorIcon, WarningIcon } from '../icons';

export type ModalFuncProps = Omit<ModalProps, 'visible' | 'onOk' | 'onCancel'> & {
  content?: React.ReactNode;
  icon?: React.ReactNode;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
};

const confirm = (props: ModalFuncProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = createRoot(div);

  let currentConfig = { ...props, visible: true };

  const destroy = () => {
    // React 18 createRoot unmount is async in some cases or just void
    root.unmount();
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  const render = (config: any) => {
    const handleOk = async () => {
      if (config.onOk) {
        await config.onOk();
      }
      close();
    };

    const handleCancel = async () => {
      if (config.onCancel) {
        await config.onCancel();
      }
      close();
    };

    const close = () => {
      currentConfig = { ...currentConfig, visible: false };
      render(currentConfig);
      // Wait for animation to finish before destroying
      setTimeout(destroy, 300);
    };

    // 有 title：标题栏显示「图标 + 标题」，正文仅内容；无 title：不显示标题栏，若有图标则把图标放在正文左侧
    const hasTitle = config.title != null && config.title !== '';
    const modalTitle = hasTitle
      ? (config.icon ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '22px', lineHeight: 1 }}>{config.icon}</span>
            {config.title}
          </span>
        ) : config.title)
      : undefined;

    const bodyContent = !hasTitle && config.icon ? (
      <div style={{ display: 'flex', gap: '12px' }}>
        <span style={{ fontSize: '22px', lineHeight: 1 }}>{config.icon}</span>
        <div style={{ fontSize: '14px' }}>{config.content}</div>
      </div>
    ) : (
      <div style={{ fontSize: '14px' }}>{config.content}</div>
    );

    root.render(
      <Modal
        {...config}
        title={modalTitle}
        visible={config.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {bodyContent}
      </Modal>
    );
  };

  render(currentConfig);

  return {
    destroy: close,
    update: (newConfig: ModalFuncProps) => {
      currentConfig = { ...currentConfig, ...newConfig };
      render(currentConfig);
    },
  };
};

export const ModalApi = {
  confirm: (props: ModalFuncProps) => confirm(props),
  info: (props: ModalFuncProps) => confirm({ okText: '我知道了', cancelText: null, icon: <InfoIcon style={{ color: '#1890ff' }} />, ...props }),
  success: (props: ModalFuncProps) => confirm({ okText: '我知道了', cancelText: null, icon: <SuccessIcon style={{ color: '#52c41a' }} />, ...props }),
  error: (props: ModalFuncProps) => confirm({ okText: '我知道了', cancelText: null, icon: <ErrorIcon style={{ color: '#ff4d4f' }} />, ...props }),
  warning: (props: ModalFuncProps) => confirm({ okText: '我知道了', cancelText: null, icon: <WarningIcon style={{ color: '#faad14' }} />, ...props }),
};
