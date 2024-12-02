
const Button = ({ label, onClick, type = "button", className = "" }) => {

    return (
        <button
            type={type}
            onClick={onClick}
            className={`m-2 px-4 py-2 text-white rounded bg-purple-400 hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 transition-all ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
