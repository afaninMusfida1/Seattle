import Navbar from "../layout/Navbar";
import Button from "./Button";

const HalamanSiswa = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-[100px] flex-col max-w-fit mx-auto">
                <div className=" bg-[#06357A] size-[220px] rounded-[30px] w-[930px]">
                    <h1 className="font-poppins text-[#FBFBFB] pt-28 text-4xl ml-7">Libur akhir tahun 2024</h1>
                    <p className="drop-shadow-xl font-poppins text-[#FFFFFF] text-lg pt-2 ml-7">liburan akhir tahun akan dimulai dari tanggal...</p>
                </div>
                <Button />
            </div>
        </div>
    )
}

export default HalamanSiswa;