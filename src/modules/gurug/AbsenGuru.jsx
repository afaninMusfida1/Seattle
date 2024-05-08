const AbsenGuru = () => {
    return (
        <div>
            <h2 className="font-poppins text-20 font-bold text-[#078DCC] ml-[300px] mt-[50px]">Absen Guru</h2>
            <div className="bg-white w-[940px] h-auto rounded-[10px] ml-[300px] mt-10 p-8 ">
                <input placeholder="Nama" className="input my-[20px] w-[450px] h-[54px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <input placeholder="Password" className="input my-[20px] w-[450px] h-[54px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <input placeholder="Email" className="input my-[20px] w-[450px] h-[54px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
                <select className="border rounded my-[20px] px-4 py-2 outline-none text-[#6A6D76] w-[450px] h-[54px] mb-[15px]">
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

export default AbsenGuru;