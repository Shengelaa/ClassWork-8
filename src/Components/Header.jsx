import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div>
        <h1>WaterDrop</h1>
      </div>
      <ul>
        <li>
          <Link to='/AboutUs'>About Us</Link>
        </li>
        <li>
          <Link to='/Projects'>Projects</Link>
        </li>
        <li>
          <Link to='/Impact'>Impact</Link>
        </li>
        <li>
          <Link to='/Locations'>Locations</Link>
        </li>
      </ul>
      <div>
        <Link to='/SignIn'>
          <button>Sign In</button>
        </Link>
        <Link to='/SignUp'>
          <button className={styles.Button}>Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
