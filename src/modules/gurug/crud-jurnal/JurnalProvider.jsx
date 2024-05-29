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

    const handleCheckKbm = (tanggal) => {
        const apiCall = apiGetJurnal(tanggal)
    }

    const handleAdd = async (guru_id, kelas_id, hasil_belajar, tanggal ) => {
        if(isLoading) return
        setIsLoading(true)

        const apiCall = await addJurnal(guru_id, kelas_id, hasil_belajar, tanggal )
        setIsLoading(false)

        return apiCall;

    };

    const handleDelete = async (id) => {
        if(isLoading) return
        setIsLoading(true)

        const token = localStorage.getItem('guruToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        };

        return axios.delete(`${http}/kbm/5${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
            setJurnalList(prevList => prevList.filter(jurnal => jurnal.id !== id));
            setIsLoading(false)
            alert("berhasil menghapus")
            // return { success: true };
        })
        .catch(error => {
            console.error("Error deleting jurnal:", error.response ? error.response.data : error.message);
            setIsLoading(false)
            // return { success: false, message: error.response ? error.response.data.message : error.message };
        });
    };

    const handleUpdate = async (id, updatedData) => {
        const token = localStorage.getItem('guruToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        }

        return axios.put(`${http}/kbm/4${id}`, updatedData, {
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