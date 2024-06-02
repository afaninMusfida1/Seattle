import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLayout } from "../../layout/LayoutContext";
import RekapItemAdmin from "./RekapItemAdmin";
import { useRekap } from "./RekapProvider";
import { apiGetSiswaByIdKelas } from "../../gurug/crud-presensi/requestPresensi";

const RekapAdmin = () => {
    const { actionSetPageTitle } = useLayout();
    const { jurnalList, handleGetJurnalByKelas, handleFetchJurnal } = useRekap();
    const { kelas_id } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        actionSetPageTitle('Rekap Admin');
        if (kelas_id) {
            handleGetJurnalByKelas(kelas_id);
            console.log(kelas_id)
        }
    }, [kelas_id]);

    // useEffect(() => {

    //     console.log('kelas_id from useParams:', kelas_id);  // Tambahkan log ini untuk memastikan `kelas_id` diambil dengan benar
    //     if (kelas_id) {
    //         setIsLoading(true);
    //         handleGetJurnalByKelas(kelas_id)
    //             .then(() => setIsLoading(false))
    //             .catch(() => setIsLoading(false));
    //     }
    // }, [kelas_id]);

    return (
        <>
            <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px] p-8 relative">
                <div className="font-medium text-xl text-sky-500 opacity-60 mb-4">
                    Jurnal
                </div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <table aria-rowspan={1} className="text-center table-fix w-full">
                        <thead className="h-[60px] rounded-xl text-white bg-[#078DCC]">
                            <tr>
                                <th className="">Tanggal</th >
                                <th>Kelas</th>
                                <th>Pengajar</th>
                                <th className="text-left pl-[40px]">Materi</th>
                            </tr>
                        </thead>
                        <tbody className="max-h-[300px]">
                            {jurnalList.length > 0 ? (
                                jurnalList.map(jurnal => (
                                    <RekapItemAdmin
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
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}

export default RekapAdmin;
