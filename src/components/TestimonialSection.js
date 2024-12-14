import React, { useState } from "react";
import "../styles/TestimonialSection.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Company Name",
    text: "The service was exceptional. They helped transform our space beyond expectations!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer, Design Studio",
    text: "A wonderful experience! The team’s attention to detail is unmatched. Highly recommend.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Manager, Startup Co.",
    text: "Professional and creative. They provided unique solutions to meet our needs!",
  },
  {
    id: 4,
    name: "Emily Green",
    role: "Architect, Green Designs",
    text: "An incredible team that goes above and beyond. Truly innovative and talented.",
  },
  {
    id: 5,
    name: "Lucas White",
    role: "Entrepreneur",
    text: "Exceptional design services. Their professionalism and creativity are unmatched.",
  },
];

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="testimonial-section" id="testimonials">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <div className="testimonial-slider">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <p className="testimonial-text">
              "{testimonials[activeTestimonial].text}"
            </p>
            <h3 className="testimonial-name">
              {testimonials[activeTestimonial].name}
            </h3>
            <p className="testimonial-role">
              {testimonials[activeTestimonial].role}
            </p>
          </div>
        </div>
        <div className="navigation-buttons">
          <button className="prev-button" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="next-button" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
