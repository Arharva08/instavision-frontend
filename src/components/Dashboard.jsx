import { Layout, Card, Typography, Row, Col, Button, Space, Statistic } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LogOut, User , FileText, Trophy, Calendar  } from 'lucide-react'

const { Header, Content } = Layout
const { Title } = Typography

const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Header style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '1rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3} style={{ color: 'white', margin: 0 }}>
            InstaVision Dashboard
          </Title>
          <Button 
            icon={<LogOut />} 
            onClick={handleLogout}
            style={{ color: 'black', borderColor: 'black' }}
          >
            Logout
          </Button>
        </div>
      </Header>

      <Content style={{ padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card 
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none'
            }}
          >
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={12} md={8}>
                <Statistic
                  title={<span style={{ color: 'rgba(255,255,255,0.8)' }}>My Profile</span>}
                  value={0}
                  prefix={<FileText />}
                  valueStyle={{ color: 'white' }}
                />
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Statistic
                  title={<span style={{ color: 'rgba(255,255,255,0.8)' }}>Certificates</span>}
                  value={0}
                  prefix={<Trophy />}
                  valueStyle={{ color: 'white' }}
                />
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Statistic
                  title={<span style={{ color: 'rgba(255,255,255,0.8)' }}>Placement Status</span>}
                  value="Active"
                  prefix={<User  />}
                  valueStyle={{ color: 'white' }}
                />  
              </Col>
            </Row>
          </Card>

          <Card style={{ textAlign: 'center', borderRadius: '15px' }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div style={{ fontSize: '5rem' }}>🚀</div>
              <Title level={2}>Coming Soon</Title>
              <Card 
                style={{ 
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  border: 'none'
                }}
              >
                <Space direction="vertical" size="middle">
                  <Title level={4}>Your Dashboard is Under Development</Title>
                  <Space size="large">
                  </Space>
                </Space>
              </Card>
            </Space>
          </Card>
        </Space>
      </Content>
    </Layout>
  )
}

export default Dashboard

