import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data from localStorage
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser); // Store the user object if it's valid
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        } else {
            navigate("/login"); // Redirect to login if no user is found
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear localStorage and redirect to login
        localStorage.removeItem("user");
        navigate("/login");
    };

    if (!user) {
        return <div>Loading...</div>; // Show loading while fetching user data
    }

    return (
        <div>
            {/* <h1>Welcome, {user.username}!</h1> */}
            {/* <h1>Welcome {user.name}!</h1> */}
            <h1>Welcome!</h1>
            <p>You are logged in as {user.email}</p>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
