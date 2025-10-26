import { Typography, Space, Card, Row, Col } from 'antd'
import { Calendar, Users, Award } from 'lucide-react'

const { Title, Paragraph, Text } = Typography

const Hero = () => {
  const stats = [
    { icon: <Users size={24} />, number: '868+', label: 'Students Placed' },
    { icon: <Award size={24} />, number: '255+', label: 'Colleges Connected' },
    { icon: <Calendar size={24} />, number: '2017', label: 'Since We Started' }
  ]

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '4rem 0',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }} align="center">
          <Space 
            className="gradient-purple" 
            style={{ 
              color: 'white', 
              padding: '0.6rem 1.5rem',
              borderRadius: '30px',
              display: 'inline-flex'
            }}
          >
            <Calendar size={20} />
            <span style={{ fontWeight: 600 }}>Next Batch Starts from 27 OCT 2025</span>
          </Space>

          <Title 
            level={1} 
            style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              textAlign: 'center',
              maxWidth: '800px'
            }}
          >
            Advance Your Career in <span style={{ color: '#667eea' }}>Pharmaceutical Industry</span>
          </Title>

          <Paragraph 
            style={{ 
              fontSize: '1.2rem', 
              textAlign: 'center', 
              maxWidth: '700px',
              margin: 0
            }}
          >
            Transform your future with industry-driven training programs, 
            practical lab experience, and guaranteed placement opportunities.
          </Paragraph>
        </Space>

        <Row gutter={[16, 16]} style={{ marginTop: '4rem' }}>
          {stats.map((stat, idx) => (
            <Col xs={24} sm={24} md={8} key={idx}>
              <Card 
                hoverable
                style={{ 
                  textAlign: 'center',
                  borderRadius: '15px'
                }}
              >
                <Space direction="vertical" size="middle">
                  <div style={{ color: '#667eea' }}>
                    {stat.icon}
                  </div>
                  <Title level={3} style={{ margin: 0, color: '#2d3748' }}>
                    {stat.number}
                  </Title>
                  <Text type="secondary" style={{ fontSize: '0.9rem' }}>
                    {stat.label}
                  </Text>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Hero
