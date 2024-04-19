import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

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
