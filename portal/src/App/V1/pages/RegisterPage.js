import React, { useContext, useState } from 'react';
import InputField from '../common/InputField';
import Button from '../common/Button';
import DropdownField from '../common/DropDown';
import { AuthContext } from '../context/AuthContext';

const RegisterPage = () => {
    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: '', password: '', accountType: '' });

    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formData.email, formData.password, formData.accountType);
            console.log("Registration Success:", response);
        } catch (error) {
            console.error("Registration Failed:", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <InputField
                        label="Email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <InputField
                        label="Password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                    <DropdownField
                        label="Account Type"
                        value={formData.accountType}
                        onChange={handleInputChange}
                        name="accountType"
                        options={['user', 'company']}
                        placeholder="Select a role"
                        required
                    />

                    <Button text="Register" color="green" onClick={handleSubmit} />
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-500">Login</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
