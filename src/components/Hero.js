import React, { useEffect } from "react";
import "../styles/Hero.css";

// Importing the hero images for the grid cells
import heroImage1 from "../Image split(1280 X 1280)/row-1-column-1 (2).png";
import heroImage2 from "../Image split(1280 X 1280)/row-1-column-2 (1).png";
import heroImage3 from "../Image split(1280 X 1280)/row-1-column-3 (1).png";
import heroImage4 from "../Image split(1280 X 1280)/row-2-column-1 (1).png";
import heroImage5 from "../Image split(1280 X 1280)/row-2-column-2 (1).png";
import heroImage6 from "../Image split(1280 X 1280)/row-2-column-3 (1).png";
import heroImage7 from "../Image split(1280 X 1280)/row-3-column-1 (1).png";
import heroImage8 from "../Image split(1280 X 1280)/row-3-column-2 (1).png";
import heroImage9 from "../Image split(1280 X 1280)/row-3-column-3 (1).png";

// Importing the corresponding logo images for the grid cells
import logoImage1 from "../Logo split (1280 X 1280)/row-1-column-1 (2).png";
import logoImage2 from "../Logo split (1280 X 1280)/row-1-column-2 (1).png";
import logoImage3 from "../Logo split (1280 X 1280)/row-1-column-3 (1).png";
import logoImage4 from "../Logo split (1280 X 1280)/row-2-column-1 (1).png";
import logoImage5 from "../Logo split (1280 X 1280)/row-2-column-2 (1).png";
import logoImage6 from "../Logo split (1280 X 1280)/row-2-column-3 (1).png";
import logoImage7 from "../Logo split (1280 X 1280)/row-3-column-1 (1).png";
import logoImage8 from "../Logo split (1280 X 1280)/row-3-column-2.png";
import logoImage9 from "../Logo split (1280 X 1280)/row-3-column-3 (1).png";

const Hero = () => {
  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
    heroImage6,
    heroImage7,
    heroImage8,
    heroImage9,
  ];

  const logoImages = [
    logoImage1,
    logoImage2,
    logoImage3,
    logoImage4,
    logoImage5,
    logoImage6,
    logoImage7,
    logoImage8,
    logoImage9,
  ];

  useEffect(() => {
    const gridItems = document.querySelectorAll(".grid-item .grid-content");

    gridItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("flip"); // Add the class to flip
      }, index * 500); // Delay of 500ms between flips
    });
  }, []);

  const gridItems = heroImages.map((heroImage, index) => {
    const row = Math.floor(index / 3) + 1; // Calculate row (1-indexed)
    const col = (index % 3) + 1; // Calculate column (1-indexed)

    return (
      <div
        key={index}
        className={`grid-item row-${row} col-${col}`} // Assign row and column classes
      >
        <div className="grid-content">
          {/* Front side: Hero image */}
          <img
            src={heroImage}
            alt={`Hero ${index + 1}`}
            className="hero-image"
          />
          {/* Back side: Logo image */}
          <img
            src={logoImages[index]}
            alt={`Logo ${index + 1}`}
            className="logo-image"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="hero-panel">
      <div className="grid-container">{gridItems}</div>
    </div>
  );
};

export default Hero;
