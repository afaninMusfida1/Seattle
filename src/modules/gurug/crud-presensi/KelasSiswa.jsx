import { useEffect } from "react";
import { useLayout } from "../../layout/LayoutContext";
import KelasItem from "../../admin/crud-kelas/KelasItem";
import { useNavigate } from "react-router";
import PresensiSiswa from "./PresensiSiswa";
import { useKelas } from "../../admin/crud-kelas/KelasProvider";
import KelasGrouping from "../../admin/crud-kelas/KelasGrouping";

const AbsenSiswa = () => {
    const { actionSetPageTitle } = useLayout();
    const navigate = useNavigate();
    const { daftarKelas, location, setLocation } = useKelas()

    useEffect(() => {
        actionSetPageTitle('Presensi Siswa')

        console.log('selamat datang guru di presensi siswa')
        console.log(daftarKelas)
        console.log(location)
    }, []);

    const handleChangeKelas = () => {
        navigate('/guru-presensi-siswa')
    };

    setLocation('/guru-presensi-siswa')

    return (
        <>
        <div className="mt-[100px]">
                <KelasGrouping location={location}/>
                <KelasGrouping location={location}/>
                <KelasGrouping location={location}/>
            </div>
        </>
        // <div>
        //     <div className="bg-white rounded-[30px] ml-[350px] mr-[100px] mt-[100px] p-8 flex flex-wrap gap-x-2 gap-y-4">
        //         <KelasGrouping/>
        //         {daftarKelas.length > 0 ? (
        //             daftarKelas.map(kelas => (
        //                 <KelasItem
        //                     key={kelas.id}
        //                     id={kelas.id}
        //                     nama_kelas={kelas.nama_kelas}
        //                     kategori={kelas.kategori}
        //                     periode={kelas.periode}
        //                     jadwal_kelas={kelas.jadwal_kelas}
        //                     navigateTo={'guru-presensi-siswa'}
        //                 />
        //             ))
        //         ) : (
        //             <p>belum ada kelas</p>
        //         )}
        //     </div>
        // </div>
    )

}

export default AbsenSiswa;