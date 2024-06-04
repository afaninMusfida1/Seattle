import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLayout } from './LayoutContext';

const Navbar = ({isSidebarVisible}) => {
    const location = useLocation();
    const {pageTitle: pageTitleV2} = useLayout();
    const [pageTitle, setPageTitle] = useState("Dashboard");

    return (
        <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarVisible ? 'ml-[250px]' : 'ml-0'}`}>
        <nav className="pt-4 pl-[100px]">
                <div>
                    <h1 className='text-[24px] font-bold text-[#06357A] '>
                        {pageTitleV2}
                    </h1>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
