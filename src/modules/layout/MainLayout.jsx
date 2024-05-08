import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import GuruItem from '../gurug/GuruItem';
import { AuthProvider } from '../../context/AuthContext';

const MainLayout = () => {

  return (
    <div>
      <Sidebar/>
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
