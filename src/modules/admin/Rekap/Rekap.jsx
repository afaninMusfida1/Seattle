import { useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLayout } from '../../layout/LayoutContext';
import KelasItem from '../crud-kelas/KelasItem';
import { useKelas } from '../crud-kelas/KelasProvider';


const Rekap = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout()
    const { daftarKelas, setdDaftarKelas, handleFetch } = useKelas()

    useEffect(() => {
        actionSetPageTitle('Lihat Rekap');
    }, [])

    function handleChangeAbsen() {
        navigate('/rekap-absen')
    }

    function handleChangeJurnal() {
        navigate('/rekap-jurnal')
    }



    return (
        <div className="mr-[100px] ml-[350px] mt-[100px] ">
            <div className="rekap-absen bg-white rounded-[30px] p-8 ">
                <div className="flex flex-wrap gap-x-2 gap-y-4">

                    {daftarKelas.length > 0 ? (
                        daftarKelas.map(kelas => (
                            <KelasItem
                                key={kelas.id}
                                id={kelas.id}
                                nama_kelas={kelas.nama_kelas}
                                kategori={kelas.kategori}
                                periode={kelas.periode}
                                jadwal_kelas={kelas.jadwal_kelas}
                                navigateTo={'absen'}
                            />
                        ))
                    ) : (
                        <p>belum ada kelas</p>
                    )}

                    {/* <KelasItem navigateTo={'absen'} /> */}

                </div>
            </div> 
        </div>

    );
};
export default Rekap;