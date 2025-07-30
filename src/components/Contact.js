import React, { useState } from "react";
import "../Styles/Home.css";
import "../Styles/About.css";
import "../Styles/Contact.css";
import "../Styles/Footer.css";

import Footer from "./Footer";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  formData,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)


    
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="home-container">
      {/* Banner image */}
      <div style={{ marginBottom: "40px" }}></div>

      <section className="contact-section">
        <h3>📨 Get In Touch</h3>
        <p className="summary skills-summary">
          Let’s turn ideas into action — I’m just a message away.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn contact-btn">
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
