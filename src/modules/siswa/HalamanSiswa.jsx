// import { useNavigate } from "react-router";
// import Button from "./Button";

// const HalamanSiswa = () => {
//     const navigate = useNavigate()

//     function handleChangeJadwal() {
//         navigate('/siswa-jadwal')
//         console.log('pindah halaman jadwal')
//     }

//     function handleChangeRekab() {
//         navigate('/siswa-rekap')
//         console.log('pindah halaman rekab')
//     }

//     return (
//         <>
//             <div className="bg-white h-screen">
//                 <div className="logo absolute top-0 left-[0px] pt-5 pl-5"> <img className="w-26 h-16" src="src/assets/logo - Copy.png" alt="Seattle Logo" /> </div>
                // <div className="pt-[70px] flex-col max-w-fit mx-auto">
                //     <div className=" bg-[#06357A] size-[240px] rounded-[30px] w-[930px] flex justify-between p-[40px]  items-end">
                //         <div>
                //             <h1 className="font-poppins text-[#FBFBFB] pt-28 text-4xl font-semibold">Libur akhir tahun 2024</h1>
                //             <p className="drop-shadow-xl font-poppins text-[#FFFFFF] text-[14px] pt-2 font-light">liburan akhir tahun akan dimulai dari tanggal...</p>
                //         </div>
                //         <div>
                //             <p className="date text-white">dibuat 22/12/2030</p>
                //         </div>
                //     </div>
                //     <Button />
                //     <div className="flex gap-6 py-[20px]">
                //         {/* <button onClick={handleChangeJadwal} className="grow py-[20px] rounded-[10px] bg-[#8970C8] font-poppins font-semibold text-left text-white px-[20px]">Jadwal</button>
                //         <button onClick={handleChangeRekab} className="grow py-[20px] rounded-[10px] bg-[#DA9053] font-poppins font-semibold text-left text-white px-[20px]">Rekap</button> */}
                //     </div>
                //     <div className="border border-gray-200 rounded-lg p-4 max-w-xs font-sans">
                //         <div className="text-left">
                //             <div className="text-sm text-gray-500">Kelas yang diikuti</div>
                //             <div className="text-lg font-bold text-blue-800">Nama Kelas anda</div>
                //             <br></br>
                //             <div className="text-sm text-gray-500">Jadwal</div>
                //             <div className="text-base text-gray-700 mt-1">
                //                 Senin dan Rabu, jam 16.00 - 18.00
                //             </div>
                //         </div>
                //     </div>
                // </div>
//             </div>
//         </>

//     )
// }

// export default HalamanSiswa;

const HalamanSiswa = () => {
    return (
        <>
        <div className="bg-white min-h-screen flex flex-col">
            <div className="logo absolute pt-6 pl-20">
                <img className="w-auto h-14" src="src/assets/logo - Copy.png" alt="Seattle Logo"/>
            </div>
            <div className="flex items-center space-x-4 mt-8">
                <div className="w-10 h-10 ml-[1000px] rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-white text-xl">A</span>
                </div>
                <div className="text-right">
                    <div className="text-gray-600">Ana Ismatul Hawa</div>
                </div>                
            </div>
            <div className="pt-[80px] flex-col max-w-[1170px] mx-auto">
                <div className=" bg-[#06357A] size-[240px] rounded-[30px] w-[1170px] flex justify-between p-[40px]  items-end">
                    <div>
                        <h1 className="font-poppins text-[#FBFBFB] pt-28 text-4xl font-semibold">Libur akhir tahun 2024</h1>
                        <p className="drop-shadow-xl font-poppins text-[#FFFFFF] text-[14px] pt-2 font-light">liburan akhir tahun akan dimulai dari tanggal...</p>
                    </div>
                    {/* <div>
                        <p className="date text-white">dibuat 22/12/2030</p>
                    </div> */}
                </div>
                {/* <Button /> */}
                <div className="flex gap-12 py-[40px]">
                    <button className="grow py-[20px] rounded-[10px] bg-[#F0A160] font-poppins font-semibold text-left text-white px-[40px]">Rekap Absen</button>
                    <button className="grow py-[20px] rounded-[10px] bg-[#078DCC] font-poppins font-semibold text-left text-white px-[40px]">Rekap Jurnal</button>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 mb-[10px] max-w-xl font-sans">
                    <div className="text-left">
                        <div className="text-sm text-gray-500">Kelas yang diikuti</div>
                        <div className="text-lg font-bold text-blue-800">Nama Kelas anda</div>
                        <br></br>
                        <div className="text-sm text-gray-500">Jadwal</div>
                        <div className="text-base text-gray-700 mt-1">
                            Senin dan Rabu, jam 16.00 - 18.00
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default HalamanSiswa;
