import React, { useState } from 'react'; // Sertakan useState dari 'react'
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom'; // Sertakan useNavigate dari 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout';
import Login from '../modules/auth/Login';
import Dashboard from '../modules/Dasboard/Dashboard';
import TambahGuru from '../modules/admin/TambahGuru';
import SiswaTerdaftar from '../modules/admin/SiswaTerdaftar';
import Rekap from '../modules/admin/Rekap/Rekap';
import TambahSiswa from '../modules/admin/TambahSiswa';
import DaftarGuru from '../modules/admin/DaftarGuru';
import RekapAbsen from '../modules/admin/Rekap/RekapAbsen';
import GuruItem from '../modules/gurug/GuruItem';
import GuruLayout from '../modules/layout/GuruLayout';
import SiswaLayout from '../modules/layout/SiswaLayout';
import HalamanSiswa from '../modules/siswa/HalamanSiswa';

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(0);


  function handleAdmin(value,login) {
    setIsLoggedIn(login)
    setIsAdmin(value)
  }
  return (
    <BrowserRouter>
      <Routes>
        {
          isLoggedIn ?
          isAdmin > 0 ? 
          <Route element={<MainLayout />}>
          <>
            <Route path='dashboard' element={<Dashboard />} />
            <Route element={<GuruLayout />}>
              <Route path='tambah-guru' element={<TambahGuru />} />
              <Route path='list-guru' element={<DaftarGuru />} />
            </Route>
            <Route element={<SiswaLayout />}>
            <Route path='tambah-siswa' element={<TambahSiswa />}/>
              <Route path='daftar-siswa' element={<SiswaTerdaftar />} />
            </Route>
            <Route path='rekap' element={<Rekap />}>
              <Route path='rekap-absen' element={<RekapAbsen />} />
            </Route>
            <Route path='*' element={<Navigate to={"/dashboard"}/>}/>
          </>
    </Route>
            :
            <>
              <Route path='siswa' element={<HalamanSiswa/>} />
              <Route path='*' element={<Navigate to={"/siswa"}/>} />
            </>
            :
            <>
              <Route path='/' element={<Login onLogin={handleAdmin} />} />
              <Route path='*' element={<Navigate to={"/"}/>} />
            </>
        }
      </Routes>
    </BrowserRouter >
  );
}

export default AppRoutes;