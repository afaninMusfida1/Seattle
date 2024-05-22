import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useGuru } from "../../admin/crud-guru/GuruProvider";

const LoginGuru = () => {
    const navigate = useNavigate();
    const { doLoginGuru } = useAuth();
    const [namaGuru, setNamaGuru] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(null)

    const handleLogin = async () => {
        // navigate('/guru');
        const apiResult = await doLoginGuru(email, password);
        console.log(email, password)
        localStorage.setItem('namaGuru', namaGuru)
        
        if (apiResult && apiResult.token) {
            localStorage.setItem("guruToken", apiResult.token);
            setIsLoggedIn(true);
            navigate('/guru/kelas')
        } else if (apiResult && apiResult.message) {
            console.error("Login gagal: ", apiResult.message);
            setLoginError(apiResult.message);
        } else {
            console.error("Login guru failed:", "Unexpected response from server");
            setLoginError("Unexpected response from server");
        }

        console.log(apiResult)
        console.log(namaGuru)
    };

    return (
        <div className="bg-[#FBFBFB] h-full min-h-screen">
            <div className="logo">
                <img className="mx-10 pt-5 w-auto h-20" src="src/assets/logo - Copy.png" alt="" />
            </div>
            <h1 className="text-center text-[#06357A] font-poppins font-bold text-[40px] p-5 mt-[50px] my-[25px]">
                Login Pengajar
            </h1>
            <div className="container flex flex-col">
                {isLoggedIn ? (
                    navigate('/guru')
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Nama"
                            onChange={(e) => setNamaGuru(e.target.value)}
                            value={namaGuru}
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

                            className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] mt-[10px] outline-none focus:border-[#2B3758]"
                        />
                        {loginError && <p className="text-red-500">{loginError}</p>}
                        <button
                            onClick={handleLogin}
                            className="bg-[#06357A] text-center font-poppins text-[#fbfbfb] text-[20px] rounded-[16px] px-5 py-3 mt-[35px]">
                            Sign In
                        </button>
                    </>
                )}

            </div>
        </div>
    );
};

export default LoginGuru;