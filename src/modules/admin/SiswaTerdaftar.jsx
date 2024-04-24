const SiswaTerdaftar = () => {
    return (
        <div className="bg-white w-[1000px] h-[400px] rounded-[10px] ml-[300px] mt-28 flex p-8">
            <h2 className="font-poppins font-20 font-bold text-[#078DCC]">Daftar Siswa</h2>
            <div className="ml-[450px] ">
                <select className="border mr-[28px]  rounded px-4 py-2 outline-none text-[#6A6D76] w-[180px] h-[40px] mb-[15px]">
                    <option value="" >Kelas A</option>
                    <option value="option1">Kelas B</option>
                    <option value="option2">Kelas C</option>
                </select>
                <select className="border rounded px-4 py-2 outline-none text-[#6A6D76] w-[180px] h-[40px] mb-[15px]">
                    <option value="" >English Beginner</option>
                    <option value="option1">English Intermediate</option>
                    <option value="option2">English Expert</option>
                </select>
            </div>
        </div>
    )
}

export default SiswaTerdaftar;