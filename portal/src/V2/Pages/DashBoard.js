import React from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { userDataAtom, logoutAtom } from "../atoms/authAtoms";

import Header from "../Common/Header";
import Button from "../UI/Button";

const Dashboard = () => {
    // Using `useAtomValue` to read atom state without requiring a setter
    const userData = useAtomValue(userDataAtom);
    // Using `useSetAtom` to access the logout action
    const logout = useSetAtom(logoutAtom);

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-4xl mx-auto py-8 px-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Welcome, {userData?.name || userData?.email}!
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Account Type: <span className="font-medium">{userData?.accountType || "N/A"}</span>
                    </p>
                    <div className="mt-4">
                        <Button label="Logout" onClick={handleLogout} className="bg-red-500 text-white" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
