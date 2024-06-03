import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginOrtuSiswa = () => {
    const navigate = useNavigate();
    const { doLoginOrtuSiswa } = useAuth();
    const [namaSiswa, setNamaSiswa] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(null)

    const handleClick = async () => {
        const apiResult = await doLoginOrtuSiswa(email, password);
        console.log(email, password);
        if (apiResult && apiResult.token) {
          localStorage.setItem('siswaToken', apiResult.token);
          localStorage.setItem('namaSiswa', namaSiswa)
          setIsLoggedIn(true);
          navigate("/siswa");
        } else if (apiResult && apiResult.message) {
          console.error("Login failed:", apiResult.message);
          setLoginError(apiResult.message);
        } else {
          console.error("Login failed:", "Unexpected response from server");
          setLoginError("Unexpected response from server");
        }
    
        console.log();
      };

    return (
        <div className="bg-[#FBFBFB] h-full min-h-screen flex flex-col items-center justify-center">
            <div className="logo absolute top-0 left-0 pt-5">
                <img className="mx-5 w-auto h-[70px]" src="/src/assets/logo - Copy.png" alt="" />
            </div>
            <h1 className="text-center text-[#06357A] font-poppins font-bold text-[40px] my-[25px]">
                Login Siswa
            </h1>
            <div className="container flex flex-col">
                {isLoggedIn ? (
                    navigate('/siswa')
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Nama"
                            onChange={(e) => setNamaSiswa(e.target.value)}
                            value={namaSiswa}
                            className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] outline-none focus:border-[#2B3758] "
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] outline-none focus:border-[#2B3758] "
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] outline-none focus:border-[#2B3758]"
                        />
                        {loginError && <p className="text-red-500">{loginError}</p>}
                        <button
                            onClick={handleClick}
                            className="bg-[#06357A] text-center font-poppins text-[#fbfbfb] text-[20px] rounded-[16px] px-5 py-3 mt-[35px]">
                            Sign In
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginOrtuSiswa;