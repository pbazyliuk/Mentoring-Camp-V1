import React from "react";
import * as actions from "../actions/index";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth, database, googleAuthProvider } from "../utils/firebase";
import styles from "./MainContainer.scss";

class MainContainer extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser !== null) {
        console.error(this.props);
        this.props.authUserSocial(currentUser);
      }
    });
  }

  render() {
    return (
      <div className={styles["container"]}>
        <Main {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(MainContainer);
