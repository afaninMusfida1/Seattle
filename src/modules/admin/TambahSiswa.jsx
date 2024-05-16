import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../layout/LayoutContext';

const TambahSiswa = () => {
    const navigate = useNavigate();
    const [showDafSiswa, setShowDafSiswa] = useState(false);
    const { actionSetPageTitle } = useLayout()


    useEffect(() => {
        actionSetPageTitle('Tambah Siswa')
    }, [])


    function handleChange() {
        navigate('/daftar-siswa')
    }

    return (
        <div className="bg-white rounded-[30px] ml-[350px] mr-[100px] mt-[100px] p-8 ">
            <div className='flex-cols gap-8'>
                <input placeholder="Nama" className="input block w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <input placeholder="NIS" className="input block w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <select className="block border rounded px-4 py-2 outline-none text-[#6A6D76] w-[400px] h-[40px] mb-[15px]">
                    <option value="" disabled selected hidden>Level</option>
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                    <option value="option4">4</option>
                    <option value="option5">5</option>
                    <option value="option6">6</option>
                </select>

                <input placeholder="No.telp orang tua" className="block input w-[400px] h-[40px] font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <select className="block w-[400px] border rounded px-4 py-2 outline-none text-[#6A6D76] h-[40px] mb-[15px]">
                    <option value="" disabled selected hidden>Kelas</option>
                    <option value="option1">English For Kids</option>
                    <option value="option2">English Beginner</option>
                    <option value="option3">English Intermediate</option>
                </select>
                <button onClick={handleChange} className="w-[400px] h-[40px] mt-[80px] font-poppins text-[16px] border-2 bg-[#07CCB5] text-white rounded-[10px] outline-none ">Tambahkan</button>

            </div>
           z
        </div>
    )
}

export default TambahSiswa;