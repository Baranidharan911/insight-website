import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url('/path-to-hero-image.jpg')` }}>
        <div className="heros-overlay">
          <h1>Contact</h1>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="gets-in-touch">
        <div className="form-container">
          <h2>Get in Touch</h2>
          <p>Have a question or just want to say hi? We'd love to hear from you.</p>
          <form>
            {/* Name and Email Row */}
            <div className="forms-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            {/* Subject Input */}
            <input type="text" className="subject-input" placeholder="Subject" required />

            {/* Message Textarea */}
            <textarea className="messages-input" placeholder="Enter your Message" required></textarea>

            {/* Submit Button */}
            <button type="submit" className="submits-btn">Send your Message</button>
          </form>
        </div>


        {/* Contact Details */}
        <section className="contact-details">
          <div className="details-card">
            {/* Head Office */}
            <div className="details-item">
              <img src={require("../images/m.png")} alt="Map Icon" className="details-icon" />
              <div className="details-heading">
                <h5>Head Office</h5>
                <p>138-A, 8 St Cross Cut Road,<br/> Gandhipuram, Coimbatore.</p>
              </div>
            </div>

            {/* Email */}
            <div className="details-item">
              <img src={require("../images/me.png")} alt="Email Icon" className="details-icon" />
              <div className="details-heading">
                <h5>Email us directly</h5>
                <p>insighteducator09@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="details-item">
              <img src={require("../images/c.png")} alt="Phone Icon" className="details-icon" />
              <div className="details-heading">
                <h5>Phone</h5>
                <p>+91 8270883451</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="detail-item">
              <h5>Follow us</h5>
              <div className="socials-icons">
                <a href="#"><img src={require("../images/f.png")} alt="Facebook" /></a>
                <a href="#"><img src={require("../images/t.png")} alt="Twitter" /></a>
                <a href="#"><img src={require("../images/y.png")} alt="YouTube" /></a>
                <a href="#"><img src={require("../images/l.png")} alt="LinkedIn" /></a>
                <a href="#"><img src={require("../images/ig.png")} alt="Instagram" /></a>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9283498145067!2d76.95592231533455!3d11.011841292159867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8593ff4af2db9%3A0x88ab2d8c74a11e6a!2sSri%20Ramakrishna%20Engineering%20College!5e0!3m2!1sen!2sin!4v1678176453827!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>


      {/* Footer */}
      <footer className="footer">
        {/* Reuse your Footer component here */}
      </footer>
    </div>
  );
};

export default Contact;
