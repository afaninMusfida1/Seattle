import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Jurnal = () => {
    const navigate = useNavigate();
    const [showDafJurnal, setShowDafJurnal] = useState(false);

    function handleChange(){
        navigate('/list-jurnal')
    }

    return (
        <div className="bg-white w-[940px] h-[400px] rounded-[10px] ml-[300px] mt-28 flex p-8 ">
            <div>
                <input placeholder="Bulan" className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <select className="border rounded px-4 py-2 outline-none text-[#6A6D76] w-[400px] h-[40px] mb-[15px]">
                    <option value="" >Kelas</option>
                    <option value="option1">English pemula</option>
                    <option value="option2">English Menengah</option>
                    <option value="option3">English Sepuh</option>
                </select>
                <select className="border rounded px-4 py-2 outline-none text-[#6A6D76] w-[400px] h-[40px] mb-[15px]">
                    <option value="" >Mata Pelajaran</option>
                    <option value="option1">English A</option>
                    <option value="option2">English B</option>
                    <option value="option3">English C</option>
                </select>
                <button onClick={handleChange} className="w-[400px] h-[40px] mt-[130px] font-poppins text-[16px] border-2 bg-[#07CC85] text-white rounded-[10px] outline-none ">Konfirmasi</button>
            </div>
            <div>
            <input placeholder="Hari" className="input w-[400px] h-[40px] font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <input placeholder="Kehadiran Siswa" className="input w-[400px] h-[40px] font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <input placeholder="Materi" className="input w-[400px] h-[40px] font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <div className="py-[130px]">
                    <button onClick={handleChange} className="text-[#078DCC] text-[14px] ml-[300px] hover:underline">Lihat rekap</button>
                </div>
            </div>
        </div>
    )
}

export default Jurnal;