import React, { useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import type { MessagePosition, MessageItem } from './message.styles';
import { 
  messageItemStyle, 
  messageIconStyle,
  messageContentStyle,
  messageCloseStyle,
  messageProgressStyle,
  getPositionStyle
} from './message.styles';
import { CloseIcon, SuccessIcon, InfoIcon, WarningIcon, ErrorIcon } from '../icons'

// 消息类型对应的图标
const typeIcons = {
  success: SuccessIcon,
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

interface MessageContainerProps {
  messages: MessageItem[];
  onRemove: (id: string) => void;
}

export const MessageContainer: React.FC<MessageContainerProps> = ({ messages, onRemove }) => {
  // 按位置分组消息
  const groupedMessages: Record<string, MessageItem[]> = {};

  messages.forEach(message => {
    const position = message.position || 'top';
    if (!groupedMessages[position]) {
      groupedMessages[position] = [];
    }
    groupedMessages[position].push(message);
  });

  return (
    <>
      {Object.entries(groupedMessages).map(([position, msgs]) => {
        if (msgs.length === 0) return null;
        
        return (
          <div 
            key={position} 
            css={css`
              position: fixed;
              z-index: 1050;
              display: flex;
              flex-direction: column;
              align-items: center;
              pointer-events: none;
              ${getPositionStyle(position as MessagePosition)}
            `}
          >
            {msgs.map(message => (
              <MessageItem
                key={message.id}
                message={message}
                onRemove={onRemove}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

interface MessageItemProps {
  message: MessageItem;
  onRemove: (id: string) => void;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, onRemove }) => {
  const [closing, setClosing] = React.useState(false);
  const timerRef = useRef<number | null>(null);
  
  const Icon = typeIcons[message.type];
  const duration = message.duration ?? 3000;
  const closable = message.closable ?? true;
  
  // 处理关闭
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onRemove(message.id);
      if (message.onClose) {
        message.onClose();
      }
    }, 300);
  };
  
  // 设置自动关闭
  useEffect(() => {
    if (duration > 0) {
      timerRef.current = window.setTimeout(() => {
        handleClose();
      }, duration);
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [duration]);
  
  return (
    <div css={messageItemStyle(message.type, closing)}>
      <div css={messageIconStyle(message.type)}>
        <Icon />
      </div>
      
      <div css={messageContentStyle}>
        {message.content}
      </div>
      
      {closable && (
        <button 
          css={messageCloseStyle} 
          onClick={handleClose}
          aria-label="关闭消息"
        >
          <CloseIcon />
        </button>
      )}
      
      {duration > 0 && (
        <div css={messageProgressStyle(duration, closing)} />
      )}
    </div>
  );
};