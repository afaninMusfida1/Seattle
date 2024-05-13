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
            <div className="flex ml-[300px] pt-[30px]">
                <button onClick={handleChangeJadKel} className="size-[60px] w-[300px] rounded-[10px] bg-gradient-to-r from-[#8970C8] font-poppins text-left text-white pl-[20px]">Jadwal</button>
                <button onClick={handleChangeRekAb} className="size-[60px] w-[300px] rounded-[10px] bg-gradient-to-r from-[#DA9053] font-poppins text-left text-white pl-[20px] mx-[15px]">Rekap Absen</button>
                <button onClick={handleChangeRekJur} className="size-[60px] w-[300px] rounded-[10px] bg-gradient-to-r from-[#1679A8]  font-poppins text-left text-white pl-[20px]">Rekap Jadwal</button>
            </div>
        </div>
    )
}

export default Button;