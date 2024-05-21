import React, { useEffect, useRef, useState } from 'react';
import { useLayout } from '../../layout/LayoutContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import { useJurnal } from './JurnalProvider';

const Jurnal = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const { handleAdd, jurnalList } = useJurnal();
    const [tanggal, setTanggal] = useState(new Date());
    const refKelas_id = useRef('');
    const refHasil_belajar = useRef('');
    const [namaGuru, setNamaGuru] = useState("");
    const [namaKelas, setNamaKelas] = useState("");
    const [kategori, setKategori] = useState("");
    const kelas = (`${namaKelas} - ${kategori}`);

    useEffect(() => {
        actionSetPageTitle('Isi Jurnal');
        setNamaGuru(localStorage.getItem('namaGuru'))
        setNamaKelas(localStorage.getItem('namaKelas'))
        setKategori(localStorage.getItem('kategori'))
    }, []);

    const handleIsiJurnal = async () => {
        if (!refGuru_id.current.value || !refKelas_id.current.value || !refHasil_belajar.current.value) {
            alert('mohon isi semua form');
            return;
        }
        


        const kelas_id = refKelas_id.current.value;
        const guru_id = namaGuru;
        const hasil_belajar = refHasil_belajar.current.value;
        // const namaGuru = localStorage.getItem('namaGuru')
        console.log(`input jurnal value: ${tanggal}`)
        console.log(jurnalList)

        const result = await handleAdd(kelas_id, guru_id, hasil_belajar, tanggal);

        if (result) {
            console.log(`jurnal ditambahkan: ${result}`);
            alert('/jurnal ditambahkan')
            navigate('/guru-rekap-kbm');
        } else {
            console.error(`error menambahkan jurnal: ${result.message}`);
            alert(`error menambahkan jurnal ${result}`)
        }

        refKelas_id.current.value = '';
        // refGuru_id.current.value = '';
        refHasil_belajar.current.value = '';

    };

    const handleButtonClick = async () => {
        await handleIsiJurnal();
        navigate('/guru-rekap-kbm')
    }
    return (
        <div className="bg-white rounded-[30px] ml-[350px] mt-[100px] mr-[100px] p-8" >
            <div className='grid grid-flow-col'>
                <div className='flex flex-col'>
                    <form className='flex flex-col gap-4'>
                        <DatePicker
                            selected={tanggal}
                            onChange={(tanggal) => setTanggal(tanggal)}
                            className='outline-none text-center py-2 rounded border mb-4'
                            id='tanggal' />
                        <input
                            type="text"
                            placeholder='Pengajar'
                            value={namaGuru}
                            className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                        />
                        <input
                            type="text"
                            placeholder='Kelas'
                            // ref={refKelas_id}
                            value={kelas}
                            className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                        />
                        <textarea
                            name="materi"
                            id="materi"
                            placeholder='Materi'
                            ref={refHasil_belajar}
                            className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                        ></textarea>
                        <button type="button"
                            onClick={() => {
                                handleIsiJurnal()
                                navigate('/guru-rekap-kbm')
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
