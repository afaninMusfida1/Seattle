import { createContext, useContext, useState } from "react";
import { apiGetKelas, apiGetSiswaByIdKelas, addPresensi, apiGetPresensiByTanggal, apiGetPresensiBySiswa, apiGetPresensi } from "./requestPresensi";
import { useParams } from "react-router-dom";
import { apiGetJurnalByTanggal } from "../crud-jurnal/requestsJurnal";

const initPresensiState = {
    presensiList: [],
    handleFetch: () => { },
    handleFetchPresensi: () => { },
    handleGetKbmId: () => { },
    handleFetchSiswaByIdKelas: () => { },
    handleAddPresensi: () => { },
    handleCekPresensi: () => { },
    handleFetchPresensi: () => { },
    isLoading: false
};

const PresensiContext = createContext(initPresensiState);
export const usePresensi = () => useContext(PresensiContext);

export const PresensiProvider = ({ children }) => {
    const [presensiList, setPresensiList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { kelas_id } = useParams()

    const handleFetch = async () => {
        const data = await apiGetKelas();
        console.log(data);
        setPresensiList(data);
    };

    // const handleFetchPresensi = async () => {
    //     const data = await apiGetPresensi();
    //     console.log(data);
    //     setPresensiList(data);
    // }

    const handleGetKbmId = async (kelas_id, tanggal) => {
        if (isLoading) return
        setIsLoading(true)

        const apiCall = await apiGetJurnalByTanggal(kelas_id, tanggal);
        const kbmId = apiCall.id
        setIsLoading(false);

        return kbmId;
    };

    const handleAddPresensi = async (kbm_id, siswa_id, keterangan) => {
        setIsLoading(true);

        const data = await addPresensi(kbm_id, siswa_id, keterangan)
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
        return data;
    };

    const handleCekPresensi = async (kelas_id, tanggal) => {
        if (isLoading) return
        setIsLoading(true)

        const data = await apiGetPresensiByTanggal(kelas_id, tanggal)
        setIsLoading(false);

        return data;
    }

    const handleFetchSiswaByIdKelas = async (kelas_id) => {
        const data = await apiGetSiswaByIdKelas(kelas_id);
        console.log(data);
        setPresensiList(data);
    };

    // const handleFetchPresensi = (siswa_id) => {
    //     setIsLoading(true);
    //     apiGetPresensiBySiswa(siswa_id)
    //         .then(response => {
    //             setPresensiList(response.data.data.dataPresensi);
    //             console.log(response.data.data.dataPresensi)
    //             setIsLoading(false);
    //         })
    //         .catch(err => {
    //             // console.error(err.message);
    //             setIsLoading(false);
    //         });
    // };

    const handleFetchPresensi = async (siswa_id) => {
        // setIsLoading(true);
        // setError(null);
        try {
            const data = await apiGetPresensiBySiswa(siswa_id);
            setPresensiList(data);
        } catch (err) {
            setError(err.message || "Error fetching presensi data");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PresensiContext.Provider value={{ presensiList, handleFetchPresensi, handleCekPresensi, handleAddPresensi, handleGetKbmId, handleFetch, handleFetchSiswaByIdKelas, setPresensiList, isLoading, setIsLoading }}>
            {children}
        </PresensiContext.Provider>
    );
};
