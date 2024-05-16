import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { LayoutProvider } from './modules/layout/LayoutContext.jsx'
import { GuruProvider } from './modules/admin/GuruContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <LayoutProvider>
        <GuruProvider>
          <AppRoutes />
        </GuruProvider>
      </LayoutProvider>
    </AuthProvider>
  </React.StrictMode>,
)
