import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SidebarGuru from "./SidebarGuru";
import Navbar from "./Navbar";

export default function GuruLayout(){
    const location = useLocation();
    const isDashboardPage = ['/guru','/guru/kelas','/guru-jurnal','/guru-isi-jurnal','/guru-rekap','/guru-rekap-kbm','/guru-presensi-siswa'].includes(location.pathname);
    
  
    return (
      <div>
        {isDashboardPage && <SidebarGuru />}
        <div>
          <Navbar />
          <Outlet />
        </div>
      </div>
    )
}