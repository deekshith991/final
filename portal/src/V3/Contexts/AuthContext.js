
import React, { createContext, useState, useEffect, useContext } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        const token = localStorage.getItem("authToken");
        if (storedUserData && token) {
            setIsAuthenticated(true);
            setUserData(storedUserData);
        }
    }, []);

    const login = (user) => {
        localStorage.setItem("authToken", user.token);
        localStorage.setItem("userData", JSON.stringify(user));
        setIsAuthenticated(true);
        setUserData(user);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        setIsAuthenticated(false);
        setUserData(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
