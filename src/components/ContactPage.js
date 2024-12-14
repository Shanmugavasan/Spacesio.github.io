import React, { useState } from "react";
import "../styles/contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error when user starts typing
    setSuccessMessage(""); // Clear success message when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    setIsSubmitting(true);
    const form = new FormData();
    form.append("access_key", "7c902e99-329b-4080-b2e9-3f58090aa13d"); // Replace with your actual access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.success) {
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setError("Failed to send the message. Please try again.");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError("Error occurred while sending the message.");
        console.error(error);
      });
  };

  return (
    <div id="contact" className="contact-page">
      <div className="contact-info">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-details">
          <div className="contact-detail">
            <FaMapMarkerAlt className="contact-icon" />
            <p>
              {" "}
              2/6, 4th Main Rd, Okkiayam, Thouraipakkam, Mahalakshmi Nagar,
              Adambakkam, Chennai
            </p>
          </div>
          <div className="contact-detail">
            <FaEnvelope className="contact-icon" />
            <p>spacesiodesigns@gmail.com</p>
          </div>
          <div className="contact-detail">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <p>+91 8056068185</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form-container">
        {/* New section for the additional lines */}
        <div className="contact-form-header">
          <h2>GET IN TOUCH WITH US</h2>
          <p>AND WE WILL GET BACK TO YOU</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="form-input"
            required
          />
          <select
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="form-input"
            required
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="new_build">New Build</option>
            <option value="large_scale_renovation">
              Large-Scale Renovation
            </option>
            <option value="full_furnishing">Full Furnishing</option>
            <option value="interior_styling">Interior Styling</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="form-textarea"
            required
          ></textarea>
          {error && <div className="error-message">{error}</div>}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
