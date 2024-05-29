const JurnalAbsen = () => {

    return (
        <div className="bg-white w-[940px] h-[400px] rounded-[10px] ml-[100px] mt-28 p-8 mb-10">
            <div className=" flex justify-between">
                <h2 className="font-poppins text-20 font-bold text-[#078DCC]">Rekap absen</h2>
                <h2 className="font-poppins text-20 font-bold text-[#078DCC]">Kelas A</h2>
            </div>


            <div className="pt-[50px]">
                <div className="flex justify-around pb-[10px]">
                    <h1 className="font-bold text-[#000000]">Nama</h1>
                    <h1 className="font-bold text-[#000000]">L/P</h1>
                    <h1 className="font-bold text-[#000000]">Kelas</h1>
                    <h1 className="font-bold text-[#000000]">Keterangan</h1>
                </div>
                <div className="h-[250px] font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                    <p></p>
                </div>
            </div>
        </div>
    )
}
export default JurnalAbsen;