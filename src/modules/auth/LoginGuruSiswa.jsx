// LoginGuruSiswa.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginGuruSiswa = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleClickGuru = () => {
    onLogin(true, false); 
    navigate('/guru');
  };

  const handleClickSiswa = () => {
    onLogin(false, true); 
    navigate('/siswa');
  };

  return (
    <>
      <div className="bg-[#FBFBFB] h-full min-h-screen">
        <div className="logo">
          <img className="mx-10 pt-5 w-30 h-20" src="src/assets/seattleLogo.png" alt="" />
        </div>
        <h1 className="text-center text-[#06357A] font-poppins font-bold text-[40px] p-5 mt-[50px] my-[25px]">Masuk sebagai</h1>
        <div className="container flex flex-col">
          <button onClick={handleClickGuru} className="bg-[#078DCC] text-center font-poppins text-[#fbfbfb] text-[20px] rounded-[16px] px-5 py-3 mt-[35px]" >Guru</button>
          <button onClick={handleClickSiswa} className="bg-[#078DCC] text-center font-poppins text-[#fbfbfb] text-[20px] rounded-[16px] px-5 py-3 mt-[35px]" >Siswa</button>
        </div>
      </div>  
    </>
  );
};

export default LoginGuruSiswa;
