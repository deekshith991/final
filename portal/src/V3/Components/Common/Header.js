import React from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center relative">
            <MobileMenuButton toggleSidebar={toggleSidebar} />
            <Brand />
            <AuthButtons />
        </header>
    );
};

const MobileMenuButton = ({ toggleSidebar }) => (
    <div className="lg:hidden">
        <button onClick={toggleSidebar} className="text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    </div>
);

const Brand = () => (
    <div className="flex flex-grow justify-center lg:justify-start">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
            JOB 4 U
        </Link>
    </div>
);

const AuthButtons = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/logout');
    };

    return (
        <div className="flex items-center">
            {isAuthenticated ? (
                <>
                    <Link to="/dashboard" className="mr-4 hover:text-gray-300">
                        Dashboard
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <Link to="/login" className="mr-4 hover:text-gray-300">
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
                    >
                        Register
                    </Link>
                </>
            )}
        </div>
    );
};

export default Header;
