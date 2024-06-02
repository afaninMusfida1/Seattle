import axios from "axios";
import { API_URL } from "../config/Url";

export const getKelasBySiswaId = (siswaId) => {
    const token = localStorage.getItem('siswaToken');
    if (!token) {
        console.error("Token not found. Please login again.");
        return Promise.reject({ message: "Token not found. Please login again." });
    }

    return axios.get(`${API_URL}/siswa/dashboard`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.data && response.data.data && response.data.data.dataSiswa) {
            return response.data.data.dataSiswa[0];
        }
        throw new Error('Invalid response structure');
    })
    .catch(error => {
        return { success: false, message: error.message };
    });
};
