import { useAuth } from "../Contexts/AuthContext";
import axiosInstance from "../Contexts/AxiosInstance";
import { useNavigate } from "react-router-dom";

const useRegisterHandler = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (registrationData) => {
        try {
            console.log(registrationData);
            const response = await axiosInstance.post("auth/register", registrationData);
            const { token, userData } = response.data.data;

            login({ token, ...userData });

            navigate("/edit-profile");
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
            throw new Error(errorMessage);
        }
    };

    return { handleRegister };
};

export default useRegisterHandler;
