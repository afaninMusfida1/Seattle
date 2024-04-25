const AbsenSiswa = () => {
    return (
        <div>
            <h2 className="font-poppins text-20 font-bold text-[#06357A] ml-[445px] mt-[50px]">Absen Siswa</h2>
            <div className="bg-white w-[940px] h-auto rounded-[10px] m-auto mt-10 p-8 ">
                <input placeholder="Nama" className="input w-[450px] h-[54px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <select  className="border rounded px-4 py-2 outline-none text-[#6A6D76] w-[450px] h-[54px] my-[20px]">
                <option value="" >Kelas</option>
                    <option value="" >A</option>
                    <option value="option1">B</option>
                    <option value="option2">C</option>
                </select>
                <select className="border rounded px-4 py-2 outline-none text-[#6A6D76] w-[450px] h-[54px] my-[20px]">
                <option value="" >Keterangan</option>
                    <option value="" >Hadir</option>
                    <option value="option1">Izin</option>
                    <option value="option2">Sakit</option>
                </select>
                <button className="w-[450px] h-[60px] mt-[130px] font-poppins text-[16px] border-2 bg-[#07CCB5] text-white rounded-[10px] outline-none ">Konfirmasi</button>
            </div>
        </div>
    )

}

export default AbsenSiswa;