import { useEffect } from "react";
import { useJurnal } from "../../gurug/crud-jurnal/JurnalProvider";
import { useLayout } from "../../layout/LayoutContext";
import Button from "../../siswa/Button";
import RekapItem from "./RekapItem";


const RekapKbm = () => {
    const { actionSetPageTitle } = useLayout()
    const { jurnalList, setJurnalList, handleFetch, handleDelete } = useJurnal()

    useEffect(() => {
        actionSetPageTitle('Lihat Rekap')
        handleFetch();
    }, [])

    return (
        <>
            <div className="bg-white rounded-[30px] ml-[100px] mt-[100px] mr-[100px]  p-8 ">
                <div>

                </div>
                <table aria-rowspan={2} className="text-center table-fixed w-full overflow-hidden ">
                    <thead className="h-[60px]  rounded-xl text-white bg-[#078DCC]">
                        <tr>
                            <th className="">Tanggal</th >
                            <th>Kehadiran</th>
                            <th>Pengajar</th>
                            <th>Materi</th>
                        </tr>
                    </thead>
                    <tbody className="max-h-[300px] ">
                        {jurnalList.length > 0 ? (
                            jurnalList.map(jurnal => {
                                <RekapItem
                                    key={jurnal.id}
                                    id={jurnal.id}
                                    kelas_id={jurnal.kelas_id}
                                    guru_id={jurnal.guru_id}
                                    hasil_belajar={jurnal.hasil_belajar}
                                    tanggal={jurnal.tanggal}

                                />
                            })
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center border-2">Belum ada jurnal</td>
                            </tr>
                        )}
                        <RekapItem />
                    </tbody>
                </table>
                {/* <div className="header w-full flex justify-between rounded-lg py-3 px-9 text-white bg-[#06357A]">
                    <div>Tanggal</div>
                    <div>Kehadiran</div>
                    <div>Pengajar</div>
                    <div>Chapter</div>
                    <div>Materi</div>
                </div>
                <div className="rekap-item items-center mt-[20px] w-full flex  rounded-lg py-3 px-9 border-2">
                    <div className="font-semibold bg-red-300 w-[590px]">2/05/2024</div>
                    <div className="bg-green-300 ml-[10px] w-[800px]">16</div>
                    <div className="bg-purple-300 ml-[10px] w-[700px]">Namaaaaa Pengajar</div>
                    <div className="bg-red-300 ml-[10px] w-[400px]">1</div>
                    <div className="overflow-clip">Belajar konversasi dasar bahasa inggris inggrisinggrisinggrisinggrisinggris</div>
                </div>
                <div className="rekap-item items-center mt-[20px] w-full grid grid-rows-1 grid-flow-col rounded-lg py-3 px-9 border-2">
                    <div className="font-semibold">22/05/2024</div>
                    <div>16</div>
                    <div>Diana</div>
                    <div>1</div>
                    <div className="">basic conversation</div>
                </div> */}
            </div>
        </>
    )
}
export default RekapKbm;