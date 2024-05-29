import { createContext, useContext, useEffect, useState } from "react";
import { apiGetKelas } from "./request";

const initKelasState = {
    handleFetch: () => { },
    isLoading: false
};

const KelasContext = createContext(initKelasState)
export const useKelas = () => useContext(KelasContext)

export const KelasProvider = ({ children }) => {
    const [daftarKelas, setDaftarKelas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = async () => {
        const data = await apiGetKelas(); // Ambil data kelas dari API
        console.log(data)
        setDaftarKelas(data); // Setel data kelas ke dalam state
    };

    useEffect(() => {
        handleFetch()
    }, []) //dikosongkan untuk menghindari infinte loop pada console

    return (
        <KelasContext.Provider value={{ daftarKelas, handleFetch, handleAdd }}>
            {children}
        </KelasContext.Provider>
    )

}