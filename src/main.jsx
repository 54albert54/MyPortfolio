import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingProvider from './componets/providers/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LandingProvider>
    <App />
    </LandingProvider>
  </React.StrictMode>,
)
