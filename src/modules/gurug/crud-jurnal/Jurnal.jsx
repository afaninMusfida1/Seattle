import React, { useEffect, useRef, useState } from 'react';
import { useLayout } from '../../layout/LayoutContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import { useJurnal } from './JurnalProvider';

const Jurnal = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const [date, setDate] = useState(new Date());
    const { handleAdd } = useJurnal();
    const refTanggal = useRef();
    const refPengajar = useRef();
    const refKelas = useRef();
    const refMateri = useRef();

    useEffect(() => {
        actionSetPageTitle('Isi Jurnal');
    }, []);

    const handleIsiJurnal = async () => {
        if (refMateri.current.value === '') {
            alert('mohon isi semua form');
            return;
        }
        const date = refTanggal.current.value;
        const pengajar = refPengajar.current.value;
        const kelas = refKelas.current.value;
        const materi = refMateri.current.value;

        console.log(`input jurnal value: ${pengajar, kelas, materi}`)

        const result = handleAdd(date, pengajar, kelas, materi);

        if (result) {
            console.log(`jurnal ditambahkan: ${result}`);
            navigate('/guru-rekap-kbm');
        } else {
            console.error(`error menambahkan jurnal: ${result.message}`);
            alert(`error menambahkan jurnal ${result.message}`)
        }

        refPengajar.current.value = '';
        refKelas.current.value = '';
        refMateri.current.value = '';

    };
    return (
        <div className="bg-white rounded-[30px] ml-[350px] mt-[100px] mr-[100px] p-8" >
            <div className='grid grid-flow-col'>
                <div className='flex flex-col'>
                    <form className='flex flex-col gap-4'>
                        <DatePicker selected={date} ref={refTanggal} onChange={(date) => setDate(date)} className='outline-none text-center py-2 rounded border mb-4' id='tanggal' />
                        <input
                            type="text"
                            placeholder='Pengajar'
                            ref={refPengajar}
                            className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                        />
                        <input
                            type="text"
                            placeholder='Kelas'
                            ref={refKelas}
                            className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                        />
                        <textarea
                            name="materi"
                            id="materi"
                            placeholder='Materi'
                            ref={refMateri}
                            className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                        ></textarea>
                        <button
                            onClick={() => {
                                handleIsiJurnal()
                                navigate('/guru')
                            }
                            }
                            className="mt-[100px] py-2 font-poppins text-[16px] border-2 bg-[#07CC85] text-white rounded-md outline-none">Buat Jurnal</button>
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
