import React, { useState } from 'react';

const DropdownField = ({ label, value, onChange, options = [], placeholder = 'Select an option', required = false, name }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelectChange = (selectedValue) => {
        onChange(name, selectedValue); // Send the selected value to the parent
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="dropdown-container flex flex-col space-y-2">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

            <div className="relative">
                <button
                    type="button"
                    onClick={handleDropdownToggle}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-left"
                >
                    {value || placeholder}
                </button>
                {isDropdownOpen && (
                    <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelectChange(option)}
                                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DropdownField;
