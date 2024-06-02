import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const PresensiItem = ({ siswa, handleAddPresensi }) => {

    const handlePresensiChange = (e) => {
        const keterangan = e.target.value;
        handleAddPresensi(siswa.id, keterangan);
    };

    return (
        <div className="item-container flex justify-between w-full border-2 rounded-lg px-4 py-1">
            <div className="nama">{siswa.nama}</div>
                    <div>
                        <FontAwesomeIcon icon={faSquareCheck} />   
                    </div>

                <div className="status flex gap-6">
                <input
                    type="radio"
                    id="hadir"
                    name={`keterangan_${siswa.id}`}
                    value="H"
                    onChange={handlePresensiChange}
                />
                <label htmlFor="hadir">H</label><br />
                <input
                    type="radio"
                    id="izin"
                    name={`keterangan_${siswa.id}`}
                    value="I"
                    onChange={handlePresensiChange}
                />
                <label htmlFor="izin">I</label><br />
                <input
                    type="radio"
                    id="sakit"
                    name={`keterangan_${siswa.id}`}
                    value="S"
                    onChange={handlePresensiChange}
                />
                <label htmlFor="sakit">S</label><br />
            </div>
        </div>
    );
};

export default PresensiItem;


// import React from 'react';
// import { addPresensi, apiGetJurnalByTanggal } from './requestPresensi';
// import { usePresensi } from './PresensiProvider';
// import KelasGrouping from '../../admin/crud-kelas/KelasGrouping';
// import { useParams } from 'react-router-dom';

// const PresensiItem = ({ siswa, kbm_id }) => {
//     const {handleAddPresensi, handleGetKbmId} = usePresensi();
//     const {kelas_id} = useParams(); 
    
//     const handlePresensiChange = async (e, kelas_id, tanggal) => {
//         const keterangan = e.target.value;

//         const idKbm = await handleGetKbmId(kelas_id, tanggal)
//         console.log(`ini adalah id kbm dari add presensi`, idKbm)

//         handleAddPresensi(kbm_id, siswa.id, keterangan)
//             .then(() => {
//                 console.log('Presensi added successfully');
//             })
//             .catch((error) => {
//                 console.error('Error adding presensi:', error);
//                 // Handle error, maybe show a message to the user
//             });
//     };

//     return (
//         <div className="item-container flex justify-between w-full border-2 rounded-lg px-4 py-1">
//             <div className="nama">{siswa.nama}</div>
//             <div className="status flex gap-6">
//                 <input
//                     type="radio"
//                     id="hadir"
//                     name={`keterangan_${siswa.id}`}
//                     value="H"
//                     onChange={handlePresensiChange}
//                 />
//                 <label htmlFor="hadir">H</label><br />
//                 <input
//                     type="radio"
//                     id="izin"
//                     name={`keterangan_${siswa.id}`}
//                     value="I"
//                     onChange={handlePresensiChange}
//                 />
//                 <label htmlFor="izin">I</label><br />
//                 <input
//                     type="radio"
//                     id="sakit"
//                     name={`keterangan_${siswa.id}`}
//                     value="S"
//                     onChange={handlePresensiChange}
//                 />
//                 <label htmlFor="sakit">S</label><br />
//             </div>
//         </div>
//     );
// };

// export default PresensiItem;
