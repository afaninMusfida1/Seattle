import { useParams } from "react-router-dom";

const RekapItem = ({ key, kelas_id, nama_kelas, nama, hasil_belajar, tanggal }) => {


    return (
        <tr className="border-2 text-left">
            <td>{tanggal}</td>
            <td className="bg-green-200 py-1 px-2 rounded">{nama_kelas}</td>
            <td>{nama}</td>
            <td>{hasil_belajar}</td>
        </tr>
    );
};

export default RekapItem;
