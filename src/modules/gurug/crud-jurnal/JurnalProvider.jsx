import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { http } from '../../config/Url';
import { addJurnal, apiGetJurnal } from './requestsJurnal';

const initJurnalState = {
    handleAdd: () => {},
    handleFetch: () => {},
    handleDelete: () => {},
    handleUpdate: () => {},
    jurnalList: [],
    isLoading: false,
};

const JurnalContext = createContext(initJurnalState);

export const useJurnal = () => useContext(JurnalContext);

export const JurnalProvider = ({ children }) => {
    const [jurnalList, setJurnalList] = useState([]);
    const [isLoading, setIsLoading] = useState();

    const handleFetch = async () => {
        const data = await apiGetJurnal();
        setJurnalList(data);

    };

    const handleAdd = async (date, pengajar, kelas, materi) => {
        if(isLoading) return
        setIsLoading(true)

        const apiCall = await addJurnal(date, pengajar, kelas, materi)
        setIsLoading(false)

        return apiCall;

    };

    const handleDelete = async (id) => {
        if(isLoading) return
        setIsLoading(true)

        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return Promise.resolve({ message: "Token not found. Please login again." });
        }

        return axios.delete(`${http}/jurnal/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
            setJurnalList(prevList => prevList.filter(jurnal => jurnal.id !== id));
            setIsLoading(false)
            return { success: true };
        })
        .catch(error => {
            console.error("Error deleting jurnal:", error.response ? error.response.data : error.message);
            setIsLoading(false)
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
    };

    const handleUpdate = async (id, updatedData) => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return Promise.resolve({ message: "Token not found. Please login again." });
        }

        return axios.put(`${http}/jurnal/${id}`, updatedData, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setJurnalList(prevList => prevList.map(jurnal => jurnal.id === id ? { ...jurnal, ...updatedData } : jurnal));
            return response.data;
        })
        .catch(error => {
            console.error("Error updating jurnal:", error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
    };
    

    return (
        <JurnalContext.Provider value={{  
        handleAdd,
        handleFetch,
        handleDelete,
        handleUpdate,
        jurnalList,
        isLoading
        }}>
            {children}
        </JurnalContext.Provider>
    );
};
