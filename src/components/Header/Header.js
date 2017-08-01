import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className={styles["main-header"]}>
        <div className={styles["logo-container"]}>
          <Link className={styles["logo-link"]} to="/">
            Eleks
          </Link>
        </div>

        <div className={styles["project-description"]}>Mentoring platform</div>
      </header>
    );
  }
}

export default Header;
