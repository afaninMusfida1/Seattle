import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLayout } from "../../layout/LayoutContext";
import { useKelas } from "./KelasProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const KelasGrouping = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const { daftarKelas, setdDaftarKelas, handleFetch } = useKelas();
    const [filter, setFilter] = useState('');
    const [title, setTitle] = useState();

    useEffect(() => {
        actionSetPageTitle('Lihat Rekap');
    }, []);

    function handleChangeAbsen() {
        navigate('/rekap-absen');
    }

    function handleChangeJurnal() {
        navigate('/rekap-jurnal');
    }

    function handleFilterChange(event) {
        setFilter(event.target.value);
    }

    const filteredKelas = daftarKelas.filter(kelas => {
        if (filter === '') return true;
        return kelas.jadwal_kelas.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <>
            <div className="rekap-absen bg-white  rounded-[30px] p-8 mr-[100px] ml-[350px] mt-[40px]">
                <div className="flex flex-col gap-6 ">
                    <div className="flex justify-between">
                        <div className="kategori text-sky-400 font-bold text-lg content-center bg-sky-100 max-w-fit py-1 px-5 rounded-md">
                            {title}
                        </div>
                        <div className='border-2 bg-white rounded-[10px] max-w-fit px-6 py-2'>
                            <FontAwesomeIcon icon={faFilter} className='opacity-30' />
                            <select onChange={handleFilterChange} className="ml-2 border-none outline-none">
                                <option value="">Semua Kelas</option>
                                <option value="pagi">Pagi</option>
                                <option value="siang">Siang</option>
                                <option value="sore">Sore</option>
                                <option value="malam">Malam</option>
                            </select>
                        </div>
                    </div>
                    <div className="max-h-[350px] overflow-auto flex flex-wrap gap-x-1 gap-y-4">
                        {filteredKelas.length > 0 ? (
                            filteredKelas.map(kelas => (
                                <KelasItem
                                    // key={kelas.id}
                                    // id={kelas.id}
                                    nama_kelas={kelas.nama_kelas}
                                    kategori={kelas.kategori}
                                    periode={kelas.periode}
                                    jadwal_kelas={kelas.jadwal_kelas}
                                    navigateTo={'absen'}
                                />
                            ))
                        ) : (
                            <p>belum ada kelas</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default KelasGrouping