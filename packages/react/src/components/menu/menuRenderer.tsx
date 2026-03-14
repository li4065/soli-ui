import React, { useContext, useMemo, useRef } from 'react';
import {
  MenuItemWrapper,
  MenuItemContentStyled,
  SubMenuList,
  // MenuDivider
} from './menu.styles';
import { MenuContext } from './menu';
import type { MenuItemType } from './menu.types';
import { CollapseTransition } from './CollapseTransition';

// 最多支持3级菜单 (0, 1, 2)
const MAX_LEVEL = 3;

const MenuItem: React.FC<{
  item: MenuItemType;
  level: number;
  parentKey?: string;
  fullKey: string;
  index: number;
  itemsLength: number;
}> = ({ item, level, parentKey, fullKey }) => {
  // 限制层级深度
  const hasChildren = item.children && item.children.length > 0 && level < MAX_LEVEL - 1;
  const context = useContext(MenuContext);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 判断当前菜单项是否有激活的子项
  const hasActiveChild = context.activeKey.startsWith(`${fullKey}-`);
  
  // 在组件内部使用 useMemo 是安全的
  const subMenuContent = useMemo(() => {
    if (!hasChildren) return null;
    
    return (
      <SubMenuList level={level + 1} mode={context.mode} menuTheme={context.theme}>
        {item.children!.map((child, childIndex) => {
          const childFullKey = `${fullKey}-${child.key}`;
          return (
            <MenuItem
              key={childFullKey}
              item={child}
              level={level + 1}
              parentKey={fullKey}
              fullKey={childFullKey}
              index={childIndex}
              itemsLength={item.children!.length}
            />
          );
        })}
      </SubMenuList>
    );
  }, [item.children, level, fullKey, hasChildren, context.mode]);

  // Hover 处理 (仅水平模式)
  const handleMouseEnter = () => {
    if (context.mode !== 'horizontal') return;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (hasChildren) {
       context.setOpenKey?.(item.key, true, parentKey);
    }
  };

  const handleMouseLeave = () => {
    if (context.mode !== 'horizontal') return;
    timerRef.current = setTimeout(() => {
        if (hasChildren) {
           context.setOpenKey?.(item.key, false, parentKey);
        }
    }, 100);
  };

  return (
    <MenuItemWrapper 
      level={level}
      hasChildren={hasChildren}
      data-testid={`menu-item-${fullKey}`}
      className={`${hasActiveChild ? 'menu-active' : ''} ${item.className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      menuTheme={context.theme}
      mode={context.mode}
    >
      <MenuItemContent
        item={item}
        level={level}
        hasChildren={hasChildren ?? false}
        fullKey={fullKey}
        parentKey={parentKey}
      />
      
      {hasChildren && (
        context.mode === 'horizontal' ? (
          // 水平模式下不使用 CollapseTransition，而是直接显示/隐藏（配合CSS控制显隐和动画）
          <div 
            style={{ 
              display: item.isOpen ? 'block' : 'none',
              position: 'absolute',
              top: level === 0 ? '100%' : '0',
              left: level === 0 ? '0' : '100%',
              zIndex: 1050
            }}
          >
            {subMenuContent}
          </div>
        ) : (
          <CollapseTransition 
            isOpen={item.isOpen ?? false} 
            duration={250}
          >
            {subMenuContent}
          </CollapseTransition>
        )
      )}
    </MenuItemWrapper>
  );
};

// 渲染菜单项
export const renderMenuItems = (
  items: MenuItemType[], 
  level: number,
  parentKey?: string
): React.ReactNode => {
  return items.map((item, index) => {
    const fullKey = parentKey ? `${parentKey}-${item.key}` : item.key;
    return (
      <MenuItem
        key={fullKey}
        item={item}
        level={level}
        parentKey={parentKey}
        fullKey={fullKey}
        index={index}
        itemsLength={items.length}
      />
    );
  });
};

// 菜单项内容组件
const MenuItemContent: React.FC<{
  item: MenuItemType;
  level: number;
  hasChildren: boolean;
  fullKey: string;
  parentKey?: string;
}> = ({ item, level, hasChildren, fullKey, parentKey }) => {
  const { key, label, icon, disabled, isOpen } = item;
  const context = useContext(MenuContext);
  
  const isActive = context.activeKey === fullKey;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止事件冒泡
    
    if (disabled) return;
    
    if (hasChildren) {
      // 垂直模式下点击展开/收起
      if (context.mode !== 'horizontal') {
        context.toggleOpenKey(key, level, parentKey);
      }
    } else {
      // 处理选中
      context.setActiveKey(fullKey);
    }
  };

  const arrowStyle = useMemo(() => ({
    transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isOpen ? (context.mode === 'horizontal' && level === 0 ? 'rotate(180deg)' : 'rotate(90deg)') : 'none',
    willChange: 'transform',
    backfaceVisibility: 'hidden' as const,
    transformStyle: 'preserve-3d' as const
  }), [isOpen, context.mode, level]);

  // 水平菜单的箭头图标（向下）
  const horizontalArrow = (
    <svg 
      width="12" 
      height="12" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M6 9L12 15L18 9" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  // 垂直菜单或子菜单的箭头图标（向右）
  const verticalArrow = (
     <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M9 18L15 12L9 6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <MenuItemContentStyled
      className={`menu-item ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      disabled={disabled}
      level={level}
      isActive={isActive}
      menuTheme={context.theme}
      mode={context.mode}
      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
    >
      <div className='menu-item-content'>
        {icon && <div className="menu-item-icon">{icon}</div>}
        <div className="menu-item-text" style={{ flex: 1 }}>{label}</div>
        
        {hasChildren && (
          <div className="menu-item-arrow" style={arrowStyle}>
            {context.mode === 'horizontal' && level === 0 ? horizontalArrow : verticalArrow}
          </div>
        )}
      </div>
    </MenuItemContentStyled>
  );
};
