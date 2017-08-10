import React from 'react';
import { Link } from 'react-router-dom';
import { auth, database, googleAuthProvider } from '../../utils/firebase';
import styles from './Header.scss';
import { Map } from 'immutable';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.someMehod = this.someMehod.bind(this);
	}

	someMehod() {
		console.log(auth.currentUser);
		auth.currentUser
			.linkWithPopup(googleAuthProvider)
			.then(function(result) {
				// Accounts successfully linked.
				var credential = result.credential;
				var user = result.user;
				// ...
			})
			.catch(function(error) {
				// Handle Errors here.
				// ...
			});
	}

	render() {
		const authenticated = this.props.state.auth.get('authenticated');
		return (
			<header className={styles['main-header']}>
				<div className={styles['logo-container']}>
					<Link className={styles['logo-link']} to="/">
						Eleks
					</Link>
				</div>
				{authenticated === true
					? <div>
							<button
								onClick={() => {
									auth.signOut();
									this.props.signOut();
								}}
							>
								Signout
							</button>
							<button onClick={this.someMehod}> Link google</button>
						</div>
					: ''}

				<div className={styles['project-description']}>Mentoring platform</div>
			</header>
		);
	}
}

export default Header;
