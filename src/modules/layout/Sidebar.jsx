import Rekap from '../admin/Rekap/Rekap.jsx';
import {React, useState} from 'react';
import Dashboard from '../Dasboard/Dashboard.jsx';
import { useNavigate } from 'react-router-dom';
import TambahSiswa from '../admin/TambahSiswa.jsx';
import DaftarGuru from '../admin/DaftarGuru.jsx';

const Sidebar = () => {
  const navigate = useNavigate();
  const [showDashboard, setShowDashboard] = useState(true);
  const [showPlusGuruPage, setShowPlusGuruPage] = useState(false);
  const [showSiswaPage, setShowSiswaPage] = useState(false);
  const [showRekapPage, setShowRekapPage] = useState(false);


  const navDashboard = () => {
    navigate('/app/dashboard');
    setShowDashboard(true);
    setShowPlusGuruPage(false);
    setShowSiswaPage(false);
    setShowRekapPage(false);
  }

  const navTambahGuru = () => {
    navigate('/app/tambah-guru');
    <DaftarGuru/>;
    setShowDashboard(false);
    setShowPlusGuruPage(true);
    setShowSiswaPage(false);
    setShowRekapPage(false);
  }

  const navSiswaPage = () => {
    navigate('/app/tambah-siswa');
    setShowDashboard(false);
    setShowPlusGuruPage(false);
    setShowSiswaPage(true);
    setShowRekapPage(false);
  }

  const navRekapPage = () => {
    navigate('/app/rekap');
    setShowDashboard(false);
    setShowPlusGuruPage(false);
    setShowSiswaPage(false);
    setShowRekapPage(true);
  }

const logout = () => {
  console.log("logout")
  navigate('/login');
}

return (
  <div className="bg-gray-200 flex">
    <div className="fixed bg-white text-white w-64 h-screen">
      <div className="flex items-center justify-between p-4">
        <img src="src/assets/seattleLogo.png" className="mx-[25px] h-[60px] w-[120px]" />
      </div>
      <nav className="mt-4 px-[25px]">
        <section className="text-sm block px-4 py-2 font-bold text-[#A7B9D1]">Overview</section>
        <button onClick={navDashboard} className="bg-white w-[200px] hover:bg-[#078DCC] hover:rounded-[5px]  block px-4 py-2 text-sm text-black hover:text-white text-left">Dashboard</button>
        <button onClick={navTambahGuru} className="bg-white w-[200px] hover:bg-[#078DCC] hover:rounded-[5px]  block px-4 py-2 text-sm text-black hover:text-white text-left">Guru</button>
        <button onClick={navSiswaPage} className="bg-white w-[200px] hover:bg-[#078DCC] hover:rounded-[5px]  block px-4 py-2 text-sm text-black hover:text-white text-left">Siswa</button>
        <button onClick={navRekapPage} className="bg-white w-[200px] hover:bg-[#078DCC] hover:rounded-[5px]  block px-4 py-2 text-sm text-black hover:text-white text-left">Rekap</button>
        <button onClick={logout} className="bg-white w-[200px] hover:bg-[#078DCC] hover:rounded-[5px]  block px-4 py-2 text-sm text-black hover:text-white my-[240px] text-left">Log Out</button>
      </nav>
    </div>
    {showDashboard }
    {showPlusGuruPage }
    {showSiswaPage}
    {showRekapPage}
  </div>
);
}


export default Sidebar;