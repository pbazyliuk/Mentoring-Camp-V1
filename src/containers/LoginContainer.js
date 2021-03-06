import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Login from '../components/Login/Login';
import firebase from 'firebase';
import { auth, database } from '../utils/firebase';
import styles from './MainContainer.scss';
class LoginContainer extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		console.log(e);

		firebase
			.auth()

			.signInWithEmailAndPassword(e.email, e.password)
			.then((user)=> {
				console.log('signin', user);
				this.props.authUserSocial(user);
			})
			
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	}

	render() {
		console.log(this.props);
		return (
			<div className={styles['main-part']}>
				<Login {...this.props.authUserSocial} onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(LoginContainer);
