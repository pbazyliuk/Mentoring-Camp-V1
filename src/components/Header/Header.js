import React from "react";

import styles from "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className={styles["main-header"]}>
        <div className={styles["logo-container"]}>Eleks</div>
        <div className={styles["project-description"]}>Mentoring platform</div>
      </header>
    );
  }
}

export default Header;
