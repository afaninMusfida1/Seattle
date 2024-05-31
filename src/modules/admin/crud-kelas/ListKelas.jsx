// import { useNavigate, Outlet } from 'react-router-dom';
// import React, { useEffect, useState, useMemo } from 'react';
// import { useLayout } from '../../layout/LayoutContext';
// import KelasItem from '../crud-kelas/KelasItem';
// import { useKelas } from '../crud-kelas/KelasProvider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilter } from '@fortawesome/free-solid-svg-icons';
// import KelasGrouping from '../crud-kelas/KelasGrouping';
// import ClassItem from './ClassItem';

// const ListKelas = () => {
//     const navigate = useNavigate();
//     const { actionSetPageTitle } = useLayout();
//     const { daftarKelas, setdDaftarKelas, handleFetch } = useKelas();
//     const [filter, setFilter] = useState('');
//     const [title, setTitle] = useState();

//     useEffect(() => {
//         actionSetPageTitle('Lihat Rekap');
//         handleFetch();
//     }, [actionSetPageTitle, handleFetch]);

//     // function handleChangeAbsen() {
//     //     navigate('/rekap-absen');
//     // }

//     // function handleChangeJurnal() {
//     //     navigate('/rekap-jurnal');
//     // }

//     const handleChange = () => {
//         navigate('/admin/tambah-kelas');
//     };

//     function handleFilterChange(event) {
//         setFilter(event.target.value);
//     }

//     // const filteredKelas = daftarKelas.filter(kelas => {
//     //     if (filter === '') return true;
//     //     return kelas.jadwal_kelas.toLowerCase().includes(filter.toLowerCase());
//     // });

//     const groupedKelas = daftarKelas.length == 0 ? [] :
//         Object.groupBy(daftarKelas, ({ kategori }) => kategori)


//     return (
//         <>
//             {/* <div>
//                 <div className="rekap-absen bg-white  rounded-[30px] p-8 mr-[100px] ml-[100px] mt-[50px]">
//                     <div className="flex flex-col gap-6 ">
//                         <div className="flex justify-between">
//                             <div className="kategori text-sky-400 font-bold text-lg content-center bg-sky-100 max-w-fit py-1 px-5 rounded-md">English Starters</div>
//                             <div className='border-2 bg-white rounded-[10px] max-w-fit px-6 py-2'>
//                                 <FontAwesomeIcon icon={faFilter} className='opacity-30' />
//                                 <select onChange={handleFilterChange} className="ml-2 border-none outline-none">
//                                     <option value="">Semua Kelas</option>
//                                     <option value="pagi">Pagi</option>
//                                     <option value="siang">Siang</option>
//                                     <option value="sore">Sore</option>
//                                     <option value="malam">Malam</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="max-h-[350px] overflow-auto flex flex-wrap gap-x-1 gap-y-4">
//                             {filteredKelas.length > 0 ? (
//                                 filteredKelas.map(kelas => (
//                                     <ClassItem
//                                         key={kelas.id}
//                                         id={kelas.id}
//                                         nama_kelas={kelas.nama_kelas}
//                                         kategori={kelas.kategori}
//                                         periode={kelas.periode}
//                                         jadwal_kelas={kelas.jadwal_kelas}
//                                         // navigateTo={'absen'}
//                                     />
//                                 ))
//                             ) : (
//                                 <p>belum ada kelas</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="rekap-absen bg-white  rounded-[30px] p-8 mr-[100px] ml-[100px] mt-[40px]">
//                     <div className="flex flex-col gap-6 ">
//                         <div className="flex justify-between">
//                             <div className="kategori text-sky-400 font-bold text-lg content-center bg-sky-100 max-w-fit py-1 px-5 rounded-md">English For Kids</div>
//                             <div className='border-2 bg-white rounded-[10px] max-w-fit px-6 py-2'>
//                                 <FontAwesomeIcon icon={faFilter} className='opacity-30' />
//                                 <select onChange={handleFilterChange} className="ml-2 border-none outline-none">
//                                     <option value="">Semua Kelas</option>
//                                     <option value="pagi">Pagi</option>
//                                     <option value="siang">Siang</option>
//                                     <option value="sore">Sore</option>
//                                     <option value="malam">Malam</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="max-h-[350px] overflow-auto flex flex-wrap gap-x-1 gap-y-4">
//                             {filteredKelas.length > 0 ? (
//                                 filteredKelas.map(kelas => (
//                                     <ClassItem
//                                         key={kelas.id}
//                                         id={kelas.id}
//                                         nama_kelas={kelas.nama_kelas}
//                                         kategori={kelas.kategori}
//                                         periode={kelas.periode}
//                                         jadwal_kelas={kelas.jadwal_kelas}
//                                         // navigateTo={'absen'}
//                                     />
//                                 ))
//                             ) : (
//                                 <p>belum ada kelas</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="rekap-absen bg-white  rounded-[30px] p-8 mr-[100px] ml-[100px] mt-[40px]">
//                     <div className="flex flex-col gap-6 ">
//                         <div className="flex justify-between">
//                             <div className="kategori text-sky-400 font-bold text-lg content-center bg-sky-100 max-w-fit py-1 px-5 rounded-md">General English</div>
//                             <div className='border-2 bg-white rounded-[10px] max-w-fit px-6 py-2'>
//                                 <FontAwesomeIcon icon={faFilter} className='opacity-30' />
//                                 <select onChange={handleFilterChange} className="ml-2 border-none outline-none">
//                                     <option value="">Semua Kelas</option>
//                                     <option value="pagi">Pagi</option>
//                                     <option value="siang">Siang</option>
//                                     <option value="sore">Sore</option>
//                                     <option value="malam">Malam</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="max-h-[350px] overflow-auto flex flex-wrap gap-x-1 gap-y-4">
//                             {filteredKelas.length > 0 ? (
//                                 filteredKelas.map(kelas => (
//                                     <ClassItem
//                                         key={kelas.id}
//                                         id={kelas.id}
//                                         nama_kelas={kelas.nama_kelas}
//                                         kategori={kelas.kategori}
//                                         periode={kelas.periode}
//                                         jadwal_kelas={kelas.jadwal_kelas}
//                                         // navigateTo={'absen'}
//                                     />
//                                 ))
//                             ) : (
//                                 <p>belum ada kelas</p>
//                             )}
//                         </div>
//                     </div>
                    
//                 </div> */}

//             {
//                 Object.entries(groupedKelas).map(
//                     (value, key) =>
//                         <KelasGrouping key={key} location={location} kategori={value[0]} />)
//             }
//             <button onClick={handleChange} className="fixed bottom-[50px] right-[100px] text-[#078DCC] text-[20px] font-bold hover:underline">
//                 Tambahkan Kelas
//             </button>
//             {/* </div> */}

//         </>
//     );
// };

// export default ListKelas;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../layout/LayoutContext';
import { useKelas } from '../crud-kelas/KelasProvider';
import ClassItem from './ClassItem';

const ListKelas = () => {
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
                                    <ClassItem
                                        key={kelas.id}
                                        id={kelas.id}
                                        nama_kelas={kelas.nama_kelas}
                                        kategori={kelas.kategori}
                                        periode={kelas.periode}
                                        jadwal_kelas={kelas.jadwal_kelas}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            ))}
            <button onClick={handleChange} className="fixed bottom-[50px] right-[100px] text-[#078DCC] text-[20px] font-bold hover:underline">
                Tambahkan Kelas
            </button>
        </div>
    );
};

export default ListKelas;