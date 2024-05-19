import { useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLayout } from '../../layout/LayoutContext';
import { tampilkan } from '../../config/Api';
import KelasItem from '../crud-kelas/KelasItem';

const Rekap = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout()

    useEffect(() => {
        actionSetPageTitle('Lihat Rekap');
        fetchData();
    }, [actionSetPageTitle])

    const fetchData = async () => {
        const data = await tampilkan();

    }

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

                    <KelasItem navigateTo={'absen'} />

                </div>
            </div>
        </div>
    )
}
export default Rekap;