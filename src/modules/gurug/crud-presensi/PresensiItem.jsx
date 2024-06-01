import React from 'react';
import { addPresensi } from './request';

const PresensiItem = ({ siswa, kbm_id }) => {
    const handlePresensiChange = async (e) => {
        const keterangan = e.target.value;
        addPresensi(kbm_id, siswa.id, keterangan)
            .then(() => {
                console.log('Presensi added successfully');
            })
            .catch((error) => {
                console.error('Error adding presensi:', error);
                // Handle error, maybe show a message to the user
            });
    };

    return (
        <div className="item-container flex justify-between w-full border-2 rounded-lg px-4 py-1">
            <div className="nama">{siswa.nama}</div>
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
