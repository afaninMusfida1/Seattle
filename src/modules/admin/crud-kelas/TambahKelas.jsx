import { useNavigate } from "react-router-dom"
import { useLayout } from "../../layout/LayoutContext"
import { useEffect, useReducer, useRef } from "react"
import { addKelas } from "./request";


const TambahKelas = () => {
    const navigate = useNavigate();
    const { actionSetPageTitle } = useLayout();
    const refLevel = useRef();
    const refNamaKelas = useRef();

    useEffect(() => {
        actionSetPageTitle('Tambah Kelas')
    }, [])

    const handleTambahKelas = async () => {
        if (refLevel.current.value == '' || refNamaKelas.current.value == '') {
            alert(`mohon isi keduanya`)
            return;
        }

        const level = refLevel.current.value;
        const namaKelas = refNamaKelas.current.value;

        console.log(`input values: ${level, namaKelas}`)

        const result = await addKelas(level, namaKelas);

        if(result) {
            console.log(`kelas ditambahkan: ${result}`);
            console.log(refLevel.current.value, refNamaKelas.current.value)
        } else {
            console.error(`error menambahkan kelas: ${result.message}`);
            alert(`error menambahkan guru ${result.message}`)
        }
        refLevel.current.value = '';
        refNamaKelas.current.value = '';
    };

    return (
        <>
            <div className="bg-white max-w-[500px] rounded-[30px] ml-[350px] mr-[100px] mt-[100px] flex flex-col gap-10 p-8">
                <div className="flex flex-col gap-8">
                    <div>
                        <input type="text" ref={refLevel} placeholder="Level" className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]" />
                        <input type="text" ref={refNamaKelas} placeholder="Nama kelas" className="input w-[400px] h-[40px] font-poppins text-[16px] border-2 text-[#3F3F3F] bg-[#DCE5F1] rounded-[16px] outline-none hover:border-[#078DCC]" />
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