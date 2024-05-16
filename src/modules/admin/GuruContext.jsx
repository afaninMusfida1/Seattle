import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { http } from '../config/Url';

const GuruContext = createContext();

export const GuruProvider = ({ children }) => {
    const [guruList, setGuruList] = useState([]);

    const handleDelete = (id) => {
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
            alert("Berhasil Mendelete");
        })
        .catch(error => {
            console.error("Error deleting guru:", error.response ? error.response.data : error.message);
            alert("Gagal mendelete guru");
        });
    };

    const handleUpdate = (id, updatedData) => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        }

        axios.put(`${http}/guru/${id}`, updatedData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setGuruList(prevList => prevList.map(guru => 
                guru.id === id ? { ...guru, ...updatedData } : guru
            ));
            alert("Berhasil Mengupdate");
        })
        .catch(error => {
            console.error("Error updating guru:", error.response ? error.response.data : error.message);
            alert("Gagal mengupdate guru");
        });
    };

    return (
        <GuruContext.Provider value={{ guruList, setGuruList, handleDelete, handleUpdate }}>
            {children}
        </GuruContext.Provider>
    );
};

export const useGuru = () => useContext(GuruContext);
