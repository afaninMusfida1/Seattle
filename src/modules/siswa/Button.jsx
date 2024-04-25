const Button = () => {
    return (
        <div>
            <div className="flex ml-[90px] pt-[30px]">
                <button className="size-[60px] w-[385px] rounded-[10px] bg-gradient-to-r from-[#8970C8] to-[#AB97DD] ">
                    <p className="ml-[-300px] text-[#FBFBFB] font-poppins">Jadwal</p></button>
                <button className="size-[60px] w-[385px] rounded-[10px] bg-gradient-to-r from-[#DA9053] to-[#F0A160] ml-[90px] ">
                    <p className="ml-[-250px] text-[#FBFBFB] font-poppins">Rekap Absen</p></button>
                <button className="size-[60px] w-[385px] rounded-[10px] bg-gradient-to-r from-[#1679A8] to-git [#078DCC] ml-[90px]">
                    <p className="ml-[-250px] text-[#FBFBFB] font-poppins">Rekap Jadwal</p></button>
            </div>
        </div>
    )
}

export default Button;