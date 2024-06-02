import { createContext, useContext, useState } from "react"
import { fetchPengumuman, handleAddPengumuman, handleLoginAdmin, handleLoginSiswa } from "../modules/config/Api";
import { handleLoginGuru } from "../modules/auth/LoginGuru/request"

const initContext = {
    doLoginAdmin: () => { },
    doLoginGuru: () => { },
    doLogout: () => { },
    doLoginOrtuSiswa: ()=> {},
    role: "",
    error: "",
    isLoggedIn: [],
    announcements: [],
    fetchAnnouncement: () => {},
    addAnnouncement: () => {},
}

const authContext = createContext(initContext);

export const useAuth = () => {
    return useContext(authContext);
}

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState("")
    const [role, setRole] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [announcements, setAnnouncements] = useState([]);

    const doLoginAdmin = async (username, password) => {
        // Call the login API
        return handleLoginAdmin(username, password)
            .then(apiResult => {

                // If token exists in response data, handle login
                if (apiResult && apiResult.data.token) {
                    // Save token to local storage
                    localStorage.setItem('adminToken', apiResult.data.token);
                    // Set logged in state
                    setIsLoggedIn(true);
                    setRole("Admin")
                    return { token: apiResult.data.token }; // Return token for further use
                } else {
                    // Handle invalid response from server
                    console.error('Login failed: Unexpected response from server');
                    return { message: 'Unexpected response from server' };
                }
            })
            .catch(error => {
                // Handle network errors or other exceptions
                console.error('Error occurred while logging in:', error);
                return { message: 'Error occurred while logging in' };
            });
    };

    const doLoginGuru = async (email, password) => {
        // Call the login API
        return handleLoginGuru(email, password)
            .then(apiResult => {
                console.log('test login guru', apiResult); // Check response structure
                // If token exists in response data, handle login
                if (apiResult && apiResult.data.token) {
                    // Save token to local storage
                    localStorage.setItem('guruToken', apiResult.data.token);
                    // Set logged in state
                    setIsLoggedIn(true);
                    setRole("Guru")
                    return { token: apiResult.data.token }; // Return token for further use
                } else {
                    // Handle invalid response from server
                    console.error('Login failed: Unexpected response from server');
                    return { message: 'Unexpected response from server' };
                }
            })
            .catch(error => {
                // Handle network errors or other exceptions
                console.error('Error occurred while logging in:', error);
                const message = error.response?.data?.message || 'Error occurred while logging in';
                setError(message);
                return { message };
            });
            console.log(email)
    };

    const doLogout = () => {
        if(apiResult.data.token == 'adminToken') {
            localStorage.removeItem('adminToken');
        }
        localStorage.removeItem('guruToken');
        setIsLoggedIn(false);
    };

    const doLoginOrtuSiswa = async (email, password) => {
        // Call the login API
        return handleLoginSiswa(email, password)
            .then(apiResult => {
                console.log('test login siswa', apiResult); // Check response structure
                // If token exists in response data, handle login
                if (apiResult && apiResult.data.token) {
                    // Save token to local storage
                    localStorage.setItem('siswaToken', apiResult.data.token);
                    // Set logged in state
                    setIsLoggedIn(true);
                    setRole("Siswa")
                    return { token: apiResult.data.token }; // Return token for further use
                } else {
                    // Handle invalid response from server
                    console.error('Login failed: Unexpected response from server');
                    return { message: 'Unexpected response from server' };
                }
            })
            .catch(error => {
                // Handle network errors or other exceptions
                console.error('Error occurred while logging in:', error);
                const message = error.response?.data?.message || 'Error occurred while logging in';
                setError(message);
                return { message };
            });
            console.log(email)
    };

    const doLogoutSiswa = () => {
        // Hapus token dari local storage dan set status logged out
        localStorage.removeItem('siswaToken');
        setIsLoggedIn(false);
        
    };

    const fetchAnnouncement = async () => {
        try {
            const data = await fetchPengumuman();
            if (data && data.data && data.data.announcement) {
                setAnnouncements(data.data.announcement);
                console.log("Data pengumuman:", data.data.announcement);
            }
        } catch (error) {
            console.error('Error fetching announcement:', error);
            setError('Failed to fetch announcements');
        }
    };

    const addAnnouncement = async (title, content) => {
        try {
            const response = await handleAddPengumuman(title, content);
            if (response && response.data) {
                setAnnouncements(prevAnnouncements => [...prevAnnouncements, response.data]);
            }
        } catch (error) {
            console.error('Error adding announcement:', error);
            setError('Failed to add announcement');
        }
    };

    return (
        <authContext.Provider value={{
            doLoginAdmin,
            doLoginGuru,
            doLogout,
            doLoginOrtuSiswa,
            doLogoutSiswa,
            role,
            error,
            isLoggedIn,
            setIsLoggedIn,
            announcements,
            fetchAnnouncement,
            addAnnouncement,
        }}>
            {children}
        </authContext.Provider>
    )
}