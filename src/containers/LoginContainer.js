import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Login from '../components/Login/Login';

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		console.log(e);
	}

	render() {
		console.log(this.props);
		return (
			<Login {...this.props.authUserSocial} onSubmit={this.handleSubmit} />
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(LoginContainer);
