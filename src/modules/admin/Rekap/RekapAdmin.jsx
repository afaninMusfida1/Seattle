import { useEffect, useState } from "react";
import { useJurnal } from "../../gurug/crud-jurnal/JurnalProvider";
import { useLayout } from "../../layout/LayoutContext";
import Button from "../../siswa/Button";
import RekapItem from "./RekapItem";
import { useParams } from "react-router-dom";
import { useRekap } from "./RekapProvider";

const RekapAdmin = () => {
    const { actionSetPageTitle } = useLayout();
    const { jurnalList, handleGetJurnalByKelas } = useRekap();
    const { kelas_id } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        actionSetPageTitle('Rekap Admin');
        if (kelas_id) {
            setIsLoading(true);
            handleGetJurnalByKelas(kelas_id)
                .then(() => setIsLoading(false))
                .catch(() => setIsLoading(false));
        }
    }, [kelas_id]);

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
                                    <td colSpan={5} className="text-center border-2">Belum ada jurnal</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px] p-8">
                <div className="font-medium text-xl text-sky-500 opacity-60 mb-4">
                    Presensi
                </div>
            </div>
        </>
    );
}

export default RekapAdmin;
