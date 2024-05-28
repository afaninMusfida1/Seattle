import { createContext, useContext, useState } from "react"
import { handleLoginAdmin } from "../modules/config/Api";

const initContext = {
    doLoginAdmin: () => { },
    doLogout: () => { },
    error: "",
    isLoggedIn: [],
    setIsLoggedIn: []
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

    const doLogout = () => {
        localStorage.removeItem('adminToken');
        setIsLoggedIn(false);
    };

    return (
        <authContext.Provider value={{
            doLoginAdmin,
            doLogout,
            error,
            isLoggedIn,
            setIsLoggedIn
        }}>
            {children}
        </authContext.Provider>
    )
}
