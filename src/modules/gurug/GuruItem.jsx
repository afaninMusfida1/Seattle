import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useGuru } from "../admin/GuruContext";
import Popup from "reactjs-popup";

const GuruItem = ({ id, nama, email, password }) => {
  const { handleDelete, handleUpdate } = useGuru();
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
    <div className="  ">
      <div className="flex flex-col w-[180px]  bg-[#FBFBFB] rounded-lg shadow-xl items-center gap-2 py-5 relative">
        <div className="  w-[100px] h-[100px] overflow-hidden rounded-full mt-[px]">
          <img src="src/assets/imgGuru.jpg" alt={nama} className="  rounded-full shadow-md" />
        </div>
        <div className="email text-[12px]">{email}</div>
        {/* <div className="password text-[12px]">{password}</div> */}
        <div className=" text-center ">
          <h2 className="text-xl font-semibold text-gray-800">{nama}</h2>
          <button className="bg-[#078DCC] text-white px-8 py-[3px] rounded-[15px] mt-[10px]">Pengajar</button>
        </div>
        <Popup
          trigger={<button onClick={() => console.log('edited guru')} className='absolute top-2 left-3 text-[20px]'><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#6a6d76" }} /></button>}
          modal nested>
          {close => (
            <div className=" modal text-center bg-white max-w-fit border p-[40px] px-[50px] rounded-[20px] drop-shadow-2xl">
              <div className="content grid gap-10">
                <h1 className="font-semibold text-2xl">Edit nama</h1>
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

        <button onClick={() => confirmDelete(id)} className='absolute top-2 right-3 text-[20px]'><FontAwesomeIcon icon={faTrashAlt} style={{ color: "#6a6d76" }} /></button>
      </div>
    </div>
  );
};

export default GuruItem;
