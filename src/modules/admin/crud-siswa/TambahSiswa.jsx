import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../../layout/LayoutContext';
import { useSiswa } from './SiswaProvider';
import { useKelas } from '../crud-kelas/KelasProvider';

const TambahSiswa = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const { handleAdd } = useSiswa();
    const { daftarKelas } = useKelas();
    const refNama = useRef();
    const refLevel = useRef();
    const refNoTelpOrtu = useRef();
    const refEmail = useRef();
    const refPassword = useRef();
    const refKelas = useRef();

    useEffect(() => {
        actionSetPageTitle('Tambah Siswa');
    }, []);

    const handleTambahSiswa = async () => {
        if (!refNama.current.value || !refKelas.current.value || !refLevel.current.value || !refNoTelpOrtu.current.value || !refEmail.current.value || !refPassword.current.value) {
            alert('Mohon isi semua input');
            return;
        }

        const nama = refNama.current.value;    
        const kelas_id = refKelas.current.value;
        const level = refLevel.current.value;
        const no_telp_ortu = refNoTelpOrtu.current.value;
        const email = refEmail.current.value;
        const password = refPassword.current.value;

        console.log("Input values:", { nama, kelas_id, level, no_telp_ortu, email, password });

        const result = await handleAdd(nama, kelas_id, level, no_telp_ortu, email, password);
        if (result) {
            console.log('Siswa ditambahkan');
            alert('Siswa ditambahkan');
            navigate('/admin/siswa');
        } else {
            // console.error('Error menambahkan siswa:', result.message);
            alert('Terjadi kesalahan saat menambahkan siswa: ' + result);
        }

        // Reset nilai input setelah menambahkan siswa
        refNama.current.value = '';
        refKelas.current.value = '';
        refLevel.current.value = '';
        refNoTelpOrtu.current.value = '';
        refEmail.current.value = '';
        refPassword.current.value = '';
    };

    return (
        <div className="bg-white rounded-[30px] ml-[100px] mr-[100px] mt-[50px] p-8">
            <div className="flex-cols gap-8">
                <input
                    placeholder="Nama"
                    ref={refNama}
                    className="input block w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]"
                />
                <select
                    ref={refKelas}
                    className="block w-[400px] border rounded px-4 py-2 outline-none text-[#6A6D76] h-[40px] mb-[15px]"
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
                <select
                    ref={refLevel}
                    className="block border rounded px-4 py-2 outline-none text-[#6A6D76] w-[400px] h-[40px] mb-[15px]"
                >
                    <option value="" hidden>Level</option>
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
