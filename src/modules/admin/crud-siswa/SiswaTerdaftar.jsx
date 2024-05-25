import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLayout } from '../../layout/LayoutContext';
import SiswaItem from "./SiswaItem";
import { useSiswa } from "./SiswaProvider";
import DaftarGuru from "../crud-guru/DaftarGuru";

const SiswaTerdaftar = () => {
    const { actionSetPageTitle } = useLayout()
    const navigate = useNavigate();
    const { siswaList, handleFetch } = useSiswa();

    useEffect(() => {
        actionSetPageTitle('Daftar Siswa');
        handleFetch();
    }, []);

    const handleChange = () => {
        navigate('/admin/siswa/tambah');
    }

    return (
        <div className="bg-white rounded-[30px] ml-[350px] mr-[100px] mt-[100px] p-8">
            <div className="flex">
                <h2 className="font-poppins font-20 font-bold text-[#078DCC]">Kelas English Beginner</h2>
            </div>
            <table className="table-fixed text-center mt-[25px] w-full">
                <thead className=" text-white bg-[#078DCC] w-full">
                    <tr className="w-full">
                        <th style={{ padding: '2px 40px ' }}>Nama</th>
                        <th style={{ padding: '2px 20px ' }}>Kelas</th>
                        <th style={{ padding: '2px 40px ' }}>Level</th>
                        <th style={{ padding: '2px 50px ' }}>No.Telp Ortu</th>
                        <th style={{ padding: '2px 0px ' }}>Email</th>                        
                        <th style={{ padding: '2px 0px ' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {siswaList.length > 0 ? (
                        siswaList.map(siswa => (
                            <SiswaItem
                                key={siswa.id}
                                id={siswa.id}
                                nama={siswa.nama}
                                kelas={siswa.kelas_id}
                                level={siswa.level}
                                no_telp_ortu={siswa.no_telp_ortu}
                                email={siswa.email}
                                password={siswa.password}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">Tidak ada data siswa</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
            <button onClick={handleChange} className="text-[#078DCC] text-[20px] font-bold hover:underline absolute right-[100px] bottom-[50px]">Tambahkan Siswa</button>
        </div>
    )
}

export default SiswaTerdaftar;