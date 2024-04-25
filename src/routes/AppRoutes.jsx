// AppRoutes.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../modules/layout/MainLayout';
import Login from '../modules/auth/Login';
import LoginGuruSiswa from '../modules/auth/LoginGuruSiswa';
import Dashboard from '../modules/Dashboard/Dashboard';
import TambahGuru from '../modules/admin/TambahGuru';
import SiswaTerdaftar from '../modules/admin/SiswaTerdaftar';
import Rekap from '../modules/admin/Rekap/Rekap';
import TambahSiswa from '../modules/admin/TambahSiswa';
import DaftarGuru from '../modules/admin/DaftarGuru';
import RekapAbsen from '../modules/admin/Rekap/RekapAbsen';
import GuruItem from '../modules/gurug/GuruItem';
import GuruLayout from '../modules/layout/GuruLayout';
import RekapJurnal from '../modules/admin/Rekap/RekapJurnal';
import RekapLayout from '../modules/layout/RekapLayout';
import HalamanSiswa from '../modules/siswa/HalamanSiswa';
import JadwalKelas from '../modules/siswa/JadwalKelas';
import SiswaLayout from '../modules/layout/SiswaLayout';

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  function handleAdmin(value, login) {
    setIsLoggedIn(login);
    setIsAdmin(value);
  }

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          isAdmin ? (
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route element={<GuruLayout />}>
                <Route path="/tambah-guru" element={<TambahGuru />} />
                <Route path="/list-guru" element={<DaftarGuru />} />
              </Route>
              <Route element={<SiswaLayout />}>
                <Route path="/tambah-siswa" element={<TambahSiswa />} />
                <Route path="/daftar-siswa" element={<SiswaTerdaftar />} />
              </Route>
              <Route element={<RekapLayout />}>
                <Route path="/rekap" element={<Rekap />} />
                <Route path="/rekap-absen" element={<RekapAbsen />} />
                <Route path="/rekap-jurnal" element={<RekapJurnal />} />
              </Route>
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Route>
          ) : (
            <Route element={<SiswaLayout />}>
              <Route path="/siswa" element={<HalamanSiswa />} />
              <Route path="/jadwal-kelas" element={<JadwalKelas />} />
              <Route path="/rekap-absen" element={<RekapAbsen />} />
              <Route path="/rekap-jadwal" element={<RekapJurnal />} />
              <Route path="*" element={<Navigate to="/siswa" />} />
            </Route>
          )
        ) : (
          <Route element={<GuruLayout />}>
            <Route path="/guru" element={<GuruItem />} />
            <Route path="*" element={<Navigate to="/guru" />} />
          </Route>
        )}
        <Route path="/auth/admin" element={<Login onLogin={handleAdmin} isAdmin={true} />} />
        <Route path="/auth" element={<LoginGuruSiswa onLogin={handleAdmin} />} />
        <Route path="*" element={<Navigate to="/auth" />} />
        <Route path="/" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
