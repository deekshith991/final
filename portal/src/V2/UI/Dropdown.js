
import { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-gray-100 border border-gray-300 rounded p-2 w-full text-left"
            >
                Select Account Type
            </button>
            {isOpen && (
                <ul className="absolute bg-white border border-gray-300 rounded w-full mt-1 z-10">
                    {options.map((option) => (
                        <li
                            key={option}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSelect(option);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default Dropdown;
