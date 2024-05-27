
import axios from 'axios';
import { API_URL, http } from '../../config/Url';
import { useParams } from 'react-router-dom';

const { kelas_id } = useParams()

// Fungsi untuk menambahkan jurnal
export const addJurnal = async (kelas_id, guru_id, hasil_belajar, tanggal) => {
    const token = localStorage.getItem('guruToken');
    if (!token) {
        console.error('Token not found. Please login again.');
        return Promise.resolve({ success: false, message: 'Token not found. Please login again.' });
    }

    const newJurnal = { kelas_id, guru_id, hasil_belajar, tanggal };

    return axios.post(`${API_URL}/kbm`, newJurnal, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            console.log(response)
            alert('isi jurnal berhasil')
            // console.log(guru_id)
            console.log('isi jurnal berhasil')
            return response.data.dataKbm;
        })
        .catch(error => {
            console.error('Error adding jurnal:', error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
};

// export const setTokens = (token) => {
//     console.log("Setting token:", token);
//     localStorage.setItem("guruToken", token);
// };

// export const getToken = () => {
//     const token = localStorage.getItem("guruToken") ?? null;
//     return token;
// };

// export const removeToken = () => {
//     console.log("Removing token");
//     localStorage.removeItem('guruToken');
// };

//memanggil api jurnal by id jurnal
export const apiGetJurnalById = () => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error("Token not found. Please login again.");
        return { message: "Token not found. Please login again." };
    }

    return axios.get(`${API_URL}/kbm/${id}`, {
        headers: {
            Authorization: ` Bearer ${token}`
        }
    })
        .then(response => {
            console.log(`respon apiGetjurnalbyid : ${response}`);
            return response;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            return error.response?.data ?? { message: "Unknown error" };
        });
}

export const apiGetJurnalByTanggal = async (tanggal) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error("Token not found. Please login again.");
        return { message: "Token not found. Please login again." };
    }

    const tanggalkbm = { tanggal }

    return axios.post(`${API_URL}/kbm/kelas/${kelas_id}`, tanggalkbm, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => {
            console.log(response)
            alert('ada kbm pada tanggal ini')
            return response.data.data.dataKbm;
        })
        .catch(error => {
            console.error('Error checking jurnal:', error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
}

// Fungsi untuk mengambil data jurnal
export const apiGetJurnal = () => {

    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error("Token not found. Please login again.");
        return { message: "Token not found. Please login again." };
    }

    return axios.get(`${http}/kbm`, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => {
            console.log(`respon apiGetjurnal: ${response}`);
            return response;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            return error.response?.data ?? { message: "Unknown error" };
        });
};

// Fungsi untuk menghapus jurnal
export const deleteJurnal = async (id) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error('Token not found. Please login again.');
        return { message: 'Token not found. Please login again.' };
    }

    const deletes = await axios.delete(`${API_URL}/kbm/5${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
    return deletes;
};

// Fungsi untuk mengedit jurnal
export const editJurnal = async (kelas_id, guru_id, hasil_belajar, tanggal) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error('Token not found. Please login again.');
        return { message: 'Token not found. Please login again.' };
    }

    const edits = await axios.put(`${API_URL}/kbm/${id}`, { date, pengajar, kelas, materi }, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
    return edits;
};