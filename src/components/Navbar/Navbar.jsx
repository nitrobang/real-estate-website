// Navbar.js
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span className="navbar__company-name"><Link to="/">AwadhHousing</Link></span>
      </div>
      <div className="navbar__toggle">
        <input type="checkbox" id="navbar__checkbox" />
        <label htmlFor="navbar__checkbox" className="navbar__icon">
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
        </label>
      </div>
      <div className="navbar__center">
        <ul className="navbar__links">
          <li><Link to="/why-work">Why Work With Us</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          <li><Link to="/about">About Us</Link></li>
          {/* Add more navigation links if needed */}
        </ul>
      </div>
      <div className="navbar__right">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
