import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { useAuth } from "./Contexts/AuthContext";
import UserRoutesPage from "./Pages/UserRoutesPage";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import { useState } from "react";
import LogoutPage from "./Pages/Logout";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Welcome to JOB 4 U</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/logout" element={<LogoutPage />} />
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
    );
};

const APPV3 = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-black">
            <Router>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                <div className="flex-1 flex flex-col">
                    <Header toggleSidebar={toggleSidebar} />

                    <main className="flex-1 p-4 bg-gray-100">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <AppRouter />
                        </div>
                    </main>
                </div>
            </Router>
        </div>
    );
};

export default APPV3;
