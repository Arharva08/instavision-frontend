import { Typography, Divider, Row, Col, Card, Space } from 'antd'
import { Target, GraduationCap, Briefcase, Award } from 'lucide-react'

const { Title, Paragraph } = Typography

const AboutUs = () => {
  const features = [
    {
      icon: <GraduationCap size={40} />,
      title: 'Industry Expert Training',
      description: 'Advance digital theoretical trainings from experienced industry professionals'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Soft Skills Enhancement',
      description: 'Professional workshops to develop essential workplace skills'
    },
    {
      icon: <Award size={40} />,
      title: 'Laboratory Skills',
      description: 'Hands-on training with current industry trends and protocols'
    },
    {
      icon: <Target size={40} />,
      title: 'Mock Interviews',
      description: 'Practice interviews following industry standards and protocols'
    }
  ]

  return (
    <section style={{ padding: '5rem 0', background: 'white' }} id="about">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }} align="center">
          <Title level={2} style={{ fontSize: '2.5rem', textAlign: 'center' }}>
            About Us
          </Title>
          <Divider 
            style={{ 
              borderColor: '#667eea',
              borderWidth: '3px',
              width: '80px',
              margin: '1rem auto'
            }} 
          />
        </Space>

        <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <Row gutter={[32, 24]}>
            <Col xs={24} md={24}>
              <Typography>
                <Paragraph 
                  style={{ 
                    fontSize: '1.15rem', 
                    fontWeight: 500,
                    lineHeight: 1.8
                  }}
                >
                  We are dealing with customized value added various certification courses 
                  under Training and Placement program for fresheners looking to introduce 
                  themselves in reputed pharmaceutical industries as well as experience persons 
                  which are interested for smart move.
                </Paragraph>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  We have designed our programs against guidance of reputed pharmaceutical 
                  industries across India. Advance digital theoretical trainings from industry 
                  experts, professional soft skill enhancement workshops, working /Laboratory skill 
                  developments against current trends, Mock interviews as per industry protocols, 
                  launching in reputed industries are some of our key performance indicators.
                </Paragraph>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  Our journey started from Jan 2017 at Satara city of Maharashtra. Within two years, 
                  students from 255+ colleges across India attached with us and we are succeeded 
                  to recruit around 868+ students in reputed pharmaceutical companies across India.
                </Paragraph>
              </Typography>
            </Col>
          </Row>
        </div>

        <Row gutter={[16, 16]}>
          {features.map((feature, idx) => (
            <Col xs={24} sm={12} md={12} lg={6} key={idx}>
              <Card
                hoverable
                className="gradient-light"
                style={{ 
                  borderRadius: '15px',
                  height: '100%'
                }}
              >
                <Space direction="vertical" size="middle">
                  <div style={{ color: '#667eea' }}>
                    {feature.icon}
                  </div>
                  <Title level={4} style={{ margin: 0 }}>
                    {feature.title}
                  </Title>
                  <Paragraph type="secondary" style={{ margin: 0 }}>
                    {feature.description}
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default AboutUs
