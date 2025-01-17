import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import { useJurnal } from "../../gurug/crud-jurnal/JurnalProvider";
import Swal from 'sweetalert2'

const RekapItem = ({ id, kelas_id, nama_kelas, nama, hasil_belajar, tanggal }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editedTanggal, setEditedTanggal] = useState(tanggal);
    const [editedHasilBelajar, setEditedHasilBelajar] = useState(hasil_belajar);
    const { jurnalList, handleGetJurnalByKelas, handleDelete, handleUpdate } = useJurnal();
    // const {kelas_id} = useParams()

    const handleEdit = () => {
        setIsPopupOpen(true)
        console.log(`sedang mengedit`)
    }

    const handleEditSubmit = () => {
        handleUpdate(id, kelas_id, editedHasilBelajar)
        setIsPopupOpen(false)
    }

    // const handleConfirmDelete = () => {
    //     handleDelete()
    // }

    return (
        <>

            <tr className="border-2 text-left overflow-hidden">
                <td className="text-center text-sky-600 font-semibold">{tanggal}</td>
                <td className="text-center">{nama_kelas}</td>
                <td className="text-center font-semibold text-blue-700">{nama}</td>
                <td className="max-w-[160px] truncate cursor-pointer pl-[40px]">{hasil_belajar}</td>
                <td className="text-center">
                    {/* <button onClick={handleEdit}>
                        <FontAwesomeIcon icon={faPenToSquare} className="text-sky-500" />
                    </button> */}
                    <button onClick={() => {
                        handleDelete(id)
                        // handleGetJurnalByKelas(kelas_id)
                        Swal.fire({
                            title: 'Informasi',
                            text: 'Jurnal berhasil dihapus',
                            icon: 'info',
                            confirmButtonText: 'Lanjut'
                        });
                    }
                    }>
                        <FontAwesomeIcon icon={faTrashAlt} className="text-red-500 pl-2" />
                    </button>
                </td>
            </tr>
            <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} >
                <div className="bg-white p-[40px]  w-[25rem] text-center flex flex-col gap-10 rounded-[20px]">
                    <h1 className="font-semibold text-2xl text-[#06357A]">Edit Rekap</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleEditSubmit();
                    }}>
                        <div className="flex flex-col gap-3">
                            {/* <input
                                type="date"
                                value={editedTanggal}
                                onChange={(e) => setEditedTanggal(e.target.value)}
                                className="border-2 py-2 px-4 rounded-md outline-none "
                            /> */}
                            <textarea
                                value={editedHasilBelajar}
                                onChange={(e) => setEditedHasilBelajar(e.target.value)}
                                name="materi"
                                placeholder="Materi - chapter"
                                className="border-2 py-2 px-4 rounded-md outline-none h-[7rem] "
                                id=""></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-sky-500 text-white py-2 px-3 rounded-md">
                            Simpan
                        </button>
                    </form>
                </div >
            </Popup >
        </>
    );
};

export default RekapItem;
