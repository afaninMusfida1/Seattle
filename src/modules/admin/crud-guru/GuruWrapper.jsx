import { Outlet } from "react-router-dom"
import { GuruProvider } from "./GuruProvider"

const GuruWrapper = ({children}) => {
    return (
        <GuruProvider>
            <Outlet />
        </GuruProvider>
    )
}

export default GuruWrapper;