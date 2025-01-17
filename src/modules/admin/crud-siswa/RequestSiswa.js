import axios from "axios";
import { getToken } from "../../config/Api";
import { API_URL } from "../../config/Url";
import { useNavigate } from 'react-router-dom';

const handleUnauthorizedError = (error) => {
    if (error.response && error.response.status === 401) {
        console.error("Token expired. Please login again.");
        alert("Session expired. Please login again.");
        localStorage.removeItem('adminToken');

        const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi
        navigate('/login');
    }
};

//get kelas

export const addSiswa = (nama, kelas_id, no_telp_ortu, email, password) => {
    const token = getToken();
    if (!token) {
        console.error("Token not found. Please login again.");
        return Promise.reject({ message: "Token not found. Please login again." });
    }

    const newSiswa = { nama, kelas_id, no_telp_ortu, email, password };

    return axios.post(`${API_URL}/siswa`, newSiswa, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status === 200) {
            return { success: true, data: response.data };
        } else {
            return { success: false, message: "Unexpected response from server" };
        }
    })
    .catch(error => {
        handleUnauthorizedError(error);
        // return { success: false, message: error.response ? error.response.data.message : error.message };
    });
};


export const apiGetSiswa = async () => {
    const token = getToken();
    if (!token) {
        console.error("Token not found. Please login again.");
        return Promise.resolve({ message: "Token not found. Please login again." });
    }

    return axios.get(`${API_URL}/siswa`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => response.data.data.dataSiswa)
        .catch(error => {
            handleUnauthorizedError(error);
            return error.response?.data ?? { message: "Unknown error" };
        });
};

export const deleteSiswa = (id) => {
    const token = getToken();
    return axios.delete(`${API_URL}/siswa/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => response)
        .catch(error => {
            handleUnauthorizedError(error);
            return error.response;
        });
};

export const editSiswa = async (id, updatedDataSiswa) => {
    const token = getToken();
    return axios.put(`${API_URL}/siswa/${id}`, updatedDataSiswa, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => response.data)
        .catch(error => {
            handleUnauthorizedError(error);
            return error.response;
        });
};

export const searchSiswaApi = (kategori, kelas, nama) => {
    const token = getToken();
    if (!token) {
        console.error("Token not found. Please login again.");
        return Promise.resolve({ message: "Token not found. Please login again." });
    }

    const params = {
        kategori,
        kelas,
        nama
    };

    return axios.get(`${API_URL}/siswa`, {
        params,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.data.data.dataSiswa)
    .catch(error => {
        handleUnauthorizedError(error);
        return error.response?.data ?? { message: "Unknown error" };
    });
};
