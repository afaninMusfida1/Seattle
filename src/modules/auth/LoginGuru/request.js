import axios from "axios";
import { API_URL, http } from "../../config/Url";

export const handleLoginGuru = async (email, password) => {
    return axios.post(`${http}/auth/guru`, {
      email: email,
      password: password,
    })
      .then((response) => {
        console.log("Login response data:", response.data);
        return response.data;
      })
      .catch((error) => {
        console.error("Login failed:", error);
        return error.response?.data ?? { message: "Unknown error" };
      });
  };
  
  export const getToken = () => {
    const token = localStorage.getItem("guruToken") ?? null;
    return token;
  };

  export const setTokens = (token) => {
    console.log("Setting token:", token);
    localStorage.setItem("guruToken", token);
  };
  
  export const removeToken = () => {
    console.log("Removing token");
    localStorage.removeItem('guruToken');
  };
  