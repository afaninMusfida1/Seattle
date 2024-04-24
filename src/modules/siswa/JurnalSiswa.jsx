const JurnalSiswa = () => {
    return (
        <div>
            <div className="flex justify-center pt-[150px]">
                <button className="size-[88px] w-[420px] rounded-[10px] bg-gradient-to-r from-[#8970C8] ">
                    <p className="ml-[-300px] text-[#FBFBFB] font-poppins">Jadwal</p></button>
                <button className="size-[88px] w-[420px] rounded-[10px] bg-gradient-to-r from-[#DA9053] ml-[90px] ">
                    <p className="ml-[-250px] text-[#FBFBFB] font-poppins">Rekap Absen</p></button>
                <button className="size-[88px] w-[420px] rounded-[10px] bg-gradient-to-r from-[#1679A8] ml-[90px]">
                    <p className="ml-[-250px] text-[#FBFBFB] font-poppins">Rekap Jadwal</p></button>
            </div>

            <div className="bg-white w-[1450px] h-[550px] rounded-[15px] m-auto mt-12">
                <h2 className="font-poppins text-20 font-bold text-[#078DCC] p-10">Rekap jurnal</h2>
            </div>
        </div>


    )
}

export default JurnalSiswa;