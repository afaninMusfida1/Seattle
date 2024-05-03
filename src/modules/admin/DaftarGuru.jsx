import { useNavigate } from "react-router-dom";
import GuruItem from "../gurug/GuruItem";

const DaftarGuru = () => {

    const navigate = useNavigate();

    function handleChange(){
        navigate('/tambah-guru')
    }

    return(
        <div className="bg-white w-[940px] h-[400px] rounded-[10px] ml-[300px] mt-28 p-8">
            <div className="flex">
            <h2 className="font-poppins font-20 font-bold text-[#078DCC]">Daftar Guru</h2>
            <div className="ml-[400px]">
                <select className="border mr-[15px] rounded-[10px] px-4 py-2 outline-none text-[#6A6D76] w-[180px] h-[40px]">
                    <option value="" >Pilih Kelas</option>
                    <option value="option1">Kelas B</option>
                    <option value="option2">Kelas C</option>
                </select>
                <select className="border rounded-[10px] px-4 py-2 outline-none text-[#6A6D76] w-[180px] h-[40px]">
                    <option value="" >Semua Kelas</option>
                    <option value="option1">English Intermediate</option>
                    <option value="option2">English Expert</option>
                </select>
            </div>
            </div>
            <GuruItem/>
            <button onClick={handleChange} className="text-[#078DCC] text-[14px] ml-[750px] hover:underline ">Tambahkan Guru</button>
        </div>
    )
}

export default DaftarGuru;