import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLayout } from '../layout/LayoutContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Jurnal = () => {
    const navigate = useNavigate();
    const [showDafJurnal, setShowDafJurnal] = useState(false);
    const { actionSetPageTitle } = useLayout()
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        actionSetPageTitle('Isi Jurnal')
    }, [])

    function handleChange() {
        navigate('/guru-rekap')
    }

    function handleConfirm() {
        navigate('/guru')
    }

    return (
        <div className="bg-white rounded-[30px] ml-[350px] mt-[100px] mr-[100px] p-8 ">
            <div className='grid grid-flow-col'>
                <div className=' flex flex-col'>
                    <div className='flex flex-col gap-4'>
                        <DatePicker selected={date} onChange={(date) => setDate(date)} className='outline-none text-center py-2 rounded border mb-4' id='tanggal' />
                        <input type="text" placeholder='Pengajar' className=' px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC] ' />
                        <input type="text" placeholder='Kelas' className=' px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC] ' />
                        <textarea name="materi" id="materi" placeholder='Materi ' className=' px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC] '></textarea>
                    </div>
                    <button onClick={handleConfirm} className="mt-[100px] py-2 font-poppins text-[16px] border-2 bg-[#07CC85] text-white rounded-md outline-none ">Buat Jurnal</button>
                </div>
                <div className='self-end text-right'>
                    <button onClick={handleChange} className='text-[#078DCC] hover:underline '>
                        Lihat Jurnal
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Jurnal;