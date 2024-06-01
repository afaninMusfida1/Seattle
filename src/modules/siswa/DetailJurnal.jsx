
import React from "react";

const DetailJurnal = (icon) => {
  return (

    <div>
      <div className="logo absolute top-0 left-0 pt-5">
        <img className="pl-20 mx-5 w-auto h-[70px]" src="src/assets/logo - Copy.png" alt="" />
      </div>
      <div className="flex items-center space-x-4 mt-8">
                <div className="w-10 h-10 ml-[1000px] rounded-full bg-white flex items-center justify-center">
                    {/* Ganti dengan elemen gambar profil pengguna jika ada */}
                    <span className="text-gray-600 text-xl">A</span>
                </div>
                <div className="text-right">
                    <div className="text-gray-600">Ana Ismatul Hawa</div> 
                </div>                
            </div>
      <div className="detail-absen bg-white rounded-[30px] p-8 mr-[100px] ml-[100px] mt-[100px]">
        <div className="text-2xl font-medium mb-6">
          Detail Jurnal
        </div>
        <label className="font-bold" htmlFor="tanggal">Tanggal :</label>
        <div className="my-2 tanggal  max-w-fit" id="tanggal">
          22-20-2024
        </div>
        <label className="font-bold" htmlFor="kelas">Kelas :</label>
        <div id="kelas" className="my-2 max-w-fit">
          Level 2 - A English Beginner
        </div>
        <label className="font-bold" htmlFor="materi">Materi :</label>
        <div id="materi" className="my-2 max-w-fit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam commodi,
          eligendi similique architecto explicabo nostrum corporis est minus unde ea sequi,
          consequatur velit sint quae quisquam atque deserunt cupiditate!
        </div>
      </div>
    </div>
  );
}

export default DetailJurnal;
