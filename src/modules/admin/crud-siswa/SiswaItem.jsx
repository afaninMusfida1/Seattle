import { useEffect, useState } from "react";
import { useKelas } from "../crud-kelas/KelasProvider";
import { useSiswa } from "./SiswaProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";

const SiswaItem = ({ id, nama, kategori, nama_kelas, no_telp_ortu, email, password, kelas_id }) => {
    const { handleDelete, handleUpdate } = useSiswa();
    const { daftarKelas, getNamaKelas } = useKelas();
    const [editedNama, setEditedNama] = useState(nama);
    // const [editedKategori, setEditedKategori] = useState(kategori);
    const [editedKelasId, setEditedKelasId] = useState(kelas_id);
    const [editedNoTelpOrtu, setEditedNoTelpOrtu] = useState(no_telp_ortu);
    const [editedEmail, setEditedEmail] = useState(email);
    const [editedPassword, setEditedPassword] = useState(password);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const confirmDelete = () => {
        const konfirm = confirm("Apakah Anda Yakin Ingin Menghapusnya?");
        if (konfirm) {
            handleDelete(id);
        }
    };

    useEffect(() => {
        setEditedPassword(password);
    }, []);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedDataSiswa = {
            nama: editedNama,
            // kategori: editedKategori,
            kelas_id: editedKelasId,
            no_telp_ortu: editedNoTelpOrtu,
            email: editedEmail,
            password: editedPassword
        };
        handleUpdate(id, updatedDataSiswa);
        setIsPopupOpen(false);
    };

    return (
        <>
            <tr className="border-2">
                <td style={{ padding: '5px' }}>{nama}</td>
                <td style={{ padding: '5px' }}>{kategori}</td>
                <td style={{ padding: '5px' }}>{nama_kelas}</td>
                <td style={{ padding: '5px' }}>{no_telp_ortu}</td>
                <td style={{ padding: '5px' }}>{email}</td>
                <td style={{ padding: '8px' }}>
                    <button className='px-8' onClick={() => setIsPopupOpen(true)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button className='' onClick={confirmDelete}><FontAwesomeIcon icon={faTrash} /></button>
                </td>
            </tr>

            <Popup
                open={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                modal
                nested
            >
                <div className="modal text-center bg-white max-w-fit border p-[40px] px-[50px] rounded-[20px] drop-shadow-2xl">
                    <div className="content grid gap-10">
                        <h1 className="font-semibold text-2xl">Edit</h1>
                        <form >
                            <div>
                                <label htmlFor="nama">Nama:</label>
                                <input
                                    id="nama"
                                    type="text"
                                    value={editedNama}
                                    onChange={(e) => setEditedNama(e.target.value)}
                                    className="bg-gray-200 rounded px-3 py-2 outline-none w-full"
                                />
                            </div>
                            {/* <div>
                                <label htmlFor="kategori">Kategori:</label>
                                <select
                                    id="kategori"
                                    value={editedKategori}
                                    onChange={(e) => setEditedKategori(e.target.value)}
                                    className="bg-gray-200 rounded px-3 py-2 outline-none w-full"
                                >
                                    <option value="" hidden>Pilih Kategori</option>
                                    {daftarKelas.map((kelas) => (
                                        <option key={kelas.kategori} value={kelas.kategori}>{kelas.kategori}</option>
                                    ))}
                                </select>
                            </div> */}
                            <div>
                                <label htmlFor="kelas">Kelas:</label>
                                <select
                                    id="kelas"
                                    value={editedKelasId}
                                    onChange={(e) => setEditedKelasId(e.target.value)}
                                    className="bg-gray-200 rounded px-3 py-2 outline-none w-full"
                                >
                                    <option value="" hidden>Pilih Kelas</option>
                                    {daftarKelas.length > 0 ? (
                                        daftarKelas.map((kelas) => (
                                            <option key={kelas.nama_kelas} value={kelas.id}>{kelas.nama_kelas}</option>
                                        ))
                                    ) : (
                                        <option value="">Tidak ada kelas tersedia</option>
                                    )}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="no_telp_ortu">No. Telp Ortu:</label>
                                <input
                                    id="no_telp_ortu"
                                    type="text"
                                    value={editedNoTelpOrtu}
                                    onChange={(e) => setEditedNoTelpOrtu(e.target.value)}
                                    className="bg-gray-200 rounded px-3 py-2 outline-none w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    id="email"
                                    value={editedEmail}
                                    onChange={(e) => setEditedEmail(e.target.value)}
                                    className="bg-gray-200 rounded px-3 py-2 outline-none w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input
                                    id="password"
                                    value={editedPassword}
                                    onChange={(e) => setEditedPassword(e.target.value)}
                                    className="bg-gray-200 rounded px-3 py-2 outline-none w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <button type="submit" onClick={handleEditSubmit} className="bg-blue-500 text-white rounded px-4 py-2">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default SiswaItem;