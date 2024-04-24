import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const TambahGuru = () => {
    const navigate = useNavigate();
    const [showDafGuru, setShowDafGuru] = useState(false);

    function handleChange(){
        navigate('/list-guru')
    }

    return (
        <div className="bg-white w-[940px] h-[400px] rounded-[10px] ml-[300px] mt-28 flex p-8 ">
            <div>
                <input placeholder="Nama" className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <select className="border rounded px-4 py-2 outline-none text-[#6A6D76] w-[400px] h-[40px] mb-[15px]">
                    <option value="" >Jenis Kelamin</option>
                    <option value="option1">Laki-Laki</option>
                    <option value="option2">Perempuan</option>
                </select>
                <input placeholder="No.telp" className="input w-[400px] h-[40px] font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <button onClick={handleChange} className="w-[400px] h-[40px] mt-[130px] font-poppins text-[16px] border-2 bg-[#07CCB5] text-white rounded-[10px] outline-none ">Tambahkan</button>
            </div>
            <div>
                <input placeholder="Email" className="input w-[400px] h-[40px] font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <input placeholder="Asal Negara" className="input w-[400px] h-[40px] font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <div className="py-[200px]">
                    <button onClick={handleChange} className="text-[#078DCC] text-[14px] ml-[300px] mt-[0px] hover:underline">Lihat data guru</button>
                </div>
            </div>
        </div>
    )
}

export default TambahGuru;
