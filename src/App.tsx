import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/HeroSection/HeroSection";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./Layout/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import ParticlesBackground from "./components/Particles/Particles";
import { Parallax } from "react-parallax";
import ImageDivider from "./components/ImageDivider/ImageDivider";
import Skills from "./components/Skills/Skills";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target;
          if (entry.isIntersecting) {
            setCurrentSection(section.id);

            // Adding fade-in class and removing fade-out
            section.classList.add("fade-in");
            section.classList.remove("fade-out");
          } else {
            // Adding fade-out class and removing fade-in
            section.classList.add("fade-out");
            section.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Cleanup observer on unmount
      document.querySelectorAll("section").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div className="App">
      <Navbar currentSection={`#${currentSection}`} />
      <ParticlesBackground />
      <main className="glassmorphism-wrapper">
        <Home />
        <Skills />
        <Experience />
        <About />
        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
