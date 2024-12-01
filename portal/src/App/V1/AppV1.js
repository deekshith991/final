
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";

// Pages
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";

const RouteApp = () => {
    const { isAuthenticated, userData } = useContext(AuthContext) || {};

    // console.log("Is Authenticated:", isAuthenticated);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
                <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <RegisterPage />} />
                {/* <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} /> */}

                <Route
                    path="/dashboard"
                    element={isAuthenticated ? <Dashboard userData={userData} /> : <Navigate to="/login" />}
                />

                <Route path="/*" element={<Navigate to="/" />} />

            </Routes>
        </Router>
    );
};

const App = () => {

    return (
        <AuthProvider>
            <RouteApp />
        </AuthProvider>
    )
}

export default App;
