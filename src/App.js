import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"; // Placeholder for About Page
import ContactPage from "./pages/ContactPage"; // Placeholder for Contact Page
import HomeHeader from "./components/HomeHeader";
import DefaultHeader from "./components/DefaultHeader";
import CountryPage from "./pages/CountriesAndCourses";
import SuccessStories from "./pages/SuccessStories";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with HomeHeader */}
        <Route
          path="/"
          element={
            <>
              <HomeHeader />
              <HomePage />
              <Footer />
            </>
          }
        />

        {/* Other Pages with DefaultHeader */}
        <Route
          path="/about"
          element={
            <>
              <DefaultHeader />
              <AboutPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/countries-courses"
          element={
            <>
              <DefaultHeader />
              <CountryPage />
              <Footer />
            </>
          }
          />
        <Route
          path="/success-stories"
          element={
            <>
              <DefaultHeader />
              <SuccessStories />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <DefaultHeader />
              <ContactPage />
              <Footer />
            </>
          }
        />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
