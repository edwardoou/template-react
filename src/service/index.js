import axios from "axios";
import { BASE_URL } from "./global";

//* Aqui van las funciones basicas de la API

export const getData = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`, {
      /* headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      }, */
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const storeData = async (url, data) => {
  try {
    const response = await axios.post(`${BASE_URL}${url}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateData = async (url, data) => {
  try {
    const response = await axios.put(`${BASE_URL}${url}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteData = async (url) => {
  try {
    const response = await axios.delete(`${BASE_URL}${url}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
