import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-gray-200 text-black 
                transform transition-transform duration-300 ease-in-out
                lg:translate-x-0 lg:static lg:block
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}
        >
            <MobileCloseButton toggleSidebar={toggleSidebar} />
            <NavBarList toggleSidebar={toggleSidebar} />
        </div>
    );
};

const MobileCloseButton = ({ toggleSidebar }) => (
    <div className="flex justify-end p-4 lg:hidden">
        <button onClick={toggleSidebar} className="text-black">
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
);


const NavBarList = ({ toggleSidebar }) => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="flex flex-col h-full p-4 border-2 border-black rounded-md m-2 bg-gray-300">
            {isAuthenticated ? (
                <>
                    <RenderLink label="Dashboard" route="/dashboard" toggleSidebar={toggleSidebar} />
                    <RenderLink label="Profile" route="/profile" toggleSidebar={toggleSidebar} />
                    <RenderLink label="Settings" route="/settings" toggleSidebar={toggleSidebar} />
                    <RenderLink label="Logout" route="/logout" toggleSidebar={toggleSidebar} />
                </>
            ) : (
                <>
                    <RenderLink label="Login" route="/login" toggleSidebar={toggleSidebar} />
                    <RenderLink label="Register" route="/register" toggleSidebar={toggleSidebar} />
                </>
            )}
        </div>
    );
};


const RenderLink = ({ label, route, toggleSidebar }) => (
    <Link
        to={route}
        className="py-2 hover:bg-gray-700 cursor-pointer rounded-md bg-gray-400 p-2 m-2"
        onClick={toggleSidebar}
    >
        {label}
    </Link>
);

export default Sidebar;
