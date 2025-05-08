import React from 'react';
import '../styles/custom.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light mt-5 py-4">
            <div className="container text-center">
                <p className="mb-2">&copy; {new Date().getFullYear()} ProReact Store. All rights reserved.</p>
                <div>
                    <a href="/dash" className="footer-link me-3">Dashboard</a>
                    <a href="/" className="footer-link me-3">Home</a>
                    <a href="/cart" className="footer-link me-3">Cart</a>
                    <a href="/orders" className="footer-link me-3">Orders</a>
                    <a href="/signup" className="footer-link">Sign In</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
