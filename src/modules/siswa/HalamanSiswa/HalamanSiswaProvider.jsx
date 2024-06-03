import React, { createContext, useContext, useState } from 'react';
import { getKelasBySiswaId } from './request';

const initHalamanSiswaState = {
    fetchKelasBySiswaId: () => {}
};

const HalamanSiswaContext = createContext(initHalamanSiswaState);
export const useHalamanSiswa = () => useContext(HalamanSiswaContext);

export const HalamanSiswaProvider = ({ children }) => {
    const [siswaList, setSiswaList] = useState(null);

    const fetchKelasBySiswaId = (siswaId) => {
        getKelasBySiswaId(siswaId)
            .then(data => {
                setSiswaList(data);
            })
            .catch(error => {
                console.error("Error fetching kelas by siswa ID:", error);
            });
    };

    return (
        <HalamanSiswaContext.Provider value={{fetchKelasBySiswaId, siswaList}}>
            {children}
        </HalamanSiswaContext.Provider>
    );
};
