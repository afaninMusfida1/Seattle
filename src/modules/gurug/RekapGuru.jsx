import { useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import KelasItem from '../admin/crud-kelas/KelasItem';
import { useLayout } from '../layout/LayoutContext';

const Rekap = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout()

    useEffect(() => {
        actionSetPageTitle('Lihat Rekap')
    }, [])

    function handleChangeAbsen() {
        navigate('/guru-rekap-absen')
    }

    return (
        <div className="mr-[100px] ml-[350px] mt-[100px] ">
            <div className="rekap-absen bg-white rounded-[30px] p-8 ">
                <div className="flex flex-wrap gap-x-2 gap-y-4">
                    <button onClick={handleChangeAbsen} className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <KelasItem navigateTo={'/guru-rekap-absen'}/>
                    <KelasItem />
                    <KelasItem />
                    <KelasItem />
                    <KelasItem />
                    <KelasItem />
                </div>
            </div>
        </div>
    )
}
export default Rekap;