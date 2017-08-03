import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { auth, database } from '../utils/firebase';
import Register from '../components/Register/Register';
import styles from './MainContainer.scss';

class RegisterContainer extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		console.log(e);
		if (e.email && e.password) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(e.email, e.password)
				.then(function(user) {
					console.log('everything went fine');
					console.log('user object:', user);

					this.props.authUserSocial(user);
					//you can save the user data here.
					//
				})
				.catch(function(error) {
					console.log('there was an error');
					var errorCode = error.code;
					var errorMessage = error.message;
					console.log(errorCode + ' - ' + errorMessage);
				});
		}
	}

	render() {
		console.log(this.props);
		return (
			<div className={styles['main-part']}>
				<Register onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(RegisterContainer);
