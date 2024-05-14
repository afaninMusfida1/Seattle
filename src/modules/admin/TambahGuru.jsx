import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { useLayout } from '../layout/LayoutContext';
import { useAdmin } from './adminContext';

const TambahGuru = () => {
    const { handleAddGuru } = useAdmin();
    const navigate = useNavigate();
    const refNama = useRef();
    const refNoTelp = useRef();
    const refNoTelpOrtu = useRef();
    const refEmail = useRef();
    const refPassword = useRef();
    const { actionSetPageTitle } = useLayout();

    useEffect(() => {
        actionSetPageTitle('Tambah Guru');
    }, [actionSetPageTitle]);

    const handleSubmit = () => {
        const name = refNama.current.value;
        const no_telp = refNoTelp.current.value;
        const no_telp_ortu = refNoTelpOrtu.current.value;
        const email = refEmail.current.value;
        const password = refPassword.current.value;

        if (!name || !no_telp || !no_telp_ortu || !email || !password) {
            alert('Mohon input semua field dengan benar');
            return;
        }

        handleAddGuru(name, no_telp, no_telp_ortu, email, password);
        navigate('/list-guru');
    };

    return (
        <div className="bg-white max-w-[500px] rounded-[10px] ml-[300px] mt-28 flex flex-col p-8">
            <input placeholder="Nama" ref={refNama} className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]" />
            <input placeholder="No Telp" ref={refNoTelp} className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] mt-4" />
            <input placeholder="No Telp Ortu" ref={refNoTelpOrtu} className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] mt-4" />
            <input placeholder="Email" ref={refEmail} className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] mt-4" />
            <input placeholder="Password" ref={refPassword} className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] mt-4" />
            <button onClick={handleSubmit} className="w-[400px] h-[40px] font-poppins text-[16px] border-2 bg-[#07CCB5] text-white rounded-[10px] outline-none mt-4">Tambahkan</button>
        </div>
    );
};

export default TambahGuru;
