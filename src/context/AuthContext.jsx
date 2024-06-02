import { createContext, useContext, useState } from "react";
import { handleLoginAdmin, handleLoginSiswa, handleAddPengumuman, fetchPengumuman } from "../modules/config/Api";
import { handleLoginGuru } from "../modules/auth/LoginGuru/request";

const initContext = {
    doLoginAdmin: () => { },
    doLoginGuru: () => { },
    doLogout: () => { },
    doLoginOrtuSiswa: () => {},
    fetchAnnouncement: () => {},
    addAnnouncement: () => {},
    role: "",
    error: "",
    isLoggedIn: false
};

const authContext = createContext(initContext);

export const useAuth = () => {
    return useContext(authContext);
};

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState("");
    const [role, setRole] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [announcement, setAnnouncement] = useState({ title: '', content: '' });

    const doLoginAdmin = (username, password) => {
        return handleLoginAdmin(username, password)
            .then(apiResult => {
                if (apiResult && apiResult.token) {
                    localStorage.setItem('adminToken', apiResult.token);
                    setIsLoggedIn(true);
                    setRole("Admin");
                    return { token: apiResult.token };
                } else {
                    console.error('Login failed: Unexpected response from server');
                    return { message: 'Unexpected response from server' };
                }
            })
            .catch(error => {
                console.error('Error occurred while logging in:', error);
                return { message: 'Error occurred while logging in' };
            });
    };

    const doLoginGuru = (email, password) => {
        return handleLoginGuru(email, password)
            .then(apiResult => {
                if (apiResult && apiResult.token) {
                    localStorage.setItem('guruToken', apiResult.token);
                    setIsLoggedIn(true);
                    setRole("Guru");
                    return { token: apiResult.token };
                } else {
                    console.error('Login failed: Unexpected response from server');
                    return { message: 'Unexpected response from server' };
                }
            })
            .catch(error => {
                console.error('Error occurred while logging in:', error);
                const message = error.response?.data?.message || 'Error occurred while logging in';
                setError(message);
                return { message };
            });
    };

    const doLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('guruToken');
        setIsLoggedIn(false);
    };

    const doLoginOrtuSiswa = (email, password) => {
        return handleLoginSiswa(email, password)
            .then(apiResult => {
                if (apiResult && apiResult.token) {
                    localStorage.setItem('siswaToken', apiResult.token);
                    setIsLoggedIn(true);
                    setRole("Siswa");
                    return { token: apiResult.token };
                } else {
                    console.error('Login failed: Unexpected response from server');
                    return { message: 'Unexpected response from server' };
                }
            })
            .catch(error => {
                console.error('Error occurred while logging in:', error);
                const message = error.response?.data?.message || 'Error occurred while logging in';
                setError(message);
                return { message };
            });
    };

    const fetchAnnouncement = () => {
        fetchPengumuman()
            .then(data => {
                if (data && data.title && data.content) {
                    setAnnouncement({ title: data.title, content: data.content });
                }
            })
            .catch(error => {
                console.error('Error fetching announcement:', error);
            });
    };

    const addAnnouncement = (title, content) => {
        return handleAddPengumuman(title, content)
            .then(response => {
                if (response && response.data) {
                    setAnnouncement({ title, content });
                }
            })
            .catch(error => {
                console.error('Error adding announcement:', error);
            });
    };

    return (
        <authContext.Provider value={{ doLoginAdmin, doLoginGuru, doLogout, doLoginOrtuSiswa, fetchAnnouncement, addAnnouncement, role, error, isLoggedIn, announcement }}>
            {children}
        </authContext.Provider>
    );
};
