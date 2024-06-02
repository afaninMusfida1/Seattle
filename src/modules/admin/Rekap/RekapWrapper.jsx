import { Outlet } from "react-router-dom"
import { RekapProvider } from "./RekapProvider"
import { KelasProvider } from "../crud-kelas/KelasProvider"

const RekapWrapper = ({ children }) => {
    return (
        <KelasProvider>
            <RekapProvider>
                <Outlet />
            </RekapProvider>
        </KelasProvider>

    )
}

export default RekapWrapper