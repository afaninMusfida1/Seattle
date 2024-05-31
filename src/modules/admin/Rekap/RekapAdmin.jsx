import { useEffect } from "react";
import { useJurnal } from "../../gurug/crud-jurnal/JurnalProvider";
import { useLayout } from "../../layout/LayoutContext";
import Button from "../../siswa/Button";
import RekapItem from "./RekapItem";
import { useParams } from "react-router-dom";
import { apiGetJurnalByKelas } from "../../gurug/crud-jurnal/requestsJurnal";


const RekapAbsen = () => {
    const { actionSetPageTitle } = useLayout();
    const { jurnalList, handleFetchJurnal } = useJurnal();

    useEffect(() => {
        actionSetPageTitle('Lihat Rekap Jurnal ')
        handleFetchJurnal()
    }, [])



    return (
        <>
            <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px]  p-8 ">
                <div className="font-medium text-xl text-sky-500 opacity-60 mb-4">
                    Jurnal
                </div>
                <table aria-rowspan={1} className="text-center table-auto w-full  ">
                    <thead className="h-[60px]  rounded-xl text-white bg-[#078DCC]">
                        <tr>
                            <th className="">Tanggal</th >
                            <th>Kelas</th>
                            <th>Pengajar</th>
                            <th>Materi</th>
    
                        </tr>
                    </thead>
                    <tbody className="max-h-[300px] ">
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
                                <td colSpan={4} className="text-center border-2">Belum ada jurnal</td>
                            </tr>
                        )}
                        {/* <RekapItem /> */}
                    </tbody>
                </table>
            </div>
            <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px]  p-8">
                <div className="font-medium text-xl text-sky-500 opacity-60 mb-4">
                    Presensi
                </div>
            </div>
        </>
    )
}
export default RekapAbsen;
