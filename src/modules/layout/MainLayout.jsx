import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import '/src/index.css'


const MainLayout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  // const location = useLocation();

  // const isDashboardPage = ['/admin/dashboard','/admin-kelas','/admin-guru','/admin-siswa','/admin-rekap', '/list-guru', '/admin-tambah-guru', '/admin-tambah-siswa','/kelas', '/daftar-siswa', '/rekap', '/rekap-absen', '/rekap-jurnal'].includes(location.pathname);

  return (
    // <div>
    //   {<Sidebar />}
    //   <div>
    //     <Navbar />
    //     <Outlet />
    //   </div>
    // </div>
    
    
  
    <div className="relative flex">
      <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarVisible ? 'ml-[250px]' : 'ml-0'}`}>
        <Navbar />
        <Outlet />
      </div>
      <button onClick={toggleSidebar} className='fixed top-4 left-4'>
        <FontAwesomeIcon icon={isSidebarVisible ? faXmark : faBars} style={{ color: "#3f3f3f" }} className='text-[20px]' />
      </button>
    </div>
  );
}



export default MainLayout;
