import ReAbItem from "./ReAbItem";

const ReAbSiswa = () => {
  return (
    <div>
      <div className="bg-[#DCE5F1] h-full min-h-screen flex flex-col items-center pt-[150px]">
        <div className="logo absolute top-0 left-0 pt-5 pl-16">
          <img
            className="w-30 h-20"
            src="src/assets/seattleLogo.png"
            alt="Seattle Logo"
          />
          <h1 className="ml-[1340px] font-poppins text-[20px]">Galih Virgi Prambudya</h1>
        </div>

        <div className="gap-2 ">
          <button className="size-[90px] w-[750px] rounded-[10px] bg-[#F0A160] ">
            <p className="ml-[-500px] text-[#FBFBFB] text-xl font-poppins">Rekap Absen</p></button>
          <button className="size-[90px] w-[750px] rounded-[10px] bg-[#078DCC] ml-[90px] ">
            <p className="ml-[-500px] text-[#FBFBFB] text-xl font-poppins">Rekap Jurnal</p></button>
        </div>

        <div className="bg-white rounded-[15px] min-h-screen w-[1600px] mt-[50px]">
          <p className="font-poppins font-semibold text-2xl text-[#078DCC] ml-[70px] pt-[50px]">Rekap Absen</p>

          <div className="flex pt-[50px] ml-[70px] ">
            <table className="table-auto w-full ">
              <thead className="text-poppins font-medium text-black text-xl">
                <tr>
                  <th className="text-left">Tanggal</th >
                  <th className="text-left">Keterangan</th>
                </tr>

                <ReAbItem/>
                <ReAbItem/>
                <ReAbItem/>
                <ReAbItem/>
                <ReAbItem/>
                <ReAbItem/>
                <ReAbItem/>
                <ReAbItem/>
                <ReAbItem/>
                <ReAbItem/>
              </thead>
            </table>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ReAbSiswa;