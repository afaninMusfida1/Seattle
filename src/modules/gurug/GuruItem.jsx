import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useGuru } from "../admin/GuruContext";
import Popup from "reactjs-popup";

const GuruItem = ({ id, nama, email, password }) => {
  const { handleDelete } = useGuru();

  const confirmDelete = (id) => {
    const konfirm = confirm("Apakah Anda Yakin Ingin Menghapusnya?");
    if (konfirm) {
      handleDelete(id);
    }
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
                <form action="">
                  <input type="text" placeholder="Nama" className="bg-slate-200 rounded px-[10px] py-[5px] w-[300px] outline-none "/>
                </form>
                <button onClick={() => {
                  console.log('closed edit form')
                  close()
                }} className="bg-green-500 text-white font-semibold rounded-lg mt-[30px] px-[30px] py-[10px] active:bg-green-600">Simpan</button>
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
