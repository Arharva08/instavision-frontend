import React, { useState } from 'react'
import { Layout, Menu, Button, Typography } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Home, User, FileText, LogOut } from 'lucide-react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'

const { Header, Sider, Content } = Layout
const { Title } = Typography

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  const menuItems = [
    {
      key: '/dashboard',
      icon: <Home size={18} />,
      label: 'Dashboard',
      onClick: () => navigate('/dashboard'),
    },
    {
      key: '/registration',
      icon: <FileText size={18} />,
      label: 'Registration',
      onClick: () => navigate('/registration'),
    },
    {
      key: '/profile',
      icon: <User size={18} />,
      label: 'Profile',
      onClick: () => navigate('/profile'),
    },
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* SIDEBAR */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 600,
            fontSize: '1.1rem',
          }}
        >
          {collapsed ? 'IV' : 'InstaVision'}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            onClick: item.onClick,
          }))}
          style={{
            background: 'transparent',
            color: 'white',
            fontWeight: 500,
          }}
        />
      </Sider>

      {/* MAIN AREA */}
      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <Title level={4} style={{ margin: 0 }}>
              {location.pathname === '/dashboard'
                ? 'Dashboard'
                : location.pathname === '/registration'
                ? 'Registration'
                : 'Profile'}
            </Title>
          </div>

          <Button
            icon={<LogOut size={16} />}
            onClick={handleLogout}
            type="default"
            style={{ borderColor: '#764ba2', color: '#764ba2' }}
          >
            Logout
          </Button>
        </Header>

        <Content
          style={{
            margin: '20px',
            padding: '20px',
            background: '#fff',
            borderRadius: 8,
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout
