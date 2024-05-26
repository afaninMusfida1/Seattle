const RekapItem = ({ kelas_id, guru_id, hasil_belajar, tanggal }) => {
    return (
        <tr className="border-2">
            <td>{tanggal}</td>
            <td><button className="bg-green-200 py-1 px-2 rounded">{kelas_id}</button></td>
            <td>{guru_id}</td>
            <td>{hasil_belajar}</td>
        </tr>
    );
};

export default RekapItem;
