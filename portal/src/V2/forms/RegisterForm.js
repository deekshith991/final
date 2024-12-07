
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../context/AxiosInstance";

import InputField from "../UI/InputField";
import Dropdown from "../UI/Dropdown";
import Button from "../UI/Button";
import ErrorBlock from "../UI/ErrorBlock";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "User",
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = ({ target: { name, value } }) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAccountTypeChange = (accountType) => {
        setFormData((prevState) => ({
            ...prevState,
            accountType,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const { email, password, confirmPassword, accountType } = formData;

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            setIsLoading(false);
            return;
        }

        try {
            const { data } = await axiosInstance.post("auth/register", {
                email,
                password,
                accountType,
            });
            console.log("Registration successful:", data);
            navigate("/dashboard");
        } catch (error) {
            console.error("Registration failed:", error.response?.data || error.message);
            setError(error.response?.data?.message || "An error occurred during registration.");
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
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
            />
            <InputField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="********"
                required
            />
            <InputField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="********"
                required
            />
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Type
                </label>
                <Dropdown
                    options={["User", "Company"]}
                    onSelect={handleAccountTypeChange}
                />
            </div>

            <div className="flex justify-center mt-4">
                <Button
                    label={isLoading ? "Registering..." : "Register"}
                    type="submit"
                    disabled={isLoading}
                />
            </div>
        </form>
    );
};


export default RegisterForm;
