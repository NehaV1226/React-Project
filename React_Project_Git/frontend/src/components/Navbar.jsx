import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark px-4"
      style={{ height: "70px" }}
    >
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2019/03/Monogram-PR-Logo-Design-by-Greenlines-Studios.jpg"
          alt="Logo"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
        <span
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            color: "#61dafb",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            letterSpacing: "1px",
            fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          ProReact
        </span>
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dash">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
