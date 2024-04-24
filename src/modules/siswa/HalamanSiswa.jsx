import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HalamanSiswa = () => {
    const location = useLocation();
    const [pageTitle, setPageTitle] = useState("Dashboard");

    useEffect(() => {
        if (location.pathname.includes('/tambah-siswa')) {
            setPageTitle("Tambahkan Siswa");
        }
        else if (location.pathname.includes('/tambah-guru')) {
            setPageTitle("Tambahkan Guru");
        }
        else if (location.pathname.includes('/rekap')) {
            setPageTitle("Lihat Rekap");
        } else {
            setPageTitle("Dashboard");
        }
    }, [location]);

    return (
        <div className="flex absolute top-0 w-screen justify-around bg-transparent p-7">
            <nav className=" grid grid-cols-2 gap-[400px] w-screen mx-[250px]">
                <div>
                    <h1 className="text-poppins font-bold text-[16px] text-[#06357A]">
                        {pageTitle === "Dashboard" ? "Welcome, Admin" : pageTitle === "Tambahkan Guru" ? "Tambahkan Guru" : pageTitle === "Tambahkan Siswa" ? "Tambahkan Siswa" : "Lihat Rekap"}
                    </h1>
                </div>
                <div className='ml-[270px]'>
                    <h1 className="text-poppins text-[16px] text-[#06357A]">Dashboard</h1>
                </div>
            </nav>
        </div>
    );
}

export default HalamanSiswa;
