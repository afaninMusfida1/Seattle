import { createContext, useContext, useEffect, useState } from "react";
import { addKelas, apiGetKelas } from "./request";

const initKelasState = {
    daftarKelas: [],
    handleFetch: () => {},
    handleAdd: () => { },
    isLoading: false
};

const KelasContext = createContext(initKelasState)
export const useKelas = () => useContext(KelasContext)

export const KelasProvider = ({ children }) => {
    const [daftarKelas, setDaftarKelas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = async () => {
        const data = await apiGetKelas(); // Ambil data guru dari API
        console.log(data)
        setDaftarKelas(data); // Setel data guru ke dalam state
    };

    const handleAdd = async (nama_kelas, kategori, periode, jadwal_kelas) => {
        if (isLoading) return

        setIsLoading(true)

        const apiCall = await addKelas(nama_kelas, kategori, periode, jadwal_kelas)
        setIsLoading(false)

        return apiCall
    };


    useEffect(() => {
        handleFetch()
    },[daftarKelas])


    return (
        <KelasContext.Provider value={{ daftarKelas, handleFetch, handleAdd }}>
            {children}
        </KelasContext.Provider>
    )

}