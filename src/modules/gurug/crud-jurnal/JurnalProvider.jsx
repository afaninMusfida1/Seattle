import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { http } from '../../config/Url';

const initJurnalState = {
    addJurnal: () => {},
    fetchJurnal: () => {},
    deleteJurnal: () => {},
    editJurnal: () => {},
    jurnalList: [],
    isLoading: false,
};

const JurnalContext = createContext(initJurnalState);

export const useJurnal = () => useContext(JurnalContext);

export const JurnalProvider = ({ children }) => {
    const [jurnalList, setJurnalList] = useState(initJurnalState.jurnalList);
    const [isLoading, setIsLoading] = useState(initJurnalState.isLoading);

    const fetchJurnal = async () => {
        const token = localStorage.getItem('guruToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return Promise.resolve({ message: "Token not found. Please login again." });
        }

        return axios.get(`${http}/jurnal`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setJurnalList(response.data.data);
            return response.data.data;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            return error.response?.data ?? { message: "Unknown error" };
        });
    };

    const addJurnal = async (newJurnal) => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return Promise.resolve({ success: false, message: "Token not found. Please login again." });
        }

        return axios.post(`${http}/jurnal`, newJurnal, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setJurnalList(prevList => [...prevList, response.data]);
            return response.data;
        })
        .catch(error => {
            console.error("Error adding jurnal:", error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
    };

    const deleteJurnal = (id) => {
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
            return { success: true };
        })
        .catch(error => {
            console.error("Error deleting jurnal:", error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
    };

    const editJurnal = async (id, updatedData) => {
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
        addJurnal,
        fetchJurnal,
        deleteJurnal,
        editJurnal,
        jurnalList,
        isLoading
        }}>
            {children}
        </JurnalContext.Provider>
    );
};
