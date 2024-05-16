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
                <button onClick={handleChangeJadwal} className="grow py-[20px] rounded-[10px] bg-[#8970C8] font-poppins font-semibold text-left text-white px-[20px]">Jadwal</button>
                <button onClick={handleChangeRekab} className="grow py-[20px] rounded-[10px] bg-[#DA9053] font-poppins font-semibold text-left text-white px-[20px]">Rekap</button>
            </div>
        </div>
    )
}

export default Button;