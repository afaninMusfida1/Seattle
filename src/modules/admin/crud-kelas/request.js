import { getToken } from "../../config/Api";
import { API_URL } from "../../config/Url";
import axios from "axios";


export const addKelas = async (nama_kelas, kategori, periode, jadwal_kelas) => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
        console.error("Token not found. Please login again.");
        return Promise.resolve({ success: false, message: "Token not found. Please login again." });
    }

    const newKelas = {nama_kelas, kategori, periode, jadwal_kelas};

    return axios.post(`${API_URL}/kelas`, newKelas, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("Error adding kelas:", error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
};

export const apiGetKelas = async () => {
    const token = getToken();
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