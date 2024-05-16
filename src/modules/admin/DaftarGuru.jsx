import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GuruItem from '../gurug/GuruItem';
import { useLayout } from '../layout/LayoutContext';
import { useGuru } from './GuruContext';
import { editGuru, tampilkan } from '../config/Api';


const DaftarGuru = () => {
    const { actionSetPageTitle } = useLayout();
    const { guruList, setGuruList } = useGuru();
    const navigate = useNavigate();

    useEffect(() => {
        actionSetPageTitle('Daftar Guru');
        fetchData(); // Panggil fungsi fetchData untuk mengambil data guru
    }, [actionSetPageTitle, setGuruList]);

    const fetchData = async () => {
        const data = await tampilkan(); // Ambil data guru dari API
        setGuruList(data); // Setel data guru ke dalam state
    };

    const handleChange = () => {
        navigate('/admin-tambah-guru');
    };

    return (
        <div className=" rounded-[10px] ml-[350px] mt-[100px] mr-[100px] ">
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
