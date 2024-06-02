import React, { useEffect, useState } from 'react';
import { useLayout } from '../../layout/LayoutContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useJurnal } from './JurnalProvider';
import PresensiItem from '../crud-presensi/PresensiItem';
import { apiGetSiswaByIdKelas } from '../crud-presensi/requestPresensi';
import Swal from 'sweetalert2';
import { useSiswa } from '../../admin/crud-siswa/SiswaProvider';
import { addPresensi } from '../crud-presensi/requestPresensi';

const Jurnal = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const { handleAdd, handleCheckKbm, handleGetKbmId, handleUpdate, jurnalList, handleFetchJurnal, handleGetJurnalByKelas, isLoading } = useJurnal();
    const [tanggal, setTanggal] = useState("");
    const { kelas_id } = useParams();
    const [namaGuru, setNamaGuru] = useState("");
    const [namaKelas, setNamaKelas] = useState("");
    const [kategori, setKategori] = useState("");
    const [isChecking, setIsChecking] = useState(true);
    const [jurnalIsAvailable, setJurnalIsAvailable] = useState(false);
    const [materi, setMateri] = useState("");
    const { siswaList, setSiswaList } = useSiswa();
    const [fetchedSiswaList, setFetchedSiswaList] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        actionSetPageTitle('Isi Jurnal & Presensi');
        setNamaGuru(localStorage.getItem('namaGuru'))
        setNamaKelas(localStorage.getItem('namaKelas'))
        setKategori(localStorage.getItem('kategori'))
        handleFetchJurnal()
    }, []);

    useEffect(() => {
        const fetchSiswa = async () => {
            const response = await apiGetSiswaByIdKelas(kelas_id);
            setFetchedSiswaList(response);
        };

        fetchSiswa();
    }, [kelas_id]);

    const checkJurnal = async (kelas_id, tanggal) => {
        if (!tanggal) {
            Swal.fire({
                title: 'Perhatian',
                text: 'Mohon isi tanggal terlebih dahulu',
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
                text: 'Belum ada jurnal, silahkan isi',
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
                text: 'Mohon isi semua form',
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

    const handleConfirmPresensi = () => {
        navigate('/guru')
        Swal.fire({
            title: 'Selesai Presensi',
            icon: 'success',
            confirmButtonText: 'Lanjut'
        })
    }

    const handleAddPresensi = async (siswa_id, keterangan) => {
        const idKbm = await handleGetKbmId(kelas_id, tanggal);
        try {
            await addPresensi(idKbm, siswa_id, keterangan);
            console.log('Presensi added successfully');
        } catch (error) {
            console.error('Error adding presensi:', error);
            Swal.fire({
                title: 'Error',
                text: 'Gagal menambahkan presensi',
                icon: 'error',
                confirmButtonText: 'Oke'
            });
        }
    };

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
                                    onChange={(e) => setTanggal(e.target.value)}
                                    className='outline-none text-left py-2 rounded border w-full px-3 bg-[#DCE5F1]'
                                    id='tanggal'>
                                    {tanggal}
                                </div>
                                <textarea
                                    name="materi"
                                    id="materi"
                                    placeholder='Materi - chapter'
                                    value={materi}
                                    onChange={(e) => setMateri(e.target.value)}
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
                                                Batal
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
                                                Batal
                                            </button>
                                        </div>
                                    </>
                                )}
                            </form>
                        </div>
                        <div className='self-end text-right'>
                            <button onClick={() => navigate(`/guru/kelas/${kelas_id}/rekap`)} className='text-[#078DCC] hover:underline'>
                                Lihat Jurnal
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="bg-white max-h-[500px] rounded-[30px] ml-[100px] mr-[100px] mb-[100px] mt-[30px] p-8 ">
                <div className="w-full max-h-[380px] overflow-auto flex flex-wrap gap-1">
                    {fetchedSiswaList.map(siswa => (
                        <PresensiItem key={siswa.id} siswa={siswa} tanggal={tanggal} handleAddPresensi={handleAddPresensi} />
                    ))}
                </div>
                <div className="flex justify-end">
                    <button onClick={handleConfirmPresensi} className="bg-[#078DCC] text-white px-[70px] py-[5px] rounded mr-[20px] mt-[20px] self-end">
                        Selesai
                    </button>
                </div>
            </div>
        </>
    );
};

export default Jurnal;


// import React, { useEffect, useState } from 'react';
// import { useLayout } from '../../layout/LayoutContext';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useJurnal } from './JurnalProvider';
// import PresensiItem from '../crud-presensi/PresensiItem';
// import { apiGetSiswaByIdKelas } from '../crud-presensi/requestPresensi';
// import Swal from 'sweetalert2';
// import { useSiswa } from '../../admin/crud-siswa/SiswaProvider';

// const Jurnal = () => {
//     const navigate = useNavigate();
//     const { actionSetPageTitle } = useLayout();
//     const { handleAdd, handleCheckKbm, handleGetKbmId, handleUpdate, jurnalList, handleFetchJurnal, handleGetJurnalByKelas, isLoading } = useJurnal();
//     const [tanggal, setTanggal] = useState("");
//     const { kelas_id } = useParams();
//     const [namaGuru, setNamaGuru] = useState("");
//     const [namaKelas, setNamaKelas] = useState("");
//     const [kategori, setKategori] = useState("");
//     const [isChecking, setIsChecking] = useState(true);
//     const [jurnalIsAvailable, setJurnalIsAvailable] = useState(false);
//     const [materi, setMateri] = useState("");
//     const { siswaList, setSiswaList } = useSiswa();
//     const [fetchedSiswaList, setFetchedSiswaList] = useState([]);
//     const [id, setId] = useState();

//     useEffect(() => {
//         actionSetPageTitle('Isi Jurnal & Presensi');
//         setNamaGuru(localStorage.getItem('namaGuru'))
//         setNamaKelas(localStorage.getItem('namaKelas'))
//         setKategori(localStorage.getItem('kategori'))
//         handleFetchJurnal()
//     }, []);

//     useEffect(() => {
//         const fetchSiswa = async () => {
//             const response = await apiGetSiswaByIdKelas(kelas_id);
//             setFetchedSiswaList(response);
//         };

//         fetchSiswa();
//     }, [kelas_id]);

//     const checkJurnal = async (kelas_id, tanggal) => {
//         if (!tanggal) {
//             Swal.fire({
//                 title: 'Perhatian',
//                 text: 'Mohon isi tanggal terlebih dahulu',
//                 icon: 'warning',
//                 confirmButtonText: 'Oke'
//             });
//             return;
//         }

//         // const idKbm = await handleGetKbmId(kelas_id, tanggal)
//         // console.log(`ini adalah id kbm dari cek jurnal`, idKbm)
//         const result = await handleCheckKbm(kelas_id, tanggal)

//         if (!result) {
//             setJurnalIsAvailable(false);
//             Swal.fire({
//                 title: 'Informasi',
//                 text: 'Belum ada jurnal, silahkan isi',
//                 icon: 'info',
//                 confirmButtonText: 'Oke'
//             })
//         } else {
//             setJurnalIsAvailable(true);
//             setMateri(result.hasil_belajar);
//             setId(result.id)
//             Swal.fire({
//                 title: 'Informasi',
//                 text: 'Ditemukan jurnal, silahkan update',
//                 icon: 'info',
//                 confirmButtonText: 'Oke'
//             });
//         };
//         setIsChecking(false)
//     }

//     const handleIsiJurnal = async () => {
//         if (!materi || !tanggal) {
//             Swal.fire({
//                 title: 'Perhatian',
//                 text: 'Mohon isi semua form',
//                 icon: 'warning',
//                 confirmButtonText: 'Oke'
//             })
//             return;
//         }
//         const result = await handleAdd(kelas_id, guru_id, materi, tanggal);
//         if (result) {
//             console.log(result)
//             navigate(`/guru/kelas/${kelas_id}/rekap`);
//         }
//         setTanggal("");
//         setMateri("");

//     };

//     const handleConfirmPresensi = () => {
//         navigate('/guru')
//         Swal.fire({
//             title: 'Selesai Presensi',
//             icon: 'success',
//             confirmButtonText: 'Lanjut'
//         })
//     }

//     return (
//         <>
//             <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px] p-8" >
//                 {isChecking ? (
//                     <>
//                         <div className='flex gap-6 relative'>
//                             <input
//                                 type='date'
//                                 value={tanggal}
//                                 onChange={(e) => setTanggal(e.target.value)}
//                                 className='outline-none w-[15rem] text-left py-2 rounded border px-3 bg-[#DCE5F1]'
//                                 id='tanggal' />
//                             <button onClick={() => checkJurnal(kelas_id, tanggal)} className='bg-[#078DCC] rounded-md text-white px-3 py-2 active:opacity-50 outline-none'>
//                                 Cek Jurnal
//                             </button>
//                             <span
//                                 onClick={() => navigate(`/guru/kelas/${kelas_id}/rekap`)}
//                                 className='absolute right-0 bottom-0 text-[#078DCC] hover:underline cursor-pointer'>
//                                 Lihat jurnal
//                             </span>
//                         </div>
//                     </>
//                 ) : (
//                     <div className='grid grid-flow-col'>
//                         <div className='flex flex-col'>
//                             <form className='flex flex-col gap-4'>
//                                 <div
//                                     onChange={(e) => setTanggal(e.target.value)}
//                                     className='outline-none text-left py-2 rounded border w-full px-3 bg-[#DCE5F1]'
//                                     id='tanggal'>
//                                     {tanggal}
//                                 </div>
//                                 <textarea
//                                     name="materi"
//                                     id="materi"
//                                     placeholder='Materi - chapter'
//                                     value={materi}
//                                     onChange={(e) => setMateri(e.target.value)}
//                                     className='px-3 py-2 font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-md outline-none hover:border-[#078DCC]'
//                                 ></textarea>
//                                 {jurnalIsAvailable ? (
//                                     <>
//                                         <div className='flex gap-4' >
//                                             <button type="button"
//                                                 onClick={async () => {
//                                                     await handleUpdate(id, kelas_id, materi, tanggal)
//                                                     setTanggal("")
//                                                     setMateri("")
//                                                     navigate(`/guru/kelas/${kelas_id}/rekap`)
//                                                 }}
//                                                 className="mt-[100px] grow py-2 font-poppins text-[16px] bg-green-400 text-white rounded-md outline-none">
//                                                 Update Jurnal
//                                             </button>
//                                             <button type='button'
//                                                 onClick={() => {
//                                                     setIsChecking(true)
//                                                     setTanggal("")
//                                                 }}
//                                                 className='bg-red-400 py-2 px-6 text-white mt-[100px] rounded-md '>
//                                                 Batal
//                                             </button>
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <div className='flex gap-4'>
//                                             <button type="button"
//                                                 onClick={async () => {
//                                                     await handleIsiJurnal()
//                                                     setTanggal("")
//                                                     setMateri("")
//                                                     navigate(`/guru/kelas/${kelas_id}/rekap`)
//                                                     handleGetJurnalByKelas(kelas_id)
//                                                 }
//                                                 }
//                                                 className="mt-[100px] grow py-2 font-poppins bg-[#078DCC] text-white rounded-md outline-none">
//                                                 Buat Jurnal
//                                             </button>
//                                             <button type='button'
//                                                 onClick={() => {
//                                                     setIsChecking(true)
//                                                     setTanggal("")
//                                                     setMateri("")
//                                                 }}
//                                                 className='bg-red-400 py-2 px-6 text-white mt-[100px] rounded-md '>
//                                                 Batal
//                                             </button>
//                                         </div>
//                                     </>
//                                 )}
//                             </form>
//                         </div>
//                         <div className='self-end text-right'>
//                             <button onClick={() => navigate(`/guru/kelas/${kelas_id}/rekap`)} className='text-[#078DCC] hover:underline'>
//                                 Lihat Jurnal
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//             <div className="bg-white max-h-[500px] rounded-[30px] ml-[100px] mr-[100px] mb-[100px] mt-[30px] p-8 ">
//                 <div className="w-full max-h-[380px] overflow-auto flex flex-wrap gap-1">
//                     {fetchedSiswaList.map(siswa => (
//                         <PresensiItem key={siswa.id} siswa={siswa}  />
//                     ))}
//                 </div>
//                 <div className="flex justify-end">
//                     <button onClick={handleConfirmPresensi} className="bg-[#078DCC] text-white px-[70px] py-[5px] rounded mr-[20px] mt-[20px] self-end">
//                         Selesai
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Jurnal;
