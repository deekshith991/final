import React from "react";

const Button = ({ label, type = "button", onClick, disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none 
                        focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
            {label}
        </button>
    );
};

export default Button;
