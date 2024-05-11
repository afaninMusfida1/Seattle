function Dashboard() {
    return (
        <div className="justify-self-center mt-[100px] ml-[300px] max-w-screen max-h-screen">
            <div className="flex justify-around pt-[8px] ">
                <div className=" bg-[#078DCC] size-[220px] w-[500px] rounded-[30px]">
                    <h1 className="font-poppins text-[#FBFBFB] pt-28 text-4xl ml-7">Pengumuman</h1>
                    <p className="drop-shadow-xl font-poppins text-[#FFFFFF] text-lg pt-2 ml-7">Tidak ditemukan</p>
                </div>

                <div className=" bg-[#FFFFFF] pt-[28px] mx-10 size-[220px] w-[312px] rounded-[30px]">
                </div> 
           </div>

            <div className="flex justify-around pt-8">
                <div className=" bg-[#FFFFFF] size-80 w-[400px] h-[400px] p-[50px] rounded-[30px]"></div>
                <div className=" bg-[#FFFFFF] size-80 w-[400px] h-[400px] rounded-[30px]"></div>
            </div>

        </div>
    )
}

export default Dashboard;