import React, { useState, useEffect, useCallback } from 'react';
import { 
  RateContainer,
  StarContainer,
  StarBackground,
  StarForeground,
  HalfStar,
  FullClickArea,
  LeftClickArea,
  RightClickArea,
  RateText,
  ActiveIndicator,
  type RateStyleProps
} from './rate.styles';

// 星星 SVG 组件
const StarIcon = () => (
  <svg 
    viewBox="64 64 896 896" 
    focusable="false" 
    data-icon="star" 
    aria-hidden="true"
  >
    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
  </svg>
);

// 扩展组件属性
export interface RateProps extends RateStyleProps {
  value?: number;
  defaultValue?: number;
  count?: number;
  allowHalf?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  character?: React.ReactNode;
  tooltips?: string[];
  onChange?: (value: number) => void;
  onHoverChange?: (value: number) => void;
  showActiveIndicator?: boolean;
  className?: string;
  style?: React.CSSProperties;
  starClassName?: string;
  showScore?: boolean;
}

export const Rate: React.FC<RateProps> = ({
  value: propValue,
  defaultValue = 0,
  count = 5,
  allowHalf = false,
  disabled = false,
  readOnly = false,
  character = <StarIcon />,
  tooltips = [],
  size = 'middle',
  showActiveIndicator = false,
  onChange,
  onHoverChange,
  className,
  style,
  starClassName,
  showScore = false,
  ...props
}) => {
  // 状态管理
  const [currentValue, setCurrentValue] = useState<number>(defaultValue);
  const [hoverValue, setHoverValue] = useState<number>(0);
  
  // 同步外部值变化
  useEffect(() => {
    if (propValue !== undefined) {
      setCurrentValue(propValue);
    }
  }, [propValue]);
  
  // 处理点击事件
  const handleClick = useCallback((value: number) => {
    if (disabled || readOnly) return;
    
    // 当不允许半星时，确保值总是整数
    const adjustedValue = allowHalf ? value : Math.ceil(value);
    const newValue = adjustedValue === currentValue ? 0 : adjustedValue;
    
    setCurrentValue(newValue);
    
    if (onChange) {
      onChange(newValue);
    }
  }, [currentValue, disabled, readOnly, allowHalf, onChange]);
  
  // 处理鼠标悬停
  const handleMouseEnter = useCallback((value: number) => {
    if (disabled || readOnly) return;
    
    // 当不允许半星时，悬停值也应为整数
    const adjustedValue = allowHalf ? value : Math.ceil(value);
    setHoverValue(adjustedValue);
    
    if (onHoverChange) {
      onHoverChange(adjustedValue);
    }
  }, [disabled, readOnly, allowHalf, onHoverChange]);
  
  // 处理鼠标离开
  const handleMouseLeave = useCallback(() => {
    if (disabled || readOnly) return;
    setHoverValue(0);
    
    if (onHoverChange) {
      onHoverChange(0);
    }
  }, [disabled, readOnly, onHoverChange]);
  
  // 判断星星是否激活
  const isStarActive = (starIndex: number, value: number) => {
    return value >= starIndex;
  };
  
  // 判断半星是否激活
  const isHalfStarActive = (starIndex: number, value: number) => {
    return allowHalf && value >= starIndex - 0.5 && value < starIndex;
  };
  
  // 生成星星
  const renderStars = () => {
    const stars = [];
    const displayValue = hoverValue || currentValue;
    
    for (let i = 1; i <= count; i++) {
      const isActive = isStarActive(i, displayValue);
      const isHalfActive = isHalfStarActive(i, displayValue);
      const isCurrentActive = isStarActive(i, currentValue) || isHalfStarActive(i, currentValue);
      
      stars.push(
        <StarContainer
          key={i}
          size={size}
          disabled={disabled || readOnly}
          onMouseLeave={handleMouseLeave}
          title={tooltips[i - 1] || ''}
          className={starClassName}
        >
          <StarBackground size={size}>
            {character}
          </StarBackground>
          
          {/* 整星 */}
          <StarForeground active={isActive && !isHalfActive}>
            {character}
          </StarForeground>
          
          {/* 半星 - 仅在 allowHalf 为 true 时显示 */}
          {allowHalf && (
            <HalfStar active={isHalfActive}>
              {character}
            </HalfStar>
          )}
          
          {/* 活动状态指示器 */}
          {showActiveIndicator && isCurrentActive && (
            <ActiveIndicator active={isCurrentActive} />
          )}
          
          {/* 点击区域 - 根据 allowHalf 渲染不同的点击区域 */}
          {allowHalf ? (
            <>
              <LeftClickArea 
                onClick={() => handleClick(i - 0.5)}
                onMouseEnter={() => handleMouseEnter(i - 0.5)}
              />
              <RightClickArea 
                onClick={() => handleClick(i)}
                onMouseEnter={() => handleMouseEnter(i)}
              />
            </>
          ) : (
            <FullClickArea 
              onClick={() => handleClick(i)}
              onMouseEnter={() => handleMouseEnter(i)}
            />
          )}
        </StarContainer>
      );
    }
    
    return stars;
  };
  
  // 计算显示文本
  const getDisplayText = () => {
    if (hoverValue > 0 && tooltips[Math.ceil(hoverValue) - 1]) {
      return tooltips[Math.ceil(hoverValue) - 1];
    }
    
    if (tooltips[Math.ceil(currentValue) - 1]) {
      return tooltips[Math.ceil(currentValue) - 1];
    }
    
    return showScore && currentValue > 0 ? `${currentValue}/${count}` : '';
  };
  
  return (
    <RateContainer 
      disabled={disabled || readOnly}
      size={size}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={style}
      {...props}
    >
      {renderStars()}
      {getDisplayText() && (
        <RateText size={size}>
          {getDisplayText()}
        </RateText>
      )}
    </RateContainer>
  );
};

Rate.displayName = 'Rate';