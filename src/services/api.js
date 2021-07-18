import axios from 'axios';
import storage from '../utils/storage';

const API = axios.create({
  baseURL: 'https://ecommerce-serratec.herokuapp.com/',
});

API.interceptors.request.use(async config => {
  const token = await storage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
