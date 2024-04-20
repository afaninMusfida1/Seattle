const DaftarGuru = () => {

    return(
        <div className=" w-[940px] h-[400px] ml-[300px] mt-28 p-8 ">
            <div className="flex">
                <h2 className="text-[#078DCC] font-semibold text-[16px]">Daftar Guru</h2>
                <select className="border rounded-[10px] px-4 py-2 outline-none text-sm text-[#6A6D76] ml-[470px] w-[150px] h-[35px] mb-[15px]">
                    <option value="" >Pilih Kelas</option>
                    <option value="option1">Kelas A</option>
                    <option value="option2">Kelas B</option>
                    <option value="option2">Kelas c</option>
                </select>
                <select className="border rounded-[10px] px-4 py-2 outline-none text-sm text-[#6A6D76] ml-[15px] w-[150px] h-[35px] mb-[15px]">
                    <option value="" >Semua Kelas</option>
                    <option value="option1">Kelas A</option>
                    <option value="option2">Kelas B</option>
                    <option value="option2">Kelas c</option>
                </select>
            </div>
            <div>

            </div>

        </div>
    )
}

export default DaftarGuru;