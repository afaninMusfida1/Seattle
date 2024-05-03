import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonChalkboard, faGraduationCap, faList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext'; 

const Sidebar = () => {
  const { doLogout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    doLogout(); 
    navigate('/auth/admin'); 
    console.log("logout")
  };

  return (
    <div className="bg-gray-200 flex">
      <div className="fixed bg-white text-white w-64 h-screen">
        <div className="flex items-center justify-between p-4">
          <img src="src/assets/seattleLogo.png" className="mx-[25px] h-[60px] w-[120px]" alt="Logo" />
        </div>
        <nav className="mt-4 px-[25px]">
          <section className="text-sm block px-4 py-2 font-bold text-[#A7B9D1]">Overview</section>

          <NavLink to={"/dashboard"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded ">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-[10px]" />
            Dashboard
          </NavLink>

          <NavLink to={"/tambah-guru"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded ">
            <FontAwesomeIcon icon={faPersonChalkboard} className="mr-[10px]" />
            Guru
          </NavLink>

          <NavLink to={"/tambah-siswa"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded ">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-[10px]" />
            Siswa
          </NavLink>

          <NavLink to={"/rekap"} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded ">
            <FontAwesomeIcon icon={faList} className="mr-[10px]" />
            Rekap
          </NavLink>

          <NavLink to="/auth/admin" onClick={handleLogout} className="animate w-[200px] text-[#004684] hover:text-white hover:bg-[#078DCC] hover:rounded-[5px] block px-4 py-2 text-sm text-left rounded mt-[240px] ">
            <FontAwesomeIcon icon={faRightFromBracket} className="mr-[10px]" />
            Log out
          </NavLink>

        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
