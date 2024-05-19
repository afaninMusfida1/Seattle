import { createContext, useContext, useState } from "react"
import { handleLoginGuru } from "../modules/auth/LoginGuru/request"; 

const initContext = {
    doLoginGuru: () => { },
    doLogout: () => { },
    error: "",
    isLoggedIn: []
}

const authContext = createContext(initContext);

export const useLoginGuru = () => {
    return useContext(authContext);
}

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        localStorage.removeItem('guruToken');
        setIsLoggedIn(false);
    };

    return (
        <authContext.Provider value={{
            doLoginGuru,
            doLogout,
            error,
            isLoggedIn
        }}>
            {children}
        </authContext.Provider>
    )
}
