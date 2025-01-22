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
        <h2>Your Pathway to Global Education 🌍</h2>
        <p>
        No matter where you want to study, which university you dream of, or the course that excites you—we’re here to make it happen! From highly sought-after courses to specialized fields, we’ll guide you with options that align perfectly with your ambitions. "With endless possibilities worldwide, we’re here to help you find the perfect place to learn and grow."
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
          {[
            {
              image: require('../images/Course icons-08.png'),
              title: "Business and Management",
              alt: "Business and Management"
            },
            {
              image: require('../images/Course icons-08.png'),
              title: "Engineering and Technology",
              alt: "Engineering and Technology"
            },
            {
              image: require('../images/Course icons-09.png'),
              title: "Computer Science and IT",
              alt: "Computer Science and IT"
            },
            {
              image: require('../images/Course icons-06.png'),
              title: "Medicine and Healthcare",
              alt: "Medicine and Healthcare"
            },
            {
              image: require('../images/Course icons-07.png'),
              title: "Finance and Accounting",
              alt: "Finance and Accounting"
            },
            {
              image: require('../images/Course icons-05.png'),
              title: "Data Science and Analytics",
              alt: "Data Science and Analytics"
            },
            {
              image: require('../images/Course icons-04.png'),
              title: "Hospitality & Tourism Management",
              alt: "Hospitality and Tourism"
            },
            {
              image: require('../images/Course icons-02.png'),
              title: "Law and Legal Studies",
              alt: "Law and Legal Studies"
            },
            {
              image: require('../images/Course icons-03.png'),
              title: "Design Management (Fashion,Game,Interior)",
              alt: "Design Management"
            }
          ].map((course, index) => (
            <div key={index} className="countries-courses-course-card">
              <img src={course.image} alt={course.alt} />
              <h3>{course.title}</h3>
            </div>
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
