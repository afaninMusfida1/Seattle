import { createContext, useContext, useState } from "react";
import { apiGetKelas, apiGetSiswaByIdKelas } from "./request";

const initPresensiState = {
    handleFetch: () => {},
    handleFetchSiswaByIdKelas: () => {},
    handleAddPresensi: () => {},
    isLoading: false
};

const PresensiContext = createContext(initPresensiState);
export const usePresensi = () => useContext(PresensiContext);

export const PresensiProvider = ({ children }) => {
    const [presensiList, setPresensiList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = async () => {
        const data = await apiGetKelas();
        console.log(data);
        setPresensiList(data);
    };

    const handleAddPresensi = async (kbm_id, siswa_id, keterangan) => {
        setIsLoading(true);
        return addPresensi(kbm_id, siswa_id, keterangan)
            .then(newPresensi => {
                setPresensiList(prevList => [...prevList, newPresensi]);
                setIsLoading(false);
                return true; // Indicate success
            })
            .catch(error => {
                console.error('Error adding presensi:', error);
                setIsLoading(false);
                return false; // Indicate failure
            });
    };

    const handleFetchSiswaByIdKelas = async (kelas_id) => {
        const data = await apiGetSiswaByIdKelas(kelas_id);
        console.log(data);
        setPresensiList(data);
    };

    return (
        <PresensiContext.Provider value={{ presensiList, handleAddPresensi, handleFetch, handleFetchSiswaByIdKelas, setPresensiList, isLoading, setIsLoading }}>
            {children}
        </PresensiContext.Provider>
    );
};
