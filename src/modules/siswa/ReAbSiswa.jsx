import { Link } from "react-router-dom";
import ReAbItem from "./ReAbItem";

const ReAbSiswa = () => {
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
            <div className="text-gray-600">Ana Ismatul Hawa</div>
          </div>
        </div>

        <div className="flex gap-6 py-[40px] mx-[50px]">
          <Link to="/siswa/rekap" className="grow py-[20px] rounded-[10px] bg-[#F0A160] font-poppins font-semibold text-left text-white px-[40px]">Rekap Absen</Link>
          <button className="grow py-[20px] rounded-[10px] bg-[#078DCC] font-poppins font-semibold text-left text-white px-[40px]">Rekap Jurnal</button>
        </div>

        <div className="bg-white rounded-[15px] mx-[50px] mt-[50px]">
          <p className="font-poppins font-semibold text-xl text-[#078DCC] ml-[70px] pt-[50px]">Rekap Absen</p>

          <div className="flex pt-[50px] ml-[70px] ">
            <table className="table-auto w-full ">
              <thead className="text-poppins font-medium text-black text-xl">
                <tr>
                  <th className="text-left">Tanggal</th >
                  <th className="text-left">Keterangan</th>
                </tr>

                <ReAbItem />
                <ReAbItem />
                <ReAbItem />
                <ReAbItem />
                <ReAbItem />
                <ReAbItem />
                <ReAbItem />
                <ReAbItem />
                <ReAbItem />
                <ReAbItem />
              </thead>
            </table>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ReAbSiswa;