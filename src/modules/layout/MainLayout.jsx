import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();

  const isDashboardPage = ['/dashboard', '/list-guru', '/tambah-guru', '/tambah-siswa', '/daftar-siswa', '/rekap', '/rekap-absen', '/rekap-jurnal'].includes(location.pathname);

  return (
    <div>
      {isDashboardPage && <Sidebar />}
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout;
