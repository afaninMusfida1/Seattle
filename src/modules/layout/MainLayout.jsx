import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();

  const isDashboardPage = ['/admin-dashboard','/admin-guru','/admin-siswa','/admin-rekap', '/list-guru', '/admin-tambah-guru', '/admin-tambah-siswa','/kelas', '/daftar-siswa', '/rekap', '/rekap-absen', '/rekap-jurnal'].includes(location.pathname);

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
