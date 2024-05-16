import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GuruItem from '../gurug/GuruItem';
import { useLayout } from '../layout/LayoutContext';
import { tampilkan } from '../config/Api';
import { useGuru } from './GuruContext';

const DaftarGuru = () => {
    const { actionSetPageTitle } = useLayout();
    const { guruList, setGuruList } = useGuru();
    const navigate = useNavigate();

    useEffect(() => {
        actionSetPageTitle('Daftar Guru');
        const fetchData = async () => {
            const data = await tampilkan();
            setGuruList(data);
        };
        fetchData();
    }, [actionSetPageTitle, setGuruList]);

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
