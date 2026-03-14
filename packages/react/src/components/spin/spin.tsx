import React, { useState, useEffect, useRef } from 'react';
import { 
  SpinContainer,
  SpinContent,
  SpinIndicator,
  SpinDot,
  SpinDotItem,
  SpinText,
  SpinMask
} from './spin.styles';

// Helper to detect if a class string contains a text color definition
const hasTextColorClass = (className?: string) => {
  if (!className) return false;
  // Matches text-red-500, text-[color], text-current, etc.
  // Excludes common non-color text utility classes
  return /\btext-(?!(?:left|right|center|justify|start|end|wrap|nowrap|break|clip|ellipsis|xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|opacity)\b)[\w-]+/.test(className);
};

export interface SpinProps {
  size?: 'small' | 'default' | 'large';
  tip?: string;
  spinning?: boolean;
  delay?: number;
  indicator?: React.ReactNode;
  fullscreen?: boolean;
  wrapperClassName?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Spin: React.FC<SpinProps> = ({
  size = 'default',
  tip,
  spinning = true,
  delay = 0,
  indicator,
  fullscreen = false,
  wrapperClassName = '',
  className = '',
  style,
  children
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const delayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (delay > 0) {
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
      
      if (spinning) {
        delayTimer.current = setTimeout(() => {
          setIsSpinning(true);
        }, delay);
      } else {
        setIsSpinning(false);
      }
    } else {
      setIsSpinning(spinning);
    }

    return () => {
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
    };
  }, [spinning, delay]);

  const renderIndicator = () => {
    if (indicator) {
      return indicator;
    }
    
    return (
      <SpinDot size={size}>
        <SpinDotItem size={size} />
        <SpinDotItem size={size} />
        <SpinDotItem size={size} />
        <SpinDotItem size={size} />
      </SpinDot>
    );
  };

  const containerClass = [wrapperClassName, className].filter(Boolean).join(' ');

  // Determine if we should apply the default blue color
  // We apply it if:
  // 1. No explicit color is set in style
  // 2. No text color utility class is detected in className/wrapperClassName
  const shouldApplyDefaultColor = 
    (!style || !style.color) && 
    !hasTextColorClass(containerClass);

  const finalStyle = shouldApplyDefaultColor 
    ? { color: '#1890ff', ...style } 
    : style;

  if (fullscreen) {
    return (
      <SpinContainer fullscreen={true} className={containerClass} style={finalStyle}>
        {isSpinning && (
          <SpinContent>
            <SpinIndicator>{renderIndicator()}</SpinIndicator>
            {tip && <SpinText size={size}>{tip}</SpinText>}
          </SpinContent>
        )}
      </SpinContainer>
    );
  }

  return (
    <SpinContainer className={containerClass} style={finalStyle}>
      {children}
      
      {isSpinning && (
        <>
          <SpinMask />
          <SpinContent>
            <SpinIndicator>{renderIndicator()}</SpinIndicator>
            {tip && <SpinText size={size}>{tip}</SpinText>}
          </SpinContent>
        </>
      )}
    </SpinContainer>
  );
};