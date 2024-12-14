import React, { useEffect } from "react";
import "../styles/Services.css";
import murphybed from "../assets/foldingbed.jpg";
import spacesaving from "../assets/spacesavingfurniture.jpg";
import staircase from "../assets/furniture.jpg";

const Services = () => {
  return (
    <div className="services-section" id="services">
      <h2 className="services-heading">Our Products</h2>
      <div className="service-container">
        <div className="service-item">
          <div className="service-image-container">
            <img src={murphybed} alt="Murphy Bed" className="service-image" />
          </div>
          <div className="service-info">
            <h3 className="service-title">Murphy Bed</h3>
            <p className="service-description">
              Transform your space with
              <p>Elegantly concealed Beds, Until it's time for rest</p>
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-image-container">
            <img
              src={spacesaving}
              alt="Folding Dining Table"
              className="service-image"
            />
          </div>
          <div className="service-info">
            <h3 className="service-title">Folding Dining Tables</h3>
            <p className="service-description">
              Reclaim your Space with
              <p>Folding Dining Table, Fold it away with ease.</p>
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-image-container">
            <img
              src={staircase}
              alt="Staircase Storage"
              className="service-image"
            />
          </div>
          <div className="service-info">
            <h3 className="service-title">Staircase Storage</h3>
            <p className="service-description">
              Elevate your space with
              <p>Storage stairs, that blends function and style.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
