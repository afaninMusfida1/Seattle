import React, { useState } from "react";

const LoginOrtuSiswa = () => {
    
    const handleLogin = async () => {
        
    };

    return (
        <div className="bg-[#FBFBFB] h-full min-h-screen flex flex-col items-center justify-center">
            <div className="logo absolute top-0 left-0 pt-5">
                <img className="mx-5 w-auto h-[70px]" src="src/assets/logo - Copy.png" alt="" />
            </div>
            <h1 className="text-center text-[#06357A] font-poppins font-bold text-[40px] my-[25px]">
                Login Siswa
            </h1>
            <div className="container flex flex-col">
                    <>
                        <input
                            type="text"
                            placeholder="Nama"
                            
                            className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] outline-none focus:border-[#2B3758] "
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            
                            className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] outline-none focus:border-[#2B3758] "
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            
                            className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] outline-none focus:border-[#2B3758]"
                        />
                        <button
                            onClick={handleLogin}
                            className="bg-[#06357A] text-center font-poppins text-[#fbfbfb] text-[20px] rounded-[16px] px-5 py-3 mt-[35px]">
                            Sign In
                        </button>
                    </>

            </div>
        </div>
    );
};

export default LoginOrtuSiswa;