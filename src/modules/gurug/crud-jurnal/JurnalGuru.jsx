import { useNavigate, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import KelasItem from '../../admin/crud-kelas/KelasItem';
import { useLayout } from '../../layout/LayoutContext';
import GuruLayout from '../../layout/GuruLayout';
import { useJurnal } from './JurnalProvider';
import KelasGrouping from '../../admin/crud-kelas/KelasGrouping';
import { apiGetJurnalByKelas } from './requestsJurnal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";


const JurnalGuru = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const { daftarKelas, jurnalList, setJurnalList, handleFetchJurnal, location, setLocation, handleFetchKelas, handleGetJurnalByKelas } = useJurnal();
    const [filters, setFilters] = useState({});
    const [groupedKelas, setGroupedKelas] = useState({});
    const { id } = useParams();
    // const { daftarKelas, setDaftarKelas, location, setLocation } = useKelas()

    useEffect(() => {
        actionSetPageTitle('Jurnal & Presensi');
        handleFetchKelas()
    }, []);


    function handleChangeAbsen() {
        navigate('/isi-jurnal');
    }

    // setLocation(`/guru/kelas/${kelas.id}/jurnal`)

    const handleFilterChange = (event, kategori) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [kategori]: event.target.value,
        }));
    };

    // useEffect(() => {
    //     // Mengambil data jurnal berdasarkan ID kelas
    //     const fetchDataJurnal = async (id) => {
    //         try {
    //             const data = await handleGetJurnalByKelas(id);
    //             setJurnalList(data);
    //         } catch (error) {
    //             console.error("Error fetching jurnal data:", error);
    //         }
    //     };

    //     fetchDataJurnal();
    // }, [id]);


    useEffect(() => {
        const grouped = daftarKelas.reduce((acc, curr) => {
            const { kategori } = curr;
            if (!acc[kategori]) {
                acc[kategori] = [];
            }
            acc[kategori].push(curr);
            return acc;
        }, {});
        setGroupedKelas(grouped);
    }, [daftarKelas]);

    return (
        <>
            {/* <div className='flex justify-between gap-10 bg-sky-500 rounded-[30px] ml-[100px] mt-[50px] mr-[100px] p-8'>
                <section>
                    <div className="title text-white font-semibold text-2xl">
                        PPDB Tahun 2025
                    </div>
                    <div className="content text-white opacity-90">
                        pendaftaran siswa baru tahun ajaran 2025
                    </div>
                </section>
                <span className='text-white opacity-70'>
                    Pengumuman

                </span>
            </div> */}
            <div className="">
                {Object.entries(groupedKelas).map(([kategori, kelasArray], index) => (
                    <div key={index} className="rekap-absen bg-white rounded-[30px] p-8 mr-[100px] ml-[100px] mt-[50px]">
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between">
                                <div className="kategori text-sky-400 font-bold text-lg content-center bg-sky-100 max-w-fit py-1 px-5 rounded-md">{kategori}</div>
                                <div className='border-2 bg-white rounded-[10px] max-w-fit px-6 py-2'>
                                    <select onChange={(event) => handleFilterChange(event, kategori)} className="ml-2 border-none outline-none">
                                        <option value="">Semua Kelas</option>
                                        <option value="pagi">Pagi</option>
                                        <option value="siang">Siang</option>
                                        <option value="sore">Sore</option>
                                        <option value="malam">Malam</option>
                                    </select>
                                </div>
                            </div>
                            <div className="max-h-[350px] overflow-auto flex flex-wrap gap-x-2 gap-y-4">
                                {kelasArray
                                    .filter(kelas => !filters[kategori] || kelas.jadwal_kelas.toLowerCase() === filters[kategori])
                                    .map((kelas) => (
                                        <KelasItem
                                            key={kelas.id}
                                            id={kelas.id}
                                            nama_kelas={kelas.nama_kelas}
                                            kategori={kelas.kategori}
                                            periode={kelas.periode}
                                            jadwal_kelas={kelas.jadwal_kelas}
                                            navigateTo={`/guru/kelas/${kelas.id}/jurnal`}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default JurnalGuru;
