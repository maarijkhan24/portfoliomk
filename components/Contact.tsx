"use client"
import React, { useState } from "react";
import styles from "./Contact.module.css"; // Import custom CSS

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
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <div id="contact" className={styles.contactContainer}>
      <section className={styles.contactSection}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Contact Us</h1>
          <p className={styles.contactSubtitle}>
            Reach out to us for any queries, feedback, or assistance.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <div className={styles.formField}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
              />
            </div>
            <div className={styles.formField} style={{ width: '100%' }}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextArea}
                defaultValue={""}
              />
            </div>
            <div className={styles.formField} style={{ width: '100%' }}>
              <button type="submit" className={styles.formButton}>Submit</button>
            </div>
          </div>
        </form>

        <div className={styles.contactInfo}>
          <a href="mailto:maarijkhan246@gmail.com" className={styles.contactEmail}>
            maarijkhan246@gmail.com
          </a>
          <p className={styles.contactAddress}>
            49 Smith St. <br />
            Saint Cloud, MN 56301
          </p>
          <div className={styles.socialIcons}>
            {/* Social Media Icons */}
            <a href="#" className={styles.socialIcon}>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon}>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon}>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9L21 3l-1.9 5.7a8.38 8.38 0 01.9 3.8z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
