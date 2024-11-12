import Image from "next/image";
import React from "react";
import styles from './About.module.css';

const About = () => {
  return (
    <section className={`${styles.section}`} id="about">
      <div className={`${styles.container} flex px-5 py-24 md:flex-row flex-col items-center`}>
        <div className={`${styles.textLeft} lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center`}>
          <h1 className={`${styles.heading} scroll-m-8`}>
            About me
          </h1>

          <h1 className={`${styles.subheading} sm:text-4xl text-3xl mb-4 font-medium text-gray-900`}>
            <br className="hidden lg:inline-block" />
            My Journey in Cloud Security, DevOps, and AiOps
          </h1>
          <p className={`${styles.paragraph} mb-8 leading-relaxed`}>
            I am a passionate Cloud Cybersecurity, DevOps Engineer, and AiOps Expert with a focus on creating secure, scalable, and efficient digital environments. With extensive experience in cloud infrastructure, automation, and system security, I specialize in optimizing workflows, enhancing performance, and integrating intelligent solutions. Currently, I am expanding my skill set by learning Next.js and TypeScript to stay ahead in web development and build modern, responsive applications. I am committed to continuous learning and leveraging emerging technologies to deliver innovative solutions that drive business transformation and security.
          </p>
          <div className="flex justify-center">
            {/* Optional buttons or other elements */}
          </div>
        </div>
        <div className={`${styles.imageContainer} lg:max-w-lg lg:w-full md:w-1/2 w-5/6`}>
          <Image
            className={styles.image}
            alt="hero"
            src={"/image.png"}
            width={500} // specify the width here
            height={500} // specify the height here
          />
        </div>
      </div>
    </section>
  );
};

export default About;
