import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLayout } from '../layout/LayoutContext';

const SiswaTerdaftar = () => {
    const {actionSetPageTitle} = useLayout()

    const navigate = useNavigate();

    useEffect(() => {
        actionSetPageTitle('Daftar Siswa')
    }, [])

    function handleChange(){
        navigate('/admin-tambah-siswa')
    }
    return (
        <div className="bg-white h-auto rounded-[30px] ml-[350px] mr-[100px] mt-[100px] p-8">
            <div className="flex">
            <h2 className="font-poppins font-20 font-bold text-[#078DCC]">Kelas English Beginner</h2>
            {/* <div className="ml-[400px]">
                <select className="border mr-[15px] rounded px-4 py-2 outline-none text-[#6A6D76] w-[180px] h-[40px]">
                    <option value="" >Kelas A</option>
                    <option value="option1">Kelas B</option>
                    <option value="option2">Kelas C</option>
                </select>
                <select className="border rounded px-4 py-2 outline-none text-[#6A6D76] w-[180px] h-[40px]">
                    <option value="" >English Beginner</option>
                    <option value="option1">English Intermediate</option>
                    <option value="option2">English Expert</option>
                </select>
            </div> */}
            </div>
            <table className="table-fixed text-center mt-[25px]">
                <thead>
                    <tr>
                        <th style={{ border: '2px solid #A7B9D2', padding: '2px 40px ', color:'#3F3F3F' }}>Nama</th>
                        <th style={{ border: '2px solid #A7B9D2', padding: '2px 20px ', color:'#3F3F3F'  }}>Level</th>
                        <th style={{ border: '2px solid #A7B9D1', padding: '2px 40px ', color:'#3F3F3F'  }}>NIS</th>
                        <th style={{ border: '2px solid #A7B9D1', padding: '2px 50px ', color:'#3F3F3F'  }}>No.Telp Orang Tua</th>
                        <th style={{ border: '2px solid #A7B9D1', padding: '2px 80px ', color:'#3F3F3F'  }}>Kelas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>Ahmat</td>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>3</td>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>63623782</td>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>08425618654</td>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>English starters</td>
                    </tr>
                    <tr>
                    <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>Aina</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>6</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>874648239</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>0885478292893</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>English for kids</td>
                    </tr>
                    <tr>
                    <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>Putri</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>4</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>2291820</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>086464849847</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>English elementary</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={handleChange} className="text-[#078DCC] text-[14px] ml-[750px] mt-[300px] hover:underline ">Tambahkan Siswa</button>
        </div>
    )
}

export default SiswaTerdaftar;