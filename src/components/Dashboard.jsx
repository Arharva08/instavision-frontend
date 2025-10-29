import { Layout, Card, Typography, Row, Col, Button, Space, Statistic } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LogOut, User , FileText, Trophy, Calendar  } from 'lucide-react'
import { getUser, getToken, getCurrentUser, logout } from '../api/authentication'
import { useState, useEffect } from 'react'

const { Header, Content } = Layout
const { Title, Text } = Typography

const Dashboard = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get user from localStorage first (faster)
    const savedUser = getUser()
    if (savedUser) {
      setUser(savedUser)
      setLoading(false)
    }

    // Also fetch from API to get latest data
    const token = getToken()
    if (token) {
      getCurrentUser(token)
        .then(userData => {
          setUser(userData)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching user:', error)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Header style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '1rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3} style={{ color: 'white', margin: 0 }}>
            InstaVision Dashboard
          </Title>
          
          <Space>
            {loading ? (
              <Text style={{ color: 'white' }}>Loading...</Text>
            ) : (
              <Text style={{ color: 'white', fontSize: '16px' }}>
                Welcome, {user?.first_name || user?.email || 'User'}
              </Text>
            )}
            
            <Button 
              icon={<LogOut />} 
              onClick={handleLogout}
              style={{ color: 'black'}}
            >
              Logout
            </Button>
          </Space>
        </div>
      </Header>
    </Layout>
  )
}

export default Dashboard

