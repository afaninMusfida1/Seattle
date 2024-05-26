import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLayout } from './LayoutContext';

const Navbar = ({isSidebarVisible}) => {
    const location = useLocation();
    const {pageTitle: pageTitleV2} = useLayout();
    const [pageTitle, setPageTitle] = useState("Dashboard");

    // useEffect(() => {
    //     if (location.pathname.includes('/tambah-siswa')) {
    //         setPageTitle("Tambahkan Siswa");
    //     }
    //     else if (location.pathname.includes('/tambah-guru')) {
    //         setPageTitle("Tambahkan Guru");
    //     }
    //     else if (location.pathname.includes('/rekap')) {
    //         setPageTitle("Lihat Rekap");
    //     } else {
    //         setPageTitle("Dashboard");
    //     }
    // }, [location]);

    return (
        // <div className="flex absolute top-0 w-screen justify-around bg-transparent mt-[20px]">
        //     <nav className=" grid grid-cols-2 gap-[400px] w-screen mx-[280px]">
        <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarVisible ? 'ml-[250px]' : 'ml-0'}`}>
        <nav className="pt-4 pl-[100px]">
                <div>
                    {/* <h1 className="text-poppins font-bold text-[24px] text-[#06357A]">
                        {pageTitle === "Dashboard" ? "Welcome, Admin" : pageTitle === "Tambahkan Guru" ? "Tambahkan Guru" : pageTitle === "Tambahkan Siswa" ? "Tambahkan Siswa" : "Lihat Rekap"}
                    </h1> */}
                    <h1 className='text-[24px] font-bold text-[#06357A] '>
                        {pageTitleV2}
                    </h1>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
