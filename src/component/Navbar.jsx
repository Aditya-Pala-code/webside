// import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="navbar">

      {/* LEFT LOGO */}
      <div className="logo-section">
        <img src={logo} alt="logo" />
        <div className="title">
          <h1>
            <span className="multi1">MIND SPARK</span><br />
            <span className="multi2">KIDS CASTLE</span>
          </h1>
          <p>WHERE EVERY CHILD SPARKLES</p>
        </div>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="nav-buttons">
        <Link to="/">
          <button className="btn home">🏠 Home</button>
        </Link>

        <Link to="/contact">
          <button className="btn contact">📞 Contact</button>
        </Link>

        <Link to="/address">
          <button className="btn address">📍 Address</button>
        </Link>

        <Link to="/about">
          <button className="btn about">👤 About</button>
        </Link>

      </div>

    </div>
  );
}