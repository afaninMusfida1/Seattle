import { useNavigate, Outlet, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLayout } from '../layout/LayoutContext';


const DaftarKelas = () => {
    const navigate = useNavigate()
    const { actionSetPageTitle } = useLayout()

    useEffect(() => {
        actionSetPageTitle('Daftar Kelas')
    }, [])

    const handleChangeKelas = () => {
        navigate('/daftar-siswa')
    }

    return (
        <div className="grid gap-6 mb-[50px] mr-[60px] ml-[350px] mt-[100px] ">
            <div className="rekap-absen bg-white rounded-[30px] p-8 ">
                <div>
                </div>
                <div className="">
                    <button onClick={handleChangeKelas} className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas B</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas C</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                </div>
                <div className="mt-[10px]">
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas B</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas C</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                </div>
                <div className="mt-[10px]">
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas B</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas C</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                </div>
            </div>

            
        </div>
    )
}
export default DaftarKelas