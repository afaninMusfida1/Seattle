import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../modules/layout/MainLayout';
import Login from '../modules/auth/Login';
import LoginGuruSiswa from '../modules/auth/LoginGuruSiswa';
import Dashboard from '../modules/Dashboard/Dashboard';
import TambahGuru from '../modules/admin/crud-guru/TambahGuru';
import Rekap from '../modules/admin/Rekap/Rekap';
import DaftarGuru from '../modules/admin/crud-guru/DaftarGuru';
import RekapAbsen from '../modules/admin/Rekap/RekapKbm';
import GuruLayout from '../modules/layout/GuruLayout';
import RekapJurnal from '../modules/admin/Rekap/RekapJurnal';
import RekapLayout from '../modules/layout/RekapLayout';
import HalamanSiswa from '../modules/siswa/HalamanSiswa';
import SiswaLayout from '../modules/layout/SiswaLayout';
import { useAuth } from '../context/AuthContext';
import KelasSiswa from '../modules/gurug/crud-presensi/KelasSiswa';
import PresensiSiswa from '../modules/gurug/crud-presensi/PresensiSiswa';
import Jurnal from '../modules/gurug/crud-jurnal/Jurnal';
import RekapGuru from '../modules/gurug/crud-jurnal/RekapGuru';
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
import LoginGuru from '../modules/auth/LoginGuru/LoginGuru';
import RekapKbm from '../modules/admin/Rekap/RekapKbm';
import SiswaWrapper from '../modules/admin/crud-siswa/SiswaWrapper';
import ListKelas from '../modules/admin/crud-kelas/ListKelas';
import { GuruProvider } from '../modules/admin/crud-guru/GuruProvider';

import { SiswaProvider } from '../modules/admin/crud-siswa/SiswaProvider';
import { PresensiProvider } from '../modules/gurug/crud-presensi/PresensiProvider';
import RejulSiswa from '../modules/siswa/RejulSiswa';
import { RekapProvider } from '../modules/admin/Rekap/RekapProvider';
import RekapAdmin from '../modules/admin/Rekap/RekapAdmin';
import LoginOrtuSiswa from '../modules/auth/LoginOrtuSiswa';



const AppRoutes = () => {
  const isLoggedIn = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/auth" />} />
        <Route path="/auth/admin" element={<Login />} />
        {/* <Route path="/auth/guru" element={<LoginGuru/>} /> */}
        <Route path="/auth" element={<LoginGuruSiswa />} />

        <Route path="/guru" element={<LoginGuru />} />
        <Route path="/siswa" element={<LoginOrtuSiswa />} />
        <Route path="/siswa-rekap" element={<RejulSiswa />} />

        {isLoggedIn && (
          <>
            <Route element={
                <KelasProvider>
                  <JurnalProvider>
                    <GuruLayout />
                  </JurnalProvider>
                </KelasProvider>}>
              {/* <Route path="/guru/kelas" element={<KelasSiswa />} /> */}
              <Route path="/guru/jurnal" element={<JurnalGuru />} />
              <Route path="/guru-presensi-siswa" element={<PresensiSiswa />} />
              <Route path="/guru/kelas/:kelas_id/jurnal" element={<PresensiProvider><SiswaProvider><Jurnal /></SiswaProvider></PresensiProvider>} />
              <Route path="/guru/rekap" element={<RekapGuru />} />
              <Route path="/guru/kelas/:kelas_id/rekap" element={<RekapKbm />} />
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

            <Route path='/admin' element={<KelasProvider><GuruProvider><SiswaProvider><MainLayout /></SiswaProvider></GuruProvider></KelasProvider>}>
              <Route index element={<Dashboard />} />
              {/* <Route path="" element={<Dashboard />} /> */}
              <Route path="tambah-kelas" element={<TambahKelas />} />
              <Route path="kelas" element={<ListKelas />} />

              <Route path="siswa" element={<SiswaWrapper />}>
                <Route path="" element={<SiswaTerdaftar />} />
                <Route path="tambah" element={<TambahSiswa />} />
              </Route>

              <Route path='rekap' element={<RekapProvider><RekapWrapper /></RekapProvider>} >
                <Route path="" element={<Rekap />} />
                <Route path="absen" element={<RekapAdmin />} />
                <Route path="jurnal" element={<RekapJurnal />} />
              </Route>

              <Route path="guru" element={<GuruWrapper />}>
                <Route path="" element={<DaftarGuru />} />
                <Route path="tambah" element={<TambahGuru />} />
              </Route>
              <Route path="dashboard" element={<Dashboard />} />
              {/* <Route path="/admin-tambah-siswa" element={<TambahSiswa />} /> */}
            </Route>
          </>

        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
