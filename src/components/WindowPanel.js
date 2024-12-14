import React, { useState, useEffect } from "react";
import img from "../assets/Abinaya's Residence/2.jpg";
import "../styles/WindowPanel.css";

export default function Window() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Image loading logic (can also be used to trigger animations, etc.)
    setImageLoaded(true);
  }, []);

  return (
    <>
      <img
        src={img}
        className={`bg-image ${imageLoaded ? "visible" : "hidden"}`}
        onLoad={() => setImageLoaded(true)} // Ensure visibility once loaded
      />
      <div className="window-panel"></div>
    </>
  );
}
