// src/components/Header.jsx

import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };



    return (
        <div>
            {/* Header */}
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center relative">

                {/* MyApp Title */}
                <div className="flex flex-grow justify-center sm:justify-start">
                    <Link to="/" className="text-xl font-bold hover:text-gray-300">
                        JOB 4 U
                    </Link>
                </div>

                <div className="flex items-center">
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" className="mr-4 hover:text-gray-300">Dashboard</Link>
                            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="mr-4 hover:text-gray-300">Login</Link>
                            <Link to="/register" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </header>

        </div>
    );
};

export default Header;
