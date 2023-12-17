import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LandingProvider from './componets/providers/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <LandingProvider>
    <App />
    </LandingProvider>
  </React.StrictMode>,
)
