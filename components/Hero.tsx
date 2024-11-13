import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <section className={styles.bodyFont}>
        <div className={styles.container}>
          <Image
            className={styles.heroImage}
            alt="hero"
            src="/image.png"
            width={500}
            height={450}
          />
          <div className={styles.textContent}>
            <h1 className={styles.title}>Muhammad Maarij Najam</h1>
            <p className={styles.description}>
              A passionate Cloud & Cybersecurity expert with deep expertise in DevOps and AiOps, focused on driving secure and efficient solutions.
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.contactButton}>
                <a href="#contact">Contact</a>
              </button>
              <button className={styles.exploreButton}>Explore</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
