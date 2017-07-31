import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as actionCreators from "../actions/index";

import MainContainer from "./MainContainer";
// import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import PageNotFound from "../components/PageNotFound/PageNotFound";

import Header from "../components/Header/Header";

class AppContainer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/login" component={MainContainer} />
            <Route path="/:url" component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

export default AppContainer;
