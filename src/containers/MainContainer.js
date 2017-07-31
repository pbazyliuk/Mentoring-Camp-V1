import React from "react";

import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./MainContainer.scss";

class MainContainer extends React.Component {
  render() {
    return (
      <div className={styles["container"]}>
        <Main />
      </div>
    );
  }
}

export default MainContainer;
