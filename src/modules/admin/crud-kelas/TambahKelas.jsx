import { useNavigate } from "react-router-dom"
import { useLayout } from "../../layout/LayoutContext"
import { useEffect, useReducer, useRef } from "react"
import { addKelas } from "./request" 
import axios from "axios"


const TambahKelas = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const refnama_kelas = useRef();
    const refKategori = useRef();
    const refPeriode = useRef();
    const refjadwal_kelas = useRef();

    useEffect(() => {
        actionSetPageTitle('Tambah Kelas')
    }, [])

    const handleTambahKelas = async () => {
        if (refjadwal_kelas.current.value == '' || refnama_kelas.current.value == '') {
            alert(`mohon isi keduanya`)
            return;
        }

        const nama_kelas = refnama_kelas.current.value;
        const kategori = refKategori.current.value;
        const periode = refPeriode.current.value;
        const jadwal_kelas = refjadwal_kelas.current.value;

        
        console.log(`input values: ${nama_kelas, kategori, periode, jadwal_kelas}`)
        const result = await addKelas(nama_kelas, kategori, periode, jadwal_kelas);

        if(result) {
            console.log(`kelas ditambahkan: ${result}`);
            // console.log(refKategori.current.value, refjadwal_kelas.current.value, refnama_kelas.current.value, refPeriode.current.value)
        } else {
            console.error(`error menambahkan kelas: ${result.message}`);
            alert(`error menambahkan kelas ${result.message}`)
        }
        refKategori.current.value = '';
        refjadwal_kelas.current.value = '';
        refnama_kelas.current.value = '';
        refPeriode.current.value = ''; 
    };


    

    return (
        <>
            <div className="bg-white max-w-[500px] rounded-[30px] ml-[350px] mr-[100px] mt-[100px] flex flex-col gap-10 p-8">
                <div className="flex flex-col gap-8">
                    <div>
                        <input type="text" ref={refnama_kelas} placeholder="Nama kelas" className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]" />
                        <input type="text" ref={refKategori} placeholder="Kategori" className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]" />
                        <input type="text" ref={refPeriode} placeholder="Periode" className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]" />
                        <input type="text" ref={refjadwal_kelas} placeholder="Jadwal" className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]" />
                    </div>
                    <button onClick={handleTambahKelas} className="w-[400px] h-[45px] font-poppins text-[16px] border-2 bg-[#07CCB5] text-white rounded-[10px] outline-none">
                        Tambahkan
                    </button>
                </div>
            </div>
        </>
    )
}

export default TambahKelas