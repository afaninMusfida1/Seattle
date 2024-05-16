const SiswaItem = ({ nama, kelas_id, level, no_telp_ortu, email, password }) => {
    return (
        <>
            <tr className="border-2">
                <td style={{ padding: '5px' }}>{nama}</td>
                <td style={{ padding: '5px' }}>{kelas_id}</td>
                <td style={{ padding: '5px' }}>{level}</td>
                <td style={{ padding: '5px' }}>{no_telp_ortu}</td>
                <td style={{ padding: '5px' }}>{email}</td>
                <td style={{ padding: '5px' }}>{password}</td>
            </tr>

        </>
    )
}

export default SiswaItem