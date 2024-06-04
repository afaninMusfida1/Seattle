import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useHalamanSiswa } from "./HalamanSiswaProvider";

const HalamanSiswa = () => {
    const { doLogoutSiswa, announcements, fetchAnnouncement } = useAuth();
    const { fetchKelasBySiswaId, siswaList } = useHalamanSiswa();
    const navigate = useNavigate();
    const username = localStorage.getItem('namaSiswa')

    useEffect(() => {
        fetchAnnouncement();
        // Replace `1` with the actual siswaId you need to fetch
        fetchKelasBySiswaId(1);
    }, []);

    useEffect(() => {
        console.log("siswaList:", siswaList);  // Logging to see the structure of siswaList
        if (siswaList && siswaList.length > 0) {
            setStudentName(siswaList[0].nama_siswa);
        }
    }, []);

    const handleClick = () => {
        doLogoutSiswa();
        navigate('/siswa/ortu');
        localStorage.removeItem('namaSiswa')
        console.log("logout");
    };

 

    const latestAnnouncement = announcements && announcements.length > 0 ? announcements[0] : null;

    return (
        <>
            <div className="bg-white min-h-screen flex flex-col">
                <div className="logo absolute pt-6 pl-20">
                    <img className="w-auto h-14" src="/src/assets/logo - Copy.png" alt="Seattle Logo" />
                </div>
                <div className="flex items-center space-x-4 mt-8 ml-auto mr-8">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-white text-xl">A</span>
                    </div>
                    <div className="text-right flex items-center space-x-2">
                        <div className="text-gray-600">{username}</div>
                        <div className="logout" onClick={handleClick}>
                            <button className="px-10 text-[#078DCC]">
                                <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#078dcc" }} className="px-4" />
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-[80px] flex-col max-w-[1170px] mx-auto">
                    <div className=" bg-[#06357A] size-[240px] rounded-[30px] w-[1170px] flex justify-between p-[40px]  items-end">
                        <div>
                            <h1 className="font-poppins text-[#FBFBFB] pt-10 text-4xl font-semibold">
                                {latestAnnouncement ? latestAnnouncement.title : 'Loading...'}
                            </h1>
                            <p className="font-poppins text-[#FFFFFF] text-lg pt-2">
                                {latestAnnouncement ? latestAnnouncement.content : 'Loading...'}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-12 py-[40px]">
                    <Link to="/siswa/rekap" className="grow py-[20px] rounded-[10px] bg-[#F0A160] font-poppins font-semibold text-left text-white px-[40px]">Rekap Absen</Link>
                        <Link to="/siswa/jurnal" className="grow py-[20px] rounded-[10px] bg-[#078DCC] font-poppins font-semibold text-left text-white px-[40px]">Rekap Jurnal</Link>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 mb-[10px] max-w-xl font-sans">
                        <div className="text-left">
                            <div className="text-sm text-gray-500">Kelas yang diikuti</div>
                            <div className="text-lg font-bold text-blue-800">{siswaList ? siswaList.nama_kelas : 'Loading...'}</div>
                            <br></br>
                            <div className="text-sm text-gray-500">Jadwal</div>
                            <div className="text-base text-gray-700 mt-1">
                                {siswaList ? siswaList.jadwal_kelas : 'Loading...'}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default HalamanSiswa;
