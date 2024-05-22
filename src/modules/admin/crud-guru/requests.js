import axios from "axios";
import { getToken } from "../../config/Api";
import { API_URL, http } from "../../config/Url";

export const addGuru = (nama, email, password) => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
        console.error("Token not found. Please login again.");
        return Promise.resolve({ success: false, message: "Token not found. Please login again." });
    }

    const newGuru = { nama, email, password };

    return axios.post(`${API_URL}/guru`, newGuru, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("Error adding guru:", error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.message : error.message };
        });
};


export const apiGetGuru = () => {
    const token = getToken();
    if (!token) {
      console.error("Token not found. Please login again.");
      return { message: "Token not found. Please login again." };
    }
  
    return axios.get(`${API_URL}/guru`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log(response);
        return response.data.data.dataGuru;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        return error.response?.data ?? { message: "Unknown error" };
      });
  };

export const deleteGuru = async (id) => {
    const token = getToken();
    const deletes = await axios
        .delete(http + "/admin" + id, {
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

export const editGuru = async (id, nama, email, password) => {
    const token = getToken();
    const edits = await axios
        .put(
            http + "/guru/2" + id,
            { nama, email, password },
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