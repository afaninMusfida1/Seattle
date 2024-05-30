import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addSiswa, apiGetSiswa, deleteSiswa, editSiswa, searchSiswaApi } from './RequestSiswa';

const initSiswaState = {
    siswaList: [],
    isLoading: false,
    handleAdd: () => { },
    handleUpdate: () => { },
    handleDelete: () => { },
    handleFetch: () => { },
    searchSiswa: () => { },
};

const SiswaContext = createContext(initSiswaState);
export const useSiswa = () => useContext(SiswaContext);

export const SiswaProvider = ({ children }) => {
    const [siswaList, setSiswaList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); // Tambahkan useNavigate di sini

   //get kelas

   useEffect(() => {
    handleFetch();
   }, []);
   
    const handleFetch = () => {
        setIsLoading(true);
        apiGetSiswa()
            .then(data => {
                setSiswaList(Array.isArray(data) ? data : []);
                setIsLoading(false);
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('adminToken');
                    navigate('/login'); // Navigasi ke halaman login
                }
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
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('adminToken');
                    navigate('/login'); // Navigasi ke halaman login
                }
                alert("Gagal menambahkan siswa. Terjadi kesalahan: " + error);
                setIsLoading(false);
            });
    };

    const handleDelete = (id) => {
        if (isLoading) return;
        setIsLoading(true);

        deleteSiswa(id)
            .then(response => {
                if (response && response.status === 200) {
                    setSiswaList(prevList => prevList.filter(siswa => siswa.id !== id));
                    alert("Berhasil mendelete");
                } else {
                    alert("Gagal mendelete siswa");
                }
                setIsLoading(false);
            })
            .catch(error => {
                handleUnauthorizedError(error);
                alert("Gagal mendelete siswa. Terjadi kesalahan: " + error);
                setIsLoading(false);
            });
    };

    const handleUpdate = (id, updatedDataSiswa) => {
        if (isLoading) return;
        setIsLoading(true);

        editSiswa(id, updatedDataSiswa)
            .then(response => {
                if (response && response.status === 200) {
                    setSiswaList(prevList => prevList.map(siswa =>
                        siswa.id === id ? { ...siswa, ...updatedDataSiswa } : siswa
                    ));
                    alert("Berhasil mengupdate");
                } else {
                    alert("Gagal mengupdate siswa");
                }
                setIsLoading(false);
            })
            .catch(error => {
                handleUnauthorizedError(error);
                alert("Gagal mengupdate siswa. Terjadi kesalahan: " + error);
                setIsLoading(false);
            });
    };


    const searchSiswa = (kategori, kelas, nama) => {
        setIsLoading(true);
        return searchSiswaApi(kategori, kelas, nama)
            .then(data => {
                // Filter data berdasarkan kategori, kelas, dan nama
                const filteredData = data.filter(siswa => {
                    let matchKategori = true;
                    let matchKelas = true;
                    let matchNama = true;

                    if (kategori && siswa.kategori !== kategori) {
                        matchKategori = false;
                    }

                    if (kelas && siswa.kelas_id !== kelas) {
                        matchKelas = false;
                    }

                    if (nama && !siswa.nama.toLowerCase().includes(nama.toLowerCase())) {
                        matchNama = false;
                    }

                    return matchKategori && matchKelas && matchNama;
                });

                setSiswaList(filteredData);
                setIsLoading(false);
                return filteredData;
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('adminToken');
                    navigate('/login');
                }
                setIsLoading(false);
                return [];
            });
    };

    return (
        <SiswaContext.Provider value={{ siswaList, setSiswaList, handleDelete, handleUpdate, handleFetch, handleAdd, searchSiswa }}>
            {children}
        </SiswaContext.Provider>
    );
};
