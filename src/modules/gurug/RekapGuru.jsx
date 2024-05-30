import { useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLayout } from '../layout/LayoutContext';
// import { useKelas } from './crud-presensi/PresensiProvider';
import KelasGrouping from '../admin/crud-kelas/KelasGrouping';
import KelasItem from '../admin/crud-kelas/KelasItem';
import { useKelas } from '../admin/crud-kelas/KelasProvider';

const Rekap = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout()
    const { daftarKelas, location, setLocation } = useKelas()


    useEffect(() => {
        actionSetPageTitle('Lihat Rekap')
        console.log(location)
    }, [])

    // function handleChangeAbsen() {
    //     navigate('/guru/rekap/kbm')
    // }

    const groupedKelas = daftarKelas.length == 0 ? [] :
        Object.groupBy(daftarKelas, ({ kategori }) => kategori)

    console.log(groupedKelas)

    return (
        <div className="mt-[50px] ">

            {
                Object.entries(groupedKelas).map(
                    (value, key) =>
                        <KelasGrouping key={key} location={location} kategori={value[0]} />)
            }

        </div>
    );
};
export default Rekap;