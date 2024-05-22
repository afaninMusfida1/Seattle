import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import { useKelas } from "./KelasProvider";

const KelasItem = ({ navigateTo, nama_kelas, kategori, jadwal_kelas, periode, id }) => {
    const navigate = useNavigate();;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editedNama, setEditedNama] = useState(nama_kelas);
    const [editedKategori, setEditedKategori] = useState(kategori);
    const [editedPeriode, setEditedPeriode] = useState(periode);
    const [editedJadwal, setEditedJadwal] = useState(jadwal_kelas);
    const { handleDelete, handleUpdate } = useKelas(); // Add handleUpdate

    const handleChange = () => {
        navigate(navigateTo);;
        localStorage.setItem('namaKelas', nama_kelas);
        localStorage.setItem('kategori', kategori);
    };

    const handleEdit = () => {
        setIsPopupOpen(true);
    };

    const confirmDelete = (id) => {
        const konfirm = confirm("Apakah Anda Yakin Ingin Menghapusnya?");
        if (konfirm) {
            handleDelete(id);
        }
    };

    const handleEditSubmit = () => {
        const updatedData = {
            nama_kelas: editedNama,
            kategori: editedKategori,
            periode: editedPeriode,
            jadwal_kelas: editedJadwal
        };
        handleUpdate(id, updatedData);
        setIsPopupOpen(false);
    };

    return (
        <div onClick={handleChange} className="bg-white font-poppins flex justify-between text-[16px] text-left border-2 w-[270px] py-2 px-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC] cursor-pointer relative">
            <div className="absolute top-0 right-0 text-[12px] bg-green-200 text-green-600 font-medium px-2 py-1 rounded mt-2 mr-2">
                {jadwal_kelas}
            </div>
            <div className="flex flex-col w-full">
                <div>
                    <h1 className="font-bold text-[#6A6D76]">{nama_kelas}</h1>
                    <h2 className="text-[#6A6D76] mt-[10px]">{kategori}</h2>
                    <h3 className="text-[#6A6D76] opacity-70 text-[12px] mt-[10px]">{periode}</h3>
                </div>
                <div className="flex items-center mt-2">
                    <button onClick={handleEdit} className="text-[20px] mr-2">
                        <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#6a6d76" }} />
                    </button>
                    <button onClick={() => confirmDelete(id)} className="text-[20px]">
                        <FontAwesomeIcon icon={faTrashAlt} style={{ color: "#6a6d76" }} />
                    </button>
                </div>
            </div>
            <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                <div className="modal text-center bg-white max-w-fit border p-4 drop-shadow-2xlp-[40px] px-[50px] rounded-[20px] drop-shadow-2xl">
                    <h1 className="font-semibold text-2xl my-5">Edit Kelas</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleEditSubmit();
                    }}>
                        <div>
                            <input
                                type="text"
                                value={editedNama}
                                onChange={(e) => setEditedNama(e.target.value)}
                                placeholder="Nama Kelas"
                                className="bg-slate-200 rounded px-3 py-2 w-full mb-3 outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                value={editedKategori}
                                onChange={(e) => setEditedKategori(e.target.value)}
                                placeholder="Kategori"
                                className="bg-slate-200 rounded px-3 py-2 w-full mb-3 outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                value={editedPeriode}
                                onChange={(e) => setEditedPeriode(e.target.value)}
                                placeholder="Periode"
                                className="bg-slate-200 rounded px-3 py-2 w-full mb-3 outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                value={editedJadwal}
                                onChange={(e) => setEditedJadwal(e.target.value)}
                                placeholder="Jadwal"
                                className="bg-slate-200 rounded px-3 py-2 w-full mb-3 outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 text-white font-semibold rounded-[20px] px-6 py-2 hover:bg-green-600"
                        >
                            Simpan
                        </button>
                    </form>
                </div>
            </Popup>
        </div>
    );
};

export default KelasItem;
;
