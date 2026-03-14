import React, { useState, useEffect } from 'react';
import type { TabsProps } from './tabs.types';
import { TabsContainer, TabsNav, TabNavItem, TabPane, TabIcon, CloseButton } from './tabs.styles';
import { CloseIcon } from '../icons/close';

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(({
  activeKey: propActiveKey,
  defaultActiveKey,
  onChange,
  onEdit,
  onTabClick,
  items = [],
  tabPosition = 'top',
  type = 'line',
  className,
  style,
  size,
  tabBarExtraContent,
  segmentColor,
  tabHeight,
  radius,
}, ref) => {
  const [activeKey, setActiveKey] = useState<string>(
    propActiveKey || defaultActiveKey || (items.length > 0 ? items[0].key : '')
  );

  useEffect(() => {
    if (propActiveKey !== undefined) {
      setActiveKey(propActiveKey);
    }
  }, [propActiveKey]);

  // If no active key and items change, set default
  useEffect(() => {
    if (!activeKey && items.length > 0 && propActiveKey === undefined) {
      setActiveKey(items[0].key);
    }
  }, [items, activeKey, propActiveKey]);

  const handleTabClick = (key: string, disabled?: boolean, event?: React.MouseEvent) => {
    if (disabled) return;
    
    if (onTabClick) {
      onTabClick(key, event!);
    }

    if (activeKey !== key) {
      if (propActiveKey === undefined) {
        setActiveKey(key);
      }
      onChange?.(key);
    }
  };

  const handleClose = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();
    onEdit?.(key, 'remove');
  };

  return (
    <TabsContainer ref={ref} $position={tabPosition} className={className} style={style}>
      <TabsNav $position={tabPosition} $type={type} $size={size} $radius={radius}>
        {items.map(item => (
          <TabNavItem
            key={item.key}
            $active={activeKey === item.key}
            $disabled={!!item.disabled}
            $position={tabPosition}
            $type={type}
            $size={size}
            $segmentColor={segmentColor}
            $height={tabHeight}
            $radius={radius}
            onClick={(e) => handleTabClick(item.key, item.disabled, e)}
          >
            {item.icon && <TabIcon>{item.icon}</TabIcon>}
            {item.label}
            {(type === 'editable-card' && item.closable !== false) && (
              <CloseButton onClick={(e) => handleClose(e, item.key)}>
                <CloseIcon size={10} />
              </CloseButton>
            )}
          </TabNavItem>
        ))}
        {tabBarExtraContent && <div style={{ marginLeft: 'auto' }}>{tabBarExtraContent}</div>}
      </TabsNav>
      <div style={{ flex: 1, width: '100%', overflow: 'hidden' }}>
        {items.map(item => (
          <TabPane key={item.key} $active={activeKey === item.key}>
            {item.children}
          </TabPane>
        ))}
      </div>
    </TabsContainer>
  );
});

Tabs.displayName = 'Tabs';
