import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../modules/layout/MainLayout';
import Login from '../modules/auth/Login';
import Sidebar from '../modules/layout/Sidebar';
import { Navbar } from '@material-tailwind/react';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login"/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/app' element={<MainLayout/>}>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
