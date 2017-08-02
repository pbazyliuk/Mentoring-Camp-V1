import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../history/history';
import { Router } from 'react-router';
import * as actionCreators from '../actions/index';

import MainContainer from './MainContainer';
import PlatformContainer from './PlatformContainer';
// import Home from "../components/Home/Home";
import Login from '../components/Login/Login';
import PageNotFound from '../components/PageNotFound/PageNotFound';

class AppContainer extends React.Component {
	render() {
		return (
			<Router history={history}>
				<div>
					<Switch>
						<Route exact path="/" component={MainContainer} />
						<Route exact path="/login" component={MainContainer} />
						<Route exact path="/platform" component={PlatformContainer} />
						<Route path="/:url" component={PageNotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	state: state
});

export default AppContainer;
