import React, { createContext, useContext, useState } from 'react';
import { addSiswa, apiGetSiswa, deleteSiswa, editSiswa } from './RequestSiswa';

const initSiswaState = {
    siswaList: [],
    isLoading: false,
    handleAdd: () => {},
    handleUpdate: () => {},
    handleDelete: () => {},
    handleFetch: () => {},
};

const SiswaContext = createContext(initSiswaState);
export const useSiswa = () => useContext(SiswaContext);

export const SiswaProvider = ({ children }) => {
    const [siswaList, setSiswaList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = () => {
        setIsLoading(true);
        apiGetSiswa()
        .then(data => {
            setSiswaList(Array.isArray(data) ? data : []);
            setIsLoading(false);
        });
    };

    const handleAdd = (nama, kelas_id, no_telp_ortu, email, password) => {
        if (isLoading) return;
    
        setIsLoading(true);
    
        addSiswa(nama, kelas_id, no_telp_ortu, email, password)
        .then(apiCall => {
            if (apiCall && apiCall.success) { 
                setSiswaList(prevSiswaList => [...prevSiswaList, apiCall.data]);
                alert("Siswa ditambahkan");
            } else {
                alert("Gagal menambahkan siswa. Terjadi kesalahan.");
            }
            setIsLoading(false);
        })
        .catch(error => {
            alert("Gagal menambahkan siswa. Terjadi kesalahan: " + error);
            setIsLoading(false);
        });
    };
    

    const handleDelete = (id) => {
        if (isLoading) return;
        setIsLoading(true);

        deleteSiswa(id)
        .then(response => {
            if (response.status === 200) {
                setSiswaList(prevList => prevList.filter(siswa => siswa.id !== id));
                alert("Berhasil Mendelete");
            } else {
                alert("Gagal mendelete siswa");
            }
            setIsLoading(false);
        });
    };

    const handleUpdate = (id, updatedDataSiswa) => {
        if (isLoading) return;
        setIsLoading(true);

        editSiswa(id, updatedDataSiswa)
        .then(response => {
            if (response.status === 200) {
                setSiswaList(prevList => prevList.map(siswa => 
                    siswa.id === id ? { ...siswa, ...updatedDataSiswa } : siswa
                ));
                alert("Berhasil Mengupdate");
            } else {
                alert("Gagal mengupdate siswa");
            }
            setIsLoading(false);
        });
    };

    return (
        <SiswaContext.Provider value={{ siswaList, setSiswaList, handleDelete, handleUpdate, handleFetch, handleAdd }}>
            {children}
        </SiswaContext.Provider>
    );
};
