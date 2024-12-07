import React from "react";

const InputField = ({ label, type, name, value, onChange, placeholder, error }) => {
    return (
        <div className="mb-4">
            {label && <label htmlFor={name} className="block text-gray-700 mb-2">{label}</label>}
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default InputField;
