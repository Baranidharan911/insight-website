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
        Insight is the ability to understand something clearly, to see beyond the obvious, and to grasp the full picture. It’s about gaining deep knowledge and clarity in every situation.
        </p>
        <p>
        At Insight Educator & Abroad Services, we live by this principle in everything we do. Our founder, Neshika, who completed her education in the UK, brings firsthand experience to our services. With years of experience in the field and as an IELTS-certified trainer from Trinity University, Neshika and the team offer you professional guidance throughout your study-abroad journey.
        </p>
        <p>
        We’ve successfully helped many students achieve their dreams of studying abroad, offering clear and thoughtful support every step of the way. From counselling and choosing the right university, to managing admissions, finance, visa processes, flight bookings, and accommodation, we take care of all the details. Whether it’s pre-arrival support or post-arrival guidance, including airport pickups, we make sure everything is smooth and stress-free.
        </p>
        <p>
        We work with top universities across popular study destinations, including the USA, UK, Australia, Canada, Ireland, New Zealand, Europe, UAE, Singapore, and Malaysia. We offer a wide variety of courses to match your academic and career aspirations. And, we always ensure your options align with your preferences, never forcing you into limited choices. Additionally, we help students secure generous scholarships to reduce the financial burden, making quality education more accessible. We prioritize your preferences in the decision-making process, ensuring that your journey is tailored to your dreams and goals.
        </p>
        <p>
        We pride ourselves on addressing all your questions—no matter how small—with professionalism, kindness, and understanding. We also welcome parents into our office to ensure they’re fully informed and confident in the process. Our goal is to make your journey to studying abroad a pleasant, easy, and successful one.
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
            <img src={service.icon} alt={`${service.title} Icon`} />
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
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
