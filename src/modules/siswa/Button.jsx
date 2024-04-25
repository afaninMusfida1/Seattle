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
            <div className="flex ml-[90px] pt-[30px]">
                <button onClick={handleChangeJadKel} className="size-[60px] w-[385px] rounded-[10px] bg-gradient-to-r from-[#8970C8] ">
                    <p className="ml-[-300px] text-[#FBFBFB] font-poppins">Jadwal</p></button>
                <button onClick={handleChangeRekAb} className="size-[60px] w-[385px] rounded-[10px] bg-gradient-to-r from-[#DA9053] ml-[90px] ">
                    <p className="ml-[-250px] text-[#FBFBFB] font-poppins">Rekap Absen</p></button>
                <button onClick={handleChangeRekJur} className="size-[60px] w-[385px] rounded-[10px] bg-gradient-to-r from-[#1679A8] ml-[90px]">
                    <p className="ml-[-250px] text-[#FBFBFB] font-poppins">Rekap Jadwal</p></button>
            </div>
        </div>
    )
}

export default Button;