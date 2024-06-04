import { NavLink } from "react-router-dom";

export default function StartingLayout(){
    return(
        <>
            <>
                <div className="flex flex-col h-[100vh] items-center justify-center gap-[2em] bg-[]">
                    <NavLink to={"/guru"} className="btn-starting">Guru</NavLink>
                    <NavLink to={"/siswa/ortu"} className="btn-starting">Siswa</NavLink>
                    <NavLink to={"/auth/admin"} className="btn-starting">Admin</NavLink>
                </div>
            </>
        </>
    );
}