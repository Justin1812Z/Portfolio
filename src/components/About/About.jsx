import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/programmer.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/searchIcon.png")} alt="Search icon" />
            <div className={styles.aboutItemText}>
              <h3>Looking for Work</h3>
              <p>
                I'm currently looking for work as an entry level software engineer, web development, or related field
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and RESTful APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Design</h3>
              <p>
                I have experience creating visually appealing frontend applications that effectively convey important data
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
