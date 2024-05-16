import React, { createContext, useContext, useState } from 'react';
import axios from "axios";
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

    return (
        <GuruContext.Provider value={{ guruList, setGuruList, handleDelete }}>
            {children}
        </GuruContext.Provider>
    );
};

export const useGuru = () => useContext(GuruContext);
