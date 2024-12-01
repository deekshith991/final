import React, { createContext, useState, useEffect } from "react";
import authService from "../services/AuthService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Load user data from localStorage on mount
    useEffect(() => {
        try {
            const storedToken = localStorage.getItem("authToken");
            const storedUser = localStorage.getItem("userData");
            if (storedToken && storedUser) {
                setAuthToken(storedToken);
                setUserData(JSON.parse(storedUser));
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Failed to parse userData from localStorage:", error);
        }
    }, []);

    // Helper function to handle login or register success
    const handleAuthSuccess = (token, userData) => {
        setAuthToken(token);
        setUserData(userData);
        setIsAuthenticated(true);
        localStorage.setItem("authToken", token);
        localStorage.setItem("userData", JSON.stringify(userData));
    };

    const login = async (email, password) => {
        try {
            const response = await authService.login(email, password);
            if (response?.token && response?.userData) {
                handleAuthSuccess(response.token, response.userData);
            }
            return response;
        } catch (error) {
            console.error("@AuthContext -> login Error:", error.response?.data || error.message);
            throw error;
        }
    };

    const register = async (email, password, accountType) => {
        try {
            const response = await authService.register(email, password, accountType);
            if (response?.token && response?.userData) {
                handleAuthSuccess(response.token, response.userData);
            }
            return response;
        } catch (error) {
            console.error("@AuthContext -> register Error:", error.response?.data || error.message);
            throw error;
        }
    };

    const logout = () => {
        setAuthToken(null);
        setUserData(null);
        setIsAuthenticated(false);
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
    };

    return (
        <AuthContext.Provider
            value={{
                authToken,
                userData,
                isAuthenticated,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
