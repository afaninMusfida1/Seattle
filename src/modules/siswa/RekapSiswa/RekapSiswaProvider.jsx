import { createContext, useContext } from "react";
const RekapSiswaContext = createContext(initRekapSiswaState);
export const useRekapSiswa = () => useContext(RekapSiswaContext);

export const RekapSiswaProvider = ({ children }) => {

    const handleFetchPresensi = (siswa_id) => {
        axios.get(`/presensi/siswa/${siswa_id}`)
            .then(response => {
                setPresensiList(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    };

    return (
        <RekapSiswaContext.Provider value={{ handleFetchPresensi }}>
            {children}
        </RekapSiswaContext.Provider>
    );
};
