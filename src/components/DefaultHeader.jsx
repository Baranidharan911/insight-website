import React, { useState } from "react";
import "./DefaultHeader.css";

const DefaultHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="default-header">
      <div className="logo">
        <img src={require("../images/Asset 3.png")} alt="Insight Logo" />
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
        <button className="consultation-btn">Get a Free →</button>
      </div>
    </header>
  );
};

export default DefaultHeader;
