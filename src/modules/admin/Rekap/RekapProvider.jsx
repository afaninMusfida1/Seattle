import React, { createContext, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetJurnal } from './requestRekap';
import { apiGetKelas } from '../crud-kelas/request';
import { apiGetJurnalById } from '../../gurug/crud-jurnal/requestsJurnal';


const initRekapState = {
    jurnalList: [],
    daftarKelas: [],
    isLoading: false,
    location: '',
    handleFetchJurnal: () => { },
    handleGetJurnalByKelas: () => { },
}

const RekapContext = createContext();

export const useRekap = () => useContext(RekapContext);

export const RekapProvider = ({ children }) => {
    const [jurnalList, setJurnalList] = useState([]);
    const [daftarKelas, setDaftarKelas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [selectedKelas, setSelectedKelas] = useState(null);
    const { kelas_id } = useParams();

    const handleFetchJurnal = async (kelas_id) => {
        const data = await apiGetJurnal(kelas_id);
        setJurnalList(data);
    };

    const handleFetchKelas = async () => {
        const data = await apiGetKelas();
        setDaftarKelas(data)
    };

    const handleGetJurnalByKelas = async (kelas_id) => {
        if (isLoading) return
        setIsLoading(true)

        const data = await apiGetJurnalById(kelas_id);
        setJurnalList(data)
        setIsLoading(false)

        return data;
    };

    return (
        <RekapContext.Provider value={{
            selectedKelas,
            jurnalList,
            daftarKelas,
            isLoading,
            location,
            setSelectedKelas,
            handleGetJurnalByKelas,
            handleFetchJurnal,
            handleFetchKelas
        }}>
            {children}
        </RekapContext.Provider>
    );
};
