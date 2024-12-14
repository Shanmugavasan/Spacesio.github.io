import React from "react";
import Header from "./components/Header"; // Import the Header component
import Blur from "./components/Blur"; // Import the blurred background component
import Hero from "./components/Hero"; // Import the Hero component
import About from "./components/About"; // Import the About section component
import Services from "./components/Services"; // Import the Services section
import ProjectSection from "./components/ProjectSection"; // Import the Project section
import TestimonialSection from "./components/TestimonialSection"; // Import the Testimonial section
import Contact from "./components/ContactPage"; // Import the Contact section
import Portfolio from "./components/Portfolio"; // Import the Portfolio section
import Footer from "./components/Footer"; // Import the Footer component
import FloatingSocial from "./components/Main"; // Import the floating social icons component
import Window from "./components/WindowPanel.js";

const App = () => {
  return (
    <div className="app-container">
      {/* Header section - fixed at the top */}
      <Header />

      {/* Wrap the Hero component with the blurred background */}
      <Blur>
        <Hero />
      </Blur>

      {/* About section - rendered below Hero */}
      <About />

      {/* Window Section 
      <Window />*/}

      {/* Services section */}
      <Services />

      {/* Project section */}
      <ProjectSection />

      {/* Testimonial section */}
      <TestimonialSection />

      {/* Contact section */}
      <Contact />

      {/* Portfolio section */}
      <Portfolio />

      {/* Footer section */}
      <Footer />

      {/* Floating social icons - stays on every page */}
      <FloatingSocial />
    </div>
  );
};

export default App;
