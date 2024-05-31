import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Dashboard from "../Dashboard/Dashboard";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { doLoginAdmin, error, isLoggedIn, setIsLoggedIn } = useAuth();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const handleClick = async () => {
    const apiResult = await doLoginAdmin(username, password);
    console.log(username, password);
    if (apiResult && apiResult.token) {
      localStorage.setItem("adminToken", apiResult.token);
      setIsLoggedIn(true);
      navigate("/admin");
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
      <div className="logo absolute top-0 left-0 pt-5 pl-5">
        <img
          className="w-30 h-20"
          src="src/assets/seattleLogo.png"
          alt="Seattle Logo"
        />
      </div>
      <h1 className="text-center text-[#06357A] font-poppins font-bold text-[24px] sm:text-[40px] p-5 my-[25px]">
        Welcome, Admin
      </h1>
      <div className="container flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-1">
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
              className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] outline-none focus:border-[#2B3758] px-4 py-2"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] mt-[10px] outline-none focus:border-[#2B3758] px-4 py-2"
            />

            {error && <div className="text-red-500 mt-2">{error}</div>}
            {loginError && <div className="text-red-500 mt-2">{loginError}</div>}

            <button
              onClick={handleClick}
              className="bg-[#06357A] text-center font-poppins text-[#fbfbfb] text-[16px] sm:text-[20px] rounded-[16px] px-5 py-3 mt-[20px] sm:mt-[35px]"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;