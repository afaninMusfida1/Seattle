// import {createContext, useContext, useEffect, useState } from "react"
// import { handleLogin } from "../config/Api"

// //nilai default
// const initialAuthState = {
//     isLoggedin: false,
//     doLogin: () => { },
//     doLogout: () => { }
// }

// //context
// const AuthContext = createContext(initialAuthState)

// //custom hooks
// const useAuth = () => {
//     return useContext(AuthContext)
// }

// //provider
// const AuthProvider = ({children}) =>  {
//     //state 
//     const [isLoggedin, setIsLoggedin] = useState(false)

//     useEffect(() => {
//         const token = getToken()
//         if (token != null) {
//             setIsLoggedin(true)
//         }
//     },[])

//     //function
//     const doLogin = async (username, password) => {
//     //memanggil api dengan data email & password
//     console.log(username, password)

//     //memanggil menggunakan axios
//     const apiresult = await handleLogin(username, password)
//     console.log(apiresult)
//     console.log(apiresult.data.data.accessToken)

//     //jika berhasil setisloggedin (true)
//     setIsLoggedin(true)
//     setTokens(apiresult.data.data.accessToken)
//     //simpan token kedalam local storage

//     //jika gagal tampilkan peringatan
    
//     }

//     const doLogout = () => {
//         setIsLoggedin(false)
//         removeToken()
//     }

// //return
// return (
//     <AuthContext.Provider value={{ isLoggedin, doLogin, doLogout }}>
//         {children}
//     </AuthContext.Provider>
// )
// }

// //export provider & hooks
// export {AuthProvider, useAuth}