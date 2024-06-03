import axios from "axios";
import { API_URL } from "../../config/Url";

export const fetchPresensiBySiswaId = (siswa_id) => {
    return axios.get(`${API_URL}/presensi/siswa/${siswa_id}`);
    .then(result => {
        if (result.status === 'success' && result.data.dataPresensi) {
          setPresensiList(result.data.dataPresensi);
        } else {
          setError('Error fetching data');
        }
      })
      .catch(err => {
        setError(err.message);
      })
};
