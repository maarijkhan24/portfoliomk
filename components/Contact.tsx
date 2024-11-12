"use client"
import React, { useState } from "react";
import "../components/Contact.module.css"

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div id="contact" className="contact-container">
      <section className="contact-section">
        <div className="contact-container-inner">
          <div className="text-center contact-header">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
              Reach out to us for any queries, feedback, or assistance.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-fields">
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>
              <div className="form-field">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </div>
          </form>

          <div className="contact-footer">
            <a href="mailto:maarijkhan246@gmail.com" className="email-link">
              maarijkhan246@gmail.com
            </a>
            <p className="address">
              49 Smith St.
              <br />
              Saint Cloud, MN 56301
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                {/* Social Media Icon SVG */}
              </a>
              <a href="#" className="social-icon">
                {/* Social Media Icon SVG */}
              </a>
              <a href="#" className="social-icon">
                {/* Social Media Icon SVG */}
              </a>
              <a href="#" className="social-icon">
                {/* Social Media Icon SVG */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
