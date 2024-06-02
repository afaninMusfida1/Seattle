import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const HalamanSiswa = () => {
    const { announcements, fetchAnnouncement, doLogoutSiswa } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchAnnouncement(); // Fetch announcements when the component mounts
    }, []);

    const handleClick = () => {
        doLogoutSiswa();
        navigate('/siswa/ortu');
    };

    const latestAnnouncement = announcements && announcements.length > 0 ? announcements[0] : null;

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="logo absolute pt-6 pl-20">
                <img className="w-auto h-14" src="src/assets/logo - Copy.png" alt="Logo" />
            </div>
            <div className="flex items-center space-x-4 mt-8 ml-auto mr-8">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-white text-xl">A</span>
                </div>
                <div className="text-right flex items-center space-x-2">
                    <div className="text-gray-600">Ana Ismatul Hawa</div>
                    <button className="px-10 text-[#078DCC]" onClick={handleClick}>
                        <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#078dcc" }} className="px-4" />
                        Log Out
                    </button>
                </div>
            </div>
            <div className="pt-20 flex-col max-w-4xl mx-auto">
                <div className="bg-[#06357A] size-[240px] rounded-[30px] w-full flex justify-between p-10 items-end">
                    <div>
                        <h1 className="font-poppins text-[#FBFBFB] pt-10 text-4xl font-semibold">
                            {latestAnnouncement ? latestAnnouncement.title : 'Loading...'}
                        </h1>
                        <p className="font-poppins text-[#FFFFFF] text-lg pt-2">
                            {latestAnnouncement ? latestAnnouncement.content : 'Loading...'}
                        </p>
                    </div>
                </div>
                <div className="flex gap-12 py-10">
                    <button className="grow py-5 rounded-[10px] bg-[#F0A160] font-poppins font-semibold text-left text-white px-10">
                        Rekap Absen
                    </button>
                    <button className="grow py-5 rounded-[10px] bg-[#078DCC] font-poppins font-semibold text-left text-white px-10">
                        Rekap Jurnal
                    </button>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 mb-10 max-w-xl font-sans">
                    <div className="text-left">
                        <div className="text-sm text-gray-500">Kelas yang diikuti</div>
                        <div className="text-lg font-bold text-blue-800">Nama Kelas anda</div>
                        <div className="text-sm text-gray-500 mt-2">Jadwal</div>
                        <div className="text-base text-gray-700 mt-1">
                            Senin dan Rabu, jam 16.00 - 18.00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HalamanSiswa;
