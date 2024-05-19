import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../modules/layout/MainLayout';
import Login from '../modules/auth/Login';
import LoginGuruSiswa from '../modules/auth/LoginGuruSiswa';
import Dashboard from '../modules/Dashboard/Dashboard';
import TambahGuru from '../modules/admin/crud-guru/TambahGuru';
import Rekap from '../modules/admin/Rekap/Rekap';
import DaftarGuru from '../modules/admin/crud-guru/DaftarGuru';
import RekapAbsen from '../modules/admin/Rekap/RekapAbsen';
import GuruItem from '../modules/admin/crud-guru/GuruItem';
import GuruLayout from '../modules/layout/GuruLayout';
import RekapJurnal from '../modules/admin/Rekap/RekapJurnal';
import RekapLayout from '../modules/layout/RekapLayout';
import HalamanSiswa from '../modules/siswa/HalamanSiswa';
import SiswaLayout from '../modules/layout/SiswaLayout';
import { useAuth } from '../context/AuthContext';
import KelasSiswa from '../modules/gurug/KelasSiswa';
import PresensiSiswa from '../modules/gurug/PresensiSiswa';
import Jurnal from '../modules/gurug/crud-jurnal/Jurnal';
import RekapGuru from '../modules/gurug/RekapGuru';
import JadwalMapel from '../modules/siswa/JadwalMapel';
import RekapSiswa from '../modules/siswa/RekapSiswa';
import GuruWrapper from '../modules/admin/crud-guru/GuruWrapper';
import RekapWrapper from '../modules/admin/Rekap/RekapWrapper';
import JurnalGuru from '../modules/gurug/crud-jurnal/JurnalGuru';
import { JurnalProvider } from '../modules/gurug/crud-jurnal/JurnalProvider';
import { KelasProvider } from '../modules/admin/crud-kelas/KelasProvider';
import TambahKelas from '../modules/admin/crud-kelas/TambahKelas';
import SiswaTerdaftar from '../modules/admin/crud-siswa/SiswaTerdaftar';
import TambahSiswa from '../modules/admin/crud-siswa/TambahSiswa';
import DaftarKelas from '../modules/admin/crud-kelas/DaftarKelas';


const AppRoutes = () => {
  const isLoggedIn = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/admin" element={<Login />} />
        {/* <Route path="/auth/guru" element={<LoginGuru/>} /> */}
        <Route path="/auth" element={<LoginGuruSiswa />} >
          <Route path="/auth/guru" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" />} />

        {isLoggedIn && (
          <>
            <Route element={<JurnalProvider><GuruLayout/></JurnalProvider>}>
              <Route path="/guru" element={<KelasSiswa />} />
              <Route path="/guru-presensi-siswa" element={<PresensiSiswa />} />
              <Route path="/guru-jurnal" element={<JurnalGuru />} />
              <Route path="/isi-jurnal" element={<Jurnal />} />
              <Route path="/guru-rekap" element={<RekapGuru />} />
              <Route path="/guru-rekap-absen" element={<RekapAbsen />} />
            </Route>

            <Route element={<SiswaLayout />}>
              <Route path="/kelas" element={<DaftarKelas />} />
              <Route path="/tambah-siswa" element={<TambahSiswa />} />
              <Route path="/daftar-siswa" element={<SiswaTerdaftar />} />
            </Route>

            <Route element={<RekapLayout />}>

            </Route>

            <Route path="/siswa" element={< HalamanSiswa />}>
              <Route path="/siswa-rekap" element={<RekapSiswa />} />
              <Route path="/siswa-jadwal" element={<JadwalMapel />} />
            </Route>

            <Route path='/admin' element={<KelasProvider><MainLayout /></KelasProvider>}>
              <Route path="" element={<Dashboard />} />
              <Route path="kelas" element={<TambahKelas/>} />
              <Route path="siswa" element={<SiswaTerdaftar />} />
              <Route path="tambah" element={<TambahSiswa />} />

              <Route path='rekap' element={<RekapWrapper />} >
                <Route path="" element={<Rekap />} />
                <Route path="absen" element={<RekapAbsen />} />
                <Route path="jurnal" element={<RekapJurnal />} />
              </Route>

              <Route path="guru" element={<GuruWrapper />}>
                <Route path="" element={<DaftarGuru />} />
                <Route path="tambah" element={<TambahGuru />} />
              </Route>
              <Route path="dashboard" element={<Dashboard/>} />
              {/* <Route path="/admin-tambah-siswa" element={<TambahSiswa />} /> */}
            </Route>
          </>

        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
