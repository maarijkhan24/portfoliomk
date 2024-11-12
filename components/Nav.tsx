import React from "react";
import "./Nav.module.css"
import Link from "next/link"; // Ensure this import is present

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn-ghost lg-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="Menu"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skill">Skills</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="logo">
            MK
          </Link>
        </div>
        <div className="navbar-center lg-hidden">
          <ul className="menu">
            <li>
              <Link href="/" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="menu-item">
                About
              </Link>
            </li>
            <li>
              <Link href="#skill" className="menu-item">
                Skills
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="#contact" className="contact-btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
