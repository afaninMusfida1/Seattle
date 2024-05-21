import { createContext, useContext, useState } from "react"
import { handleLoginAdmin } from "../modules/config/Api";
import { handleLoginGuru } from "../modules/auth/LoginGuru/request"

const initContext = {
    doLoginAdmin: () => { },
    doLoginGuru: () => { },
    doLogout: () => { },
    error: "",
    isLoggedIn: []
}

const authContext = createContext(initContext);

export const useAuth = () => {
    return useContext(authContext);
}

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const doLoginAdmin = async (username, password) => {
        // Call the login API
        return handleLoginAdmin(username, password)
            .then(apiResult => {
                console.log('test', apiResult); // Check response structure

                // If token exists in response data, handle login
                if (apiResult && apiResult.data.token) {
                    // Save token to local storage
                    localStorage.setItem('adminToken', apiResult.data.token);
                    // Set logged in state
                    setIsLoggedIn(true);
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
    };

    const doLogout = () => {
        if(apiResult.data.token == 'adminToken') {
            localStorage.removeItem('adminToken');
        }
        localStorage.removeItem('guruToken');
        setIsLoggedIn(false);
    };

    return (
        <authContext.Provider value={{
            doLoginAdmin,
            doLoginGuru,
            doLogout,
            error,
            isLoggedIn,
            setIsLoggedIn
        }}>
            {children}
        </authContext.Provider>
    )
}
