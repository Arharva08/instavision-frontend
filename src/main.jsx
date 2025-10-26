import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import Ant Design CSS
import 'antd/dist/reset.css'

// Import global styles
import './App.css'
import './index.css'

console.log('Main.jsx loaded')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

