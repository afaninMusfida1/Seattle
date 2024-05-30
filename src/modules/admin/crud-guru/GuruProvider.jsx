import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { API_URL, http } from '../../config/Url';
import { addGuru, apiGetGuru } from './requests';

const initGuruState = {
    guruList: [], 
    nama: [],
    setGuruList: () => {}, 
    handleAdd: () => {},
    handleUpdate: () => {},
    handleDelete: () => {},
    handleFetch: () => {},
    isLoading: false,
}

const GuruContext = createContext(initGuruState);
export const useGuru = () => useContext(GuruContext);

export const GuruProvider = ({ children }) => {
    const [guruList, setGuruList] = useState([]);
    const [nama, setNama] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleFetch = async () => {
        const data = await apiGetGuru(); 
        setGuruList(data); 
        // console.log(guruList)
    };

    const handleAdd = async (nama, email, password) => {
        if (isLoading) return

        setIsLoading(true)

        const apiCall = await addGuru(nama, email, password)
        setIsLoading(false)

        return apiCall
    }

    const handleDelete = async (id) => {

        if (isLoading) return
        setIsLoading(true)

        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        }

        axios.delete(`${http}/guru/${id}`, {
            headers: {
                Authorization:` Bearer ${token}`
            }
        })
        .then(() => {
            setGuruList(prevList => prevList.filter(guru => guru.id !== id));
            setIsLoading(false)
            alert("Berhasil Mendelete");
        })
        .catch(error => {
            console.error("Error deleting guru:", error.response ? error.response.data : error.message);
            setIsLoading(false)
            alert("Gagal mendelete guru");
        });
        
    };

    const handleUpdate = async (id, updatedData) => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        }

        axios.put(`${API_URL}/guru/${id}`, updatedData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setGuruList(prevList => prevList.map(guru => 
                guru.id === id ? { ...guru, ...updatedData } : guru
            ));
            alert("Berhasil Mengupdate");
            return response.data
        })
        .catch(error => {
            console.error("Error updating guru:", error.response ? error.response.data : error.message);
            alert("Gagal mengupdate guru");
        });
    };

    

    return (
        <GuruContext.Provider value={{ guruList, nama, setGuruList, handleDelete, handleUpdate, handleFetch, handleAdd }}>
            {children}
        </GuruContext.Provider>
    );
};


