import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Justin</h1>
        <p className={styles.description}>
          I&apos;m a Junior Developer at OneCloud, where I build and test
          features for products approaching launch. I use Claude Code to
          accelerate development of Python backend and React frontend
          projects, and I&apos;m focused on growing as a backend engineer.
        </p>
        <a href="mailto:jlzitel@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/ProfilePic.jpg")}
        alt="Justin Zitel"
        className={styles.heroImg}
      />
    </section>
  );
};
