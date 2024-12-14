import React from "react";
import "../styles/footer.css";
import logo from "../assets/brand-logo-colorized.jpg";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <a
            href="#"
            className="social-link"
            onClick={() => scrollToSection("home")}
          >
            <img src={logo} href="" className="footer-logo-image" />
          </a>
        </div>
        <div className="footer-right">
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Products</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Spacesio 2024 - 2/6, 4th Main Rd, Okkiayam, Thouraipakkam,
          Mahalakshmi Nagar, Adambakkam, Chennai
        </p>
        <p>Spacesio | The Designer Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
