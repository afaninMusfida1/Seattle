// import React, { useEffect } from "react";

import RejulItem from "./RejulIten";

const RejulSiswa = () => {

    return (
        <div className="">
            <div className="flex logo absolute top-0 left-0 pt-5">
                <img className="mx-5 w-auto h-[46px]" src="src/assets/logo - Copy.png" alt="" />
                <div className="flex items-center space-x-4 mt-">
                    <div className="w-10 h-10 ml-[900px] rounded-full bg-white flex items-center justify-center">
                        {/* Ganti dengan elemen gambar profil pengguna jika ada */}
                        <span className="text-black text-xl">G</span>
                    </div>
                    <div className="text-right">
                        <div className="text-black-600">Galih Virgi Pramudya</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pt-[100px] mr-[80px]">
                <button className="flex items-center justify-center h-[60px] w-[500px] rounded-[10px] bg-[#DA9053] ml-[90px]">
                    <p className="text-[#FBFBFB] font-poppins">Rekap Absen</p>
                </button>
                <button className="flex items-center justify-center h-[60px] w-[500px] rounded-[10px] bg-[#1679A8] ml-[90px]">
                    <p className="text-[#FBFBFB] font-poppins">Rekap Jurnal</p>
                </button>
            </div>

            <div className="bg-white rounded-[15px] h-[400px] w-[1300px] ml-[34px] mt-[20px]">
                <p className="font-poppins font-semibold text-xl text-[#078DCC] ml-[70px] pt-[40px]">Rekap Jurnal</p>
                <div className="item-container ml-[54px] flex justify-between w-full px-4 py-4">
                    <table className="text-center table-fixed w-full ">
                        <thead className="h-[60px]">
                            <tr className="">
                                <th className="text-left">Tanggal</th >
                                <th className="text-left">Pengajar</th>
                                <th className="text-left">Materi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RejulItem />
                            <RejulItem />
                            <RejulItem />
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default RejulSiswa;
