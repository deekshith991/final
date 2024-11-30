// InputField.js
const InputField = ({ label, value, onChange, name, type = "text", placeholder, required = false }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type={type}
            name={name}
            id={name}
            value={value}  // Bind value to state
            onChange={onChange}  // Call onChange on each input change
            placeholder={placeholder}
            required={required}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
    </div>
);

export default InputField;
