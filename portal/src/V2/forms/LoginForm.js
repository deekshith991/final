import { useState } from "react";
import { useSetAtom } from "jotai";
import { loginAtom } from "../atoms/authAtoms";
import { useNavigate } from "react-router-dom";

import InputField from "../UI/InputField";
import Button from "../UI/Button";
import ErrorBlock from "../UI/ErrorBlock";
import axiosInstance from "../context/AxiosInstance";

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = useSetAtom(loginAtom);
    const navigate = useNavigate();

    const handleInputChange = ({ target: { name, value } }) => {
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { data } = await axiosInstance.post("auth/login", credentials);
            login(data.data); // Update the authentication state
            navigate("/dashboard");
            console.log("Login successful:", data);
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            setError(error.response?.data?.message || "An error occurred during login.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
        >
            {error && <ErrorBlock error={error} />}

            <InputField
                label="Email"
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
            />
            <InputField
                label="Password"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="********"
                required
            />

            <div className="flex justify-center mt-4">
                <Button
                    label={isLoading ? "Logging in..." : "Login"}
                    type="submit"
                    disabled={isLoading}
                />
            </div>
        </form>
    );
};

export default LoginForm;
