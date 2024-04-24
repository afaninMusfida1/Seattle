import React, { useState } from 'react'; // Sertakan useState dari 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // Sertakan useNavigate dari 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout';
import Login from '../modules/auth/Login';
import Dashboard from '../modules/Dasboard/Dashboard';
import TambahGuru from '../modules/admin/TambahGuru';
import SiswaTerdaftar from '../modules/admin/SiswaTerdaftar';
import Rekap from '../modules/admin/Rekap/Rekap';
import TambahSiswa from '../modules/admin/TambahSiswa';
import DaftarGuru from '../modules/admin/DaftarGuru';
import RekapAbsen from '../modules/admin/Rekap/RekapAbsen';
import RekapJurnal from '../modules/admin/Rekap/RekapJurnal';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/app' element={<MainLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='tambah-guru' element={<TambahGuru />}>
            <Route path='daftar-guru' element={<DaftarGuru />} />
          </Route>
          <Route path='tambah-siswa' element={<TambahSiswa />}>
            <Route path='daftar-siswa' element={<SiswaTerdaftar />} />
          </Route>
          <Route path='rekap' element={<Rekap />}>
            <Route path='rekap-absen' element={<RekapAbsen />} />
            <Route path='rekap-jurnal' element={<RekapJurnal />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default AppRoutes;