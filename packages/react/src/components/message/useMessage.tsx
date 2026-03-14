import { useCallback, useContext, useMemo } from 'react';
import { MessageContext } from './MessageContext';
import type { MessagePosition } from './message.styles';

// 消息API类型
export interface MessageApi {
  success: (content: React.ReactNode, duration?: number, position?: MessagePosition) => void;
  info: (content: React.ReactNode, duration?: number, position?: MessagePosition) => void;
  warning: (content: React.ReactNode, duration?: number, position?: MessagePosition) => void;
  error: (content: React.ReactNode, duration?: number, position?: MessagePosition) => void;
  removeAll: () => void;
}

// 使用消息的钩子
export const useMessage = () => {
  const context = useContext(MessageContext);
  
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  
  const { add, removeAll } = context;
  
  // 生成唯一ID
  const generateId = useCallback(() => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, []);
  
  // 消息API实现
  const messageApi: MessageApi = useMemo(() => ({
    success: (content, duration = 3000, position = 'top') => {
      add({
        id: generateId(),
        content,
        type: 'success',
        duration,
        position,
      });
    },
    info: (content, duration = 3000, position = 'top') => {
      add({
        id: generateId(),
        content,
        type: 'info',
        duration,
        position,
      });
    },
    warning: (content, duration = 3000, position = 'top') => {
      add({
        id: generateId(),
        content,
        type: 'warning',
        duration,
        position,
      });
    },
    error: (content, duration = 0, position = 'top') => {
      add({
        id: generateId(),
        content,
        type: 'error',
        duration,
        position,
        closable: true,
      });
    },
    removeAll: removeAll,
  }), [add, removeAll, generateId]);
  
  // 返回消息API和contextHolder
  return [messageApi, <div key="message-context-holder" />] as const;
};