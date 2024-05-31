import React from "react";

const DetailJurnal = ({ kategori, index }) => {
    return (

        <div>
            <div className="logo absolute top-0 left-0 pt-5">
                <img className="mx-5 w-auto h-[70px]" src="src/assets/logo - Copy.png" alt="" />
            </div>
            <div className="detail-absen bg-white rounded-[30px] p-8 mr-[100px] ml-[100px] mt-[150px]">
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between">
                        <div className="kategori font-bold text-lg content-center max-w-fit py-1 px-5 rounded-md "></div>
                        <div className="border-4 bg-white rounded-[30px] max-w-fit px-20 py-20"></div>
                    </div>
                    <div className="bg-white w-[940px] h-[400px] rounded-[10px] ml-[100px] mt-28 flex p-8 mb-10">
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailJurnal;