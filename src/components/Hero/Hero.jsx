import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Justin</h1>
        <p className={styles.description}>
          I'm a hopeless Computer Science grad with 1 year of internship
          experience
        </p>
        <a href="mailto:minecodkid@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src="../../../assets/hero/heroImage.png"
        className={styles.heroImg}
        alt="hero Image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
