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
                I work as a Junior Developer at OneCloud, a telecommunication company that specializes in VoIP and UCaaS solutions, and offers products like AI voice receptionists, E-Fax, and mass messaging systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Backend development icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I design and create MCP integrations to enable our AI voice agent to interact with our customers data, allowing the agent to perform actions like scheduling appointments, automatically create meaningful leads in the customers CRM software, and handle in depth customer inquiries.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend development icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I perform QA testing on our React frontend to ensure a smooth user experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
