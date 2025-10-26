import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Card, Form, Input, Button, Typography, Row, Col, message } from 'antd'
import { Lock, Phone } from 'lucide-react'

const { Content } = Layout
const { Title, Text } = Typography

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    
    // Simulate login
    setTimeout(() => {
      message.success('Login successful!')
      setLoading(false)
      navigate('/dashboard')
    }, 1500)
  }

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <Row style={{ width: '100%', maxWidth: '1200px' }}>
          <Col xs={24} md={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <Title level={1} style={{ color: 'white', marginBottom: '1rem', fontSize: '3rem' }}>
                InstaVision
              </Title>
              <Title level={2} style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
                Laboratory & Services
              </Title>
              <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
                ISO 9001 2015 Certified Pharmaceutical Training & Placement Institute
              </Text>
              <div style={{ marginTop: '3rem', textAlign: 'left' }}>
                <Card style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }}>
                  <Text style={{ color: 'white', fontSize: '1rem' }}>
                    Join 868+ successful placements from 255+ colleges across India
                  </Text>
                </Card>
              </div>
            </div>
          </Col>
          
          <Col xs={24} md={12}>
            <Card 
              style={{ 
                borderRadius: '15px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                border: 'none'
              }}
            >
              <Title level={2} style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                Welcome Back
              </Title>
              <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: '2rem' }}>
                Login to access your account
              </Text>

              <Form
                name="login"
                onFinish={onFinish}
                layout="vertical"
                size="large"
              >
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: 'Please input your phone number!' },
                    { pattern: /^[0-9]{10}$/, message: 'Please enter valid 10-digit phone number!' }
                  ]}
                >
                  <Input
                    prefix={<Phone />}
                    placeholder="Phone Number"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password
                    prefix={<Lock/>}
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item style={{ marginBottom: '1rem', textAlign: 'right' }}>
                  <Button type="link" style={{ padding: 0 }}>
                    Forgot password?
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    block
                    loading={loading}
                    style={{ 
                      height: '50px',
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none'
                    }}
                  >
                    Login
                  </Button>
                </Form.Item>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <Text type="secondary">
                    Don't have an account? <Button type="link" onClick={() => message.info('Registration coming soon!')}>Sign up</Button>
                  </Text>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Login

