
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:4444",
    timeout: 5000,
    method: "POST,GET",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('authToken');
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );


export default axiosInstance;