import React from 'react';
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
import { useAuth } from '../context/AuthContext';
import SidebarGuru from '../modules/layout/SidebarGuru';
import AbsenSiswa from '../modules/gurug/AbsenSiswa';

const AppRoutes = () => {
  const isLoggedIn = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/admin" element={<Login />} />
        <Route path="/auth" element={<LoginGuruSiswa />} />
        <Route path="*" element={<Navigate to="/auth" />} />

        {isLoggedIn && (
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route element={<GuruLayout />}>
              <Route path="/list-guru" element={<DaftarGuru />} />
              <Route path="/tambah-guru" element={<TambahGuru />} />
            </Route>
            <Route element={<SiswaLayout />}>
              <Route path="/tambah-siswa" element={<TambahSiswa />} />
              <Route path="/daftar-siswa" element={<SiswaTerdaftar />} />
            </Route>
            <Route element={<RekapLayout />}>
              <Route path="/rekap" element={<Rekap />} />
              <Route path="/rekap-absen" element={<RekapAbsen/>} />
              <Route path="/rekap-jurnal" element={<RekapJurnal />} />
            </Route>
            <Route path="/guru" element={<SidebarGuru/>}>
            <Route path="absen-siswa" element={<AbsenSiswa/>} />
            <Route path="jurnal-siswa" element={<RekapJurnal/>} />
            </Route>
            <Route path="/siswa" element={< HalamanSiswa/>}>
            </Route>
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
