import React, { useState, useEffect } from 'react';

const SearchField = ({
    label,
    value,
    onChange,
    options = [],
    placeholder = 'Search or enter input',
    required = false,
    name,
}) => {
    const [searchTerm, setSearchTerm] = useState(value || '');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Update filtered options when search term changes
    useEffect(() => {
        const matches = options.filter((option) =>
            option.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredOptions(matches);
    }, [searchTerm, options]);

    const handleSelectChange = (selectedValue) => {
        setSearchTerm(selectedValue); // Update the input field
        onChange(name, selectedValue); // Send the selected value to the parent
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value); // Update search term
        setIsDropdownOpen(true); // Open dropdown while typing
        onChange(name, e.target.value); // Send typed value to parent
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            if (filteredOptions.length > 0) {
                handleSelectChange(filteredOptions[0]); // Select first option
            } else {
                handleSelectChange(searchTerm); // Use the entered value
            }
        }
    };

    return (
        <div className="search-container flex flex-col space-y-2">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

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
        </div>
    );
};

export default SearchField;
