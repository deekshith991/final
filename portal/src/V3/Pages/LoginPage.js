import React, { useState } from "react";
import LoginForm from "../Components/Forms/LoginForm";

const LoginPage = () => {
    const [error, setError] = useState(null);

    const handleSuccess = () => {
        console.log("Login successful!");
    };

    const handleError = (errorMessage) => {
        setError(errorMessage);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <LoginForm onSuccess={handleSuccess} onError={handleError} />
            </div>
        </div>
    );
};

export default LoginPage;
