import { Outlet } from "react-router-dom"
import { SiswaProvider } from "./SiswaProvider"

const SiswaWrapper = ({children}) => {
    return (
        <SiswaProvider>
            <Outlet />
        </SiswaProvider>
    )
}

export default SiswaWrapper