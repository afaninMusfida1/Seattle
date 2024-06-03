import { useEffect } from "react";
import { useJurnal } from "../../gurug/crud-jurnal/JurnalProvider";
import { useLayout } from "../../layout/LayoutContext";
import Button from "../../siswa/Button";
import RekapItem from "./RekapItem";
import { useParams } from "react-router-dom";
import { usePresensi } from "../../gurug/crud-presensi/PresensiProvider";
import RekapPresensiItem from "./RekapPresensiItem"

const RekapKbm = () => {
    const { actionSetPageTitle } = useLayout();
    const { jurnalList, setJurnalList, presensiList, handleFetchJurnal, handleGetJurnalByKelas, handleFetchPresensi} = useJurnal();

    const { kelas_id } = useParams();

    useEffect(() => {
        actionSetPageTitle('Rekap Jurnal dan Presensi');
        handleFetchPresensi()
        if (kelas_id) {
            handleGetJurnalByKelas(kelas_id);
            console.log(kelas_id)
        }
    }, [kelas_id]);

    return (
        <>
            <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px] p-8 relative">
                <div className="font-medium text-xl text-sky-500 opacity-60 mb-4">
                    Jurnal
                </div>
                <table aria-rowspan={1} className="text-center table-fix w-full">
                    <thead className="h-[60px] rounded-xl text-white bg-[#078DCC]">
                        <tr>
                            <th className="">Tanggal</th >
                            <th>Kelas</th>
                            <th>Pengajar</th>
                            <th className="text-left pl-[40px]">Materi</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="max-h-[300px]">
                        {jurnalList.length > 0 ? (
                            jurnalList.map(jurnal => (
                                <RekapItem
                                    key={jurnal.id}
                                    id={jurnal.id}
                                    kelas_id={jurnal.kelas_id}
                                    nama_kelas={jurnal.nama_kelas}
                                    guru_id={jurnal.guru_id}
                                    nama={jurnal.nama}
                                    hasil_belajar={jurnal.hasil_belajar}
                                    tanggal={jurnal.tanggal}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center border-2 opacity-50">Belum ada jurnal</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px] p-8 relative">
                <div className="font-medium text-xl text-sky-500 opacity-60 mb-4">
                    Absen
                </div>
                <table aria-rowspan={1} className="text-center table-fix w-full">
                    <thead className="h-[60px] rounded-xl text-white bg-[#078DCC]">
                        <tr>
                            <th className="">Tanggal</th >
                            <th>Kelas</th>
                            <th>Siswa</th>
                            <th>Keterangan</th>
                        </tr>
                    </thead>
                    <tbody className="max-h-[300px]">
                        {presensiList.length > 0 ? (
                            presensiList.map(presensi => (
                                <RekapPresensiItem
                                    key={presensi.id}
                                    id={presensi.id}
                                    nama_kelas={presensi.nama_kelas}
                                    keterangan={presensi.keterangan}
                                    nama={presensi.nama}
                                    siswa_id={presensi.siswa_id}
                                    tanggal={presensi.tanggal}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center border-2 opacity-50">Belum ada jurnal</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default RekapKbm;


// import { useEffect } from "react";
// import { useJurnal } from "../../gurug/crud-jurnal/JurnalProvider";
// import { useLayout } from "../../layout/LayoutContext";
// import Button from "../../siswa/Button";
// import RekapItem from "./RekapItem";
// import { useParams } from "react-router-dom";
// import { apiGetJurnalByKelas } from "../../gurug/crud-jurnal/requestsJurnal";


// const RekapKbm = () => {
//     const { actionSetPageTitle } = useLayout();
//     const { jurnalList, setJurnalList, handleFetchJurnal, handleDelete } = useJurnal();

//     useEffect(() => {
//         actionSetPageTitle('Rekap Jurnal dan Presensi')
//         handleFetchJurnal()
//     }, [])

//     return (
//         <>
//             <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px] p-8 relative">
//                 <div className="font-medium text-xl text-sky-500 opacity-60 mb-4">
//                     Jurnal
//                 </div>
//                 <input
//                     type='date'
//                     onChange={(e) => setTanggal(e.target.value)}
//                     className='outline-none w-[15rem] text-left py-2 rounded-md border-2 px-3'
//                     id='tanggal' />
//                 <table aria-rowspan={1} className="text-center table-fix w-full  ">
//                     <thead className="h-[60px]  rounded-xl text-white bg-[#078DCC]">
//                         <tr>
//                             <th className="">Tanggal</th >
//                             <th>Kelas</th>
//                             <th>Pengajar</th>
//                             <th className="text-left pl-[40px]">Materi</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody className="max-h-[300px] ">
//                         {jurnalList.length > 0 ? (
//                             jurnalList.map(jurnal => (
//                                 <RekapItem
//                                     key={jurnal.id}
//                                     id={jurnal.id}
//                                     kelas_id={jurnal.kelas_id}
//                                     nama_kelas={jurnal.nama_kelas}
//                                     guru_id={jurnal.guru_id}
//                                     nama={jurnal.nama}
//                                     hasil_belajar={jurnal.hasil_belajar}
//                                     tanggal={jurnal.tanggal}

//                                 />
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan={5} className="text-center border-2">Belum ada jurnal</td>
//                             </tr>
//                         )}
//                         {/* <RekapItem /> */}
//                     </tbody>
//                 </table>
//             </div>
//             <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px]  p-8">
//                 <div className="font-medium text-xl text-sky-500 opacity-60 mb-4">
//                     Presensi
//                 </div>
//             </div>
//         </>
//     )
// }
// export default RekapKbm;