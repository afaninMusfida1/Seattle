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
    const { handleAdd, handleCheckKbm, handleUpdate, jurnalList, handleFetchJurnal, handleGetJurnalByKelas, isLoading } = useJurnal();
    const [tanggal, setTanggal] = useState("");
    const { kelas_id, guru_id } = useParams();
    const refKelas_id = useRef('');
    const refHasil_belajar = useRef('');
    const [namaGuru, setNamaGuru] = useState("");
    const [namaKelas, setNamaKelas] = useState("");
    const [kategori, setKategori] = useState("");
    const kelas = (`${namaKelas} - ${kategori}`);
    const [isChecking, setIsChecking] = useState(true);
    const [jurnalIsAvailable, setJurnalIsAvailable] = useState(false);
    const [materi, setMateri] = useState("");
    const [id, setId] = useState();

    useEffect(() => {
        actionSetPageTitle('Isi Jurnal & Presensi');
        setNamaGuru(localStorage.getItem('namaGuru'))
        setNamaKelas(localStorage.getItem('namaKelas'))
        setKategori(localStorage.getItem('kategori'))
        handleFetchJurnal()
    }, []);

    const checkJurnal = async (kelas_id, tanggal) => {
        if (!tanggal) {
            Swal.fire({
                title: 'Perhatian',
                text: 'mohon isi tanggal terlebih dahulu',
                icon: 'warning',
                confirmButtonText: 'Oke'
            });
            return;
        }

        const result = await handleCheckKbm(kelas_id, tanggal)

        if (!result) {
            setJurnalIsAvailable(false);
            Swal.fire({
                title: 'Informasi',
                text: 'belum ada jurnal, silahkan isi',
                icon: 'info',
                confirmButtonText: 'Oke'
            })
        } else {
            setJurnalIsAvailable(true);
            setMateri(result.hasil_belajar);
            setId(result.id)
            Swal.fire({
                title: 'Informasi',
                text: 'Ditemukan jurnal, silahkan update',
                icon: 'info',
                confirmButtonText: 'Oke'
            });
        };
        setIsChecking(false)
    }

    const handleIsiJurnal = async () => {
        if (!materi || !tanggal) {
            Swal.fire({
                title: 'Perhatian',
                text: 'mohon isi semua form',
                icon: 'warning',
                confirmButtonText: 'Oke'
            })
            return;
        }
        const result = await handleAdd(kelas_id, guru_id, materi, tanggal);
        if (result) {
            console.log(result)
            navigate(`/guru/kelas/${kelas_id}/rekap`);
        }
        setTanggal("");
        setMateri("");

    };

    const handleChangePresensi = () => {
        navigate('/guru')
        console.log('selesai presensi')
    }

    return (
        <>
            <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px] p-8" >
                {isChecking ? (
                    <>

                        <div className='flex gap-6 relative'>
                            <input
                                type='date'
                                value={tanggal}
                                onChange={(e) => setTanggal(e.target.value)}
                                className='outline-none w-[15rem] text-left py-2 rounded border px-3 bg-[#DCE5F1]'
                                id='tanggal' />
                            <button onClick={() => checkJurnal(kelas_id, tanggal)} className='bg-[#078DCC] rounded-md text-white px-3 py-2 active:opacity-50 outline-none'>
                                Cek Jurnal
                            </button>
                            <span
                                onClick={() => navigate(`/guru/kelas/${kelas_id}/rekap`)}
                                className='absolute right-0 bottom-0 text-[#078DCC] hover:underline cursor-pointer'>
                                Lihat jurnal
                            </span>
                        </div>
                    </>
                ) : (
                    <div className='grid grid-flow-col'>
                        <div className='flex flex-col'>
                            <form className='flex flex-col gap-4'>
                                <div
                                    // type='date'
                                    // defaultValue={tanggal}
                                    onChange={(e) => setTanggal(e.target.value)}
                                    className='outline-none text-left py-2 rounded border w-full px-3 bg-[#DCE5F1]'
                                    id='tanggal'>
                                    {tanggal}
                                </div>
                                <textarea
                                    name="materi"
                                    id="materi"
                                    placeholder='Materi - chapter'
                                    value={materi} // Set value textarea dari state hasil_belajar
                                    onChange={(e) => setMateri(e.target.value)} //ubah state saat state berubah
                                    className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
                                ></textarea>
                                {jurnalIsAvailable ? (
                                    <>
                                        <div className='flex gap-4' >
                                            <button type="button"
                                                onClick={async () => {
                                                    await handleUpdate(id, kelas_id, materi, tanggal)
                                                    setTanggal("")
                                                    setMateri("")
                                                    navigate(`/guru/kelas/${kelas_id}/rekap`)
                                                }}
                                                className="mt-[100px] grow py-2 font-poppins text-[16px] bg-green-400 text-white rounded-md outline-none">
                                                Update Jurnal
                                            </button>
                                            <button type='button'
                                                onClick={() => {
                                                    setIsChecking(true)
                                                    setTanggal("")
                                                }}
                                                className='bg-red-400 py-2 px-6 text-white mt-[100px] rounded-md '>
                                                batal
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='flex gap-4'>
                                            <button type="button"
                                                onClick={async () => {
                                                    await handleIsiJurnal()
                                                    setTanggal("")
                                                    setMateri("")
                                                    navigate(`/guru/kelas/${kelas_id}/rekap`)
                                                    handleGetJurnalByKelas(kelas_id)
                                                }
                                                }
                                                className="mt-[100px] grow py-2 font-poppins bg-[#078DCC] text-white rounded-md outline-none">
                                                Buat Jurnal
                                            </button>
                                            <button type='button'
                                                onClick={() => {
                                                    setIsChecking(true)
                                                    setTanggal("")
                                                    setMateri("")
                                                }}
                                                className='bg-red-400 py-2 px-6 text-white mt-[100px] rounded-md '>
                                                batal
                                            </button>
                                        </div>
                                    </>
                                )}
                            </form>
                        </div>
                        <div className='self-end text-right'>
                            <button onClick={() => navigate('/guru/kelas/:kelas_id/rekap')} className='text-[#078DCC] hover:underline'>
                                Lihat Jurnal
                            </button>
                        </div>
                    </div>
                )}

            </div>
            <div className="bg-white max-h-[500px] rounded-[30px] ml-[100px] mr-[100px] mb-[100px] mt-[30px] p-8 ">
                <div className="w-full max-h-[380px] overflow-auto flex flex-wrap gap-1">

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