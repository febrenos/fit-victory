import axios from 'axios';

export const activityApi = axios.create({
  baseURL: "https://fiap-2023-2tdst-default-rtdb.firebaseio.com",
});

//http://localhost:8080
export const authApi = axios.create({
  baseURL: "http://192.168.15.91:8080", // Substitua pelo seu endereço IP local ipconfig
});