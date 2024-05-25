import React, { useState } from 'react';
import { useSiswa } from './SiswaProvider';
import Popup from 'reactjs-popup';
import { useKelas } from '../crud-kelas/KelasProvider';

const SiswaItem = ({ id, nama, kelas, level, no_telp_ortu, email, password }) => {
  const { handleDelete, handleUpdate } = useSiswa();
  const { daftarKelas } = useKelas();
  const [editedNama, setEditedNama] = useState(nama);
  const [editedPassword, setEditedPassword] = useState(password);
  const [editedKelas, setEditedKelas] = useState(kelas);
  const [editedLevel, setEditedLevel] = useState(level);
  const [editedNoTelpOrtu, setEditedNoTelpOrtu] = useState(no_telp_ortu);
  const [editedEmail, setEditedEmail] = useState(email);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const confirmDelete = () => {
    const konfirm = window.confirm("Apakah Anda Yakin Ingin Menghapusnya?");
    if (konfirm) {
      handleDelete(id);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleUpdate(id, { nama: editedNama, email: editedEmail, password: editedPassword, kelas: editedKelas, level: editedLevel, no_telp_ortu: editedNoTelpOrtu });
    setIsPopupOpen(false);
  };

  return (
    <>
      <tr className="border-2">
        <td style={{ padding: '5px' }}>{nama}</td>
        <td style={{ padding: '5px' }}>{kelas}</td>
        <td style={{ padding: '5px' }}>{level}</td>
        <td style={{ padding: '5px' }}>{no_telp_ortu}</td>
        <td style={{ padding: '5px' }}>{email}</td>
        <td style={{ padding: '8px' }}>
          <button className='bg-green-600 text-white' onClick={() => setIsPopupOpen(true)}>Edit</button>
          <button className='bg-red-600 text-white' onClick={confirmDelete}>Hapus</button>
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
                <input type="text"
                  value={editedNama}
                  onChange={(e) => setEditedNama(e.target.value)}
                  placeholder="Nama"
                  className="bg-slate-200 rounded px-[10px] py-[5px] w-[300px] outline-none block mb-2"
                />
              </div>
              <div>
                <input type="text"
                  value={editedLevel}
                  onChange={(e) => setEditedLevel(e.target.value)}
                  placeholder="Level"
                  className="bg-slate-200 rounded px-[10px] py-[5px] w-[300px] outline-none block mb-2"
                />
              </div>
              <div>
                <select
                  value={editedKelas}
                  onChange={(e) => setEditedKelas(e.target.value)}
                  className="bg-slate-200 rounded px-[10px] py-[5px] w-[300px] outline-none block mb-2"
                >
                  <option value="" hidden>Kelas</option>
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
                <input type="text"
                  value={editedNoTelpOrtu}
                  onChange={(e) => setEditedNoTelpOrtu(e.target.value)}
                  placeholder="No Telp. Ortu"
                  className="bg-slate-200 rounded px-[10px] py-[5px] w-[300px] outline-none block mb-2"
                />
              </div>
              <div>
                <input type="text"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  placeholder="Email"
                  className="bg-slate-200 rounded px-[10px] py-[5px] w-[300px] outline-none block mb-2"
                />
              </div>
              <div>
                <input type="text"
                  value={editedPassword}
                  onChange={(e) => setEditedPassword(e.target.value)}
                  placeholder="Password"
                  className="bg-slate-200 rounded px-[10px] py-[5px] w-[300px] outline-none block mb-2"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold rounded-lg mt-[30px] px-[30px] py-[10px] active:bg-green-600"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default SiswaItem;