import axios from "axios";
import { API_URL } from "../../config/Url";

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
};

