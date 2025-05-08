import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../components/AuthForm.css';


const Signup = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", form);
            if (res.data.user) {
                alert("Signup successful. Please login.");
                navigate("/login");
            } else {
                setError(res.data.message);
            }
        } catch (err) {
            console.error(err);
            setError("Signup failed.");
        }
    };

    return (
        <div className="signup-background">
            <div className="container mt-5 bg-white p-4 rounded shadow" style={{ maxWidth: "500px" }}>
                <h2 className="text-center mb-4">Sign Up to ProReact</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                </form>
    
                <div className="text-center mt-3">
                    <p>Already have an account?</p>
                    <button className="btn btn-outline-secondary" onClick={() => navigate("/login")}>
                        Go to Login
                    </button>
                </div>
            </div>
        </div>
    );
    
};

export default Signup;
