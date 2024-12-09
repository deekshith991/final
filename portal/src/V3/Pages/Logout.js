import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

const LogoutPage = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const [seconds, setSeconds] = useState(3);
    // const time = 3000;

    useEffect(() => {
        logout();

        const timer = setInterval(() => {
            setSeconds((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate('/');
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [logout, navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center p-4 bg-white rounded-lg shadow-md border-gray-400 border-2">
                <h1 className="text-4xl font-semibold text-gray-800 mt-2 mb-2">Logging you out...</h1>
                <p className="text-gray-600">Please wait while we log you out and redirect you to the login page.</p>
                <p className="text-gray-500 mt-4">Redirecting in<span className="text-black font-bold font-mono text-2xl p-2">{seconds}</span>seconds...</p>
            </div>
        </div>
    );
};

export default LogoutPage;
