// src/axios.js
import axios from 'axios';
import { useAuthStore } from '@/store/store';
import router from '@/router';
const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    const authStore = useAuthStore();
    if (error.response && error.response.status === 401 && error.response.data.error.name === 'TokenExpiredError') {
      authStore.logout();
      router.push('/login');
    }
    return Promise.reject(error);
  }
);


export default apiClient;
