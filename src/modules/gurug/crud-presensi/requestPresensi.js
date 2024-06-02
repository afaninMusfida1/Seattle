// import { getToken } from "../../config/Api";
import { API_URL } from "../../config/Url";
import axios from "axios";

// export const setTokens = () => {
//     localStorage.setItem("guruToken", token);
//     console.log("setting token guru");
// };

// export const getToken = () => {
//     console.log("Setting token:", token);
//     localStorage.getItem("guruToken");
// };

// export const removeToken = () => {
//     console.log("Removing token");
//     localStorage.removeItem('guruToken');
// };

export const apiGetPresensi = () => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error("Token not found. Please login again.");
        return { message: "Token not found. Please login again." };
    }

    return axios.get(`${API_URL}/presensi`, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => {
            console.log(`respon apiGetPresensi:`, response);
            return response.data.dataPresensi;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            return error.response?.data ?? { message: "Unknown error" };
        });
};

export const addPresensi = async (kbm_id, siswa_id, keterangan) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error('Token not found. Please login again.');
        return Promise.resolve({ success: false, message: 'Token not found. Please login again.' });
    }

    const newPresensi = { kbm_id, siswa_id, keterangan };

    return axios.post(`${API_URL}/presensi`, newPresensi, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            console.log(response)
            alert('berhasil isi presensi')
            // console.log(guru_id)
            console.log('isi jurnal berhasil')
            return response.data.dataPresensi;
        })
        .catch(error => {
            console.error('Error adding jurnal:', error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
}

export const updatePresensi = async (id, kbm_id, siswa_id, keterangan) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error('Token not found. Please login again.');
        return Promise.resolve({ success: false, message: 'Token not found. Please login again.' });
    }

    return axios.put(`${API_URL}/presensi/${id}`, { kbm_id, siswa_id, keterangan }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        console.log(response)
        return response;
    })
    .catch((error) => {
        return error.response;
    });

}

export const apiGetPresensiByTanggal = async (kelas_id, tanggal) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error("Token not found. Please login again.");
        return { message: "Token not found. Please login again." };
    }

    return axios.post(`${API_URL}/presensi/kelas/${kelas_id}/tanggal`, { tanggal }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            console.log(response.data.data.dataPresensi)
            return response.data.dataPresensi;
        })
        .catch(error => {
            console.error('Error checking jurnal:', error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
}

export const apiGetKelas = async () => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error("Token not found. Please login again.");
        return { message: "Token not found. Please login again." };
    }

    return axios.get(`${API_URL}/kelas`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            return response.data.data.kelas;
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            return error.response?.data ?? { message: "Unknown error" };
        });
};


export const apiGetSiswaByIdKelas = async (id) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error("Token not found. Please login again.");
        return { message: "Token not found. Please login again." };
    }

    return axios.get(`${API_URL}/siswa/kelas/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            return response.data.data.dataSiswa;
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            return error.response?.data ?? { message: "Unknown error" };
        });
}
