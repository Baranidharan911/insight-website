import React, { useState } from "react";
import "./SuccessStories.css";

const SuccessStories = () => {
  const totalTestimonials = 6; // Total number of testimonials
  const testimonialsToShow = 3; // Number of testimonials visible at once
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < totalTestimonials - testimonialsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const testimonials = [
    {
      name: "Shabir Basha",
      stars: 5,
      review:
        "Highly recommended. Bhogan Mediasoft is an excellent digital marketing agency, with a focus on passion for all digital solutions.",
    },
    {
      name: "John Doe",
      stars: 5,
      review:
        "Outstanding service and results! They helped my business grow beyond expectations.",
    },
    {
      name: "Jane Smith",
      stars: 4,
      review: "Great experience! Professional and highly knowledgeable team.",
    },
    {
      name: "Alice Brown",
      stars: 5,
      review:
        "Fantastic! Their innovative approach helped me achieve my goals.",
    },
    {
      name: "Michael Lee",
      stars: 4,
      review:
        "Impressive results and excellent communication throughout the project.",
    },
    {
      name: "Emily White",
      stars: 5,
      review:
        "A truly dedicated and talented team! Highly recommend their services.",
    },
    {
      name: "Emily White",
      stars: 5,
      review:
        "A truly dedicated and talented team! Highly recommend their services.",
    },
  ];

  return (
    <div className="success-stories-page">
      {/* Hero Section */}
      <section className="success-stories-hero">
        <div className="success-stories-hero-overlay">
          <h1>Success Stories</h1>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories-video-section">
        <h2>Hear from the students themselves!</h2>

        {/* Static Videos */}
        <div className="video-grid">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="video-card">
              <div className="play-icon"></div>
            </div>
          ))}
        </div>

        {/* Scrollable Testimonials */}
        <div className="testimonial-carousel">
          <div
            className="testimonial-slider"
            style={{ transform: `translateX(-${currentIndex * 390}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-box">
                <h3>{testimonial.name}</h3>
                <div className="stars">
                  {Array.from({ length: testimonial.stars }, (_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <p>{testimonial.review}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <button
              className="nav-arrow prev"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              ‹
            </button>
            <button
              className="nav-arrow next"
              onClick={handleNext}
              disabled={currentIndex === totalTestimonials - testimonialsToShow}
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
