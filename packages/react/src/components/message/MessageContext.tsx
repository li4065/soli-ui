import React, { createContext, useContext, useState, useCallback } from 'react';
import { MessageContainer } from './MessageContainer';
import type { MessageItem } from './message.styles';

// 消息上下文类型
interface MessageContextType {
  add: (message: MessageItem) => void;
  remove: (id: string) => void;
  removeAll: () => void;
}

// 创建上下文
export const MessageContext = createContext<MessageContextType | null>(null);

// 消息提供者组件
export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<MessageItem[]>([]);
  
  // 添加消息
  const add = useCallback((message: MessageItem) => {
    setMessages(prev => [...prev, message]);
  }, []);
  
  // 移除消息
  const remove = useCallback((id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
  }, []);
  
  // 移除所有消息
  const removeAll = useCallback(() => {
    setMessages([]);
  }, []);
  
  return (
    <MessageContext.Provider value={{ add, remove, removeAll }}>
      {children}
      <MessageContainer messages={messages} onRemove={remove} />
    </MessageContext.Provider>
  );
};

// 使用消息上下文的钩子
export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessageContext must be used within a MessageProvider');
  }
  return context;
};