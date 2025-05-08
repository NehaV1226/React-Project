import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../components/AuthForm.css';

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // 🔐 Redirect to dashboard if already logged in
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            navigate("/dash"); // Redirect to dashboard if user is already logged in
        }
    }, [navigate]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", form);
            if (res.data.success) {
                alert("Login successful! You're logged in.");
                localStorage.setItem("user", JSON.stringify(res.data.user)); // Store user data in localStorage
                navigate("/dash"); // Redirect to dashboard after successful login
            } else {
                setError(res.data.message); // Show the error message returned from backend
            }
        } catch (err) {
            console.error(err);
            setError("Login failed.");
        }
    };

    return (
        <div className="login-background">
            <div className="container mt-5 bg-white p-4 rounded shadow" style={{ maxWidth: "500px" }}>
                <h2 className="text-center mb-4">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Login</button>
                    <div className="text-center mt-3">
                        <p>New to ProReact?</p>
                        <button className="btn btn-outline-secondary" onClick={() => navigate("/signup")}>
                            Go to Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
