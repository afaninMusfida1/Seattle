// import { useState } from "react";
// import { useAuth } from "./Auth";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"

const Login = ({onLogin}) => {
  const navigate = useNavigate()
  // const { doLogin } = useAuth()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    // doLogin(username, password)
    if(username === 'admin' && password === 'admin'){
     return onLogin(1,true);
    }
    onLogin(0,true);
    navigate('/app/dashboard')
    return;
  }
  return (
    <>
      <div className="bg-[#FBFBFB] h-full min-h-screen">
        <div className="logo">
          <img className="mx-10 pt-5 w-30 h-20" src="src/assets/seattleLogo.png" alt="" />
        </div>
        <h1 className="text-center text-[#06357A] font-poppins font-bold text-[40px] p-5 mt-[50px] my-[25px]">Welcome, Admin</h1>
        <div className="container flex flex-col">
        <input onChange={(e) => setUsername(e.target.value)} value={username}  placeholder="Username" className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] outline-none focus:border-[#2B3758] "></input>
        <input onChange={(e) => setPassword(e.target.value)} value={password}  placeholder="Password" className="input font-poppins text-[16px] border-2 border-[#2B3758] rounded-[16px] mt-[10px] outline-none focus:border-[#2B3758]"></input>

          <button onClick={handleClick} className="bg-[#06357A] text-center font-poppins text-[#fbfbfb] text-[20px] rounded-[16px] px-5 py-3 mt-[35px]" >Sign In</button>

        </div>
      </div>  
    </>
  )
}

export default Login;