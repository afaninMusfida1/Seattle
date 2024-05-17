import { useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import KelasItem from '../../kelas/KelasItem';
import { useLayout } from '../../layout/LayoutContext';
import GuruLayout from '../../layout/GuruLayout';



const JurnalGuru = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();

    useEffect(() => {
        actionSetPageTitle('Lihat Jurnal');
    }, []);

    function handleChangeAbsen() {
        navigate('/isi-jurnal');
    }

    return (
        
        <div className="mr-[100px] ml-[350px] mt-[100px]">
            <div className="rekap-absen bg-white rounded-[30px] p-8">
                <div className="flex flex-wrap gap-x-2 gap-y-4">
                    {/* <button onClick={handleChangeAbsen} className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button> */}
                    <div className="flex flex-col gap-y-4">
                    <h1 className='font-bold text-xl'>Pre Starters</h1>
                    {/* <div className='flex gap-y-2'> */}
                    <KelasItem navigateTo="/isi-jurnal" title="Pre Starters level 1" subtitle="Rabu dan Sabtu / 14.30-16.00" />
                    <KelasItem navigateTo="/isi-jurnal" title="Pre Starters level 4" subtitle="Selasa dan Jumat / 14.30-16.00" />
                    <KelasItem navigateTo="/isi-jurnal" title="Pre Starters level 4" subtitle="Selasa dan Jumat / 14.30-16.00" />
                    
                    {/* </div> */}
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
    );
};

export default JurnalGuru;
