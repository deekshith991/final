const InputField = ({ label, type, name, value, onChange, placeholder }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-sm p-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
                <input
                    className="w-full bg-gray-100 rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-purple-700"
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default InputField;
