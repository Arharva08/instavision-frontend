import { Layout } from 'antd'
import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const { Content } = Layout

console.log('Home.jsx loaded')

const Home = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopBar />
      <Content>
        <Hero />
        <AboutUs />
      </Content>
      <Footer />
    </Layout>
  )
}

export default Home
