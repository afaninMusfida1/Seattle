import axios from "axios";
import { http } from "./Url";

export const handleLogin = async (email, password) => {
  const apilogin = await axios
    .post(http + "/auth/admin", {
      username: email,
      password: password,
    })
    .then((response) => {
      console.log('test', response)
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return apilogin
};

export const setTokens = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token") ?? null;
};

export const removeToken = () => {
  localStorage.removeItem('token')}
