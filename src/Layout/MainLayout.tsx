import React from "react";
import Home from "../components/HeroSection/HeroSection";
import ContactUs from "../components/Contact/ContactUs";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";

const MainLayout = () => {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Home />
        <Projects />
        <Experience />
        <About />
        <ContactUs />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
