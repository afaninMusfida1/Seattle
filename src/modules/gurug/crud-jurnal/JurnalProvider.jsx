import { React, createContext, useContext, useState } from 'react';
import axios from 'axios';
import { http } from '../../config/Url';
import { addJurnal, apiGetJurnal, apiGetJurnalByTanggal, deleteJurnal, editJurnal } from './requestsJurnal';

const initJurnalState = {
    handleAdd: () => { },
    handleFetch: () => { },
    handleDelete: () => { },
    handleUpdate: () => { },
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
        console.log(`data jurnal`, data)
        setJurnalList(data);
    };

    const handleAdd = async (guru_id, kelas_id, hasil_belajar, tanggal) => {
        if (isLoading) return
        setIsLoading(true)

        const apiCall = await addJurnal(guru_id, kelas_id, hasil_belajar, tanggal)
        setIsLoading(false)
        return apiCall;

    };

    //comming soon code
    const handleCheckKbm = async (hasil_belajar, tanggal) => {
        if (isLoading) return
        setIsLoading(true)

        const apiCall = await apiGetJurnalByTanggal(tanggal);
        setIsLoading(false)

        return apiCall
    };

    const handleDelete = async (id) => {
        if (isLoading) return
        const token = localStorage.getItem('guruToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        };
        setIsLoading(true)
        const apiCall = await deleteJurnal(id);
        setIsLoading(false);
        return apiCall;
    };

    const handleUpdate = async (kelas_id, guru_id, hasil_belajar, tanggal) => {
        if(isLoading) return
        const token = localStorage.getItem('guruToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        }
        setIsLoading(true)
        const apiCall = await editJurnal(kelas_id, guru_id, hasil_belajar, tanggal);
        setIsLoading(false)
        return apiCall
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