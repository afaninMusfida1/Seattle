import axios from "axios";
import { http } from "./Url";

export const handleLogin = async (email, password) => {
  const apilogin = await axios
    .post(`${http}/auth/admin`, {
      username: email,
      password: password,
    })
    .then((response) => {
      console.log('test', response);
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return apilogin;
};

export const setTokens = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token") ?? null;
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const tampilkan = async () => {
  const token = getToken();
  return axios.get(`${http}/guru`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return error.response;
  });
};

export const addGuru = async (name, no_telp, no_telp_ortu, email, password) => {
  const token = getToken();
  const newGuru = {
    name: name,
    no_telp: no_telp,
    no_telp_ortu: no_telp_ortu,
    email: email,
    password: password,
  };

  return axios.post(`${http}/guru`, newGuru, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
