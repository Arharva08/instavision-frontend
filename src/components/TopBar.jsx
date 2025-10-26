import { Layout, Tag, Space, Typography } from 'antd'
import { Phone } from 'lucide-react'

const { Header } = Layout
const { Text } = Typography

const TopBar = () => {
  return (
    <Header className="gradient-purple" style={{ padding: '1.5rem 2rem' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        <div>
          <Text style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: 'white',
            letterSpacing: '1px'
          }}>
            INSTA VISION
          </Text>
          <br />
          <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
            Laboratory & Services
          </Text>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Space wrap>
            <Tag color="rgba(255,255,255,0.2)" style={{ color: 'white', border: 'none' }}>
              ISO 9001 2015 Certified
            </Tag>
            <Text style={{ color: 'rgba(255,255,255,0.95)', fontSize: '0.85rem' }}>
              Pharmaceutical Training & Placement Institute
            </Text>
          </Space>
          
          <Space wrap size="large">
            <Space size="small">
              <Phone size={18} color="rgba(255,255,255,0.9)" />
              <Text style={{ color: 'white', fontSize: '0.9rem' }}>+917030759944</Text>
            </Space>
            <Space size="small">
              <Phone size={18} color="rgba(255,255,255,0.9)" />
              <Text style={{ color: 'white', fontSize: '0.9rem' }}>+919922407136</Text>
            </Space>
            <Space size="small">
              <Phone size={18} color="rgba(255,255,255,0.9)" />
              <Text style={{ color: 'white', fontSize: '0.9rem' }}>+919309469958</Text>
            </Space>
          </Space>
        </div>
      </div>
    </Header>
  )
}

export default TopBar
