import { React, createContext, useContext, useState } from 'react';
import axios from 'axios';
import { http } from '../../config/Url';
import { addJurnal, apiGetJurnal, apiGetKelas, apiGetJurnalByTanggal, deleteJurnal, editJurnal, apiGetJurnalByKelas } from './requestsJurnal';

const initJurnalState = {
    jurnalList: [],
    daftarKelas: [],
    isLoading: false,
    location: '',
    handleFetchJurnal: () => { },
    handleGetJurnalByKelas: () => { },
    handleCheckKbm: () => { },
    handleFetchKelas: () => { },
    handleAdd: () => { },
    handleDelete: () => { },
    handleUpdate: () => { },
};

const JurnalContext = createContext(initJurnalState);

export const useJurnal = () => useContext(JurnalContext);

export const JurnalProvider = ({ children }) => {
    const [jurnalList, setJurnalList] = useState([]);
    const [daftarKelas, setDaftarKelas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [selectedKelas, setSelectedKelas] = useState(null);

    const handleFetchJurnal = async (kelas_id) => {
        const data = await apiGetJurnal(kelas_id);
        setJurnalList(data);
    };

    const handleFetchKelas = async () => {
        const data = await apiGetKelas();
        setDaftarKelas(data)
    };

    const handleAdd = async (guru_id, kelas_id, hasil_belajar, tanggal) => {
        if (isLoading) return
        setIsLoading(true)

        const apiCall = await addJurnal(guru_id, kelas_id, hasil_belajar, tanggal)
        setIsLoading(false)
        return apiCall;

    };

    //comming soon code
    const handleCheckKbm = async (kelas_id, tanggal) => {
        if (isLoading) return
        setIsLoading(true)

        const apiCall = await apiGetJurnalByTanggal(kelas_id, tanggal);
        setIsLoading(false)

        return apiCall
    };

    const handleGetJurnalByKelas = async (kelas_id) => {
        if (isLoading) return
        setIsLoading(true)

        const data = await apiGetJurnalByKelas(kelas_id);
        setJurnalList(data)
        setIsLoading(false)

        return data;
    }

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
        handleFetchJurnal()
        return apiCall;
    };

    const handleUpdate = async (id, kelas_id, hasil_belajar) => {
        if (isLoading) return
        const token = localStorage.getItem('guruToken');

        setIsLoading(true)
        const apiCall = await editJurnal(id, kelas_id, hasil_belajar);
        setIsLoading(false)
        handleFetchJurnal()
        return apiCall
    };


    return (
        <JurnalContext.Provider value={{
            daftarKelas,
            jurnalList,
            setJurnalList,
            isLoading,
            location,
            selectedKelas,
            setSelectedKelas,
            handleAdd,
            handleFetchJurnal,
            handleGetJurnalByKelas,
            handleCheckKbm,
            handleFetchKelas,
            handleDelete,
            handleUpdate
        }}>
            {children}
        </JurnalContext.Provider>
    );
};