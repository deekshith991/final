import React, { useState, useEffect } from 'react';

const SelectInputField = ({
    label,
    value,
    onChange,
    options = [],
    placeholder = '',
    type = 'dropdown',
    required = false,
    name,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(value || '');
    const [filteredOptions, setFilteredOptions] = useState([]);

    // Update filtered options when search term changes
    useEffect(() => {
        if (type === 'search') {
            const matches = options.filter((option) =>
                option.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredOptions(matches);
        } else {
            setFilteredOptions(options);
        }
    }, [searchTerm, options, type]);

    const handleSelectChange = (selectedValue) => {
        setSearchTerm(selectedValue); // Update the search term
        onChange(name, selectedValue); // Send the selected value to the parent
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value); // Update local search term
        setIsDropdownOpen(true); // Open dropdown while typing
        onChange(name, e.target.value); // Send typed value to the parent
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            if (filteredOptions.length > 0 && filteredOptions.includes(searchTerm)) {
                handleSelectChange(filteredOptions[0]); // Select the first matching option
            } else {
                handleSelectChange(searchTerm); // Use the entered input as the selected value
            }
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.select-container')) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="select-container flex flex-col space-y-2">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

            {type === 'dropdown' ? (
                <div className="relative">
                    <button
                        type="button"
                        onClick={handleDropdownToggle}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-left"
                    >
                        {value || placeholder || 'Select an option'}
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                            {filteredOptions.map((option, index) => (
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
            ) : (
                <div className="relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                        required={required}
                    />
                    {isDropdownOpen && filteredOptions.length > 0 && (
                        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                            {filteredOptions.map((option, index) => (
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
            )}
        </div>
    );
};

export default SelectInputField;
