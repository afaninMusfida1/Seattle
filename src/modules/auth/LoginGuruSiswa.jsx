import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginGuruSiswa = () => {
  const navigate = useNavigate();

  const handleClickGuru = () => {
    navigate('/guru');
  };

  const handleClickSiswa = () => {
    navigate('/login-ortu-siswa');
  };

  return (
    <>
      <div className="bg-[#FBFBFB] w-screen h-screen flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 mt-5 ml-5">
          <img className="w-auto h-[70px]" src="src/assets/logo - Copy.png" alt="" />
        </div>
        <h1 className="text-center text-[#06357A] font-poppins font-bold text-2xl md:text-5xl p-5">Masuk sebagai</h1>
        <div className="flex flex-col items-center">
          <button onClick={handleClickGuru} className="bg-[#078DCC] text-center w-full md:w-96 px-[120px] py-3 my-6 font-poppins text-[#fbfbfb] text-lg md:text-xl rounded-[16px] mb-[5px]">Guru</button>
          <button onClick={handleClickSiswa} className="bg-[#078DCC] text-center w-full md:w-96 px-[120px] py-3 my-6 font-poppins text-[#fbfbfb] text-lg md:text-xl rounded-[16px]">Siswa</button>
        </div>
      </div>
    </>
  );
};

export default LoginGuruSiswa;
