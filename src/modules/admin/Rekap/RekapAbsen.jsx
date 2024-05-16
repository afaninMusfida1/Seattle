import { useEffect } from "react";
import { useLayout } from "../../layout/LayoutContext";
import Button from "../../siswa/Button";
import RekapItem from "./RekapItem";


const RekapAbsen = () => {
    const { actionSetPageTitle } = useLayout()

    useEffect(() => {
        actionSetPageTitle('Lihat Rekap')
    }, [])

    return (
        <>
            <div className="bg-white rounded-[30px] ml-[350px] mt-[100px] mr-[100px]  p-8 ">
                <table aria-rowspan={2} class="table-fixed w-full text-left overflow-hidden ">
                    <thead className="h-[60px] rounded-xl text-white bg-[#06357A]">
                        <tr>
                            <th>Tanggal</th>
                            <th>Kehadiran</th>
                            <th>Pengajar</th>
                            <th>Chapter</th>
                            <th>Materi</th>
                        </tr>
                    </thead>
                    <tbody  className=" ">
                        <tr  className="border-2">
                            <td>22/05/2024</td>
                            <td>15 siswa</td>
                            <td>Dewi Setya</td>
                            <td>2</td>
                            <td className="">english conversation</td>
                        </tr>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
                        <RekapItem/>
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
export default RekapAbsen;