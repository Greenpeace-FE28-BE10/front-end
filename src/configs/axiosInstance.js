import axios from 'axios';
import { CONST } from '../utils/constant';

const config = {
  baseURL: CONST.BASE_URL_API,
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use((axiosConfig) => {
  const httpConfig = { ...axiosConfig };
  const token = localStorage.getItem('token');
  if (token) {
    httpConfig.headers.Authorization = `${token}`;
  }
  return httpConfig;
});

export default axiosInstance;
