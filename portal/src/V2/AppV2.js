import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useAtomValue } from "jotai";

import { isAuthenticatedAtom } from "./atoms/authAtoms";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashBoard";
import RegisterPage from "./Pages/RegisterPage";

const PrivateRoute = ({ children }) => {
    // Using `useAtomValue` to directly read atom state without providing a setter
    const isAuthenticated = useAtomValue(isAuthenticatedAtom);

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function AppV2() {
    return (
        <Provider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <DashboardPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </Provider>

    );
}

export default AppV2;
