import React, { useState } from "react";
import "./SuccessStories.css";

const SuccessStories = () => {
  const totalCards = 6; // Total number of video cards
  const cardsToShow = 3; // Number of video cards visible at a time
  const [currentIndex, setCurrentIndex] = useState(0); // For video slider
  const [currentPosition, setCurrentPosition] = useState(0); // 0 = left, 1 = center, 2 = right (for white boxes)

  // Handles moving the video carousel to the right
  const handleNext = () => {
    if (currentIndex < totalCards - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
    if (currentPosition < 2) {
      setCurrentPosition((prev) => prev + 1);
    }
  };

  // Handles moving the video carousel to the left
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
          {/* Video Slider */}
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
                      ? "translateX(0%)" // Left
                      : currentPosition === 1
                      ? "translateX(50%)" // Center
                      : "translateX(100%)", // Right
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
            disabled={currentIndex === totalCards - cardsToShow && currentPosition === 2}
          >
            ›
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
