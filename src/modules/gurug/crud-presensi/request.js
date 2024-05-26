// import { getToken } from "../../config/Api";
import { API_URL } from "../../config/Url";
import axios from "axios";

export const getToken = (token) => {
    console.log("Setting token:", token);
    localStorage.getItem("guruToken", token);
};

export const setTokens = (token) => {
    console.log("setting token", token);
    localStorage.setItem("guruToken", token);
};

export const removeToken = () => {
    console.log("Removing token");
    localStorage.removeItem('guruToken');
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

