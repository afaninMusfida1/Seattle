import { Outlet } from "react-router-dom"
import { KelasProvider } from "KelasProvider"

const KelasWrapper = ({children}) => {
    return (
        <KelasProvider>
            <Outlet />
        </KelasProvider>
    )
}

export default KelasWrapper;