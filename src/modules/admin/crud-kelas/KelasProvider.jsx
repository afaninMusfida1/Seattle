import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { addKelas, apiGetKelas } from "./request";
import { http } from "../../config/Url";

const initKelasState = {
    daftarKelas: [],
    location: '',
    setDaftarKelas: () => { },
    handleFetch: () => { },
    handleAdd: () => { },
    handleDelete: () => { },
    handleUpdate: () => { },
    isLoading: false
};

const KelasContext = createContext(initKelasState);
export const useKelas = () => useContext(KelasContext);

export const KelasProvider = ({ children }) => {
    const [daftarKelas, setDaftarKelas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState('');

    const handleFetch = async () => {
        const data = await apiGetKelas();
        setDaftarKelas(data);
    };

    const handleAdd = async (nama_kelas, kategori, periode, jadwal_kelas) => {
        if (isLoading) return;

        setIsLoading(true);

        const apiCall = await addKelas(nama_kelas, kategori, periode, jadwal_kelas);
        setIsLoading(false);

        return apiCall;
    };

    // useEffect(() => {
    //     handleFetch();
    // }, []);

    const handleDelete = (id) => {
        if (isLoading) return;
        setIsLoading(true);

        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            setIsLoading(false);
            return;
        }

        axios.delete(`${http}/kelas/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                setDaftarKelas(prevList => prevList.filter(kelas => kelas.id !== id));
                setIsLoading(false);
                alert("Berhasil Mendelete");
            })
            .catch(error => {
                console.error("Error deleting kelas:", error.response ? error.response.data : error.message);
                setIsLoading(false);
                alert("Gagal mendelete kelas");
            });
    };

    const handleUpdate = (id, updatedData) => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        }

        axios.put(`${http}/kelas/${id}`, updatedData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setDaftarKelas(prevList => prevList.map(kelas =>
                    kelas.id === id ? { ...kelas, ...updatedData } : kelas
                ));
                alert("Berhasil Mengupdate");
                return response
            })
            .catch(error => {
                console.error("Error updating kelas:", error.response ? error.response.data : error.message);

            })
    };

    return (
        <KelasContext.Provider value={{
            daftarKelas,
            location,
            isLoading,
            setDaftarKelas,
            handleFetch,
            handleAdd,
            handleDelete,
            handleUpdate,
            setLocation
        }}>
            {children}
        </KelasContext.Provider>
    )

}