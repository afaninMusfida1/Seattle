import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { useLayout } from '../layout/LayoutContext';

const TambahGuru = () => {
    const navigate = useNavigate();
    const [showDafGuru, setShowDafGuru] = useState(false);
    const refNama = useRef()
    const {actionSetPageTitle} = useLayout()

    useEffect(() => {
        actionSetPageTitle('Tambah Guru')
    }, [])


    function handleSubmit(){
        // navigate('/list-guru')
        if (refNama.current.value == '') {
            alert('Mohon input nama dengan benar')
            return
        }

        console.log('kirim data ke server dengan: ', refNama.current.value)
    }

    return (
        <div className="bg-white max-w-[500px] rounded-[10px] ml-[300px] mt-28 flex flex-col p-8 ">
            <input placeholder="Nama" ref={refNama} className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC] "></input>
            <button onClick={handleSubmit} className="w-[400px] h-[40px] font-poppins text-[16px] border-2 bg-[#07CCB5] text-white rounded-[10px] outline-none ">Tambahkan</button>
        </div>
    )
}

export default TambahGuru;
