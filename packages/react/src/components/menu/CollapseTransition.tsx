import React, { useRef, useEffect, useState, useCallback } from 'react';

interface CollapseTransitionProps {
  isOpen: boolean;
  children: React.ReactNode;
  duration?: number;
}

export const CollapseTransition: React.FC<CollapseTransitionProps> = ({
  isOpen,
  children,
  duration = 300
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>(isOpen ? 'auto' : '0px');
  const [isInitial, setIsInitial] = useState(true);
  const animationRef = useRef<number | null>(null);
  const prevIsOpen = useRef(isOpen);

  // 获取实际内容高度
  const getContentHeight = useCallback(() => {
    return contentRef.current?.scrollHeight || 0;
  }, []);

  // 清理动画帧
  const cancelAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      cancelAnimation();
    };
  }, [cancelAnimation]);

  useEffect(() => {
    // 跳过初始渲染的动画
    if (isInitial) {
      setIsInitial(false);
      prevIsOpen.current = isOpen;
      return;
    }

    // 状态未变化时不执行动画
    if (prevIsOpen.current === isOpen) return;
    prevIsOpen.current = isOpen;

    cancelAnimation();

    if (isOpen) {
      // 展开动画
      setHeight('0px');
      
      // 等待一帧确保高度设置生效
      animationRef.current = requestAnimationFrame(() => {
        const startHeight = getContentHeight();
        setHeight(`${startHeight}px`);
        
        // 动画结束后设置自动高度
        const timer = setTimeout(() => {
          setHeight('auto');
        }, duration);
        
        return () => clearTimeout(timer);
      });
    } else {
      // 收起动画
      const startHeight = getContentHeight();
      setHeight(`${startHeight}px`);
      
      // 等待一帧确保高度设置生效
      animationRef.current = requestAnimationFrame(() => {
        setHeight('0px');
      });
    }

    return cancelAnimation;
  }, [isOpen, duration, getContentHeight, cancelAnimation, isInitial]);

  // 计算过渡样式
  const transitionStyle = {
    overflow: 'hidden',
    transition: `height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    height,
    willChange: 'height',
    // 防止动画闪烁
    backfaceVisibility: 'hidden' as const,
    transform: 'translateZ(0)'
  };

  return (
    <div
      ref={contentRef}
      style={transitionStyle}
    >
      {children}
    </div>
  );
};