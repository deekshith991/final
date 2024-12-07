import { useAuth } from "../Contexts/AuthContext";
import axiosInstance from "../Contexts/AxiosInstance";
import { useNavigate } from "react-router-dom";

const useLoginHandler = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (credentials) => {
        try {
            const response = await axiosInstance.post("auth/login", credentials);
            const { token, userData } = response.data.data;

            login({ token, ...userData });

            navigate("/dashboard");
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
            throw new Error(errorMessage);
        }
    };

    return { handleLogin };
};

export default useLoginHandler;
