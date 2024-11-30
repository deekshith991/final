import React, { useState } from 'react';
import InputField from "../common/InputField.js";
import Button from "../common/Button.js";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Handle input change for email and password fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Update the corresponding field in the state
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Login data submitted: ${JSON.stringify(formData)}`);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField
                        label="Email"
                        value={formData.email}  // Bind email input to state
                        onChange={handleInputChange}  // Handle email input change
                        name="email"  // Use name attribute for state update
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <InputField
                        label="Password"
                        value={formData.password}  // Bind password input to state
                        onChange={handleInputChange}  // Handle password input change
                        name="password"  // Use name attribute for state update
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                    <Button text="Login" color="blue" onClick={handleSubmit} />
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm">
                        Don't have an account?{' '}
                        <a href="/register" className="text-blue-500">Register</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
