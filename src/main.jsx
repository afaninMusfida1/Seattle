import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { LayoutProvider } from './modules/layout/LayoutContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <LayoutProvider>
        <AppRoutes />
      </LayoutProvider>
    </AuthProvider>
  </React.StrictMode>,
)
