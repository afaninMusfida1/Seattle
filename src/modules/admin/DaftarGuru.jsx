import { useNavigate } from "react-router-dom";
import GuruItem from "../gurug/GuruItem";
import { useLayout } from '../layout/LayoutContext';
import { useEffect } from 'react';
import { useAdmin } from "./adminContext";

const DaftarGuru = () => {
    const { actionSetPageTitle } = useLayout();
    const navigate = useNavigate();
    const { guruList, handleFetchData } = useAdmin();

    useEffect(() => {
        actionSetPageTitle('Daftar Guru');
        handleFetchData();
    }, [actionSetPageTitle, handleFetchData]);

    const handleChange = () => {
        navigate('/tambah-guru');
    };

    return (
        <div className="h-[400px] rounded-[10px] ml-[300px] mt-20 p-8">
            <h2 className="font-poppins text-[20pt] font-bold text-[#078DCC] mb-4">Daftar Guru</h2>
            {guruList.length > 0 ? (
                guruList.map((guru, index) => (
                    <GuruItem 
                        key={index} 
                        name={guru.name} 
                        no_telp={guru.no_telp} 
                        no_telp_ortu={guru.no_telp_ortu} 
                        email={guru.email} 
                        password={guru.password} 
                    />
                ))
            ) : (
                <p>Tidak ada data Guru</p>
            )}
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
