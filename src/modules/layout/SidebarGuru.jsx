import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPersonChalkboard, faGraduationCap, faList, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


const SidebarGuru = () => {

    return(
        <div className="bg-gray-200 flex">
    <div className="fixed bg-white text-white w-64 h-screen">
      <div className="flex items-center justify-between p-4">
        <img src="src/assets/seattleLogo.png" className="mx-[25px] h-[60px] w-[120px]" />
      </div>
      <nav className="mt-4 px-[25px]">
        <section className="text-sm block px-4 py-2 font-bold text-[#A7B9D1]">Overview</section>
        <NavLink to={"/dashboard"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded "
            style={({ isActive }) => ({
              background: isActive ? "#078DCC" : "transparent",
              color: isActive ? "white" : "#004684"
            })}>
            <FontAwesomeIcon icon={faGraduationCap} className="mr-[10px]" />
            Absen Guru
          </NavLink>

          <NavLink to={"/tambah-guru"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded "
            style={({ isActive }) => ({
              background: isActive ? "#078DCC" : "transparent",
              color: isActive ? "white" : "#004684"
            })}>
            <FontAwesomeIcon icon={faPersonChalkboard} className="mr-[10px]" />
            Absen Siswa
          </NavLink>

          <NavLink to={"/tambah-siswa"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded "
            style={({ isActive }) => ({
              background: isActive ? "#078DCC" : "transparent",
              color: isActive ? "white" : "#004684"
            })}>
            <FontAwesomeIcon icon={faList} className="mr-[10px]" />
            Jurnal
          </NavLink>

          <NavLink to={"/rekap"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded "
            style={({ isActive }) => ({
              background: isActive ? "#078DCC" : "transparent",
              color: isActive ? "white" : "#004684",
            })}>
            <FontAwesomeIcon icon={faGraduationCap} className="mr-[10px]" />
            Rekap
          </NavLink>

          <NavLink to={"/logout"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded mt-[240px] "
            style={({ isActive }) => ({
              background: isActive ? "#078DCC" : "transparent",
              color: isActive ? "white" : "#004684"
            })}>
            <FontAwesomeIcon icon={faRightFromBracket} className="mr-[10px]" />
            Log out
          </NavLink>
      </nav>
    </div>
  </div>
    )
};

export default SidebarGuru;