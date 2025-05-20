import axios from 'axios';

const axiosInstance = axios.create({
 baseURL: 'https://avn-467a.onrender.com', // Backend URL
  withCredentials: true, // Cookies ko bhejne ke liye
});

export default axiosInstance;
