import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SidebarGuru from "./SidebarGuru";
import Navbar from "./Navbar";

export default function GuruLayout(){
  
    return (
      <div>
        <SidebarGuru />
        <div>
          <Navbar />
          <Outlet />  
        </div>
      </div>
    )
}