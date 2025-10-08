import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Justin</h1>
        <p className={styles.description}>
          I'm a recent Computer Science graduate from UNC Charlotte with a
          concentration in software engineering, currently looking for a
          full-time software engineering or related position!
          <br />
          <br />
          I have experience with both front-end and back-end development, and exposure to a variety of programming languages and frameworks from a combination of professional experience and personal projects.
          <br />
          <br />
          Scroll down to see some of my experience and projects!
        </p>
        <a href="mailto:Justin.L.Zitel@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/ProfilePic.jpg")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
