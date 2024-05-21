import axios from 'axios';
import { API_URL, http } from '../../config/Url';

// Fungsi untuk menambahkan jurnal
export const addJurnal = async (date, pengajar, kelas, materi) => {
    const token = localStorage.getItem('guruToken');
    if (!token) {
        console.error('Token not found. Please login again.');
        return Promise.resolve({ success: false, message: 'Token not found. Please login again.' });
    }

    const newJurnal =  { date, pengajar, kelas, materi };

    return axios.post(`${API_URL}/jurnal`, newJurnal, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error adding jurnal:', error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
};

export const setTokens = (token) => {
    console.log("Setting token:", token);
    localStorage.setItem("guruToken", token);
  };
  
  export const getToken = () => {
    const token = localStorage.getItem("guruToken") ?? null;
    return token;
  };
  
  export const removeToken = () => {
    console.log("Removing token");
    localStorage.removeItem('guruToken');
  };
  

// Fungsi untuk mengambil data jurnal
export const apiGetJurnal = () => {
    const token = getToken();
    if (!token) {
        console.error('Token not found. Please login again.');
        return { message: 'Token not found. Please login again.' };
    }

    return axios.get(`${API_URL}/jurnal`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            console.log(response);
            return response.data.data.dataJurnal;
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            return error.response?.data ?? { message: 'Unknown error' };
        });
};

// // Fungsi untuk menghapus jurnal
// export const deleteJurnal = async (id) => {
//     const token = getToken();
//     if (!token) {
//         console.error('Token not found. Please login again.');
//         return { message: 'Token not found. Please login again.' };
//     }

//     const deletes = await axios.delete(`${API_URL}/jurnal/${id}`, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
//         .then(response => {
//             return response;
//         })
//         .catch(error => {
//             return error.response;
//         });
//     return deletes;
// };

// // Fungsi untuk mengedit jurnal
// export const editJurnal = async (id, date, pengajar, kelas, materi) => {
//     const token = getToken();
//     if (!token) {
//         console.error('Token not found. Please login again.');
//         return { message: 'Token not found. Please login again.' };
//     }

//     const edits = await axios.put(`${API_URL}/jurnal/${id}`, { date, pengajar, kelas, materi }, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
//         .then(response => {
//             return response;
//         })
//         .catch(error => {
//             return error.response;
//         });
//     return edits;
// };
