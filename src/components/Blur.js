import React from "react";
import "../styles/Blur.css"; // Import styles for the background (Ensure this path is correct)
import bgImage from "../assets/Spacesio.png"; // Correct path for the background image

const Blur = ({ children }) => {
  return (
    <div className="blur-home">
      <div id="home" className="blur-container">
        <img src={bgImage} alt="Background" className="blur-image" />
        <div className="blur-content">{children}</div>{" "}
        {/* Renders child components (Hero) */}
      </div>
    </div>
  );
};

export default Blur;
