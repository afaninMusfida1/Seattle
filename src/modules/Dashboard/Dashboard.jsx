import { Form, useNavigate } from "react-router-dom";
import { useLayout } from "../layout/LayoutContext";
import { useEffect, useRef, useState } from "react";
import Popup from 'reactjs-popup';

function Dashboard() {
    const { actionSetPageTitle } = useLayout();
    const [makeTitle, setMakeTitle] = useState('Pengumuman');
    const [makeContent, setMakeContent] = useState('Belum ada pengumuman')
    const title = useRef();
    const content = useRef();

    useEffect(() => {
        actionSetPageTitle('Dashboard')
    }, [])

    const handleSubmit = () => {


        if (title.current.value == '' || content.current.value == '') {
            alert(`mohon isi keduanya`)
            return
        }
        setMakeTitle(title.current.value)
        setMakeContent(content.current.value)
        console.log(`pengumuman:`, title.current.value, content.current.value)
    }

    return (
        <div className=" mt-[100px] ml-[350px] mr-[100px] grid gap-8">
            <div className="">
                <Popup trigger=
                    {<button className="pengumuman bg-[#078DCC] rounded-[30px] p-8 flex justify-between w-full overflow-hidden h-[230px]">
                        <div className="self-end ">
                            <h1 className="font-poppins font-semibold text-[#FBFBFB] text-left pt-20 text-4xl">{makeTitle}</h1>
                            <h1 className=" font-poppins text-[#FFFFFF] text-lg pt-3 mr-8  max-h-11 overflow-hidden text-left">{makeContent}</h1>
                        </div>
                        <button onClick={() => alert`awas`()} className="bg-white opacity-50 rounded-full p-2 text-center self-end text-6xl font-bold text-slate-400 ">+</button>
                    </button>}
                    modal nested >
                    {
                        close => (
                            <div className="modal text-center bg-white w-[600px] border-2  max-h-fit flex-cols p-[40px] rounded-[20px]">
                                <div className="content ">
                                    <h1 className="text-2xl font-semibold ">Buat pengumuman</h1>
                                    <form action="" className="py-[30px]">
                                        <label htmlFor="headline"></label>
                                        <input type="text" ref={title} placeholder="headline" id="headline" className="w-full outline-none border border-sky-500 rounded-lg px-3 py-3 mb-[20px]" />
                                        <label htmlFor="content"></label>
                                        <textarea type="text" ref={content} placeholder="content" id="content" className="w-full outline-none border border-sky-500 rounded-lg px-3 py-3" />
                                    </form>
                                </div>
                                <div>
                                    <button onClick={() => {
                                        handleSubmit();
                                        close();
                                    }}
                                        className="bg-green-500 py-[10px] px-[45px] rounded-xl text-white font-semibold hover:opacity-70 transition-all">Buat
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </Popup>
            </div>

            <div className="flex gap-8">
                <div className=" bg-[#FFFFFF] w-full h-[250px] grid p-7 rounded-[20px] ">
                    <div className="icon bg-green-400 w-[80px] h-[80px] rounded-full overflow-hidden"></div>
                    <div className="status flex items-end justify-between ">
                        <h1 className="font-poppins font-semibold text-xl">Jumlah Guru terdaftar</h1>
                        <h1 className="font-poppins font-semibold text-6xl text-[#078DCC]">4</h1>
                    </div>
                </div>
                <div className=" bg-[#FFFFFF] w-full h-[250px] grid p-7 rounded-[20px] ">
                    <div className="icon bg-green-400 w-[80px] h-[80px] rounded-full overflow-hidden"></div>
                    <div className="status flex items-end justify-between">
                        <h1 className="font-poppins font-semibold text-xl">Jumlah Siswa terdaftar</h1>
                        <h1 className="font-poppins font-semibold text-6xl text-[#078DCC]">489</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;