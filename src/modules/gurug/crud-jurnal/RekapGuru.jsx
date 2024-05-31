import { useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLayout } from '../../layout/LayoutContext';
// import { useKelas } from './crud-presensi/PresensiProvider';
import KelasGrouping from '../../admin/crud-kelas/KelasGrouping';
import KelasItem from '../../admin/crud-kelas/KelasItem';
import { useKelas } from '../../admin/crud-kelas/KelasProvider';
import { useJurnal } from './JurnalProvider';

const Rekap = (props) => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout()
    const { daftarKelas, location, setLocation, handleFetchKelas } = useJurnal()
    const [filters, setFilters] = useState({});
    const [groupedKelas, setGroupedKelas] = useState({});

    useEffect(() => {
        actionSetPageTitle('Lihat Rekap')
        handleFetchKelas()
    }, [])

    // function handleChangeAbsen() {
    //     navigate('/guru/rekap/kbm')
    // }

    const handleFilterChange = (event, kategori) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [kategori]: event.target.value,
        }));
    };

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
                                        navigateTo={`/guru/kelas/${kelas.id}/rekap`}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Rekap;