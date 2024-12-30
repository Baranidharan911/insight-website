import React from "react";
import "./CountriesAndCourses.css";

const CountriesAndCourses = () => {
  return (
    <div className="countries-courses-page">
      {/* Hero Section */}
      <section className="countries-courses-hero">
        <div className="countries-courses-hero-overlay">
          <h1>Countries and Courses</h1>
        </div>
      </section>

      {/* Text Content Section */}
      <section className="countries-courses-text-content">
        <h2>Insight English Educator & Abroad Services</h2>
        <p>
          The Best and Most Affordable Countries for Your Overseas Education Dream. 
          We are authorized representatives for over 700 universities across 25 countries.
        </p>
      </section>

      {/* Countries Section */}
      <section className="countries-courses-countries-section">
        <h2>Countries</h2>
        <div className="countries-courses-grid">
            {[
            { name: "USA", icon: require("../images/c1.png") },
            { name: "Australia", icon: require("../images/c2.png") },
            { name: "New Zealand", icon: require("../images/c3.png") },
            { name: "Canada", icon: require("../images/c2.png") },
            { name: "Ireland", icon: require("../images/c4.png") },
            { name: "Sweden", icon: require("../images/c4.png") },
            { name: "Poland", icon: require("../images/c6.png") },
            { name: "Germany", icon: require("../images/c6.png") },
            ].map((country) => (
            <div key={country.name} className="countries-courses-country-card">
                <img src={country.icon} alt={country.name} />
                <p>{country.name}</p>
            </div>
            ))}
        </div>
      </section>


      {/* Courses Section */}
      <section className="countries-courses-courses-section">
        <h2>Courses</h2>
        <div className="courses-grid">
            {[...Array(9)].map((_, index) => (
            <div key={index} className="countries-courses-course-card"></div>
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="countries-courses-footer">
        {/* Reuse Footer Component */}
      </footer>
    </div>
  );
};

export default CountriesAndCourses;
