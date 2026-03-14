import React, { createContext, useContext, useState, useCallback } from 'react';
import { Modal } from './Modal';

// 导出 ModalConfig 类型
export interface ModalConfig {
  title?: string;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  footer?: React.ReactNode;
  closable?: boolean;
  maskClosable?: boolean;
}

interface ModalContextType {
  openModal: (content: React.ReactNode, config?: ModalConfig) => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
  const [modalConfig, setModalConfig] = useState<ModalConfig>({});
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const openModal = useCallback((content: React.ReactNode, config: ModalConfig = {}) => {
    setModalContent(content);
    setModalConfig(config);
    setIsOpen(true);
    setClosing(false);
  }, []);

  const closeModal = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setModalContent(null);
      setModalConfig({});
    }, 300);
  }, []);

  const handleOk = useCallback(() => {
    if (modalConfig.onOk) {
      modalConfig.onOk();
    }
    closeModal();
  }, [modalConfig, closeModal]);

  const handleCancel = useCallback(() => {
    if (modalConfig.onCancel) {
      modalConfig.onCancel();
    }
    closeModal();
  }, [modalConfig, closeModal]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      {isOpen && (
        <Modal
          title={modalConfig.title}
          visible={isOpen}
          closing={closing}
          onOk={handleOk}
          onCancel={handleCancel}
          okText={modalConfig.okText}
          cancelText={modalConfig.cancelText}
          footer={modalConfig.footer}
          closable={modalConfig.closable}
          maskClosable={modalConfig.maskClosable}
        >
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};