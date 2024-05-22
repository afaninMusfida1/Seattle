import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GuruItem from './GuruItem';
import { useLayout } from '../../layout/LayoutContext';
import { useGuru } from './GuruProvider';
import { editGuru, tampilkan } from '../../config/Api';


const DaftarGuru = () => {
    const { actionSetPageTitle } = useLayout();
    const { guruList, setGuruList, handleFetch } = useGuru();
    const navigate = useNavigate();

    useEffect(() => {
        actionSetPageTitle('Daftar Guru');
        handleFetch(); // Panggil fungsi fetchData untuk mengambil data guru
    }, []);

    const handleChange = () => {
        navigate('/admin/guru/tambah');
    };

    return (
        <div className=" rounded-[10px] ml-[100px] mt-[100px] mr-[100px] ">
            <div className='flex gap-x-14 gap-y-10 flex-wrap overflow-y-scroll max-h-[560px]'>
            {guruList.length > 0 ? (
                guruList.map(guru => (
                    <GuruItem 
                        key={guru.id} 
                        id={guru.id} 
                        nama={guru.nama} 
                        email={guru.email}
                        password={guru.password}
                        handleEditGuru={editGuru} // Teruskan fungsi handleEditGuru ke komponen GuruItem
                    />
                ))
            ) : (
                <p>Tidak ada data Guru</p>
            )}
            </div>
            <button 
                onClick={handleChange} 
                className="text-[#078DCC] text-[20px] font-bold hover:underline absolute right-[100px] bottom-[50px]"
            >
                Tambahkan Guru
            </button>
        </div>
    );
};

export default DaftarGuru;
