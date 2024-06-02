import axios from "axios";

export const fetchPresensiBySiswaId = (siswa_id) => {
    return axios.get(`/presensi/siswa/${siswa_id}`);
};
