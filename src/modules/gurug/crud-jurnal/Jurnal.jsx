import React, { useEffect, useState } from 'react';
import { useLayout } from '../../layout/LayoutContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import { useJurnal } from './JurnalProvider';

const Jurnal = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const [date, setDate] = useState(new Date());
    const [pengajar, setPengajar] = useState('');
    const [kelas, setKelas] = useState('');
    const [materi, setMateri] = useState('');
    const { addJurnal } = useJurnal();

    useEffect(() => {
        actionSetPageTitle('Isi Jurnal');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newJurnal = { date, pengajar, kelas, materi };
        addJurnal(newJurnal);
        // if () {
        //     navigate('/guru-rekap-absen');
        // } else {
        //     alert(response.message);
        // }
    };
    return (
        <div className="bg-white rounded-[30px] ml-[350px] mt-[100px] mr-[100px] p-8" >
            <div className='grid grid-flow-col'>
                <div className='flex flex-col'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <DatePicker selected={date} onChange={(date) => setDate(date)} className='outline-none text-center py-2 rounded border mb-4' id='tanggal' />
                        <input
                            type="text"
                            placeholder='Pengajar'
                            value={pengajar}
                            onChange={(e) => setPengajar(e.target.value)}
                            className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                        />
                        <input
                            type="text"
                            placeholder='Kelas'
                            value={kelas}
                            onChange={(e) => setKelas(e.target.value)}
                            className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                        />
                        <textarea
                            name="materi"
                            id="materi"
                            placeholder='Materi'
                            value={materi}
                            onChange={(e) => setMateri(e.target.value)}
                            className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                        ></textarea>
                        <button type="submit" onClick={handleSubmit} className="mt-[100px] py-2 font-poppins text-[16px] border-2 bg-[#07CC85] text-white rounded-md outline-none">Buat Jurnal</button>
                    </form>
                </div>
                <div className='self-end text-right'>
                    <button onClick={() => navigate('/guru-rekap-kbm')} className='text-[#078DCC] hover:underline'>
                        Lihat Jurnal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Jurnal;
