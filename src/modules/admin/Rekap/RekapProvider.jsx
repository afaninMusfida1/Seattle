import React, { createContext, useContext, useState } from 'react';

const RekapContext = createContext();

export const useRekap = () => useContext(RekapContext);

export const RekapProvider = ({ children }) => {
    const [selectedKelas, setSelectedKelas] = useState(null);

    return (
        <RekapContext.Provider value={{ selectedKelas, setSelectedKelas }}>
            {children}
        </RekapContext.Provider>
    );
};
