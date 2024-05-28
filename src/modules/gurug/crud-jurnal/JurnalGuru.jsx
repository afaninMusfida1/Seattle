import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import KelasItem from '../../admin/crud-kelas/KelasItem';
import { useLayout } from '../../layout/LayoutContext';
import GuruLayout from '../../layout/GuruLayout';
import { useJurnal } from './JurnalProvider';
import { useKelas } from '../../admin/crud-kelas/KelasProvider';
import KelasGrouping from '../../admin/crud-kelas/KelasGrouping';


const JurnalGuru = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const { daftarKelas, setDaftarKelas, location, setLocation } = useKelas()

    const { jurnalList, handleFetch } = useJurnal()

    useEffect(() => {
        handleFetch()
        actionSetPageTitle('Jurnal');
    }, []);


    function handleChangeAbsen() {
        navigate('/isi-jurnal');
    }

    const groupedKelas = daftarKelas.length == 0 ? [] :
        Object.groupBy(daftarKelas, ({ kategori }) => kategori)

    console.log(groupedKelas)

    return (

        <div className="mt-[50px]">

            {
                Object.entries(groupedKelas).map(
                    (value, key) =>
                        <KelasGrouping key={key} location={location} kategori={value[0]} />)
            }

            {/* <div className="rekap-absen bg-white rounded-[30px] p-8">
                <div className="kategori text-sky-400 font-bold text-lg mb-[20px] bg-sky-100 max-w-fit py-1 px-5 rounded-md">English Starters</div>
                <div className="flex flex-wrap gap-x-2 gap-y-4">
                    <button onClick={handleChangeAbsen} className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <h1 className='font-bold text-xl'>Pre Starters</h1>
                    
                        {daftarKelas.length > 0 ? (
                            daftarKelas.map(kelas => (
                                <KelasItem
                                    key={kelas.id}
                                    id={kelas.id}
                                    nama_kelas={kelas.nama_kelas}
                                    kategori={kelas.kategori}
                                    periode={kelas.periode}
                                    jadwal_kelas={kelas.jadwal_kelas}
                                    navigateTo={'/guru-isi-jurnal'}
                                />
                            ))
                        ) : (
                            <p>belum ada kelas</p>
                        )}
                </div>
            </div> */}
        </div>

    );
};

export default JurnalGuru;
