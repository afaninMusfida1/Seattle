import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLayout } from '../../layout/LayoutContext';
import SiswaItem from "./SiswaItem";
import { useSiswa } from "./SiswaProvider";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useKelas } from "../crud-kelas/KelasProvider";

const SiswaTerdaftar = () => {
    const { actionSetPageTitle } = useLayout();
    const navigate = useNavigate();
    const location = useLocation();
    const { siswaList, handleFetch, handleSearchKategori } = useSiswa();
    const { daftarKelas } = useKelas();

    const queryParams = new URLSearchParams(location.search);
    const initialKategori = queryParams.get('kategori') || '';
    const initialKelas = queryParams.get('kelas') || '';
    const initialNama = queryParams.get('nama') || '';

    const [searchKategori, setSearchKategori] = useState(initialKategori);
    const [searchKelas, setSearchKelas] = useState(initialKelas);
    const [searchNama, setSearchNama] = useState(initialNama);
    const [hasSearched, setHasSearched] = useState(false);
    const [isSearching, setIsSearching] = useState(false); // State untuk menandakan apakah sedang dilakukan pencarian

    useEffect(() => {
        actionSetPageTitle('Daftar Siswa');
        handleFetch();
    }, []);

    useEffect(() => {
        setSearchKategori(initialKategori);
        setSearchKelas(initialKelas);
        setSearchNama(initialNama);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (searchKategori) params.set('kategori', searchKategori);
        if (searchKelas) params.set('kelas', searchKelas);
        if (searchNama) params.set('nama', searchNama);
        navigate({ search: params.toString() });

        setHasSearched(true); // Mark that a search has been initiated
        setIsSearching(true); // Set isSearching to true when search is performed
    };

    const handleInputChange = () => {
        // Set isSearching to false when input fields are emptied
        setSearchKategori('');
        setSearchKelas('');
        setSearchNama('');
        setIsSearching(false);
    };

    const filteredSiswa = siswaList.filter((siswa) => {
        return (
            (searchKategori === '' || siswa.kategori.toLowerCase().includes(searchKategori.toLowerCase())) &&
            (searchKelas === '' || String(siswa.kelas_id) === searchKelas) &&
            (searchNama === '' || siswa.nama.toLowerCase().includes(searchNama.toLowerCase()))
        );
    });

    const handleChange = () => {
        navigate('/admin/siswa/tambah');
    };
    return (
        <>
            <div className="bg-white rounded-[30px] ml-[100px] mr-[100px] mt-[100px] p-8">
                <div className="flex justify-between items-center mb-4">
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchKategori}
                                onChange={(e) => setSearchKategori(e.target.value)}
                                placeholder="Kategori"
                                className="bg-slate-200 rounded px-3 py-2 outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 text-blue-500"
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                        <div className="relative">
                            <select
                                value={searchKelas}
                                onChange={(e) => setSearchKelas(e.target.value)}
                                className="bg-slate-200 w-[215px] rounded px-3 py-2 outline-none"
                            >
                                <option value="" hidden>Kelas</option>
                                {daftarKelas && daftarKelas.length > 0 ? (
                                    daftarKelas.map((kelas) => (
                                        <option key={kelas.id} value={kelas.id}>{kelas.nama_kelas}</option>
                                    ))
                                ) : (
                                    <option value="">Tidak ada kelas tersedia</option>
                                )}
                            </select>
                            <button
                                type="submit"
                                className="absolute right-2 top-2 text-blue-500"
                            >
                                <FontAwesomeIcon className="px-[10px]" icon={faMagnifyingGlass} />
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                value={searchNama}
                                onChange={(e) => setSearchNama(e.target.value)}
                                placeholder="Nama"
                                className="bg-slate-200 rounded px-3 py-2 outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 text-blue-500"
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </form>
                </div>
                {hasSearched && (
                    <table className="table-fixed text-center mt-[25px] w-full">
                        <thead className="text-white bg-[#078DCC] w-full">
                            <tr className="w-full">
                                <th style={{ padding: '2px 40px ' }}>Nama</th>
                                <th style={{ padding: '2px 20px ' }}>Kategori</th>
                                <th style={{ padding: '2px 40px ' }}>Kelas</th>
                                <th style={{ padding: '2px 50px ' }}>No.Telp Ortu</th>
                                <th style={{ padding: '2px 0px ' }}>Email</th>
                                <th style={{ padding: '2px 0px ' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSiswa.length > 0 ? (
                                filteredSiswa.map(siswa => (
                                    <SiswaItem
                                        key={siswa.id}
                                        id={siswa.id}
                                        nama={siswa.nama}
                                        kategori={siswa.kategori}
                                        kelas={siswa.kelas_id}
                                        no_telp_ortu={siswa.no_telp_ortu}
                                        email={siswa.email}
                                    />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">Tidak ada data siswa</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
            <button onClick={handleChange} className="text-[#078DCC] text-[20px] font-bold hover:underline absolute right-[100px] bottom-[10px]">Tambahkan Siswa</button>
        </>
    );
};

export default SiswaTerdaftar;