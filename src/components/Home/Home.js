import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles["main-heading"]}>
          Service for developers <br /> to grow with professional mentors
        </h1>

        <Link to="/login">
          <button className={styles["login-button"]} type="button">
            Login
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
