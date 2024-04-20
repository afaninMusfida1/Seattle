import React from 'react';
import DaftarGuru from '../admin/DaftarGuru.jsx';

const Sidebar = () => {

  const nav = () => {
    <Dashboard/> 
  }

  return (
    <div className="flex h-screen bg-gray-200 ">
      <DaftarGuru/>
      <div className="fixed bg-white text-white w-64 h-screen">
        
        <div className="flex items-center justify-between p-4">
          <img src="src/assets/seattleLogo.png" alt="Logo" className="mx-[25px] h-[60px] w-[120px]" />
        </div>
        <nav className="mt-4 px-[25px]">
          <section className="text-sm block px-4 py-2 font-bold text-[#A7B9D1]">Overview</section>
          <button onClick={nav} className="bg-white w-[200px] hover:bg-[#078DCC] hover:rounded-[5px]  block px-4 py-2 text-sm text-black hover:text-white text-left">Dashboard</button>
          <button className="bg-white w-[200px] hover:bg-[#078DCC] hover:rounded-[5px]  block px-4 py-2 text-sm text-black hover:text-white text-left">Guru</button>
          <button className="bg-white w-[200px] hover:bg-[#078DCC] hover:rounded-[5px]  block px-4 py-2 text-sm text-black hover:text-white text-left">Siswa</button>
          <button className="bg-white w-[200px] hover:bg-[#078DCC] hover:rounded-[5px]  block px-4 py-2 text-sm text-black hover:text-white text-left">Rekap</button>
          <button className="bg-white w-[200px] hover:bg-[#078DCC] hover:rounded-[5px]  block px-4 py-2 text-sm text-black hover:text-white my-[240px] text-left">Log Out</button>
          </nav>


          </div>
          
      </div>

      )
 }

export default Sidebar
