import React, { useContext, useState } from 'react';
import InputField from "../common/InputField";
import Button from "../common/Button";
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData.email, formData.password);
            console.log("Login Success:", response);
            navigate("/dashboard");
        } catch (error) {
            console.error("Login Failed:", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField
                        label="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <InputField
                        label="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                    <Button text="Login" color="blue" onClick={handleSubmit} />
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-500">Register</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
