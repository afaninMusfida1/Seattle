import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


const KelasItem = ({ navigateTo, nama_kelas, kategori, jadwal_kelas, periode }) => {
    const navigate = useNavigate()

    function handleChange() {
        navigate(navigateTo)
    }

    return (
        <>
            <div onClick={handleChange} className="bg-white relative font-poppins flex justify-between  text-[16px] text-left border-2 w-[270px] py-2 px-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                <div>
                    <h1 className="font-bold text-[#6A6D76]">{nama_kelas}</h1>
                    <h2 className="text-[#6A6D76] mt-[10px]">{kategori}</h2>
                    <h3 className="text-[#6A6D76] opacity-70 text-[12px] mt-[10px]">{periode}</h3>
                </div>
                <div className="">
                    <div className="text-[12px] self-end  bg-green-200 text-green-600 font-medium max-w-fit px-2 py-1 rounded ">
                        {jadwal_kelas}
                    </div>
                </div>
            </div>
        </>
    )
}

export default KelasItem