import { useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState, useMemo } from 'react';
import { useLayout } from '../../layout/LayoutContext';
import KelasItem from '../crud-kelas/KelasItem';
import { useKelas } from '../crud-kelas/KelasProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import KelasGrouping from '../crud-kelas/KelasGrouping';

const Rekap = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const { daftarKelas, handleFetch } = useKelas();
    const [filters, setFilters] = useState({});
    const [groupedKelas, setGroupedKelas] = useState({});

    useEffect(() => {
        actionSetPageTitle('Daftar Kelas');
        handleFetch();
    }, []);

    const handleChange = () => {
        navigate('/admin/tambah-kelas');
    };

    // const handleFilterChange = (event) => {
    //     setFilter(event.target.value);
    // };

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
        <div>
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
                                    navigateTo={'absen'}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            {/* <button onClick={handleChange} className="fixed bottom-[50px] right-[100px] text-[#078DCC] text-[20px] font-bold hover:underline">
                Tambahkan Kelas
            </button> */}
        </div>
    );
};

export default Rekap;


// import { useNavigate, Outlet } from 'react-router-dom';
// import React, { useEffect, useState, toLowerCase } from 'react';
// import { useLayout } from '../../layout/LayoutContext';
// import KelasItem from '../crud-kelas/KelasItem';
// import { useKelas } from '../crud-kelas/KelasProvider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilter } from '@fortawesome/free-solid-svg-icons';


// const Rekap = () => {
//     const navigate = useNavigate();
//     const { actionSetPageTitle } = useLayout()
//     const { daftarKelas, setdDaftarKelas, handleFetch } = useKelas()
//     const [filter, setFilter] = useState();

//     useEffect(() => {
//         actionSetPageTitle('Lihat Rekap');
//     }, [])

//     function handleChangeAbsen() {
//         navigate('/rekap-absen')
//     }

//     function handleChangeJurnal() {
//         navigate('/rekap-jurnal')
//     }

//     function handleFilterChange(event) {
//         setFilter(event.target.value);
//     }

//     const filteredKelas = daftarKelas.filter(kelas => {
//         if (filter === '') return true;
//         return kelas.jadwal_kelas.toLowerCase().includes(filter.toLowerCase());
//     });

//     return (
//         <div className=" rekap-absen bg-white rounded-[30px] p-8 mr-[100px] ml-[350px] mt-[100px] ">
//             <div className=" flex flex-col gap-6">
//                 <div className='border-2 bg-white rounded-[10px] max-w-fit px-6 py-2'>
//                     <FontAwesomeIcon icon={faFilter} className='opacity-30' />
//                     <select onChange={handleFilterChange} className="ml-2 border-none outline-none">
//                         <option value="" >All</option>
//                         <option value="pagi">Pagi</option>
//                         <option value="siang">Siang</option>
//                         <option value="sore">Sore</option>
//                         <option value="malam">Malam</option>
//                     </select>
//                 </div>
//                 <div className="flex flex-wrap gap-x-2 gap-y-4">
//                     {filteredKelas.length > 0 ? (
//                         filteredKelas.map(kelas => (
//                             <KelasItem
//                                 key={kelas.id}
//                                 id={kelas.id}
//                                 nama_kelas={kelas.nama_kelas}
//                                 kategori={kelas.kategori}
//                                 periode={kelas.periode}
//                                 jadwal_kelas={kelas.jadwal_kelas}
//                                 navigateTo={'absen'}
//                             />
//                         ))
//                     ) : (
//                         <p>belum ada kelas</p>
//                     )}
//                     {/* {daftarKelas.length > 0 ? (
//                         daftarKelas.map(kelas => (
//                             <KelasItem
//                                 key={kelas.id}
//                                 id={kelas.id}
//                                 nama_kelas={kelas.nama_kelas}
//                                 kategori={kelas.kategori}
//                                 periode={kelas.periode}
//                                 jadwal_kelas={kelas.jadwal_kelas}
//                                 navigateTo={'absen'}
//                             />
//                         ))
//                     ) : (
//                         <p>belum ada kelas</p>
//                     )} */}
//                     {/* <KelasItem navigateTo={'absen'} /> */}

//                 </div>
//             </div>
//         </div>

//     );
// };
// export default Rekap;