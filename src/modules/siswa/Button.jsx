import { Navigate, useNavigate } from "react-router-dom";
import JadwalMapel from "./JadwalMapel";
import RekapSiswa from './RekapSiswa';

const Button = () => {
    const navigate = useNavigate();

    function handleChangeJadwal(){
        navigate('/siswa-jadwal')
    }

    function handleChangeRekab(){
        navigate('/siswa-rekap')
    }

    return (
        <div>
            <div className="flex gap-6 py-[20px]">
                <button onClick={handleChangeJadwal} className="grow py-[20px] rounded-[10px] bg-[#F0A160] font-poppins font-semibold text-left text-white px-[30px]">Rekap Absen</button>
                <button onClick={handleChangeRekab} className="grow py-[20px] rounded-[10px] bg-[#078DCC] font-poppins font-semibold text-left text-white px-[30px]">Rekap Jurnal</button>
            </div>
        </div>
    )
}

export default Button;