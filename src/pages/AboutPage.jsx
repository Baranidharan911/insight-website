import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section" style={{ backgroundImage: `url('/path-to-hero-image.jpg')` }}>
        <div className="about-hero-overlay">
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content">
        <h2>Insight Educator & Abroad Services</h2>
        <p>
          Insight Educator & Abroad Services is a leading name in the field of overseas education, offering a 
          comprehensive range of solutions with global partnerships and a strong national footprint. With over 
          ten years of experience, we are committed to making international education more accessible and within reach. 
          Our dedicated team extends its support across all South Indian branches, providing guidance at every step 
          of your journey to study abroad.
        </p>
        <p>
          As authorized representatives of more than 700 universities in 29 countries, we facilitate access to top 
          academic destinations for international students, including the USA, UK, Australia, Canada, Ireland, New Zealand, 
          and Europe. Our experts assist you in choosing the right institution that aligns with your academic ambitions 
          from an extensive selection of options.
        </p>
        <p>
          Take advantage of our holistic overseas education services, which begin with helping you make informed choices 
          about your study destination and continue through the admissions process, coaching for entrance exams (IELTS, TOEFL, GRE, GMAT, SAT), securing financial aid (education loans), and managing visa applications. With Insight Educator & Abroad Services, you’ll receive professional support and expert advice throughout your entire study-abroad journey.
        </p>
      </section>
      <div className="cta-banner">
        We help you study abroad. We are here to help you to find the Quality Abroad Education!
      </div>

      {/* Our Services Section */}
      <section className="our-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {/* Service Cards */}
          {[
            {
              title: "Counselling & Guidance",
              icon: "/images/cg.png",
              description:
                "Studying abroad can be overwhelming, but we're here to make it easier. Whether you're exploring or ready to take the leap, our expert team will guide you every step, offering support without pressure at any stage.",
            },
            {
              title: "Application Process",
              icon: "/images/ap.png",
              description:
                "We make the application process simple and hassle-free, handling everything from document collection to form submission, ensuring your application stands out.",
            },
            {
              title: "SOP Writing",
              icon: "/images/sop.png",
              description:
                "A strong Statement of Purpose (SOP) is crucial for a successful application. We carefully craft your SOP to highlight your strengths, experiences, and goals, presenting your story in the most compelling way.",
            },
            {
              title: "Pre Arrival Guidance",
              icon: "/images/pa.png",
              description:
                "Our pre-arrival guidance prepares you for your new adventure, offering tips on what to buy, what to expect, and cultural insights to ensure you're ready for life in a new country.",
            },
            {
              title: "Accommodation Arrangements",
              icon: "/images/aa.png",
              description:
                "We offer affordable accommodation options that fit your needs and budget, ensuring you're comfortably settled before you arrive.",
            },
            {
              title: "Country and Course Selection",
              icon: "/images/cc.png",
              description:
                "Choosing the right country and course can be challenging. We help you find the best fit based on your interests, goals, and future prospects, ensuring your education is a valuable investment.",
            },
            {
              title: "Financial Support",
              icon: "/images/fs.png",
              description:
                "We assist with collateral and non-collateral loans, connecting you with trusted partners to find affordable financial solutions, making education funding stress-free.",
            },
            {
              title: "Flight Tickets Booking",
              icon: "/images/ftb.png",
              description:
                "We help you find the best flight deals that fit your budget, ensuring you travel with peace of mind. Our expert team knows how to get the best value for your money. We'll make sure your journey is comfortable and cost-effective.",
            },
            {
              title: "Part Time Job Assistance",
              icon: "/images/ptj.png",
              description:
                "We help you find part-time job opportunities that fit your skills and schedule, allowing you to gain experience, support yourself, and start building your career before graduation.",
            },
            {
              title: "Post Arrival Support",
              icon: "/images/pas.png",
              description:
                "We provide essential post-arrival support including airport pickup and local guidance to help you settle in smoothly.",
            },
          ].map((service) => (
            <div key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <img src={service.icon} alt={service.title} />
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="red-container"></div>


      {/* Footer */}
      <footer className="footer">
        {/* Reuse Footer Component */}
      </footer>
    </div>
  );
};

export default AboutPage;
