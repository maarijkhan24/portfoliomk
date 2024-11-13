import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarStart}>
        <div className={styles.dropdown}>
          <div tabIndex={0} role="button" className={styles.dropdownButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
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
          <ul className={styles.dropdownMenu}>
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
        <Link href="/" className={styles.logo}>
          MK
        </Link>
      </div>
      <div className={styles.navbarCenter}>
        <ul className={styles.navMenu}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="#skill" className={styles.navLink}>
              Skills
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbarEnd}>
        <Link href="#contact" className={styles.contactButton}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
