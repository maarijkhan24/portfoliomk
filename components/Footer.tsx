import React from "react";
import "../components/Footer.module.css";  // Import the custom CSS file for the footer

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <a className="footer-logo" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="footer-logo-icon"
            viewBox="0 0 24 24"
            aria-label="MK Logo"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="footer-logo-text">MK</span>
        </a>
        <p className="footer-text">
          © 2004 MK —{" "}
          <a
            href="https://twitter.com/knyttneve"
            className="footer-social-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            @maarijkhan_mk
          </a>
        </p>
        <div className="footer-social-icons">
          <a href="https://www.facebook.com" className="footer-social-icon" aria-label="Facebook">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="footer-icon"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="https://twitter.com" className="footer-social-icon" aria-label="Twitter">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="footer-icon"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="https://www.instagram.com" className="footer-social-icon" aria-label="Instagram">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="footer-icon"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a href="https://www.linkedin.com" className="footer-social-icon" aria-label="LinkedIn">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="footer-icon"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
