import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

import Register from '../components/Register/Register';
import styles from './MainContainer.scss';

class RegisterContainer extends React.Component {
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
			<div className={styles['main-part']}>
				<Register onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(RegisterContainer);
