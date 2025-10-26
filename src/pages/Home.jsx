import { Layout, Card, Space, Typography, Row, Col, Button } from 'antd'
import { Users, Award, Target, CheckCircle , ArrowRight  } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

const Home = () => {
  const navigate = useNavigate()

  const stats = [
    { icon: <Users size={40} />, number: '868+', label: 'Students Placed', color: '#667eea' },
    { icon: <Award size={40} />, number: '255+', label: 'Colleges Connected', color: '#10b981' },
    { icon: <Target size={40} />, number: '2017', label: 'Since We Started', color: '#f59e0b' }
  ]

  const features = [
    'Industry Expert Training',
    'Professional Soft Skills',
    'Laboratory Skills Development',
    'Mock Interview Sessions',
    'Guaranteed Placements',
    'ISO 9001 Certified'
  ]

  return (
    <Layout style={{ minHeight: '100vh', background: 'white' }}>
      <TopBar />
      <Content>
        {/* Hero Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '5rem 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <Space direction="vertical" size="large" align="center" style={{ width: '100%' }}>
              <Card style={{ 
                background: 'rgba(255,255,255,0.2)', 
                border: 'none',
                backdropFilter: 'blur(10px)'
              }}>
                <Space>
                  <Target size={24} color="white" />
                  <Text style={{ color: 'white', fontWeight: 600 }}>
                    Next Batch Starts from 27 OCT 2025
                  </Text>
                </Space>
              </Card>

              <Title level={1} style={{ 
                color: 'white', 
                fontSize: '3.5rem',
                textAlign: 'center',
                fontWeight: 800,
                maxWidth: '900px',
                margin: 0
              }}>
                Transform Your Career in Pharmaceutical Industry
              </Title>

              <Paragraph style={{ 
                color: 'rgba(255,255,255,0.9)', 
                fontSize: '1.3rem',
                textAlign: 'center',
                maxWidth: '700px'
              }}>
                Industry-driven training programs with practical lab experience and guaranteed placement opportunities
              </Paragraph>

              <Space size="large">
                <Button 
                  type="primary" 
                  size="large"
                  style={{ 
                    height: '50px',
                    fontSize: '1.1rem',
                    background: 'white',
                    color: '#667eea',
                    border: 'none',
                    fontWeight: 600
                  }}
                  onClick={() => navigate('/login')}
                >
                  Get Started <ArrowRight  />
                </Button>
                <Button 
                  size="large"
                  style={{ 
                    height: '50px',
                    fontSize: '1.1rem',
                    color: 'white',
                    border: '2px solid white',
                    background: 'transparent'
                  }}
                >
                  Learn More
                </Button>
              </Space>
            </Space>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '4rem 2rem', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Row gutter={[24, 24]}>
              {stats.map((stat, idx) => (
                <Col xs={24} sm={8} key={idx}>
                  <Card 
                    hoverable
                    style={{ 
                      textAlign: 'center',
                      borderRadius: '15px',
                      border: '2px solid #f0f0f0'
                    }}
                  >
                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                      <div style={{ color: stat.color }}>
                        {stat.icon}
                      </div>
                      <Title level={2} style={{ margin: 0, color: stat.color }}>
                        {stat.number}
                      </Title>
                      <Text type="secondary" style={{ fontSize: '1rem' }}>
                        {stat.label}
                      </Text>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* About Section */}
        <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Row gutter={[48, 48]}>
              <Col xs={24} md={12}>
                <Title level={2} style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                  About InstaVision
                </Title>
                <Paragraph style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#4a5568' }}>
                  We provide customized value-added certification courses under Training and Placement 
                  programs for fresh graduates looking to enter reputed pharmaceutical industries, as well 
                  as experienced professionals seeking career advancement.
                </Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#4a5568' }}>
                  Our journey started from Jan 2017 at Satara city of Maharashtra. Within two years, 
                  students from 255+ colleges across India joined us and we successfully recruited 
                  around 868+ students in reputed pharmaceutical companies across India.
                </Paragraph>
                <Space>
                  <Button 
                    type="primary" 
                    size="large"
                    onClick={() => navigate('/login')}
                    style={{
                      height: '50px',
                      fontSize: '1.1rem',
                      fontWeight: 600
                    }}
                  >
                    Enroll Now
                  </Button>
                  <Button size="large" style={{ height: '50px', fontSize: '1.1rem' }}>
                    View Courses
                  </Button>
                </Space>
              </Col>
              <Col xs={24} md={12}>
                <Card style={{ borderRadius: '15px', background: 'white' }}>
                  <Title level={3} style={{ marginBottom: '1.5rem' }}>Key Features</Title>
                  <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    {features.map((feature, idx) => (
                      <Space key={idx} size="middle">
                        <CheckCircle  style={{ color: '#667eea', fontSize: '20px' }} />
                        <Text style={{ fontSize: '1.1rem' }}>{feature}</Text>
                      </Space>
                    ))}
                  </Space>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '5rem 2rem', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Card style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '20px',
              textAlign: 'center'
            }}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Title level={1} style={{ color: 'white', margin: 0 }}>
                  Ready to Start Your Career?
                </Title>
                <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', margin: 0 }}>
                  Join thousands of successful students in reputed pharmaceutical companies
                </Paragraph>
                <Button 
                  type="primary"
                  size="large"
                  onClick={() => navigate('/login')}
                  style={{
                    height: '60px',
                    fontSize: '1.2rem',
                    background: 'white',
                    color: '#667eea',
                    border: 'none',
                    fontWeight: 600,
                    padding: '0 3rem'
                  }}
                >
                  Start Your Journey Today
                </Button>
              </Space>
            </Card>
          </div>
        </section>
      </Content>
      <Footer />
    </Layout>
  )
}

export default Home
