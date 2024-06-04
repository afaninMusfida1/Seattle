import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SidebarGuru from "./SidebarGuru";
import Navbar from "./Navbar";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function GuruLayout(){
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  
    return (
      <div className="flex">
      <SidebarGuru isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarVisible ? 'ml-[250px]' : 'ml-0'}`}>
        <Navbar />
        <Outlet />
      </div>
      <button onClick={toggleSidebar} className='fixed top-4 left-4'>
        <FontAwesomeIcon icon={isSidebarVisible ? faXmark : faBars} style={{ color: "#3f3f3f" }} className='text-[20px]' />
      </button>
    </div>
  );
    
}