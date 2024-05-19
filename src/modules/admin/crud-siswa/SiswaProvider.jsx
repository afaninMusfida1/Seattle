import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/Url';
import {addSiswa, apiGetSiswa } from './RequestSiswa';

const initSiswaState = {
    siswaList: [], 
    isLoading: false,
    handleAdd: () => {},
    handleUpdate: () => {},
    handleDelete: () => {},
    handleFetch: () => {},
}

const SiswaContext = createContext(initSiswaState);
export const useSiswa = () => useContext(SiswaContext);

export const SiswaProvider = ({ children }) => {
    const [siswaList, setSiswaList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    const handleFetch = async () => {
        const data = await apiGetSiswa();
        setSiswaList(data); 
    };

    const handleAdd = async (nama, kelas_id, level, no_telp_ortu, email, password) => {
        if (isLoading) return

        setIsLoading(true)

        const apiCall = await addSiswa(nama, kelas_id, level, no_telp_ortu, email, password)
        setIsLoading(false)

        return apiCall
    }

    const handleDelete = (id) => {

        if (isLoading) return
        setIsLoading(true)

        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        }

        axios.delete(`${API_URL}/siswa/${id}`, {
            headers: {
                Authorization:` Bearer ${token}`
            }
        })
        .then(() => {
            setSiswaList(prevList => prevList.filter(siswa => siswa.id !== id));
            setIsLoading(false)
            alert("Berhasil Mendelete");
        })
        .catch(error => {
            console.error("Error deleting guru:", error.response ? error.response.data : error.message);
            setIsLoading(false)
            alert("Gagal mendelete guru");
        });
        
    };

    const handleUpdate = (id, updatedData) => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        }

        axios.put(`${API_URL}/siswa/${id}`, updatedData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setGuruList(prevList => prevList.map(siswa => 
                siswa.id === id ? { ...siswa, ...updatedData } : siswa
            ));
            alert("Berhasil Mengupdate");
        })
        .catch(error => {
            console.error("Error updating guru:", error.response ? error.response.data : error.message);
            alert("Gagal mengupdate guru");
        });
    };

    return (
        <SiswaContext.Provider value={{ siswaList, setSiswaList, handleDelete, handleUpdate, handleFetch, handleAdd }}>
            {children}
        </SiswaContext.Provider>
    );
};


