import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../layout/LayoutContext';
import { useSiswa } from './SiswaProvider';

const TambahSiswa = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const { handleAdd } = useSiswa()
    const refNama = useRef();
    const refKelas = useRef();
    const refLevel = useRef();
    const refNoTelpOrtu = useRef();
    const refEmail = useRef();
    const refPassword = useRef();

    useEffect(() => {
        actionSetPageTitle('Tambah Siswa');
    }, []);

    const handleTambahSiswa = async () => {
        if (!refNama.current.value || !refKelas.current.value || !refLevel.current.value || !refNoTelpOrtu.current.value || !refEmail.current.value || !refPassword.current.value) {
            alert('Semua field harus diisi');
            return;
        }

        const nama = refNama.current.value;
        const kelas = refKelas.current.value;
        const level = refLevel.current.value;
        const noTelpOrtu = refNoTelpOrtu.current.value;
        const email = refEmail.current.value;
        const password = refPassword.current.value;

        console.log("Input values:", { nama, kelas, level, noTelpOrtu, email, password });

        const result = await handleAdd(nama, kelas, level, noTelpOrtu, email, password);

        if (result) {
            console.log('Siswa ditambahkan:', result);
            alert('Siswa ditambahkan');
            navigate('/admin/siswa');
        } else {
            console.error('Error menambahkan siswa:', result.message);
            alert('Error menambahkan siswa: ' + result.message);
        }

        refNama.current.value = '';
        refKelas.current.value = '';
        refLevel.current.value = '';
        refNoTelpOrtu.current.value = '';
        refEmail.current.value = '';
        refPassword.current.value = '';
    };

    return (
        <div className="bg-white rounded-[30px] ml-[350px] mr-[100px] mt-[100px] p-8">
            <div className="flex-cols gap-8">
                <input
                    placeholder="Nama"
                    ref={refNama}
                    className="input block w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]"
                />
                <select
                    ref={refKelas}
                    className="block w-[400px] border rounded px-4 py-2 outline-none text-[#6A6D76] h-[40px] mb-[15px]">
                    <option value="" hidden>Kelas</option>
                    <option value="1">English For Kids</option>
                    <option value="2">English Beginner</option>
                    <option value="3">English Intermediate</option>
                </select>
                <select
                    ref={refLevel}
                    className="block border rounded px-4 py-2 outline-none text-[#6A6D76] w-[400px] h-[40px] mb-[15px]"
                >
                    <option value="" hidden>
                        Level
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <input
                    placeholder="No.telp orang tua"
                    ref={refNoTelpOrtu}
                    className="block input w-[400px] h-[40px] font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]"
                />
                <input
                    placeholder="Email"
                    ref={refEmail}
                    className="block input w-[400px] h-[40px] font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]"
                />
                <input
                    placeholder="Password"
                    ref={refPassword}
                    className="block input w-[400px] h-[40px] font-poppins text-[16px] text-[#3F3F3F] border-2 bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]"
                />
                <button
                    onClick={handleTambahSiswa}
                    className="w-[400px] h-[40px] mt-[80px] font-poppins text-[16px] border-2 bg-[#07CCB5] text-white rounded-[10px] outline-none"
                >
                    Tambahkan
                </button>
            </div>
        </div>
    );
};

export default TambahSiswa;
