import React, { useState, useRef, useEffect } from 'react';

const DropdownField = ({
    label,
    value,
    onChange,
    options = [],
    placeholder = 'Select an option',
    required = false,
    name,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleSelectChange = (selectedValue) => {
        onChange(name, selectedValue); // Pass selected value and name to parent
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prev) => !prev); // Toggle dropdown state
    };

    return (
        <div className="dropdown-container flex flex-col space-y-2" ref={dropdownRef}>
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
                    <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-auto">
                        {options.length > 0 ? (
                            options.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelectChange(option)}
                                    className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${value === option ? 'bg-blue-50 font-medium' : ''
                                        }`}
                                >
                                    {option}
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-2 text-gray-500">No options available</li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DropdownField;
