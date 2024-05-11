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
        actionSetPageTitle('Daftar Guru --- Test');
        handleFetchData();
    }, []);

    function handleChange() {
        navigate('/tambah-guru');
    }

    return (
        <div className="h-[400px] rounded-[10px] ml-[300px] mt-28 p-8">
            <div className="flex">
                <h2 className="font-poppins text-[20pt] font-bold text-[#078DCC]">Daftar Guru</h2>
            </div>
            <div className='flex gap-10 flex-wrap'>
                {guruList.map((guru, index) => (
                    console.log('hello'),
                    <GuruItem 
                      key={index}  
                      name={guru.name} 
                      no_telp={guru.no_telp} 
                      no_telp_ortu={guru.no_telp_ortu} 
                      email={guru.email} 
                      password={guru.password} 
                    />
                ))}
            </div>
            <button onClick={handleChange} className="text-[#078DCC] text-[20px] font-bold ml-[750px] hover:underline fixed right-[100px] bottom-[50px] ">Tambahkan Guru</button>
        </div>
    );
};

export default DaftarGuru;
