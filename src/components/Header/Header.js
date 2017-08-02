import React from "react";
import { Link } from "react-router-dom";
import { auth, database, googleAuthProvider } from "../../utils/firebase";
import styles from "./Header.scss";
import { Map } from "immutable";

class Header extends React.Component {
  render() {
    const authenticated = this.props.state.auth.get("authenticated");
    return (
      <header className={styles["main-header"]}>
        <div className={styles["logo-container"]}>
          <Link className={styles["logo-link"]} to="/">
            Eleks
          </Link>
        </div>
        {authenticated === true
          ? <button
              onClick={() => {
                auth.signOut();
                this.props.signOut();
              }}
            >
              Signout
            </button>
          : ""}

        <div className={styles["project-description"]}>Mentoring platform</div>
      </header>
    );
  }
}

export default Header;
