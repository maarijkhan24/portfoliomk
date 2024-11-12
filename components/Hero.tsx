import React from "react";
import Image from "next/image";
import "./Hero.module.css"

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-container">
          <Image
            className="hero-image"
            alt="hero"
            src="/image.png"
            width={500}
            height={450}
          />
          <div className="hero-content">
            <h1 className="hero-title">
              Muhammad Maarij Najam
            </h1>
            <p className="hero-description">
              A passionate Cloud & Cybersecurity expert with deep expertise in DevOps and AiOps, focused on driving secure and efficient solutions.
            </p>
            <div className="hero-buttons">
              <button className="hero-contact-button">
                <a href="#contact">Contact</a>
              </button>
              <button className="hero-explore-button">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
