import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as actionCreators from '../actions/index';

import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import PageNotFound from '../components/PageNotFound/PageNotFound';

class AppContainer extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />

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
