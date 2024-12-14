import React from "react";
import "../styles/About.css"; // Ensure to import the CSS file
import Process from "./processPanel";
import img from "../assets/Abinaya's Residence/2.jpg";

const About = () => {
  const playfairStyle = {
    fontFamily: "'Playfair Display', serif",
  };

  return (
    <section className="about-container">
      <div className="about-top" id="about">
        <div className="about-image">
          <img src={img} alt="Abinaya's Residence" />
        </div>
        <div className="about-text">
          <h2 className="about-header" style={playfairStyle}>
            Crafting Timeless Spaces That Inspire and Elevate
          </h2>
          <p className="about-description" style={playfairStyle}>
            At <strong>Spacesio</strong>, we believe that every space tells a
            story. Our mission is to weave art, functionality, and design to
            create spaces that not only look stunning but feel like home. From
            residential to commercial, our designs are customized to fit the
            unique needs and personalities of our clients.
          </p>
        </div>
      </div>
      <div className="about-philosophy">
        <h3>Our Design Process</h3>
        <p>
          Design is more than just space creation; it’s the art of shaping
          immersive environments. With mastery of color, texture, lighting, and
          layout, Every design element is an opportunity for unique expression.
          Whether transforming an office, a home, or a creative space. Our
          holistic approach transforms mundane spaces into extraordinary
          canvases of personal expression.
        </p>
      </div>
      <Process />
    </section>
  );
};

export default About;
