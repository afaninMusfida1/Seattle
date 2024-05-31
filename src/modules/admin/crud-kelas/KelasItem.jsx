import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
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
        <>
            <div onClick={handleChange} className="cursor-pointer bg-white relative font-poppins flex justify-between  text-[16px] text-left border-2 w-[270px] py-2 px-[15px] rounded-[10px] hover:bg-[#DCE5F1] hover:border-[#078DCC]">
                <div>
                    <h1 className="font-bold text-[#6A6D76]">{nama_kelas}</h1>
                    <h2 className="text-[#6A6D76] mt-[10px]">{kategori}</h2>
                    <h3 className="text-[#6A6D76] opacity-70 text-[12px] mt-[10px]">{periode}</h3>
                </div>
                <div className="absolute top-0 right-0 text-[12px] bg-green-200 text-green-600 font-medium px-2 py-1 rounded mt-2 mr-2">
                    {jadwal_kelas}
                </div>
            </div>
        </>
    );
};

export default KelasItem;

