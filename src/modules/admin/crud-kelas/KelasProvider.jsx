import { createContext, useContext, useState } from "react";
import { addKelas, apiGetKelas } from "./request";

const initKelasState = {
    daftarKelas: [],
    handleFetch: () => {},
    handleAdd: () => { },
    handleEdit: () => { },
    isLoading: false
};

const KelasContext = createContext(initKelasState)
export const useKelas = () => useContext(KelasContext)

export const KelasProvider = ({ children }) => {
    const [daftarKelas, setDaftarKelas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = async () => {
        const data = await apiGetKelas(); // Ambil data guru dari API
        setDaftarKelas(data); // Setel data guru ke dalam state
    };

    const handleAdd = async (nama_kelas, kategori, periode, jadwal_kelas) => {
        if (isLoading) return

        setIsLoading(true)

        const apiCall = await addKelas(nama_kelas, kategori, periode, jadwal_kelas)
        setIsLoading(false)

        return apiCall
    };


    return (
        <KelasContext.Provider value={{ daftarKelas, setDaftarKelas, handleFetch, handleAdd }}>
            {children}
        </KelasContext.Provider>
    )

}