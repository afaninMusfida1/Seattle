import { useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLayout } from '../layout/LayoutContext';
import KelasItem from '../admin/crud-kelas/KelasItem';

const Rekap = () => {
    const navigate = useNavigate();

    return (
        <div className="mr-[100px] ml-[350px] mt-[50px] ">
            <div className="rekap-absen bg-white rounded-[30px] p-8 ">
                <div className="flex flex-wrap gap-x-2 gap-y-4">
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <KelasItem />
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