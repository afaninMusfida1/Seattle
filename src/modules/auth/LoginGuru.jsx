import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { loginGuru, setGuruToken } from "../config/Api";


const LoginGuru = () => {
    const navigate = useNavigate();
    
    const handleClickGuru = () => {
        navigate('/auth/guru');
                
    };


    return (
        <div className="bg-[#FBFBFB] h-full min-h-screen">
            <div className="logo">
                <img className="mx-10 pt-5 w-auto h-20" src="src/assets/logo - Copy.png" alt="" />
            </div>
            <h1 className="text-center text-[#06357A] font-poppins font-bold text-[40px] p-5 mt-[50px] my-[25px]">
                Welcome, Guru
            </h1>
            <div className="container flex flex-col">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] outline-none focus:border-[#2B3758] "
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] mt-[10px] outline-none focus:border-[#2B3758]"
                />
                {error && <div className="text-red-500">{error}</div>}
                <button
                    onClick={handleClickGuru}
                    className="bg-[#06357A] text-center font-poppins text-[#fbfbfb] text-[20px] rounded-[16px] px-5 py-3 mt-[35px]"
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default LoginGuru;