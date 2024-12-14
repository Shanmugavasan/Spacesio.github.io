import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../styles/Main.css"; // Import social icons // Ensure the CSS file for styles is imported

const FloatingSocial = () => {
  return (
    <div className="floating-social">
      <a
        href="https://www.instagram.com/spacesio.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://wa.me/8056068185"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon whatsapp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingSocial;
