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
          alt="Illustration of a developer at a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/searchIcon.png")} alt="Current role icon" />
            <div className={styles.aboutItemText}>
              <h3>Junior Developer at OneCloud</h3>
              <p>
                I'm a backend-focused junior developer at OneCloud, a telecom company building VoIP and UCaaS products like AI voice receptionists, E-Fax, and mass-messaging systems. I started here in technical support and moved into development, so I understand the products from the customer up.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Backend development icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Focus</h3>
              <p>
                I gravitate toward backend work — designing APIs and integrations and automating the manual processes that slow teams down. I like turning a vague requirement into a reliable system that connects services and data.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Development workflow icon" />
            <div className={styles.aboutItemText}>
              <h3>How I Work</h3>
              <p>
                I'm comfortable across the stack, from Python services to React frontends, and I care about shipping clean, well-tested code on deadline. I lean on modern tooling like Claude Code to move faster without cutting corners.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
