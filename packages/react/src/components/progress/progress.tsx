import React from 'react';
import { 
  ProgressContainer, 
  ProgressLineTrack, 
  ProgressLineInner,
  ProgressCircle, 
  ProgressDashboard,
  ProgressText 
} from './progress.styles';
import { SuccessIcon } from '../icons'

export interface ProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'format'> {
  type?: 'line' | 'circle' | 'dashboard';
  percent?: number;
  size?: 'small' | 'default' | 'large' | number;
  strokeColor?: string;
  trailColor?: string;
  strokeWidth?: number;
  showInfo?: boolean;
  status?: 'normal' | 'success' | 'exception' | 'active';
  format?: (percent?: number) => React.ReactNode;
  gapDegree?: number;
  gapPosition?: 'top' | 'bottom' | 'left' | 'right';
  trackClassName?: string;
  barClassName?: string;
  infoClassName?: string;
}

const getStatusColor = (status: ProgressProps['status'], percent: number) => {
  if (status === 'success') return '#52c41a';
  if (status === 'exception') return '#ff4d4f';
  if (percent >= 100) return '#52c41a';
  return '#1890ff';
};

export const Progress: React.FC<ProgressProps> = ({
  type = 'line',
  percent = 0,
  size = 'default',
  strokeColor,
  trailColor = '#f5f5f5',
  strokeWidth = 6,
  showInfo = true,
  status = 'normal',
  format,
  gapDegree = 75,
  gapPosition = 'bottom',
  className,
  style,
  trackClassName,
  barClassName,
  infoClassName,
  ...rest
}) => {
  const validPercent = Math.min(Math.max(percent, 0), 100);
  const progressStatus = percent >= 100 ? 'success' : status;
  const color = strokeColor || getStatusColor(progressStatus, validPercent);
  
  const renderProgressInfo = () => {
    if (!showInfo) return null;
    
    // 计算合适的图标大小
    const getIconSize = () => {
      if (type === 'line') return Math.max(14, strokeWidth * 1.5);
      
      if (typeof size === 'number') return Math.max(16, size / 5);
      
      switch (size) {
        case 'small': return 12;
        case 'large': return 20;
        default: return 16;
      }
    };

    const textClass = infoClassName || '';

    if (format) {
      return (
        <ProgressText type={type} size={size} className={textClass}>
          {format(validPercent)}
        </ProgressText>
      );
    }
    
    // 当进度为100%且未设置format时显示完成图标
    if (validPercent >= 100 && progressStatus !== 'exception') {
      return (
        <ProgressText type={type} size={size} className={textClass}>
          <SuccessIcon width={getIconSize()} height={getIconSize()} fill={color} />
        </ProgressText>
      );
    }
    
    // 异常状态显示错误图标
    if (progressStatus === 'exception') {
      return (
        <ProgressText type={type} size={size} className={textClass}>
          <svg 
            width={getIconSize()} 
            height={getIconSize()} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#ff4d4f" 
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ProgressText>
      );
    }

    return (
      <ProgressText type={type} size={size} className={textClass}>
        {validPercent}%
      </ProgressText>
    );
  };

  const renderProgress = () => {
    switch (type) {
      case 'line':
        return (
          <ProgressContainer type="line" className={className} style={style} {...rest}>
            <ProgressLineTrack 
              className={`progress-track ${trackClassName || ''}`}
              style={{ height: strokeWidth, backgroundColor: trailColor }}
            >
              <ProgressLineInner
                className={`progress-inner ${barClassName || ''}`}
                percent={validPercent}
                color={color}
                style={{ height: strokeWidth }}
              />
            </ProgressLineTrack>
            {renderProgressInfo()}
          </ProgressContainer>
        );
      
      case 'circle':
        return (
          <ProgressContainer type="circle" className={className} style={style} {...rest}>
            <ProgressCircle 
              size={size}
              viewBox="0 0 100 100"
            >
              <circle
                className={`progress-trail ${trackClassName || ''}`}
                cx="50"
                cy="50"
                r="42"
                stroke={trailColor}
                strokeWidth={strokeWidth}
                fill="none"
              />
              <circle
                className={`progress-path ${barClassName || ''}`}
                cx="50"
                cy="50"
                r="42"
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${validPercent * 2.64}, 264`}
              />
            </ProgressCircle>
            {renderProgressInfo()}
          </ProgressContainer>
        );
      
      case 'dashboard':
        return (
          <ProgressContainer type="dashboard" className={className} style={style} {...rest}>
            <ProgressDashboard 
              size={size}
              viewBox="0 0 100 100"
              gapDegree={gapDegree}
              gapPosition={gapPosition}
            >
              <circle
                className={`progress-trail ${trackClassName || ''}`}
                cx="50"
                cy="50"
                r="42"
                stroke={trailColor}
                strokeWidth={strokeWidth}
                fill="none"
              />
              <circle
                className={`progress-path ${barClassName || ''}`}
                cx="50"
                cy="50"
                r="42"
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${validPercent * 2.64}, 264`}
              />
            </ProgressDashboard>
            {renderProgressInfo()}
          </ProgressContainer>
        );
      
      default:
        return null;
    }
  };

  return renderProgress();
};