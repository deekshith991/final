import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import UserDashboard from "./Users/UserDashboard";
import UserProfile from "./Users/UserProfile";
import UserSettings from "./Users/UserSetting";
import UserAbout from "./Users/UserAbout";

import CompanyDashboard from "./Company/CompanyDashboard";
import CompanyProfile from "./Company/CompanyProfile";
import CompanySettings from "./Company/CompanySettings";
import CompanyAbout from "./Company/CompanyAbout";
import UserSetProfile from "./Users/UserSetProfile";

const UserRoutesPage = () => {
    const { userData } = useAuth();

    if (!userData || !userData.accountType) {
        return <p className="text-center text-red-500">Invalid user data.</p>;
    }

    return (
        <Routes>
            {userData.accountType === "user" ? (
                <>
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="settings" element={<UserSettings />} />
                    <Route path="about" element={<UserAbout />} />
                    <Route path="edit-profile" element={<UserSetProfile />} />

                </>
            ) : (
                <>
                    <Route path="dashboard" element={<CompanyDashboard />} />
                    <Route path="profile" element={<CompanyProfile />} />
                    <Route path="settings" element={<CompanySettings />} />
                    <Route path="about" element={<CompanyAbout />} />
                </>
            )}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default UserRoutesPage;
