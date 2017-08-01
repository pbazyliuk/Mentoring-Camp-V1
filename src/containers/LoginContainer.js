import React from 'react';
import { connect } from 'react-redux';

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
		return <Login onSubmit={this.handleSubmit} />;
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(LoginContainer);
