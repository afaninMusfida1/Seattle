import React from "react";
import { useNavigate } from "react-router-dom";

const KelasItem = ({ navigateTo, title, subtitle }) => {
    const navigate = useNavigate();

    function handleChange() {
        navigate(navigateTo);
    }

    return (
        <button onClick={handleChange} className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
            <h1 className="font-bold text-[#6A6D76]">{title}</h1>
            <h1 className="text-[#6A6D76] mt-[10px]">{subtitle}</h1>
        </button>
    );
};

export default KelasItem;
