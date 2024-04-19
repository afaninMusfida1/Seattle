import React from 'react';

const Navbar = () => {

    return (
        <div className="flex absolute top-0 w-screen justify-around bg-transparent p-7">
            <nav className=" grid grid-cols-2 gap-[400px] w-screen mx-[250px]">
                <div>
                    <h1 className=" text-poppins font-bold text-[16px] text-[#06357A]">Welcome, Admin</h1>
                </div>
                <div className='ml-[270px]'>
                    <h1 className=" text-poppins text-[16px] text-[#06357A]">Dashboard</h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
