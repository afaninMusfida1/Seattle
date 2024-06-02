import React, { createContext, useContext, useState } from 'react';
import { apiGetJurnal, apiGetJurnalByKelas, apiGetKelas } from './requestRekap';
import { useParams } from 'react-router-dom';

const initRekapState = {
    jurnalList: [],
    daftarKelas: [],
    isLoading: false,
    location: '',
    handleFetchKelas: () => { },
    handleFetchJurnal: () => { },
    handleGetJurnalByKelas: () => { },
}

const RekapContext = createContext(initRekapState);

export const useRekap = () => useContext(RekapContext);

export const RekapProvider = ({ children }) => {
    const [jurnalList, setJurnalList] = useState([]);
    const [daftarKelas, setDaftarKelas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [selectedKelas, setSelectedKelas] = useState(null);
    const { kelas_id } = useParams();

    const handleFetchJurnal = async () => {
        const data = await apiGetJurnal();
        setJurnalList(data);
    };

    const handleFetchKelas = async () => {
        const data = await apiGetKelas(); // Added parentheses for function call
        setDaftarKelas(data);
    };

    const handleGetJurnalByKelas = async (kelas_id) => {
        console.log('Fetching jurnal for kelas_id:', kelas_id);
        if (isLoading) return;
        setIsLoading(true);

        const data = await apiGetJurnalByKelas(kelas_id); // Added parentheses for function call
        console.log('Fetched data:', data);
        setJurnalList(data);
        setIsLoading(false);

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
