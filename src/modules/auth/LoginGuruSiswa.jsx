// import { useState } from "react";
// import { useAuth } from "./Auth";

import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    // const { doLogin } = useAuth()
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("");

    const handleClick = async () => {
        // doLogin(username, password)
        navigate('/app')
    }
    return (
        <>
            <div className="bg-[#FBFBFB] h-full min-h-screen">
                <div className="logo">
                    <img className="mx-10 pt-5 w-30 h-20" src="src/assets/seattleLogo.png" alt="" />
                </div>
                <h1 className="text-center text-[#06357A] font-poppins font-bold text-[40px] p-5 mt-[50px] my-[25px]">Masuk sebagai</h1>
                <div className="container flex flex-col">
                    <button onClick={handleClick} className="bg-[#06357A] text-center font-poppins text-[#fbfbfb] text-[20px] rounded-[16px] px-5 py-3 mt-[35px]" >Guru</button>
                    <button onClick={handleClick} className="bg-[#06357A] text-center font-poppins text-[#fbfbfb] text-[20px] rounded-[16px] px-5 py-3 mt-[35px]" >Siswa</button>
                </div>
            </div>
        </>

    )
}