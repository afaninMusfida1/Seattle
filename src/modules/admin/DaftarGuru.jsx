import { useNavigate } from "react-router-dom";
import GuruItem from "../gurug/GuruItem";
import { useLayout } from '../layout/LayoutContext';
import { useEffect } from 'react';

const DaftarGuru = () => {
    const {actionSetPageTitle} = useLayout()
    const navigate = useNavigate();

    useEffect(() => {
        actionSetPageTitle('Daftar Guru')
    }, [])

    function handleChange() {
        navigate('/admin-tambah-guru')
    }

    return (
        <div className="h rounded-[10px] ml-[350px] mt-[100px] ">
            {/* <div className="flex">
                <h2 className="font-poppins text-[20pt] font-bold text-[#078DCC]">Daftar Guru</h2>

            </div> */}
            <div className='flex gap-x-14 gap-y-6 flex-wrap overflow-y-scroll max-h-[460px]'>
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
                <GuruItem />
            </div>
            <button onClick={handleChange} className="text-[#078DCC] text-[20px] font-bold ml-[750px] hover:underline fixed right-[100px] bottom-[50px] ">Tambahkan Guru</button>
        </div>
    )
}

export default DaftarGuru;