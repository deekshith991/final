import React, { createContext, useState, useEffect } from "react";
import authService from "../services/AuthService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Load authentication state from localStorage on mount
    useEffect(() => {
        const loadAuthState = () => {
            const storedToken = localStorage.getItem("authToken");
            const storedUser = localStorage.getItem("userData");
            if (storedToken && storedUser) {
                setAuthToken(storedToken);
                setUserData(JSON.parse(storedUser));
                setIsAuthenticated(true);
            }
        };
        loadAuthState();
    }, []);

    // Save authentication state to localStorage and update context
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
            if (response?.success && response?.data?.token && response?.data?.userData) {
                handleAuthSuccess(response.data.token, response.data.userData);
                return response;
            } else {
                throw new Error("Invalid login response format");
            }
        } catch (error) {
            console.error("Login Error:", error.message || error);
            throw new Error(error.response?.data?.message || "Failed to login");
        }
    };

    const register = async (email, password, accountType) => {
        try {
            const response = await authService.register(email, password, accountType);
            if (response?.success && response?.data?.token && response?.data?.userData) {
                handleAuthSuccess(response.data.token, response.data.userData);
                return response;
            } else {
                throw new Error("Invalid register response format");
            }
        } catch (error) {
            console.error("Register Error:", error.message || error);
            throw new Error(error.response?.data?.message || "Failed to register");
        }
    };

    const logout = () => {
        setAuthToken(null);
        setUserData(null);
        setIsAuthenticated(false);
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
    };

    // Debugging: Log authentication state changes
    useEffect(() => {
        console.log("Auth State Updated:", {
            authToken,
            userData,
            isAuthenticated,
        });
    }, [authToken, userData, isAuthenticated]);

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
