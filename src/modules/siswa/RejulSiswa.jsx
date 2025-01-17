// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RejulItem from "./RejulIten";

const RejulSiswa = () => {
    const username = localStorage.getItem('namaSiswa')

    return (

        <div>
        <div className="bg-gray min-h-screen flex flex-col">
          <div className="logo absolute pt-6 pl-20">
            <img className="w-auto h-14" src="/src/assets/logo - Copy.png" alt="Seattle Logo" />
          </div>
          <div className="flex items-center space-x-4 mt-8 ml-auto mr-8">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-white text-xl">A</span>
            </div>
            <div className="text-right flex items-center space-x-2">
              <div className="text-gray-600">{username}</div>
            </div>
          </div>
  
          <div className="flex gap-6 py-[40px] mx-[50px]">
            <Link to="/siswa/rekap" className="grow py-[20px] rounded-[10px] bg-[#F0A160] font-poppins font-semibold text-left text-white px-[40px]">Rekap Absen</Link>
            <Link to="/siswa/jurnal" className="grow py-[20px] rounded-[10px] bg-[#078DCC] font-poppins font-semibold text-left text-white px-[40px]">Rekap Jurnal</Link>
          </div>
  
          <div className="bg-white rounded-[15px] mx-[50px] pb-20 mt-[50px]">
            <p className="font-poppins font-semibold text-xl text-[#078DCC] ml-[70px] pt-[50px]">Rekap Absen</p>
  
            <div className="flex pt-[50px] ml-[70px] ">
              <table className="table-auto w-full ">
                <thead className="text-poppins font-medium text-black text-xl">
                  <tr>
                    <th className="text-left">Tanggal</th >
                    <th className="text-left">Pengajar</th>
                    <th className="text-left">Materi</th>
                  </tr>
                </thead>
                <tbody>
                    <RejulItem/>
                </tbody>
              </table>
            </div>
          </div>
  
  
        </div>
      </div>
        // <div className="">
        //     <div className="flex logo absolute top-0 right-20 pt-5">
        //         <img className="mx-5 w-auto h-[46px]" src="src/assets/logo - Copy.png" alt="" />
        //         <div className="flex items-center space-x-4 mt-">
        //             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
        //                 {/* Ganti dengan elemen gambar profil pengguna jika ada */}
        //                 <span className="text-black text-xl">G</span>
        //             </div>
        //             <div className="text-right">
        //                 <div className="text-black-600">{username}</div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="flex align-center gap-6 mx-[54px] w-full pt-[100px] ">
        //             <Link to="/siswa/rekap" className="grow py-[20px] rounded-[10px] bg-[#F0A160] font-poppins font-semibold text-left text-white px-[40px]">Rekap Absen</Link>
        //             <Link to="/siswa/jurnal" className="grow py-[20px] rounded-[10px] bg-[#078DCC] font-poppins font-semibold text-left text-white px-[40px]">Rekap Jurnal</Link>
        //     </div>

        //     <div className="bg-white rounded-[15px] h-[400px] w-[1300px] mx-[34px] mt-[20px]">
        //         <p className="font-poppins font-semibold text-xl text-[#078DCC] ml-[70px] pt-[40px]">Rekap Jurnal</p>
        //         <div className="item-container ml-[54px] flex justify-between w-full px-4 py-4">
        //             <table className="text-center table-fixed w-full ">
        //                 <thead className="h-[60px]">
        //                     <tr className="">
        //                         <th className="text-left">Tanggal</th >
        //                         <th className="text-left">Pengajar</th>
        //                         <th className="text-left">Materi</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     <RejulItem />
        //                     <RejulItem />
        //                     <RejulItem />
        //                 </tbody>


        //             </table>
        //         </div>
        //     </div>
        // </div>
    );
};

export default RejulSiswa;
