import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ButtonDoc from './pages/ButtonDoc';
import AlertDoc from './pages/AlertDoc';
import BreadcrumbDoc from './pages/BreadcrumbDoc';
import CheckboxDoc from './pages/CheckboxDoc';
import CollapseDoc from './pages/CollapseDoc';
import DividerDoc from './pages/DividerDoc';
import DrawerDoc from './pages/DrawerDoc';
import FlexDoc from './pages/FlexDoc';
import FormDoc from './pages/FormDoc';
import GridDoc from './pages/GridDoc';
import InputDoc from './pages/InputDoc';
import TextareaDoc from './pages/TextareaDoc';
import SelectDoc from './pages/SelectDoc';
import ListDoc from './pages/ListDoc';
import MenuDoc from './pages/MenuDoc';
import MessageDoc from './pages/MessageDoc';
import ModalDoc from './pages/ModalDoc';
import PopconfirmDoc from './pages/PopconfirmDoc';
import ProgressDoc from './pages/ProgressDoc';
import RadioDoc from './pages/RadioDoc';
import RateDoc from './pages/RateDoc';
import SpinDoc from './pages/SpinDoc';
import SwitchDoc from './pages/SwitchDoc';
import TableDoc from './pages/TableDoc';
import TabsDoc from './pages/TabsDoc';
import TagDoc from './pages/TagDoc';
import TooltipDoc from './pages/TooltipDoc';
import TreeDoc from './pages/TreeDoc';
import TypographyDoc from './pages/TypographyDoc';
import PaginationDoc from './pages/PaginationDoc';

const NavBar = () => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: '#fff',
      borderBottom: '1px solid #f0f0f0',
      padding: '0 24px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
    }}>
      <div style={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        height: '64px'
      }}>
        <div style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1890ff',
          textDecoration: 'none'
        }}>
          soli-ui
        </div>
      </div>
    </nav>
  );
};

const SideBar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Demo' },
    { path: '/docs/button', label: 'Button 按钮' },
    { path: '/docs/alert', label: 'Alert 警告提示' },
    { path: '/docs/breadcrumb', label: 'Breadcrumb 面包屑' },
    { path: '/docs/checkbox', label: 'Checkbox 多选框' },
    { path: '/docs/collapse', label: 'Collapse 折叠面板' },
    { path: '/docs/divider', label: 'Divider 分割线' },
    { path: '/docs/drawer', label: 'Drawer 抽屉' },
    { path: '/docs/flex', label: 'Flex 弹性布局' },
    { path: '/docs/grid', label: 'Grid 网格布局' },
    { path: '/docs/input', label: 'Input 输入框' },
    { path: '/docs/textarea', label: 'TextArea 文本域' },
    { path: '/docs/select', label: 'Select 选择器' },
    { path: '/docs/list', label: 'List 列表' },
    { path: '/docs/pagination', label: 'Pagination 分页器' },
    { path: '/docs/form', label: 'Form 表单' },
    { path: '/docs/menu', label: 'Menu 菜单' },
    { path: '/docs/message', label: 'Message 全局提示' },
    { path: '/docs/modal', label: 'Modal 对话框' },
    { path: '/docs/popconfirm', label: 'Popconfirm 气泡确认框' },
    { path: '/docs/progress', label: 'Progress 进度条' },
    { path: '/docs/radio', label: 'Radio 单选框' },
    { path: '/docs/rate', label: 'Rate 评分' },
    { path: '/docs/spin', label: 'Spin 加载中' },
    { path: '/docs/switch', label: 'Switch 开关' },
    { path: '/docs/table', label: 'Table 表格' },
    { path: '/docs/tabs', label: 'Tabs 标签页' },
    { path: '/docs/tag', label: 'Tag 标签' },
    { path: '/docs/tooltip', label: 'Tooltip 文字提示' },
    { path: '/docs/tree', label: 'Tree 树形控件' },
    { path: '/docs/typography', label: 'Typography 排版' },
  ];

  return (
    <aside style={{
      position: 'sticky',
      top: '80px',
      height: 'calc(100vh - 80px)',
      width: '256px',
      overflowY: 'auto',
      padding: '24px 0',
      borderRight: '1px solid #f0f0f0',
      background: '#fff'
    }}>
      <div style={{ padding: '0 24px' }}>
        <div style={{
          fontSize: '12px',
          color: '#00000073',
          fontWeight: 600,
          marginBottom: '12px',
          textTransform: 'uppercase'
        }}>
          组件
        </div>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: 'block',
              textDecoration: 'none',
              color: location.pathname === item.path ? '#1890ff' : '#000000d9',
              fontWeight: location.pathname === item.path ? 600 : 400,
              fontSize: '14px',
              padding: '8px 12px',
              borderRadius: '4px',
              transition: 'all 0.2s',
              marginBottom: '4px',
              background: location.pathname === item.path ? '#e6f7ff' : 'transparent'
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};

const MainContent = () => {
  return (
    <main style={{
      flex: 1,
      minHeight: 'calc(100vh - 64px)',
      background: '#fff'
    }}>
      <Routes>
        <Route path="/" element={
          <div style={{ padding: '48px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '24px', fontSize: '38px', fontWeight: 600 }}>组件演示</h1>
            <p style={{ color: '#666', marginBottom: '24px', fontSize: '16px' }}>
              请点击左侧导航栏查看组件文档
            </p>
          </div>
        } />
        <Route path="/docs/button" element={<ButtonDoc />} />
        <Route path="/docs/alert" element={<AlertDoc />} />
        <Route path="/docs/breadcrumb" element={<BreadcrumbDoc />} />
        <Route path="/docs/checkbox" element={<CheckboxDoc />} />
        <Route path="/docs/collapse" element={<CollapseDoc />} />
        <Route path="/docs/divider" element={<DividerDoc />} />
        <Route path="/docs/drawer" element={<DrawerDoc />} />
        <Route path="/docs/flex" element={<FlexDoc />} />
        <Route path="/docs/grid" element={<GridDoc />} />
        <Route path="/docs/input" element={<InputDoc />} />
        <Route path="/docs/textarea" element={<TextareaDoc />} />
        <Route path="/docs/select" element={<SelectDoc />} />
        <Route path="/docs/list" element={<ListDoc />} />
        <Route path="/docs/menu" element={<MenuDoc />} />
        <Route path="/docs/message" element={<MessageDoc />} />
        <Route path="/docs/modal" element={<ModalDoc />} />
        <Route path="/docs/popconfirm" element={<PopconfirmDoc />} />
        <Route path="/docs/progress" element={<ProgressDoc />} />
        <Route path="/docs/radio" element={<RadioDoc />} />
        <Route path="/docs/rate" element={<RateDoc />} />
        <Route path="/docs/spin" element={<SpinDoc />} />
        <Route path="/docs/switch" element={<SwitchDoc />} />
        <Route path="/docs/table" element={<TableDoc />} />
              <Route path="/docs/tabs" element={<TabsDoc />} />
              <Route path="/docs/tag" element={<TagDoc />} />
        <Route path="/docs/tooltip" element={<TooltipDoc />} />
        <Route path="/docs/tree" element={<TreeDoc />} />
        <Route path="/docs/typography" element={<TypographyDoc />} />
        <Route path="/docs/pagination" element={<PaginationDoc />} />
        <Route path="/docs/form" element={<FormDoc />} />
      </Routes>
    </main>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
        <div style={{ display: 'flex', flex: 1 }}>
          <SideBar />
          <MainContent />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
