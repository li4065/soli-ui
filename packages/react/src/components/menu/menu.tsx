import React, { 
  useState, 
  createContext, 
  useCallback, 
  useEffect
} from 'react';
import { MenuContainer, MenuList } from './menu.styles';
import type { MenuContextProps, MenuItemType, MenuProps } from './menu.types';
import { renderMenuItems } from './menuRenderer';

export const MenuContext = createContext<MenuContextProps>({
  mode: 'vertical',
  accordion: false,
  theme: 'light',
  activeKey: '',
  openKeys: [],
  setActiveKey: () => {},
  toggleOpenKey: () => {},
  setOpenKey: () => {},
});

export const Menu: React.FC<MenuProps> = ({
  mode = 'vertical',
  theme = 'light',
  accordion = false,
  defaultActiveKey = '',
  defaultOpenKeys = [],
  onSelect,
  items,
  style,
  className,
}) => {
  const [activeKey, setActiveKey] = useState<string>(defaultActiveKey);
  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys);
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  // 初始化菜单状态
  useEffect(() => {
    const initializeMenuState = (items: MenuItemType[], openKeys: string[]): MenuItemType[] => {
      return items.map(item => {
        const isOpen = openKeys.includes(item.key);
        return {
          ...item,
          isOpen,
          children: item.children 
            ? initializeMenuState(item.children, openKeys) 
            : undefined
        };
      });
    };

    setMenuItems(initializeMenuState(items, defaultOpenKeys));
  }, []);

  // 处理菜单展开/收起
  const toggleOpenKey = useCallback((key: string, _level: number, parentKey?: string) => {
    setOpenKeys(prev => {
      const fullKey = parentKey ? `${parentKey}-${key}` : key;
      const isClosing = prev.includes(fullKey);

      if (isClosing) {
        // 关闭当前菜单及其所有子菜单
        // 修正：更精确的匹配，避免前缀误伤
        return prev.filter(k => k !== fullKey && !k.startsWith(`${fullKey}-`));
      }

      // 展开操作
      if (accordion) {
        // 手风琴模式：保留祖先路径，移除同级其他分支
        const nextOpenKeys = prev.filter(k => {
          // 1. 如果 k 是 fullKey 的祖先（或是 fullKey 本身，虽然它还没加进去），保留
          // 判断 k 是否是 fullKey 的前缀路径
          if (fullKey.startsWith(k) && (fullKey === k || fullKey[k.length] === '-')) {
            return true;
          }

          // 2. 如果 k 不是祖先，判断是否是同级分支
          if (parentKey) {
            // 如果有父级，同级分支会有相同的前缀 parentKey-
            // 但 k 不是 fullKey 的祖先（上面已检查），所以 k 必定是兄弟或兄弟的子孙
            if (k.startsWith(`${parentKey}-`)) {
              return false; // 移除同级兄弟分支
            }
          } else {
            // 如果是顶级菜单 (level 0)，没有 parentKey
            // 所有非祖先的 key 都是兄弟分支（因为它们不属于 fullKey 这棵树）
            return false;
          }

          // 3. 其他情况（不同父级的分支），保留
          return true;
        });
        
        return [...nextOpenKeys, fullKey];
      }

      // 普通模式：直接添加
      return [...prev, fullKey];
    });
  }, [accordion]);

  // 设置特定菜单项的展开状态（用于Hover模式）
  const setOpenKey = useCallback((key: string, isOpen: boolean, parentKey?: string) => {
    const fullKey = parentKey ? `${parentKey}-${key}` : key;
    setOpenKeys(prev => {
      if (isOpen) {
        return prev.includes(fullKey) ? prev : [...prev, fullKey];
      } else {
        return prev.filter(k => k !== fullKey);
      }
    });
  }, []);

  // 更新菜单项的展开状态
// 更新菜单项的展开状态
useEffect(() => {
  const updateMenuState = (items: MenuItemType[], openKeys: string[]): MenuItemType[] => {
    return items.map(item => {
      const fullKey = item.parentKey ? `${item.parentKey}-${item.key}` : item.key;
      const isOpen = openKeys.includes(fullKey);
      
      return {
        ...item,
        isOpen,
        children: item.children 
          ? updateMenuState(
              item.children.map(child => ({
                ...child,
                parentKey: fullKey
              })), 
              openKeys
            ) 
          : undefined
      };
    });
  };

  setMenuItems(prev => updateMenuState(prev, openKeys));
}, [openKeys]);

  // 创建上下文值
  const contextValue: MenuContextProps = {
    mode,
    theme,
    accordion,
    activeKey,
    openKeys,
    setActiveKey: (key: string) => {
      setActiveKey(key);
      onSelect?.(key);
    },
    toggleOpenKey,
    setOpenKey,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      <MenuContainer 
        mode={mode} 
        menuTheme={theme} 
        style={style} 
        className={`admin-menu ${className}`}
      >
        <MenuList mode={mode}>
        {renderMenuItems(menuItems, 0)}
      </MenuList>
      </MenuContainer>
    </MenuContext.Provider>
  );
};