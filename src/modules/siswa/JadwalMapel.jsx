import React from 'react';

const JadwalMapel = () => {
    return (
        <div>
            <div className="flex mx-[50px] mt-[100px]">
                <button className="size-[60px] w-[385px] rounded-[10px] bg-gradient-to-r from-[#8970C8] ">
                    <p className="ml-[-230px] text-[#FBFBFB] font-poppins">Jadwal</p></button>
                <button className="size-[60px] w-[385px] rounded-[10px] bg-gradient-to-r from-[#DA9053] ml-[90px] ">
                    <p className="ml-[-200px] text-[#FBFBFB] font-poppins">Rekap Absen</p></button>
                <button className="size-[60px] w-[385px] rounded-[10px] bg-gradient-to-r from-[#1679A8] ml-[90px]">
                    <p className="ml-[-200px] text-[#FBFBFB] font-poppins">Rekap Jadwal</p></button>
            </div>

        <div className="mt-[50px] m-[50px] rounded-[30px] p-4 bg-white shadow-md">
            <h2 className="text-xl mt-[15px] font-bold mb-[5px] ml-[25px] text-[#078DCC]">Jadwal Kursus Seattle</h2>
            <table className="table-fixed text-center m-[25px]">
                <thead>
                    <tr>
                        <th style={{ border: '2px solid #A7B9D2', padding: '5px 140px ', color:'#3F3F3F' }}>Materi</th>
                        <th style={{ border: '2px solid #A7B9D2', padding: '5px 200px ', color:'#3F3F3F'  }}>Hari</th>
                        <th style={{ border: '2px solid #A7B9D1', padding: '5px 140px ', color:'#3F3F3F'  }}>Waktu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '2px solid #A7B9D2', padding: '15px' }}>English Beginner</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '15px' }}>Senin, Rabu, Jumat</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '15px' }}>08.00 - 10.00</td>
                    </tr>
                    <tr>
                        <td style={{ border: '2px solid #A7B9D2', padding: '15px' }}>English Master</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '15px' }}>Selasa, Kamis, Sabtu</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '15px' }}>18.30 - 20.30</td>
                    </tr>
                    <tr>
                        <td style={{ border: '2px solid #A7B9D2', padding: '15px' }}>English Expert</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '15px' }}>Senin, Rabu, Jumat</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '15px' }}>18.30 - 20.30</td>
                    </tr>
                </tbody>
            </table>

        </div>
        </div>
    );
};

export default JadwalMapel;
