import { Outlet } from "react-router-dom";
import { JurnalProvider } from "./JurnalProvider";
import Jurnal from "./Jurnal";

const JurnalWrapper = ({children}) => {

    return (
        <JurnalProvider>
            <Jurnal/>
            <Outlet/>
        </JurnalProvider>
    )

};

export default JurnalWrapper;