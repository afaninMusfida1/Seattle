import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useLayout } from "../layout/LayoutContext"
import PresensiItem from "./PresensiItem"

const PresensiSiswa = () => {
    const { actionSetPageTitle } = useLayout()
    const navigate = useNavigate()

    useEffect(() => {
        actionSetPageTitle('Presensi Siswa')
    }, [])

    const handleChangePresensi = () => {
        navigate('/guru')
        console.log('selesai presensi')
    }

    return (
        <>
            <div>
                <div className="bg-white max-h-[500px] rounded-[30px] ml-[350px] mr-[100px] mt-[100px] p-8 ">
                    <div className="w-full max-h-[380px] overflow-auto flex flex-wrap gap-1">
                        <div className="item-container flex justify-between w-full border-2 rounded-lg px-4 py-1">
                            <div className="nama">Dwi Saputra</div>
                            <div className="status flex gap-10">
                                <button className="bg-green-400 text-white px-[15px] py-[3px] rounded ">hadir</button>
                                <button className="bg-green-400 text-white px-[15px] py-[3px] rounded ">izin</button>
                                <button className="bg-green-400 text-white px-[15px] py-[3px] rounded ">sakit</button>
                            </div>
                        </div>
                        <PresensiItem />
                        <PresensiItem />
                        <PresensiItem />
                        <PresensiItem />
                        <PresensiItem />
                        <PresensiItem />
                        <PresensiItem />
                        <PresensiItem />
                        <PresensiItem />
                    </div>
                    <div className="flex justify-end">
                        <button onClick={handleChangePresensi} className="bg-[#078DCC] text-white px-[70px] py-[5px] rounded mr-[20px] mt-[20px] self-end">
                            Selesai
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PresensiSiswa