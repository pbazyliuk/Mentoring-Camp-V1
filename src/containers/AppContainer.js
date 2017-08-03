import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../history/history';
import { connect } from 'react-redux';
import { Router, Redirect } from 'react-router';
import * as actions from '../actions/index';
// import * as actionCreators from "../actions/index";
import { Map } from 'immutable';
import MainContainer from './MainContainer';
import PlatformContainer from './PlatformContainer';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import PageNotFound from '../components/PageNotFound/PageNotFound';

class AppContainer extends React.Component {
	render() {
		const authenticated = this.props.state.auth.get('authenticated');
		console.log(authenticated);
		return (
			<Router history={history}>
				<div>
					<Header {...this.props} />
					<Switch>
						<Route
							exact
							path="/"
							render={() => {
								if (authenticated) return <Redirect to="/platform" />;
								else return <MainContainer />;
							}}
						/>
						{/* <Route exact path="/login" component={LoginContainer} /> */}
						<Route
							exact
							path="/login"
							render={() => {
								if (authenticated) return <Redirect to="/platform" />;
								else return <LoginContainer />;
							}}
						/>
						<Route
							exact
							path="/register"
							render={() => {
								if (authenticated) return <Redirect to="/platform" />;
								else return <RegisterContainer />;
							}}
						/>
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

export default connect(mapStateToProps, actions)(AppContainer);
