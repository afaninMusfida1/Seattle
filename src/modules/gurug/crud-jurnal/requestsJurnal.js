
import axios from 'axios';
import { API_URL, http } from '../../config/Url';
import { getToken, getTokenGuru } from '../../config/Api';
// import { useParams } from 'react-router-dom';

// const { kelas_id } = useParams()

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

//memanggil api kelas
export const apiGetKelas = async (role) => {
    const token = role == 'Admin' ? getToken() : getTokenGuru()

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
            console.log(`respon get kelas: `, response)
            return response.data.data.kelas;
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            return error.response?.data ?? { message: "Unknown error" };
        });
};

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
            console.log(`respon apiGetjurnal:`, response);
            return response.data.data.dataKbm;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            return error.response?.data ?? { message: "Unknown error" };
        });
};

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

export const apiGetJurnalByKelas = async (kelas_id) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error("Token not found. Please login again.");
        return { message: "Token not found. Please login again." };
    }

    return axios.get(`${API_URL}/kbm/kelas/${kelas_id}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => {
            console.log(`respon get jurnal by kelas`, response);
            return response.data.data.dataKbm;
        })
        .catch(error => {
            console.error('Error checking jurnal:', error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
}

export const apiGetJurnalByTanggal = async (kelas_id, tanggal) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error("Token not found. Please login again.");
        return { message: "Token not found. Please login again." };
    }

    return axios.post(`${API_URL}/kbm/kelas/${kelas_id}`, { tanggal }, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => {
            console.log(`respon cek jurnal`, response.data.data.dataKbm)
            return response.data.data.dataKbm;
        })
        .catch(error => {
            console.error('Error checking jurnal:', error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
}



// Fungsi untuk menghapus jurnal
export const deleteJurnal = async (id) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error('Token not found. Please login again.');
        return { message: 'Token not found. Please login again.' };
    }

    const deletes = await axios.delete(`${API_URL}/kbm/${id}`, {
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
export const editJurnal = async (id, kelas_id, hasil_belajar, tanggal) => {
    const token = localStorage.getItem("guruToken");
    if (!token) {
        console.error('Token not found. Please login again.');
        return { message: 'Token not found. Please login again.' };
    }

    const edits = await axios.put(`${API_URL}/kbm/${id}`, { kelas_id, hasil_belajar, tanggal }, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then((response) => {
            console.log(response)
            return response;
        })
        .catch((error) => {
            return error.response;
        });
    return edits;
};