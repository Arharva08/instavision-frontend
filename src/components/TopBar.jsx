import { Layout, Tag, Space, Typography, Button } from 'antd';
import { Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;
const { Text } = Typography;

const TopBar = () => {
  const navigate = useNavigate();
  
  return (
    <Header
      style={{
        padding: '0',
        height: 'auto',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxSizing: 'border-box',
      }}
    >
      {/* Top section with contacts */}
      <div style={{
        background: 'rgba(0,0,0,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Space size="middle" wrap>
            <Tag
              style={{ 
                background: 'rgba(255,255,255,0.15)', 
                color: 'white', 
                border: '1px solid rgba(255,255,255,0.2)',
                fontWeight: 500,
                fontSize: '0.75rem',
              }}
            >
              ISO 9001:2015 Certified
            </Tag>
            <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem' }}>
              Pharmaceutical Training & Placement Institute
            </Text>
          </Space>
          <Space size="large" wrap>
            {['+917030759944', '+919922407136', '+919309469958'].map((num) => (
              <a 
                key={num} 
                href={`tel:${num}`}
                style={{ 
                  color: 'white', 
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <Phone size={14} />
                {num}
              </a>
            ))}
          </Space>
        </div>
      </div>

      {/* Main header */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1.25rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {/* Logo */}
        <div>
          <Text
            style={{
              fontSize: '2.25rem',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '1.5px',
              display: 'block',
              lineHeight: 1,
            }}
          >
            INSTA VISION
          </Text>
          <Text style={{ 
            color: 'rgba(255,255,255,0.85)', 
            fontSize: '0.9rem',
            marginTop: '0.25rem',
            display: 'block',
          }}>
            Laboratory & Services
          </Text>
        </div>

        {/* Login Button */}
        <Button
          type="primary"
          onClick={() => navigate('/login')}
          size="large"
          style={{
            height: '44px',
            fontWeight: 600,
            background: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '22px',
            padding: '0 32px',
            fontSize: '1rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
          }}
        >
          Login
        </Button>
      </div>
    </Header>
  );
};

export default TopBar;