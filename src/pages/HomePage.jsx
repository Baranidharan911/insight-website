import React, { useRef } from "react";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";
import c6 from "../images/c6.png";
import "./HomePage.css";

const HomePage = () => {
    const carouselRef = useRef(null);

    // Function to scroll left
    const scrollLeft = () => {
        if (carouselRef.current) {
        carouselRef.current.scrollBy({
            left: -300, // Adjust scroll distance
            behavior: "smooth",
        });
        }
    };

    // Function to scroll right
    const scrollRight = () => {
        if (carouselRef.current) {
        carouselRef.current.scrollBy({
            left: 300, // Adjust scroll distance
            behavior: "smooth",
        });
        }
    };

    return (
    <div className="home">
        {/* Hero Section */}
        <section id="hero" className="hero" style={{ backgroundImage: `url("../images/hero.jpg")` }}>
            <div className="hero-overlay">
                <div className="hero-flex-container">
                    <div className="hero-content">
                        <h3>Welcome to Insight Educator & Abroad Services</h3>
                        <h1>
                            Start Your Global <br />
                            Education Journey
                        </h1>
                        <p>
                            Begin your global education journey with Insight! <br />
                            We offer complete overseas admission support, <br />
                            covering everything from admission to accommodation & travel.
                        </p>
                        <div className="hero-buttons">
                            <button className="explore-btn">Explore Courses</button>
                            <button className="watch-btn">
                                <span className="play-icon"></span> Watch it Now
                            </button>
                        </div>
                    </div>
                    <div className="hero-side-image">
                        <img src={require("../images/h-image.png")} alt="Hero Side" />
                    </div>
                </div>
            </div>
        </section>


        <section id="countries" className="countries">
        <h2>Your Gateway to Global Education</h2>
        <div className="carousel-container">
            {/* Left Arrow */}
            <button className="carousel-arrow left-arrow" onClick={scrollLeft}>
            &#9664;
            </button>

            {/* Main Card/Container for Images */}
            <div className="carousel" ref={carouselRef}>
            {[
                { name: "USA", img: c1 },
                { name: "Australia", img: c2 },
                { name: "New Zealand", img: c3 },
                { name: "Ireland", img: c4 },
                { name: "Sweden", img: c5 },
                { name: "Poland", img: c6 },
                { name: "Poland", img: c6 },
            ].map((country) => (
                <div key={country.name} className="country-item">
                <img src={country.img} alt={country.name} />
                <p>{country.name}</p>
                </div>
            ))}
            </div>

            {/* Right Arrow */}
            <button className="carousel-arrow right-arrow" onClick={scrollRight}>
            &#9654;
            </button>
        </div>
        </section>

        {/* Overseas Consultancy Section */}
        <section id="consultancy" className="consultancy">
        <div className="consultancy-content">
            {/* Plane Image */}
            <img
            src={require("../images/os.png")} 
            alt="Consultancy"
            className="consultancy-image"
            />
            <div className="consultancy-text">
            <h2>Overseas Consultancy</h2>
            <p>
                We provide expert guidance and comprehensive support for your study abroad journey. 
                If you have no idea where to start, we offer free guidance and expert advice to help 
                shape your educational journey. From selecting the right country and course to assisting 
                with applications, financial aid, and pre-departure preparation, our team ensures a seamless experience.
                With personalized solutions and ongoing support, we help turn your dream of studying overseas into reality.
            </p>
            </div>
        </div>
        </section>

        {/* Call-to-Action Section */}
        <section id="cta" className="cta-section">
        <h1>Have no idea where to start? Call now for free guidance and expert advice!</h1>
        <button className="call-now-btn">Call Now</button>
        </section>

        {/* Video Section */}
        <section id="video" className="video-section">
        <div className="video-container">
            <video controls autoplay muted loop className="video-element">
            <source src="/path-to-your-video.mp4" type="video/mp4" /> {/* Replace with your actual video path */}
            Your browser does not support the video tag.
            </video>
        </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
        <h2>Let us know your concern, We are always Ready!</h2>
        <div className="contact-form-container">
            {/* Contact Image */}
            <div className="contact-image">
            <img src={require("../images/connect.jpg")} alt="Contact Us" />
            </div>

            {/* Form */}
            <form className="contact-form">
            {/* Name Input */}
            <input type="text" className="name-input" placeholder="Enter your Name" required />

            {/* Email and Phone Inputs in Same Row */}
            <div className="email-phone-row">
                <input type="email" className="email-input" placeholder="Enter your Email" required />
                <input type="tel" className="phone-input" placeholder="Enter your Phone" required />
            </div>

            {/* Message Input */}
            <textarea className="message-input" placeholder="Your Message"></textarea>

            {/* Program Options */}
            <div className="program-options">
                <label className="program-label">Program:</label>
                <div className="radio-group">
                    <label className="radio-option">
                    <input type="radio" name="program" value="Study Abroad" /> Study Abroad
                    </label>
                    <label className="radio-option">
                    <input type="radio" name="program" value="Educator Support" /> Educator
                    </label>
                </div>
            </div>


            {/* Submit Button */}
            <button type="submit" className="submit-btn">Connect Now</button>
            </form>
        </div>
        </section>

    </div>
    );
};

export default HomePage;
