import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Main Content */}
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={require("../images/logo red.png")} alt="INSIGHT Logo" className="footer-logo" />
          <p>
          Studying abroad offers more than just financial, academic, and career benefits. It’s a transformative experience that broadens your perspective on life, teaches you the true values of resilience and independence, and helps you grow stronger as an individual. By stepping into a new culture, you’ll not only gain knowledge but also invaluable life skills that will shape you for years to come.
          </p>
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <img src={require("../images/fb.png")} alt="Facebook" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <img src={require("../images/x.png")} alt="Twitter" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <img src={require("../images/yt.png")} alt="YouTube" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <img src={require("../images/li.png")} alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src={require("../images/i.png")} alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Combined Middle and Right Section */}
        <div className="footer-combined">
          {/* Middle Section */}
          <div className="footer-middle">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/countries-courses">Countries & Courses</a></li>
              <li><a href="/success-stories">Success Stories</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <h3>Contacts</h3>
            <div className="contact-wrapper">
              <a href="tel:+918270883451" className="contact-link">
                <img src={require("../images/call.png")} alt="Phone Icon" className="contact-icon" />
                +91 8270883451
              </a>
            </div>
            <div className="contact-wrapper">
              <a href="mailto:insighteducator09@gmail.com" className="contact-link">
                <img src={require("../images/message.png")} alt="Email Icon" className="contact-icon" />
                insighteducator09@gmail.com
              </a>
            </div>
            <div className="contact-wrapper">
              <a
                href="https://maps.app.goo.gl/xni7tFrzPdzbKph5A"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <img src={require("../images/map.png")} alt="Location Icon" className="contact-icon" />
                138-A, 8 St Cross Cut Road,<br /> Gandhipuram, Coimbatore.
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Insight Educator & Abroad Services. All Rights Reserved.</p>
        <p>Crafted By: Bhogan Mediasoft</p>
      </div>
    </footer>
  );
};

export default Footer;
