import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { useLayout } from '../layout/LayoutContext';
import GuruItem from '../gurug/GuruItem';

const TambahGuru = () => {
    const navigate = useNavigate();
    const [daftarGuru, setDaftarGuru] = useState([]); // State untuk menyimpan daftar guru
    const refNama = useRef();
    const { actionSetPageTitle } = useLayout();

    useEffect(() => {
        actionSetPageTitle('Tambah Guru');
    }, []);

    // Fungsi untuk menambahkan guru ke daftar
    const tambahGuru = () => {
        const namaGuru = refNama.current.value.trim();
        if (namaGuru === '') {
            alert('Mohon input nama dengan benar');
            return;
        }
        // Tambah guru baru ke daftar
        setDaftarGuru([...daftarGuru, { id: daftarGuru.length + 1, nama: namaGuru }]);
        // Reset input setelah ditambahkan
        refNama.current.value = '';
    
    };


    return (
        <div className="bg-white max-w-[500px] rounded-[10px] ml-[350px] mt-[100px] flex flex-col p-8 ">
            <input placeholder="Nama" ref={refNama} className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
            <button onClick={tambahGuru} className="w-[400px] h-[40px] font-poppins text-[16px] border-2 bg-[#07CCB5] text-white rounded-[10px] outline-none ">Tambahkan</button>
            {/* Tampilkan daftar guru yang telah ditambahkan */}
            <div>
                {daftarGuru.map(guru => (
                    <GuruItem key={guru.id} nama={guru.nama} />
                ))}
            </div>
        </div>
    )
}

export default TambahGuru;
