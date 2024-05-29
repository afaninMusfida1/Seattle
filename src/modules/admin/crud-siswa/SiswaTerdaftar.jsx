import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLayout } from '../../layout/LayoutContext';
import SiswaItem from "./SiswaItem";
import { useSiswa } from "./SiswaProvider";
import { useKelas } from "../crud-kelas/KelasProvider";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SiswaTerdaftar = () => {
    const { actionSetPageTitle } = useLayout();
    const navigate = useNavigate();
    const { siswaList, handleFetch, searchSiswa } = useSiswa();
    const { daftarKelas } = useKelas();

    const [searchKategori, setSearchKategori] = useState('');
    const [searchKelas, setSearchKelas] = useState('');
    const [searchNama, setSearchNama] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [groupedKelas, setGroupedKelas] = useState({});

    useEffect(() => {
        actionSetPageTitle('Daftar Siswa');
        handleFetch();
    }, []);

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

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchKategori, searchKelas, searchNama);
        searchSiswa(searchKategori, searchKelas, searchNama).then(data => {
            console.log("Search results:", data);
        });
        setHasSearched(true);
        setIsSearching(true);

        setSearchKategori('');
        setSearchKelas('');
        setSearchNama('');
        setIsSearching(false);
    };

    const handleChange = () => {
        navigate('/admin/siswa/tambah');
    };

    return (
        <>
            <div className="bg-white rounded-[30px] ml-[100px] mr-[100px] mt-[50px] p-8">
                <div className="flex justify-between items-center mb-4">
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <div className="relative">
                            <select
                                value={searchKategori}
                                onChange={(e) => setSearchKategori(e.target.value)}
                                className="bg-slate-200 rounded px-3 py-2 outline-none w-[215px]"
                            >
                                <option value="" hidden>Kategori</option>
                                {groupedKelas && Object.entries(groupedKelas).map(([kategori]) => (
                                    <option key={kategori} value={kategori}>{kategori}</option>
                                ))}
                                {!groupedKelas && <option value="">Tidak ada kategori tersedia</option>}
                            </select>
                            <button
                                type="submit"
                                className="absolute right-2 top-2 text-blue-500"
                            >
                                <FontAwesomeIcon className="px-[10px]" icon={faMagnifyingGlass} />
                            </button>
                        </div>

                        <div className="relative">
                            <select
                                value={searchKelas}
                                onChange={(e) => setSearchKelas(e.target.value)}
                                className="bg-slate-200 w-[215px] rounded px-3 py-2 outline-none"
                            >
                                <option value="" hidden>Kelas</option>
                                {daftarKelas.length > 0 ? (
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
                            {siswaList.length > 0 ? (
                                siswaList.map(siswa => (
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
