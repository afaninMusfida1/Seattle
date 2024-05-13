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

    const handleFetchData = () => {
        const token = getToken();
        axios.get(`${http}/guru`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setGuruList(response.guruList.data.data);
          console.log(guruList.data)
        })
        .catch((error) => {
          console.error('Error fetching guru data:', error);
        });
      };

      const handleAddGuru = async (name, no_telp, no_telp_ortu, email, password) => {
        await addGuru(name, no_telp, no_telp_ortu, email, password)
            .then(() => {
                handleFetchData(); 
            })
            .catch((error) => {
                console.error('Error adding guru:', error);
            });
    };
    

    return (
        <AdminContext.Provider value={{ handleAddGuru, handleFetchData, guruList }}>
            {children}
        </AdminContext.Provider>
    );
};

export { useAdmin, LayoutProvider };
