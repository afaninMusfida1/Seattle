import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../modules/layout/MainLayout';
import Login from '../modules/auth/Login';
import LoginGuruSiswa from '../modules/auth/LoginGuruSiswa';
import Dashboard from '../modules/Dashboard/Dashboard';
import SiswaTerdaftar from '../modules/admin/SiswaTerdaftar';
import Rekap from '../modules/admin/Rekap/Rekap';
import TambahSiswa from '../modules/admin/TambahSiswa';
import DaftarGuru from '../modules/admin/DaftarGuru';
import RekapAbsen from '../modules/admin/Rekap/RekapAbsen';
import GuruLayout from '../modules/layout/GuruLayout';
import RekapJurnal from '../modules/admin/Rekap/RekapJurnal';
import RekapLayout from '../modules/layout/RekapLayout';
import HalamanSiswa from '../modules/siswa/HalamanSiswa';
import SiswaLayout from '../modules/layout/SiswaLayout';
import { useAuth } from '../context/AuthContext';
import DaftarKelas from '../modules/admin/DaftarKelas';
import KelasSiswa from '../modules/gurug/KelasSiswa';
import PresensiSiswa from '../modules/gurug/PresensiSiswa';
import Jurnal from '../modules/gurug/Jurnal';
import RekapGuru from '../modules/gurug/RekapGuru';
import JadwalMapel from '../modules/siswa/JadwalMapel';
import RekapSiswa from '../modules/siswa/RekapSiswa';
import TambahGuru from '../modules/admin/TambahGuru';

const AppRoutes = () => {
  const isLoggedIn = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/admin" element={<Login />} />
        <Route path="/auth" element={<LoginGuruSiswa />} >
          <Route path="/auth/guru" element={<Login/>} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" />} />

        {isLoggedIn && (
          <Route element={<MainLayout />}>
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/admin-guru" element={<DaftarGuru />} />
            <Route path="/admin-siswa" element={<SiswaTerdaftar />} />
            <Route path="/admin-rekap" element={<Rekap />} />
            <Route path="/admin-tambah-guru" element={<TambahGuru />} />
            <Route path="/admin-tambah-siswa" element={<TambahSiswa />} />
            <Route element={<GuruLayout />}>
              <Route path="/guru" element={<KelasSiswa />} />
              <Route path="/guru-presensi-siswa" element={<PresensiSiswa />} />
              <Route path="/guru-jurnal" element={<Jurnal />} />
              <Route path="/guru-rekap" element={<RekapGuru />} />
              <Route path="/guru-rekap-absen" element={<RekapAbsen />} />
            </Route>
            <Route element={<SiswaLayout />}>
              <Route path="/kelas" element={<DaftarKelas />} />
              <Route path="/tambah-siswa" element={<TambahSiswa />} />
              <Route path="/daftar-siswa" element={<SiswaTerdaftar />} />
            </Route>
            <Route element={<RekapLayout />}>
              <Route path="/rekap" element={<Rekap />} />
              <Route path="/rekap-absen" element={<RekapAbsen />} />
              <Route path="/rekap-jurnal" element={<RekapJurnal />} />
            </Route>

            <Route path="/siswa" element={< HalamanSiswa />}>
              <Route path="/siswa-rekap" element={<RekapSiswa />} />
              <Route path="/siswa-jadwal" element={<JadwalMapel />} />
            </Route>
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
