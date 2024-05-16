import React, { useRef, useEffect } from 'react';
import { useLayout } from '../layout/LayoutContext';
import { useNavigate } from 'react-router-dom';
import { addGuru } from '../config/Api';

const TambahGuru = () => {
    const refNama = useRef();
    const refEmail = useRef();
    const refPassword = useRef();
    const { actionSetPageTitle } = useLayout();
    const navigate = useNavigate();

    useEffect(() => {
        actionSetPageTitle('Tambah Guru');
    }, [actionSetPageTitle]);

    const handleTambahGuru = async () => {
        if (refNama.current.value === '') {
            alert('Mohon input nama dengan benar');
            return;
        }

        const nama = refNama.current.value;
        const email = refEmail.current.value;
        const password = refPassword.current.value;

        console.log("Input values:", { nama, email, password });

        const result = await addGuru(nama, email, password);

        if (result) {
            console.log('Guru ditambahkan:', result);
            navigate('/admin-guru');
        } else {
            console.error('Error menambahkan guru:', result.message);
            alert('Error menambahkan guru: ' + result.message);
        }
        refNama.current.value = '';
        refEmail.current.value = '';
        refPassword.current.value = '';
    };

    return (
        <>
            <div  className="bg-white max-w-[500px] rounded-[30px] ml-[350px] mr-[100px] mt-[100px] flex flex-col gap-10 p-8">
                <div>
                    <input placeholder="Nama" ref={refNama} className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]" />
                    <input placeholder="Email" ref={refEmail} className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]" />
                    <input type='password' placeholder="Password" ref={refPassword} className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]" />
                </div>
                <button onClick={handleTambahGuru} className="w-[400px] h-[45px] font-poppins text-[16px] border-2 bg-[#07CCB5] text-white rounded-[10px] outline-none">
                        Tambahkan
                </button>
            </div>
        </>

    );
};

export default TambahGuru;
