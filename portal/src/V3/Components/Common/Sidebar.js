// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`fixed inset-0 bg-gray-800 bg-opacity-50 lg:block lg:w-64 w-64 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="flex justify-end p-4 lg:hidden">
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col h-full p-4 bg-gray-800 text-white">
                <Link to="/dashboard" className="py-2 hover:bg-gray-700" onClick={toggleSidebar}>
                    Dashboard
                </Link>
                <Link to="/profile" className="py-2 hover:bg-gray-700" onClick={toggleSidebar}>
                    Profile
                </Link>
                <Link to="/settings" className="py-2 hover:bg-gray-700" onClick={toggleSidebar}>
                    Settings
                </Link>
                <Link to="/logout" className="py-2 hover:bg-gray-700" onClick={toggleSidebar}>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
