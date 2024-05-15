import { useNavigate } from "react-router";
import Button from "./Button";

const HalamanSiswa = () => {
    const navigate = useNavigate()

    function handleChangeJadwal(){
        navigate('/siswa-jadwal')
        console.log('pindah halaman jadwal')
    }

    function handleChangeRekab(){
        navigate('/siswa-rekap')
        console.log('pindah halaman rekab')
    }


    return (
        <>
            <div className="bg-white h-screen">
                <div className="pt-[50px] flex-col max-w-fit mx-auto">
                    <div className=" bg-[#06357A] size-[270px] rounded-[30px] w-[930px] flex justify-between px-[40px] py-[40px] items-end">
                        <div>
                            <h1 className="font-poppins text-[#FBFBFB] pt-28 text-4xl font-semibold">Libur akhir tahun 2024</h1>
                            <p className="drop-shadow-xl font-poppins text-[#FFFFFF] text-lg pt-2">liburan akhir tahun akan dimulai dari tanggal...</p>
                        </div>
                        <div>
                            <p className="date text-white">dibuat 22/12/2030</p>
                        </div>
                    </div>
                    <Button />
                    <div className="flex gap-6 py-[20px]">
                        <button onClick={handleChangeJadwal} className="grow py-[20px] rounded-[10px] bg-[#8970C8] font-poppins font-semibold text-left text-white px-[20px]">Jadwal</button>
                        <button onClick={handleChangeRekab} className="grow py-[20px] rounded-[10px] bg-[#DA9053] font-poppins font-semibold text-left text-white px-[20px]">Rekap</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HalamanSiswa;