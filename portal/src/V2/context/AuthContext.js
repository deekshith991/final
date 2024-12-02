import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthentication] = useState(
        !!localStorage.getItem("authToken")
    );
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("userData")) || null
    );

    const login = (data) => {
        const { token, userData } = data;
        localStorage.setItem("authToken", token);
        localStorage.setItem("userData", JSON.stringify(userData));
        setUserData(userData);
        setAuthentication(true);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        setUserData(null);
        setAuthentication(false);
    };

    const value = {
        isAuthenticated,
        userData,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
