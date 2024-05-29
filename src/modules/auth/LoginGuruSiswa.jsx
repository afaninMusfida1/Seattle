import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginGuruSiswa = () => {
  const navigate = useNavigate();

  const handleClickGuru = () => {
    navigate('/guru');
  };

  const handleClickSiswa = () => {
    navigate('/siswa');
  };

  return (
    <>
      <div className="bg-[#FBFBFB] w-screen h-screen">
        <div className="logo">
          <img className="mx-10 pt-5 w-auto h-20" src="src/assets/logo - Copy.png" alt="" />
        </div>
        <h1 className="text-center text-[#06357A] font-poppins font-bold md:text-[40px] text-[20px] p-5 mt-[50px] my-[25px]">Masuk sebagai</h1>
        <div className=" flex-col max-w-fit mx-auto">
          <button onClick={handleClickGuru} className="bg-[#078DCC] text-center block w-full px-[180px] my-6 font-poppins text-[#fbfbfb] md:text-[20px] text-[16px] rounded-[16px] py-3" >Guru</button>
          <button onClick={handleClickSiswa} className="bg-[#078DCC] text-center block w-full px-[180px] my-6 font-poppins text-[#fbfbfb] md:text-[20px] text-[16px] rounded-[16px] py-3" >Siswa</button>
        </div>
      </div>
    </>
  );
};

export default LoginGuruSiswa;
