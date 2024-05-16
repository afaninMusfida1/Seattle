import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLayout } from '../layout/LayoutContext';
import SiswaItem from "./SiswaItem";
import { fetchData, fetchSiswaData } from '../config/Api';
import { useGuru } from "./GuruContext";

const SiswaTerdaftar = () => {
    const { actionSetPageTitle } = useLayout()
    const navigate = useNavigate();
    const {siswaList, setSiswaList} = useGuru([]);

    useEffect(() => {
        actionSetPageTitle('Daftar Siswa');
        fetchData(setSiswaList);
    }, []);

    const fetchData = async () => {
        const data = await fetchSiswaData();
        if (data) {
            setSiswaList(data);
        }
    };

    function handleChange() {
        navigate('/admin-tambah-siswa');
    }

    return (
        <div className="bg-white rounded-[30px] ml-[350px] mr-[100px] mt-[100px] p-8">
            <div className="flex">
                <h2 className="font-poppins font-20 font-bold text-[#078DCC]">Kelas English Beginner</h2>
            </div>
            <table className="table-fixed text-center mt-[25px] w-full">
                <thead className=" text-white bg-[#078DCC]">
                    <tr>
                        <th style={{ padding: '2px 40px ' }}>Nama</th>
                        <th style={{ padding: '2px 20px ' }}>Kelas</th>
                        <th style={{ padding: '2px 40px ' }}>Level</th>
                        <th style={{ padding: '2px 50px ' }}>No.Telp Ortu</th>
                        <th style={{ padding: '2px 80px ' }}>Email</th>
                        <th style={{ padding: '2px 80px ' }}>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {siswaList.length > 0 ? (
                        siswaList.map(siswa => (
                            <SiswaItem
                                key={siswa.id}
                                nama={siswa.nama}
                                kelas={siswa.kelas_id}
                                level={siswa.level}
                                noTelpOrtu={siswa.no_telp_ortu}
                                email={siswa.email}
                                password={siswa.password}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">Tidak ada data siswa</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={handleChange} className="text-[#078DCC] text-[20px] font-bold hover:underline absolute right-[100px] bottom-[50px]">Tambahkan Siswa</button>
        </div>
    )
}

export default SiswaTerdaftar;
