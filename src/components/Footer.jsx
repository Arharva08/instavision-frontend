import { Layout, Space, Typography, Row, Col, Divider } from 'antd'
import { MapPin, Phone, Mail, Calendar } from 'lucide-react'

const { Footer: FooterLayout } = Layout
const { Title: TitleText, Text, Link } = Typography

const Footer = () => {
  const footerLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Courses', href: '#courses' },
    { label: 'Placement', href: '#placement' }
  ]

  return (
    <FooterLayout className="gradient-dark" style={{ padding: '3rem 0 1.5rem', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <TitleText level={3} style={{ color: '#667eea', marginBottom: '0.5rem' }}>
              INSTA VISION
            </TitleText>
            <Text type="secondary" style={{ color: '#a0aec0' }}>
              Laboratory & Services
            </Text>
            <br />
            <Text type="secondary" style={{ color: '#718096', fontSize: '0.9rem' }}>
              ISO 9001 2015 Certified Pharmaceutical Training & Placement Institute
            </Text>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <TitleText level={5} style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
              Contact Info
            </TitleText>
            <Space direction="vertical" size="small">
              <Space size="small">
                <Phone size={18} color="#cbd5e0" />
                <Text style={{ color: '#cbd5e0', fontSize: '0.9rem' }}>+917030759944</Text>
              </Space>
              <Space size="small">
                <Phone size={18} color="#cbd5e0" />
                <Text style={{ color: '#cbd5e0', fontSize: '0.9rem' }}>+919922407136</Text>
              </Space>
              <Space size="small">
                <Phone size={18} color="#cbd5e0" />
                <Text style={{ color: '#cbd5e0', fontSize: '0.9rem' }}>+919309469958</Text>
              </Space>
              <Space size="small">
                <MapPin size={18} color="#cbd5e0" />
                <Text style={{ color: '#cbd5e0', fontSize: '0.9rem' }}>Satara, Maharashtra</Text>
              </Space>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <TitleText level={5} style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
              Quick Links
            </TitleText>
            <Space direction="vertical" size="small">
              {footerLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  style={{ color: '#cbd5e0' }}
                >
                  {link.label}
                </Link>
              ))}
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <TitleText level={5} style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
              Next Batch
            </TitleText>
            <Space>
              <Calendar size={20} color="#667eea" />
              <Space direction="vertical" size="small">
                <Text style={{ color: '#cbd5e0', fontSize: '0.85rem', display: 'block' }}>
                  Starts from
                </Text>
                <Text style={{ color: '#667eea', fontWeight: 600, fontSize: '1rem' }}>
                  27 OCT 2025
                </Text>
              </Space>
            </Space>
          </Col>
        </Row>

        <Divider style={{ borderColor: '#4a5568', margin: '2.5rem 0 1.5rem' }} />

        <Row justify="center">
          <Space direction="vertical" size="small" align="center">
            <Text style={{ color: '#718096', fontSize: '0.85rem' }}>
              &copy; {new Date().getFullYear()} InstaVision Laboratory & Services. All rights reserved.
            </Text>
            <Text style={{ color: '#718096', fontSize: '0.85rem' }}>
              Since 2017 | Serving 255+ Colleges | 868+ Successful Placements
            </Text>
          </Space>
        </Row>
      </div>
    </FooterLayout>
  )
}

export default Footer
