import React from "react";
import { useNavigate } from "react-router-dom";

const SiswaTerdaftar = () => {

    const navigate = useNavigate();

    function handleChange(){
        navigate('/tambah-siswa')
    }
    return (
        <div className="bg-white w-[940px] h-auto rounded-[10px] ml-[300px] mt-28 p-8">
            <div className="flex">
            <h2 className="font-poppins font-20 font-bold text-[#078DCC]">Daftar Siswa</h2>
            <div className="ml-[400px]">
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
            </div>
            </div>
            <table className="table-fixed text-center m-[25px]">
                <thead>
                    <tr>
                        <th style={{ border: '2px solid #A7B9D2', padding: '2px 40px ', color:'#3F3F3F' }}>Nama</th>
                        <th style={{ border: '2px solid #A7B9D2', padding: '2px 20px ', color:'#3F3F3F'  }}>Kelas</th>
                        <th style={{ border: '2px solid #A7B9D1', padding: '2px 40px ', color:'#3F3F3F'  }}>No.HP</th>
                        <th style={{ border: '2px solid #A7B9D1', padding: '2px 50px ', color:'#3F3F3F'  }}>Email</th>
                        <th style={{ border: '2px solid #A7B9D1', padding: '2px 80px ', color:'#3F3F3F'  }}>Alamat</th>
                        <th style={{ border: '2px solid #A7B9D1', padding: '2px 10px ', color:'#3F3F3F'  }}>Jenis Kelamin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>Ahmat</td>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>5</td>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>08123456</td>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>@gmail.com</td>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>Desa Kandeman</td>
                        <td style={{ border: '2px solid #A7B9D1', padding: '5px' }}>L</td>
                    </tr>
                    <tr>
                    <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>Aina</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>4</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>08123456</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>@gmail.com</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>Desa Kandeman</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>P</td>
                    </tr>
                    <tr>
                    <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>Putri</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>4</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>08123456</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>@gmail.com</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>Desa Kandeman</td>
                        <td style={{ border: '2px solid #A7B9D2', padding: '5px' }}>P</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={handleChange} className="text-[#078DCC] text-[14px] ml-[750px] mt-[300px] hover:underline ">Tambahkan Siswa</button>
        </div>
    )
}

export default SiswaTerdaftar;