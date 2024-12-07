// src/AppV3.jsx
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { useAuth } from "./Contexts/AuthContext";
import UserRoutesPage from "./Pages/UserRoutesPage";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import { useState } from "react";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const APPV3 = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <Router>
                <Header toggleSidebar={toggleSidebar} />
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex-grow p-4 lg:pl-64">
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route
                            path="/*"
                            element={
                                <PrivateRoute>
                                    <UserRoutesPage />
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default APPV3;
