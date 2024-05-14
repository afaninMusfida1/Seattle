import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const GuruItem = ({ name, no_telp, no_telp_ortu, email, password }) => {
  return (
    <div className="flex mt-[5px]">
      <div className="flex flex-col mt-[20px] w-[180px] h-[220px] bg-[#FBFBFB] rounded-lg shadow-xl items-center space-y-1 py-3 relative">
        <div className="flex flex-col w-16 h-16 relative overflow-hidden rounded-full mt-[15px]">
          <img src="/path/to/your/imgGuru.jpg" alt={name} className="w-full h-full rounded-full shadow-md"/> 
        </div>
        <div className="no_telp">{no_telp}</div>
        <div className="no_telp">{no_telp_ortu}</div>
        <div className="no_telp">{email}</div>
        <div className="no_telp">{password}</div>
        <div className="pt-[10px] text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2> 
          <button className="bg-[#078DCC] text-white px-8 py-[3px] rounded-[15px] mt-[10px]">Teacher</button>
        </div>
        <button className='absolute top-2 left-3 text-[20px]'>
          <FontAwesomeIcon icon={faPenToSquare} style={{color: "#6a6d76"}} />
        </button> 
        <button className='absolute top-2 right-3 text-[20px]'>
          <FontAwesomeIcon icon={faTrashAlt} style={{color: "#6a6d76"}} />
        </button> 
      </div>
    </div>
  );
};

export default GuruItem;
