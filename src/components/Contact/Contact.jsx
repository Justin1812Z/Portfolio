import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out about engineering roles or collaboration.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
          <a href="mailto:jlzitel@gmail.com">jlzitel@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn"
          />
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justin-zitel/">linkedin.com/in/justin-zitel</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Justin1812Z">github.com/Justin1812Z</a>
        </li>
      </ul>
    </footer>
  );
};
