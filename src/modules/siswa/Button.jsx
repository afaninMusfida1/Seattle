import { Navigate, useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();

    function handleChangeJadKel(){
        navigate('/jadwal-kelas')
    }

    function handleChangeRekAb(){
        navigate('/rekap-absen')
    }

    function handleChangeRekJur(){
        navigate('/rekap-jadwal')
    }

    return (
        <div>
            <div className="flex gap-6 py-[20px]">
                <button onClick={handleChangeJadKel} className="grow py-[20px] rounded-[10px] bg-[#8970C8] font-poppins text-left text-white px-[20px]">Jadwal</button>
                <button onClick={handleChangeRekAb} className="grow py-[20px] rounded-[10px] bg-[#DA9053] font-poppins text-left text-white px-[20px]">Rekap</button>
                
            </div>
        </div>
    )
}

export default Button;