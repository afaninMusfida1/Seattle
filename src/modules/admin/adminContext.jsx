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

const AdminProvider = ({ children }) => {
    const [guruList, setGuruList] = useState([]);

    const handleFetchData = () => {
        tampilkan()
            .then(data => {
                setGuruList(data);
                console.log("Fetched guruList: ", data); // Verify data
            })
            .catch(error => {
                console.error("Error fetching guru data: ", error);
            });
    };
    
    const handleAddGuru = async (name, no_telp, no_telp_ortu, email, password) => {
        try {
            await addGuru(name, no_telp, no_telp_ortu, email, password);
            // Refresh guru list after adding a new guru
            handleFetchData();
        } catch (error) {
            console.error("Error adding guru: ", error);
        }
    };

    return (
        <AdminContext.Provider value={{ handleAddGuru, handleFetchData, guruList }}>
            {children}
        </AdminContext.Provider>
    );
};

export { useAdmin, AdminProvider };
