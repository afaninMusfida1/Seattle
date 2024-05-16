import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Dashboard from "../Dashboard/Dashboard";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { doLoginAdmin, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleClick = async () => {
    const apiResult = await doLoginAdmin(email, password);
    if (apiResult && apiResult.token) {
      localStorage.setItem("adminToken", apiResult.token);
      setIsLoggedIn(true);
      navigate('/admin-dashboard')
    } else if (apiResult && apiResult.message) {
      console.error("Login failed:", apiResult.message);
      setLoginError(apiResult.message);
    } else {
      console.error("Login failed:", "Unexpected response from server");
      setLoginError("Unexpected response from server");
    }
  };

  return (
    <div className="bg-[#FBFBFB] h-full min-h-screen">
      <div className="logo">
        <img
          className="mx-10 pt-5 w-30 h-20"
          src="src/assets/seattleLogo.png"
          alt=""
        />
      </div>
      <h1 className="text-center text-[#06357A] font-poppins font-bold text-[40px] p-5 mt-[50px] my-[25px]">
        Welcome, Admin
      </h1>
      <div className="container flex flex-col">
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Username"
              className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] outline-none focus:border-[#2B3758] "
            />
            <input type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] mt-[10px] outline-none focus:border-[#2B3758]"
            />

            {error && <div className="text-red-500">{error}</div>}

            <button
              onClick={handleClick}
              className="bg-[#06357A] text-center font-poppins text-[#fbfbfb] text-[20px] rounded-[16px] px-5 py-3 mt-[35px]"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
