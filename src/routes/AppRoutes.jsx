import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import Login from '../modules/auth/Login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login"/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<h1>dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes