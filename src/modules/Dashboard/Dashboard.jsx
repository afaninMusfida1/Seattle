import React, { useContext, useRef } from 'react';
import { useLayout } from "../layout/LayoutContext";
import { useEffect } from "react";
import Popup from 'reactjs-popup';
import '/src/index.css';
import { useGuru } from "../admin/crud-guru/GuruProvider";
import { useSiswa } from "../admin/crud-siswa/SiswaProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../../context/AuthContext';

function Dashboard() {
    const { actionSetPageTitle } = useLayout();
    const { guruList, handleFetch: fetchGuru } = useGuru();
    const { siswaList, handleFetch: fetchSiswa } = useSiswa();
    const { announcement, addAnnouncement, fetchAnnouncement } = useAuth();
    const title = useRef();
    const content = useRef();

    useEffect(() => {
        actionSetPageTitle('Dashboard');
        fetchGuru();
        fetchSiswa();
        fetchAnnouncement();
    }, []);

    const handleSubmit = () => {
        if (title.current.value === '' || content.current.value === '') {
            alert('Mohon isi keduanya');
            return;
        }
        addAnnouncement(title.current.value, content.current.value)
            .then(() => {
                console.log(announcement);
            })
            .catch(error => {
                console.error('Error adding announcement:', error);
            });
    };

    return (
        <div className="mt-[50px] ml-[100px] mr-[100px] grid gap-8">
            <div className="">
                <Popup trigger={
                    <div className="pengumuman cursor-pointer bg-[#078DCC] rounded-[30px] p-8 flex justify-between w-full overflow-hidden h-[230px]">
                        <div className="self-end">
                            <h1 className="font-poppins font-semibold text-[#FBFBFB] text-left pt-20 text-4xl">{announcement.title}</h1>
                            <h1 className="font-poppins text-[#FFFFFF] text-lg pt-3 mr-8 max-h-11 overflow-hidden text-left">{announcement.content}</h1>
                        </div>
                        <button onClick={() => alert('Isi Form')} className="bg-white opacity-50 rounded-full p-2 text-center self-end text-6xl font-bold text-slate-400">+</button>
                    </div>}
                    modal nested>
                    {close => (
                        <div className="modal text-center bg-white w-[600px] border-2 max-h-fit flex-cols p-[40px] rounded-[20px]">
                            <div className="content">
                                <h1 className="text-2xl font-semibold">Buat pengumuman</h1>
                                <form action="" className="py-[30px]">
                                    <label htmlFor="headline"></label>
                                    <input type="text" ref={title} placeholder="headline" id="headline" className="w-full outline-none border border-sky-500 rounded-lg px-3 py-3 mb-[20px]" />
                                    <label htmlFor="content"></label>
                                    <textarea type="text" ref={content} placeholder="content" id="content" className="w-full outline-none border border-sky-500 rounded-lg px-3 py-3" />
                                </form>
                            </div>
                            <div>
                                <button onClick={() => {
                                    handleSubmit();
                                    close();
                                }}
                                    className="bg-green-500 py-[10px] px-[45px] rounded-xl text-white font-semibold hover:opacity-70 transition-all">Buat
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>

            <div className="flex gap-8">
                <div className="bg-[#FFFFFF] w-full h-[250px] grid p-7 rounded-[20px]">
                    <div className="icon bg-green-400 w-[70px] h-[70px] rounded-full overflow-hidden flex items-center justify-center">
                        <FontAwesomeIcon icon={faChalkboardUser} style={{color: "#ffffff"}} className="text-[30px]" />
                    </div>
                    <div className="status flex items-end justify-between">
                        <h1 className="font-poppins font-semibold text-xl">Jumlah Guru terdaftar</h1>
                        <h1 className="font-poppins font-semibold text-6xl text-[#078DCC]">{guruList.length}</h1>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] w-full h-[250px] grid p-7 rounded-[20px]">
                    <div className="icon bg-green-400 w-[70px] h-[70px] rounded-full overflow-hidden flex items-center justify-center">
                        <FontAwesomeIcon icon={faAddressCard} style={{color: "#ffffff"}} className="text-[30px]" />
                    </div>
                    <div className="status flex items-end justify-between">
                        <h1 className="font-poppins font-semibold text-xl">Jumlah Siswa terdaftar</h1>
                        <h1 className="font-poppins font-semibold text-6xl text-[#078DCC]">{siswaList.length}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
