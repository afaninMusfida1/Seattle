const RekapItem = ({ date, pengajar, materi }) => {
    return (
        <tr className="border-2">
            <td>{date}</td>
            <td><button className="bg-green-200 py-1 px-2 rounded">15 siswa</button></td>
            <td>{pengajar}</td>
            <td>{materi}</td>
        </tr>
    );
};

export default RekapItem;
