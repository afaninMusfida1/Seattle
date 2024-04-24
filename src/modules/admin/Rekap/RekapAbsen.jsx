const RekapAbsen = () => {

    return(
        <div className="bg-white w-[940px] h-[400px] rounded-[10px] ml-[300px] mt-28 flex p-8 mb-10">
            <h2 className="font-poppins text-20 font-bold text-[#078DCC]">Rekap absen</h2>
            <div className="ml-[570px]">
                <select className="border w-[160px] h-[40px] px-6 py-2 rounded outline-none text-[#6A6D76]">
                    <option value="">Kelas A</option>
                    <option value="option1">Kelas B</option>
                    <option value="option2">Kelas C</option>
                </select>
            </div>
        </div>
    )
}
export default RekapAbsen;