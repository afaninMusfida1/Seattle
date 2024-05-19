import React from 'react';
import { useSiswa } from './SiswaProvider';

const SiswaItem = ({ nama, kelas_id, level, no_telp_ortu, email, password }) => {
    const { handleDelete, handleUpdate } = useSiswa();
    const [editedNama, setEditedNama] = useState(nama);
    const [editedEmail, setEditedEmail] = useState(email);
    const [editedPassword, setEditedPassword] = useState(password);
  
  
    const confirmDelete = (id) => {
      const konfirm = confirm("Apakah Anda Yakin Ingin Menghapusnya?");
      if (konfirm) {
        handleDelete(id);
      }
    };
  
  
    const handleEditSubmit = (id, updatedData) => {
      handleUpdate(id, updatedData)
    };

    return (
        <div>
        <tr className="border-2">
            <td style={{ padding: '5px' }}>{nama}</td>
            <td style={{ padding: '5px' }}>{kelas_id}</td>
            <td style={{ padding: '5px' }}>{level}</td>
            <td style={{ padding: '5px' }}>{no_telp_ortu}</td>
            <td style={{ padding: '5px' }}>{email}</td>
        </tr>
        <Popup
          trigger={<button className='absolute top-2 left-3 text-[20px]'><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#6a6d76" }} /></button>}
          modal nested>
          {close => (
            <div className=" modal text-center bg-white max-w-fit border p-[40px] px-[50px] rounded-[20px] drop-shadow-2xl">
              <div className="content grid gap-10">
                <h1 className="font-semibold text-2xl">Edit</h1>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleEditSubmit();
                  close();
                }}>
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
                    onClick={() => {
                      handleEditSubmit(id, { nama: editedNama, email: editedEmail, password: editedPassword });
                      close();
                    }} className="bg-green-500 text-white font-semibold rounded-lg mt-[30px] px-[30px] py-[10px] active:bg-green-600">Simpan</button>
                </form>
              </div>

            </div>
          )}
        </Popup>
        </div>
    );
};

export default SiswaItem;
