import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import { useJurnal } from "../../gurug/crud-jurnal/JurnalProvider";
import Swal from 'sweetalert2'

const RekapItem = ({ nama_kelas, nama, hasil_belajar, tanggal }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editedTanggal, setEditedTanggal] = useState(tanggal);
    const [editedHasilBelajar, setEditedHasilBelajar] = useState(hasil_belajar);
    const { jurnalList, handleGetJurnalByKelas, handleDelete, handleUpdate } = useJurnal();
    // const {kelas_id} = useParams()


    return (
        <>
            <tr className="border-2 text-left overflow-hidden">
                <td className="text-center text-sky-600 font-semibold">{tanggal}</td>
                <td className="text-center">{nama_kelas}</td>
                <td className="text-center font-semibold text-blue-700">{nama}</td>
                <td className="max-w-[160px] truncate cursor-pointer pl-[40px]">{hasil_belajar}</td>
            </tr>
        </>
    );
};

export default RekapItem;
