import React, { useState } from "react";
import "./HomeHeader.css";

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
          <img src={require("../images/logo red.png")} alt="INSIGHT Logo" className="logo-image" />
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
        <p>+91 8270883451</p>
        <button className="consultation-btn">Get a Free<br />Consultation →</button>
      </div>
    </header>
  );
};

export default HomeHeader;
