import React from "react";
import { useAuth } from "../context/AuthContext";

import Header from "../Common/Header";

const Dashboard = () => {
    const { userData, logout } = useAuth();

    return (
        <div>
            <Header />
            <h1>Welcome, {userData?.email}!</h1>
            <p>Account Type: {userData?.accountType}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;
