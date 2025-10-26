import { ConfigProvider } from 'antd'
import Home from './pages/Home'
import './App.css'

console.log('App.jsx loaded')

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#667eea',
          borderRadius: 8,
        },
      }}
    >
      <Home />
    </ConfigProvider>
  )
}

export default App

