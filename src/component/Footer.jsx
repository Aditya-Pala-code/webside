// import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <h2>Mind Spark Kids Castle</h2>
          <p>Where Every Child Sparkles ✨</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Address</li>
            <li>About</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 East Delhi</p>
          <p>📞 8700231213</p>
          <p>✉️ mindspark@gmail.com</p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="https://instagram.com" target="_blank">📸 Instagram</a>
            <a href="https://wa.me/918700231213" target="_blank">💬 WhatsApp</a>
            <a href="https://facebook.com" target="_blank">📘 Facebook</a>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Mind Spark Kids Castle | All Rights Reserved</p>
      </div>

    </footer>
  );
}