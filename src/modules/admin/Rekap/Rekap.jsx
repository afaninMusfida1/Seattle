import { useNavigate, Outlet } from 'react-router-dom';
import React, { useState } from 'react';

const Rekap = () => {
    const navigate = useNavigate();
    const [showRekapAbsen, setShowRekapAbsen] = useState(false);
    const [showRekapJurnal, setShowRekapJurnal] = useState(false);

    const rekapAbsen = () => {
        setShowRekapAbsen(true); 
    }
    if (showRekapAbsen) {
        navigate('/app/rekap/rekap-absen');
    }

    const rekapJurnal = ()=> {
        setShowRekapJurnal(true);
    }
    if (showRekapJurnal) {
        navigate('/app/rekap/rekap-jurnal');
    }

    return (
        <div>
            <div className="bg-white w-[940px] h-[400px] rounded-[10px] ml-[300px] mt-20 p-8 ">
                <div>
                    <h2 className="font-poppins font-20 font-bold text-[#078DCC]">Rekap Absen</h2>
                </div>
                <div className="mt-[20px]">
                    <button onClick={rekapAbsen} className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas B</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas C</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                </div>
                <div className="mt-[10px]">
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas B</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas C</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                </div>
                <div className="mt-[10px]">
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas B</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas C</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                </div>
            </div>

            <div className="bg-white w-[940px] h-[400px] rounded-[10px] ml-[300px] mt-[50px] p-8 ">
                <div>
                    <h2 className="font-poppins font-20 font-bold text-[#078DCC]">Rekap Jurnal</h2>
                </div>
                <div className="mt-[20px]">
                    <button onClick={rekapJurnal} className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas B</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas C</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                </div>
                <div className="mt-[10px]">
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas B</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas C</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                </div>
                <div className="mt-[10px]">
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas A</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas B</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                    <button className="bg-white font-poppins text-[16px] text-left border-2 py-2 pr-[140px] ml-[20px] pl-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                        <h1 className="font-bold text-[#6A6D76]">Kelas C</h1>
                        <p className="text-[#6A6D76] mt-[10px]">English beginner</p>
                    </button>
                </div>
            </div>

            <Outlet />
        </div>


    )
}
export default Rekap;