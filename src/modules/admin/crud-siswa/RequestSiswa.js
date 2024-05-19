import axios from "axios";
import { getToken } from "../../config/Api";
import { API_URL } from "../../config/Url";

export const addSiswa = async (nama, kelas_id, level, no_telp_ortu, email, password) => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
        console.error("Token not found. Please login again.");
        return Promise.resolve({ success: false, message: "Token not found. Please login again." });
    }

    const newSiswa = { nama, kelas_id, level, no_telp_ortu, email, password };

    return axios.post(`${API_URL}/siswa`, newSiswa, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.data.data.dataSiswa; // Pastikan bahwa nilai yang diharapkan dikembalikan di sini
        })
        .catch(error => {
            console.error("Error adding guru:", error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
};


// export const addSiswa = async (nama, kelas_id, level, no_telp_ortu, email, password) => {
//     setIsLoading(true);
//     const token = localStorage.getItem('adminToken');
//     if (!token) {
//         console.error("Token not found. Please login again.");
//         setIsLoading(false);
//         return { success: false, message: "Token not found. Please login again." };
//     }

//     const response = await axios.post(`${API_URL}/siswa`, {
//         nama,
//         kelas_id,
//         level,
//         no_telp_ortu,
//         email,
//         password
//     }, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });

//     if (response.status === 201) {
//         const newData = response.data.data.dataSiswa;
//         setSiswaList(prevSiswaList => [...prevSiswaList, newData]);
//         setIsLoading(false);
//         return { success: true, data: newData };
//     } else {
//         console.error("Error adding siswa:", response.data.message);
//         setIsLoading(false);
//         return { success: false, message: response.data.message };
//     }
// };



export const apiGetSiswa = () => {
    const token = getToken();
    if (!token) {
      console.error("Token not found. Please login again.");
      return { message: "Token not found. Please login again." };
    }
  
    return axios.get(`${API_URL}/siswa`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log(response.data.data.dataSiswa);
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        return error.response?.data ?? { message: "Unknown error" };
      });
  };

export const deleteSiswa = async (id) => {
    const token = getToken();
    const deletes = await axios
        .delete(API_URL + "/siswa/3" + id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response;
        })
        .catch((eror) => {
            return eror.response;
        });
    return deletes;
};

export const editSiswa = async (id, nama, kelas_id, level, no_telp_ortu, email, password) => {
    const token = getToken();
    const edits = await axios
        .put(
            API_URL + "/siswa/2" + id,
            { id, nama, kelas_id, level, no_telp_ortu, email, password },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            return response;
        })
        .catch((eror) => {
            return eror.response
        });
    return edits;
};