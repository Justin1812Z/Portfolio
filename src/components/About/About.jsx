import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>      
        <h2 className={styles.title}>ABOUT</h2>
        <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src="../../../assets/about/aboutImage.png"
          alt="About Image"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="../../../assets/about/cursorIcon.png" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a front-end developer with experience building responsive
                and optimized websites using React.js
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../../../assets/about/serverIcon.png" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing RESTful APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../../../assets/about/uiIcon.png" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>Yeah right</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
