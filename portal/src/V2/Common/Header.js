import { useAtom } from "jotai";
import { isAuthenticatedAtom, logoutAtom } from "../atoms/authAtoms";
import LinkButtons from "../UI/LinkButtons";

const Header = () => {
    return (
        <header className="bg-purple-500 flex justify-between items-center p-2">
            <LeftPart />
            <RightPart />
        </header>
    );
};

const LeftPart = () => (
    <div className="flex items-center">
        <button className="bg-purple-800 text-white p-2 px-4 rounded m-2 sm:hidden"># Menu</button>
        <h1 className="font-bold text-3xl text-white">Job 4 U</h1>
    </div>
);

const RightPart = () => {
    const [isAuthenticated] = useAtom(isAuthenticatedAtom);
    const [, logout] = useAtom(logoutAtom);

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="flex items-center">
            {isAuthenticated ? (
                <>
                    <NavLink label="Contact Us" path="/contact" />
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white p-2 px-4 rounded hover:bg-red-700 ml-2 hidden sm:block"
                    >
                        Log Out
                    </button>
                </>
            ) : (
                <>
                    <NavLink label="Login" path="/login" />
                    <NavLink
                        label="Sign Up"
                        path="/register"
                        className="bg-emerald-300 hover:bg-emerald-600 border-2 ml-2 hidden sm:block"
                    />
                </>
            )}
        </div>
    );
};

const NavLink = ({ label, path, className }) => (
    <LinkButtons
        label={label}
        path={path}
        className={`text-white hover:text-purple-300 hidden sm:block ${className || ""}`}
    />
);

export default Header;
