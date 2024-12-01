import axiosInstance from "../context/axiosInstance";

class AuthService {
    async login(email, password) {
        try {
            const response = await axiosInstance.post("/auth/login", { email, password });
            console.log("Login Request Sent:", { email, password });
            return response.data;
        } catch (error) {
            console.error("@AuthService -> login Error:", error.response?.data || error.message);
            throw error;
        }
    }

    async register(email, password, accountType) {
        try {
            const response = await axiosInstance.post("/auth/register", { email, password, accountType });
            console.log("Register Request Sent:", { email, password, accountType });
            return response.data;
        } catch (error) {
            console.error("@AuthService -> register Error:", error.response?.data || error.message);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;
