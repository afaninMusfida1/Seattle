import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonChalkboard, faGraduationCap, faList, faRightFromBracket, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext'; 
import '/src/index.css';

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const { doLogout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    doLogout(); 
    navigate('/auth/admin'); 
    console.log("logout")
  };

  return (
    <div className={`fixed bg-white text-white h-screen transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center p-4">
        <img src="../src/assets/logo - Copy.png" className="mx-[40px] h-[60px] w-[130px]" alt="Logo" />
        <button onClick={toggleSidebar} className='absolute'>
          {/* <FontAwesomeIcon icon={faXmark} style={{ color: "#3f3f3f" }} className='mb-[40px] ml-[200px] text-[20px]' /> */}
        </button>
      </div>

      <nav className="px-[25px]">
        <section className="text-sm block px-4 py-2 font-bold text-[#A7B9D1]">Overview</section>

        <NavLink to={"/admin/dashboard"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded "
          style={({ isActive }) => ({
            background: isActive ? "#078DCC" : "transparent",
            color: isActive ? "white" : "#004684"
          })}>
          <FontAwesomeIcon icon={faGraduationCap} className="mr-[10px]" />
          Dashboard
        </NavLink>

        <NavLink to={"/admin/guru"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded "
          style={({ isActive }) => ({
            background: isActive ? "#078DCC" : "transparent",
            color: isActive ? "white" : "#004684"
          })}>
          <FontAwesomeIcon icon={faPersonChalkboard} className="mr-[10px]" />
          Guru
        </NavLink>

        <NavLink to={"/admin/kelas"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded "
          style={({ isActive }) => ({
            background: isActive ? "#078DCC" : "transparent",
            color: isActive ? "white" : "#004684"
          })}>
          <FontAwesomeIcon icon={faPersonChalkboard} className="mr-[10px]" />
          Kelas
        </NavLink>

        <NavLink to={"/admin/siswa"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded "
          style={({ isActive }) => ({
            background: isActive ? "#078DCC" : "transparent",
            color: isActive ? "white" : "#004684"
          })}>
          <FontAwesomeIcon icon={faGraduationCap} className="mr-[10px]" />
          Siswa
        </NavLink>

        <NavLink to={"/admin/rekap"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded "
          style={({ isActive }) => ({
            background: isActive ? "#078DCC" : "transparent",
            color: isActive ? "white" : "#004684",
          })}>
          <FontAwesomeIcon icon={faList} className="mr-[10px]" />
          Rekap
        </NavLink>

        <NavLink to="/auth/admin" onClick={handleLogout} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded mt-[240px] "
          style={({ isActive }) => ({
            background: isActive ? "#078DCC" : "transparent",
            color: isActive ? "white" : "#004684"
          })}>
          <FontAwesomeIcon icon={faRightFromBracket} className="mr-[10px]" />
          Log out
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
