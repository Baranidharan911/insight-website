import React, { useState } from "react";
import "./SuccessStories.css";

const SuccessStories = () => {
  const totalCards = 6;
  const cardsToShow = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0); // Now 0 to 3

  const handleNext = () => {
    if (currentIndex < totalCards - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
    if (currentPosition < 3) { // Changed from 2 to 3
      setCurrentPosition((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    if (currentPosition > 0) {
      setCurrentPosition((prev) => prev - 1);
    }
  };

  return (
    <div className="success-stories-page">
      {/* Hero Section */}
      <section className="success-stories-hero">
        <div className="success-stories-hero-overlay">
          <h1>Success Stories</h1>
        </div>
      </section>

      {/* Success Stories Video Section */}
      <section className="success-stories-video-section">
        <h2>Hear from the students themselves!</h2>

        {/* Video Slider */}
        <div className="video-carousel">
          <div className="video-slider" style={{ transform: `translateX(-${currentIndex * 364}px)` }}>
            {[...Array(totalCards)].map((_, index) => (
              <div key={index} className="video-card">
                <div className="video-placeholder">
                  <div className="play-icon"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Red Boxes with White Boxes */}
        <div className="pagination-indicator">
          {[0, 1, 2].map((box) => (
            <div key={box} className="pagination-box">
              <div
                className="inner-box"
                style={{
                  transform:
                    currentPosition === 0
                      ? "translateX(0%)"
                      : currentPosition === 1
                      ? "translateX(63%)"
                      : currentPosition === 2
                      ? "translateX(96%)"
                      : "translateX(160%)",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button
            className="nav-arrow prev"
            onClick={handlePrev}
            disabled={currentIndex === 0 && currentPosition === 0}
          >
            ‹
          </button>
          <button
            className="nav-arrow next"
            onClick={handleNext}
            disabled={currentIndex === totalCards - cardsToShow && currentPosition === 3} // Changed from 2 to 3
          >
            ›
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
