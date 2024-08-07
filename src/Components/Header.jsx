import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div>
        <h1>WaterDrop</h1>
      </div>
      <ul>
        <li>About Us</li>
        <li>Projects</li>
        <li>Impact</li>
        <li>Locations</li>
      </ul>
      <div>
        <button>Sign In</button>
        <button className={styles.Button}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
