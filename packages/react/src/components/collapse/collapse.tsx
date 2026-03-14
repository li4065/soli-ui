import React, { 
  useState, 
  useContext, 
  createContext, 
  type ReactNode, 
  type CSSProperties,
  useEffect
} from 'react';
import { 
  CollapseContainer, 
  PanelContainer, 
  PanelHeader, 
  PanelContent,
} from './collapse.styles';
import { CollapseIcon } from '../icons';

// 确保样式组件被正确打包
CollapseContainer;
PanelContainer;
PanelHeader;
PanelContent;

// 创建 Context 用于面板间通信
interface CollapseContextProps {
  activeKeys: string[];
  setActiveKey: (key: string) => void;
  accordion?: boolean;
  expandIcon?: ReactNode | ((isActive: boolean) => ReactNode);
}

const CollapseContext = createContext<CollapseContextProps | undefined>(undefined);

interface CollapseProps {
  children: ReactNode;
  accordion?: boolean;
  activeKey?: string | string[];
  defaultActiveKey?: string | string[];
  onChange?: (activeKey: string | string[]) => void;
  bordered?: boolean;
  className?: string;
  style?: CSSProperties;
  expandIcon?: ReactNode | ((isActive: boolean) => ReactNode);
  containerClassName?: string;
}

// 定义 Panel 组件的 props 接口
interface PanelProps {
  header: ReactNode;
  panelKey: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  extra?: ReactNode;
  showArrow?: boolean;
  headerClassName?: string;
  contentClassName?: string;
}

export const Collapse: React.FC<CollapseProps> & { Panel: React.FC<PanelProps> } = ({
  children,
  accordion = false,
  activeKey: propActiveKey,
  defaultActiveKey = accordion ? '' : [],
  onChange,
  bordered = true,
  className,
  style,
  expandIcon,
  containerClassName,
}) => {
  // 初始化活动面板 key
  const getInitialActiveKeys = () => {
    if (propActiveKey !== undefined) {
      return Array.isArray(propActiveKey) ? propActiveKey : [propActiveKey];
    }
    
    if (defaultActiveKey) {
      return Array.isArray(defaultActiveKey) ? defaultActiveKey : [defaultActiveKey];
    }
    
    return accordion ? [] : [];
  };

  const [activeKeys, setActiveKeys] = useState<string[]>(getInitialActiveKeys());
  
  // 当 propActiveKey 变化时更新状态
  useEffect(() => {
    if (propActiveKey !== undefined) {
      setActiveKeys(Array.isArray(propActiveKey) ? propActiveKey : [propActiveKey]);
    }
  }, [propActiveKey]);

  const handleSetActiveKey = (key: string) => {
    let newActiveKeys: string[] = [];
    
    if (accordion) {
      // 手风琴模式：如果点击的是当前活动面板则关闭，否则打开新面板
      newActiveKeys = activeKeys[0] === key ? [] : [key];
    } else {
      // 非手风琴模式：切换面板状态
      newActiveKeys = activeKeys.includes(key)
        ? activeKeys.filter(k => k !== key)
        : [...activeKeys, key];
    }
    
    // 更新状态（如果是非受控组件）
    if (propActiveKey === undefined) {
      setActiveKeys(newActiveKeys);
    }
    
    // 触发 onChange 回调
    onChange?.(accordion ? newActiveKeys[0] || '' : newActiveKeys);
  };

  // 提供 Context 值
  const contextValue: CollapseContextProps = {
    activeKeys,
    setActiveKey: handleSetActiveKey,
    accordion,
    expandIcon,
  };

  return (
    <CollapseContext.Provider value={contextValue}>
      <CollapseContainer 
        className={`collapse-container ${className} ${containerClassName}`}
        bordered={bordered}
        style={style}
      >
        {children}
      </CollapseContainer>
    </CollapseContext.Provider>
  );
};

export const Panel: React.FC<PanelProps> = ({
  header,
  panelKey,
  children,
  disabled = false,
  className,
  style,
  extra,
  showArrow = true,
  headerClassName,
  contentClassName,
}) => {
  const context = useContext(CollapseContext);
  
  if (!context) {
    throw new Error('Panel must be used within Collapse');
  }

  const { activeKeys, setActiveKey, expandIcon } = context;
  const isActive = activeKeys.includes(panelKey);

  const handleClick = () => {
    if (!disabled) {
      setActiveKey(panelKey);
    }
  };

  // 渲染自定义图标
  const renderExpandIcon = () => {
    if (!showArrow) return null;
    
    if (typeof expandIcon === 'function') {
      return expandIcon(isActive);
    }
    
    return (
      <div className={`icon-container ${isActive ? 'expanded' : ''}`}>
        {expandIcon || <CollapseIcon />}
      </div>
    );
  };

  return (
    <PanelContainer 
      className={`panel ${className}`}
      disabled={disabled}
      style={style}
    >
      <PanelHeader 
        className={`panel-header ${headerClassName}`}
        disabled={disabled}
        data-disabled={disabled}
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? undefined : 0}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            setActiveKey(panelKey);
          }
        }}
      >
        <div className="panel-title">{header}</div>
        <div className="panel-extra">
          {extra}
          {renderExpandIcon()}
        </div>
      </PanelHeader>
      <PanelContent 
        className={`panel-content ${contentClassName}`}
        expanded={isActive}
        aria-hidden={!isActive}
      >
        <div>
          {children}
        </div>
      </PanelContent>
    </PanelContainer>
  );
};

// 将 Panel 附加到 Collapse 上
Collapse.Panel = Panel;