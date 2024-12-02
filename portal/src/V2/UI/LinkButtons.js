import { useNavigate } from "react-router-dom";

const LinkButtons = ({ label, path, className }) => {

    const navigate = useNavigate();
    const onClick = () => {
        console.log("navigating to:", path);
        navigate(path);
    }
    return (
        <div>
            <button
                onClick={onClick}
                className={`m-2 px-2 py-1 text-white rounded bg-purple-400 hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 transition-all ${className}`}
            >{label}</button>
        </div>
    )
}

export default LinkButtons;