import React, { useState } from 'react';
import { useSiswa } from './SiswaProvider';
import Popup from 'reactjs-popup';
import { useKelas } from '../crud-kelas/KelasProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const SiswaItem = ({ id, nama, kategori, kelas, no_telp_ortu, email }) => {
    const { handleDelete, handleUpdate } = useSiswa();
    const { daftarKelas } = useKelas();
    const [editedNama, setEditedNama] = useState(nama);
    const [editedKategori, setEditedKategori] = useState(kategori);
    const [editedKelas, setEditedKelas] = useState(kelas);
    const [editedNoTelpOrtu, setEditedNoTelpOrtu] = useState(no_telp_ortu);
    const [editedEmail, setEditedEmail] = useState(email);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    const confirmDelete = () => {
        const konfirm = confirm("Apakah Anda Yakin Ingin Menghapusnya?");
        if (konfirm) {
            handleDelete(id);
        }
    };

    const getNamaKelas = (kelasId) => {
        if (!daftarKelas || !Array.isArray(daftarKelas)) {
            return 'Daftar kelas tidak tersedia';
        }
        const kelasData = daftarKelas.find(k => k.id === kelasId);
        return kelasData ? kelasData.nama_kelas : 'Tidak ada kelas';
    };

    
    
    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedDataSiswa = {
            nama: editedNama,
            kategori: editedKategori,
            kelas_id: editedKelas, 
            no_telp_ortu: editedNoTelpOrtu,
            email: editedEmail
        };
        handleUpdate(id, updatedDataSiswa);
        setIsPopupOpen(false);
    };


    return (
        <>
            <tr className="border-2">
                <td style={{ padding: '5px' }}>{nama}</td>
                <td style={{ padding: '5px' }}>{kategori}</td>
                <td style={{ padding: '5px' }}>{getNamaKelas(kelas)}</td>
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
                        <form onSubmit={handleEditSubmit}>
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
                            <div>
                                <label htmlFor="kategori">Kategori:</label>
                                <input
                                    id="kategori"
                                    type="text"
                                    value={editedKategori}
                                    onChange={(e) => setEditedKategori(e.target.value)}
                                    className="bg-gray-200 rounded px-3 py-2 outline-none w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="kelas">Kelas:</label>
                                <select
                                    id="kelas"
                                    value={editedKelas}
                                    onChange={(e) => setEditedKelas(e.target.value)}
                                    className="bg-gray-200 rounded px-3 py-2 outline-none w-full"
                                >
                                    <option value="" hidden>Pilih Kelas</option>
                                    {daftarKelas && daftarKelas.length > 0 ? (
                                        daftarKelas.map((kelas) => (
                                            <option key={kelas.id} value={kelas.id}>{kelas.nama_kelas}</option>
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
                                    // type="email"
                                    value={editedEmail}
                                    onChange={(e) => setEditedEmail(e.target.value)}
                                    className="bg-gray-200 rounded px-3 py-2 outline-none w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default SiswaItem;
