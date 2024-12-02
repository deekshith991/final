import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:4444",
    method: "PUT,GET,POST",
    withCredentials: true
});


export default axiosInstance;