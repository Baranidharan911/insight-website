import React, { useState } from "react";
import "./HomeHeader.css";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu state:", isMenuOpen); // Debugging log
  };

  return (
    <header className="home-header">
      {/* Logo Section */}
      <div className="logo-nav">
        <div className="logo">
          <img src={require("../images/logo.png")} alt="INSIGHT Logo" className="logo-image" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburgers" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
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

      {/* Contact Section (hidden in mobile view) */}
      <div className="contacts-section">
        <p>+91 8270883451</p>
        <button className="consultation-btn">Get a Free<br />Consultation →</button>
      </div>
    </header>
  );
};

export default HomeHeader;
