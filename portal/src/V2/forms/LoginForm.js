
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import InputField from "../UI/InputField";
import Button from "../UI/Button";
import ErrorBlock from "../UI/ErrorBlock";
import axiosInstance from "../context/AxiosInstance";

const LoginForm = () => {
    const [creds, setCreds] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreds((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance.post("auth/login", creds);
            login(response.data.data);
            navigate('/dashboard');

            console.log("Login successful:", response.data);
        } catch (err) {
            console.error("Login failed:", err.response?.data || err.message);
            setError(err.response?.data?.message || "An error occurred during login.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded ">
            {error && <ErrorBlock error={error} />}
            <InputField
                label="Email"
                type="text"
                name="email"
                value={creds.email}
                onChange={handleChange}
                placeholder="Enter your email"
            />
            <InputField
                label="Password"
                type="password"
                name="password"
                value={creds.password}
                onChange={handleChange}
                placeholder="********"
            />
            <div className="flex justify-center w-full">
                <Button label={loading ? "Loading..." : "Login"} type="submit" disabled={loading} />
            </div>
        </form>
    );
};

export default LoginForm;
