import React from "react";

const GuruItem = () => {

    return(
    <div className="flex mt-[5px] ">
      <div className="flex flex-col mt-[20px] w-[180px] h-[220px] bg-[#FBFBFB] rounded-lg shadow-xl items-center space-y-1 py-3 relative">
        <div className="flex flex-col w-16 h-16 relative overflow-hidden rounded-full">
          <img src="src/assets/imgGuru.jpg" className="w-full h-full rounded-full shadow-md"/>
        </div>
        <div className="pt-[10px] text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Aisyah</h2>
          <p className="text-gray-600 mt-[5px]">English Beginner</p>
          <button className="bg-[#078DCC] text-white px-8 py-[1px] rounded-[15px] mt-[10px]">Teacher</button>
        </div>
        <button className='absolute top-4 left-4'>Edit</button>
        <button className='absolute top-4 right-4'>Delete</button>
      </div>
    </div>
  );
};


export default GuruItem;