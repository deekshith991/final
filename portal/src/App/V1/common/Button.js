import React from 'react';

const Button = ({ text, onClick, type = 'button', color = 'blue' }) => {
    const buttonColors = {
        blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500',
        red: 'bg-red-500 hover:bg-red-600 focus:ring-red-500',
        green: 'bg-green-500 hover:bg-green-600 focus:ring-green-500',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-6 py-2 text-white rounded-md focus:outline-none focus:ring-2 ${buttonColors[color]}`}
        >
            {text}
        </button>
    );
};

export default Button;
