import React, { useEffect, useRef, useState } from 'react';
import { useLayout } from '../../layout/LayoutContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useJurnal } from './JurnalProvider';
import PresensiItem from '../crud-presensi/PresensiItem';
import { apiGetJurnal, apiGetJurnalByTanggal } from './requestsJurnal';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

const Jurnal = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const { handleAdd, jurnalList, handleFetchJurnal, isLoading } = useJurnal();
    const [tanggal, setTanggal] = useState("");
    const { kelas_id, guru_id } = useParams()
    const refKelas_id = useRef('');
    const refHasil_belajar = useRef('');
    const [namaGuru, setNamaGuru] = useState("");
    const [namaKelas, setNamaKelas] = useState("");
    const [kategori, setKategori] = useState("");
    const kelas = (`${namaKelas} - ${kategori}`);
    const [isChecking, setIsChecking] = useState(true);
    const [jurnalIsAvailable, setJurnalIsAvailable] = useState();

    useEffect(() => {
        actionSetPageTitle('Isi Jurnal & Presensi');
        setNamaGuru(localStorage.getItem('namaGuru'))
        setNamaKelas(localStorage.getItem('namaKelas'))
        setKategori(localStorage.getItem('kategori'))
        handleFetchJurnal()
    }, []);

    const checkJurnal = async () => {
        setIsChecking(false)
        const result = await apiGetJurnalByTanggal(kelas_id, tanggal)
        console.log(`data kbm`, result)

        if (result.length == 0) {
            setJurnalIsAvailable(false)
            Swal.fire({
                title: 'Perhatian',
                text: 'belum ada jurnal, silahkan isi',
                icon: 'info',
                confirmButtonText: 'Oke'
              })
        } else if (result.length != 0) {
            setJurnalIsAvailable(true)
            Swal.fire({
                title: 'Perhatian',
                text: 'ditemukan jurnal, silahkan update',
                icon: 'info',
                confirmButtonText: 'Oke'
              })
        }

        // if (jurnalList != 0) { // jika data kbm itu sudah ada maka set true
        //     setJurnalIsAvailable(true)
        // } else if (jurnalList == 0) { // jika data kbm pada tanggal itu belum ada maka set false
        //     setJurnalIsAvailable(false)
        // }
    }

    const handleIsiJurnal = async () => {
        if (!refHasil_belajar.current.value || tanggal == "") {
            alert('mohon isi semua form');
            return;
        }
        const hasil_belajar = refHasil_belajar.current.value;
        const result = handleAdd(kelas_id, guru_id, hasil_belajar, tanggal);
        if (result) {
            navigate('/guru/rekap/lihat');
        }
        refHasil_belajar.current.value = "";
    };

    const handleChangePresensi = () => {
        navigate('/guru')
        console.log('selesai presensi')
    }

    return (
        <>
            <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px] p-8" >
                {isChecking ? (
                    <div className='flex flex-col gap-6'>
                        <input
                            // selected={tanggal}
                            // onChange={(tanggal) => setTanggal(tanggal)}
                            type='date'
                            className='outline-none text-left py-2 rounded border w-full px-3 bg-[#DCE5F1]'
                            id='tanggal' />
                        <button onClick={checkJurnal} className='bg-[#078DCC] rounded-md text-white px-3 py-2 active:opacity-50 outline-none'>
                            Cek Jurnal
                        </button>
                    </div>
                ) : (
                    <div className='grid grid-flow-col'>
                        <div className='flex flex-col'>
                            <form className='flex flex-col gap-4'>
                                <input
                                    type='date'
                                    value={tanggal}
                                    // onChange={(tanggal) => setTanggal(tanggal)}
                                    className='outline-none text-left py-2 rounded border w-full px-3 bg-[#DCE5F1]'
                                    id='tanggal' />
                                {/* <input
                                            type="text"
                                            placeholder='Pengajar'
                                            value={namaGuru}
                                            className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                                        /> */}
                                {/* <input
                                                type="text"
                                                placeholder='Kelas'
                                                value={kelas}
                                                className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                                            /> */}
                                <textarea
                                    name="materi"
                                    id="materi"
                                    placeholder='Materi'
                                    ref={refHasil_belajar}
                                    className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                                ></textarea>
                                {jurnalIsAvailable ?
                                    <button type="button"
                                        onClick={async () => {
                                            await handleIsiJurnal()
                                        }
                                        }
                                        className="mt-[100px] py-2 font-poppins text-[16px] border-2 bg-green-400 text-white rounded-md outline-none">
                                        update Jurnal
                                    </button>
                                    :
                                    <button type="button"
                                        onClick={async () => {
                                            await handleIsiJurnal()
                                        }
                                        }
                                        className="mt-[100px] py-2 font-poppins text-[16px] border-2 bg-[#078DCC] text-white rounded-md outline-none">
                                        Buat Jurnal
                                    </button>
                                }

                            </form>
                        </div>
                        <div className='self-end text-right'>
                            <button onClick={() => navigate('/guru/rekap/lihat')} className='text-[#078DCC] hover:underline'>
                                Lihat Jurnal
                            </button>
                        </div>
                    </div>
                )}

            </div>
            <div className="bg-white max-h-[500px] rounded-[30px] ml-[100px] mr-[100px] mt-[30px] p-8 ">
                <div className="w-full max-h-[380px] overflow-auto flex flex-wrap gap-1">
                    <div className="item-container flex justify-between w-full border-2 rounded-lg px-4 py-1">
                        <div className="nama">Dwi Saputra</div>
                        <div className="status flex gap-10">
                            <button className="bg-green-400 text-white px-[15px] py-[3px] rounded ">hadir</button>
                            <button className="bg-green-400 text-white px-[15px] py-[3px] rounded ">izin</button>
                            <button className="bg-green-400 text-white px-[15px] py-[3px] rounded ">sakit</button>
                        </div>
                    </div>
                    <PresensiItem />
                    <PresensiItem />
                    <PresensiItem />
                    <PresensiItem />
                    <PresensiItem />
                    <PresensiItem />
                    <PresensiItem />
                    <PresensiItem />
                    <PresensiItem />
                </div>
                <div className="flex justify-end">
                    <button onClick={handleChangePresensi} className="bg-[#078DCC] text-white px-[70px] py-[5px] rounded mr-[20px] mt-[20px] self-end">
                        Selesai
                    </button>
                </div>
            </div>
        </>
    );
};

export default Jurnal;