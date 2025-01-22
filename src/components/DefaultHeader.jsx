import React, { useState } from "react";
import "./DefaultHeader.css";
import { Link } from "react-router-dom";

const DefaultHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="default-header">
      <div href="/" class="logo">
      <Link to="/">
        <img src={require("../images/Asset 3.png")} alt="Insight Logo" />
      </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Navigation Menu */}
      <div className="nav-contact">
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/countries-courses">Countries & Courses</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Button (hidden in mobile view) */}
        <div className="contacts-section">
          <a
            href="https://wa.me/918270883451" 
            target="_blank" 
            rel="noopener noreferrer"
            className="consultation-btn"
          >
            Get a Free →
          </a>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;
