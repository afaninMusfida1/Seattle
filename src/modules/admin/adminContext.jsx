import { createContext, useContext, useState } from 'react';
import { addGuru, tampilkan } from '../config/Api';

const initContext = {
    handleAddGuru: () => {},
    handleFetchData: () => {},
    guruList: [],
};

const AdminContext = createContext(initContext);

const useAdmin = () => {
    return useContext(AdminContext);
};

const LayoutProvider = ({ children }) => {
    const [guruList, setGuruList] = useState([]);

    const handleFetchData = async () => {
        const apiFetch = await tampilkan();
        setGuruList(apiFetch.data.data.guruList ?? []);
    };

    const handleAddGuru = async (name, no_telp, no_telp_ortu, email, password) => {
        await addGuru(name, no_telp, no_telp_ortu, email, password);
        handleFetchData();
    };

    return (
        <AdminContext.Provider value={{ handleAddGuru, handleFetchData, guruList }}>
            {children}
        </AdminContext.Provider>
    );
};

export { useAdmin, LayoutProvider };
