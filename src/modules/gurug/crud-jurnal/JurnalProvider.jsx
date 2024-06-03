import { React, createContext, useContext, useState } from 'react';
import axios from 'axios';
import { http } from '../../config/Url';
import { addJurnal, apiGetJurnal, apiGetKelas, apiGetJurnalByTanggal, deleteJurnal, editJurnal, apiGetJurnalByKelas } from './requestsJurnal';
import { useParams } from 'react-router-dom';
import { apiGetPresensi } from '../crud-presensi/requestPresensi';

const initJurnalState = {
    jurnalList: [],
    presensiList: [],
    daftarKelas: [],
    isLoading: false,
    location: '',
    handleFetchJurnal: () => { },
    handleFetchPresensi: () => { },
    handleGetJurnalByKelas: () => { },
    handleCheckKbm: () => { },
    handleGetKbmId: () => { },
    handleFetchKelas: () => { },
    handleAdd: () => { },
    handleDelete: () => { },
    handleUpdate: () => { },
};

const JurnalContext = createContext(initJurnalState);

export const useJurnal = () => useContext(JurnalContext);

export const JurnalProvider = ({ children }) => {
    const [jurnalList, setJurnalList] = useState([]);
    const [presensiList, setPresensiList] = useState([]);
    const [daftarKelas, setDaftarKelas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [selectedKelas, setSelectedKelas] = useState(null);
    const { kelas_id } = useParams();

    const handleFetchJurnal = async () => {
        const data = await apiGetJurnal();
        setJurnalList(data);
    };

    const handleFetchPresensi = async () => {
        const data = await apiGetPresensi();
        console.log(data);
        setPresensiList(data);
    }

    const handleFetchKelas = async () => {
        const data = await apiGetKelas();
        setDaftarKelas(data)
    };

    const handleAdd = async (guru_id, kelas_id, hasil_belajar, tanggal) => {
        if (isLoading) return
        setIsLoading(true)

        const data = await addJurnal(guru_id, kelas_id, hasil_belajar, tanggal)
        setIsLoading(false)
        return data;

    };

    const handleCheckKbm = async (kelas_id, tanggal) => {
        if (isLoading) return
        setIsLoading(true)

        const apiCall = await apiGetJurnalByTanggal(kelas_id, tanggal);
        setIsLoading(false);

        return apiCall;
    };

    const handleGetKbmId = async (kelas_id, tanggal) => {
        if (isLoading) return
        setIsLoading(true)

        const apiCall = await apiGetJurnalByTanggal(kelas_id, tanggal);
        const kbmId = apiCall.id
        setIsLoading(false);

        return kbmId;
    };

    const handleGetPresensiByKelas = async (kelas_id) => {
        
    }

    const handleGetJurnalByKelas = async (kelas_id) => {
        if (isLoading) return
        setIsLoading(true)

        const data = await apiGetJurnalByKelas(kelas_id);
        setJurnalList(data)
        setIsLoading(false)

        return data;
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
        handleGetJurnalByKelas(kelas_id)
        return apiCall;
    };

    const handleUpdate = async (id, kelas_id, hasil_belajar) => {
        if (isLoading) return
        const token = localStorage.getItem('guruToken');

        setIsLoading(true)
        const apiCall = await editJurnal(id, kelas_id, hasil_belajar);
        setIsLoading(false)
        // handleFetchJurnal()
        return apiCall
    };


    return (
        <JurnalContext.Provider value={{
            daftarKelas,
            jurnalList,
            presensiList,
            setJurnalList,
            isLoading,
            location,
            selectedKelas,
            handleFetchPresensi,
            setSelectedKelas,
            handleGetKbmId,
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