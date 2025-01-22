import React, { useState } from "react";
import "./HomeHeader.css";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu state:", isMenuOpen);
  };

  return (
    <header className="home-header">
      <div className="logo-nav">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img src={require("../images/logo red.png")} alt="INSIGHT Logo" className="logo-image" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/countries-courses">Countries & Courses</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <div className="hamburgers" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contacts-section">
        <a
          href="https://wa.me/918270883451" 
          target="_blank" 
          rel="noopener noreferrer"
          className="consultation-btn"
        >
          Get a Free<br />Consultation →
        </a>
      </div>

    </header>
  );
};

export default HomeHeader;
