import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { auth, database, googleAuthProvider } from '../../utils/firebase';

import styles from './Register.scss';

function validate(values) {
	console.log(values);

	const errors = {};

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	} else if (values.email.length > 30) {
		errors.email = 'Must be 30 characters or less';
	}

	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length < 6) {
		errors.password = 'Must be at least 6 characters';
	}
	return errors;
}

const renderField = ({
	input,
	label,
	type,
	meta: { touched, error },
	id,
	lbText,
	lbClassName,
	inClassName,
	placeholder
}) => {
	return (
		<div className={styles['input-container']}>
			<label className={lbClassName} htmlFor={id}>
				{lbText}
			</label>
			<div>
				<input
					{...input}
					id={id}
					name={lbText}
					type={type}
					placeholder={placeholder}
					className={inClassName}
				/>
				{touched &&
					error &&
					<div className={styles['error']}>
						{error}
					</div>}
			</div>
		</div>
	);
};

class Register extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { handleSubmit, valid } = this.props;
		console.error(valid);

		return (
			<div className={styles['login-form-container']}>
				<form
					onSubmit={handleSubmit}
					className={styles['login-form']}
					action=""
				>
					<div className={styles['login-form-name']}>Register Form</div>
					<Field
						lbClassName={styles['login-form-label']}
						inClassName={styles['login-form-input']}
						lbText="Email"
						name="email"
						component={renderField}
						type="text"
						id="emailField"
						placeholder="Input Email"
					/>

					<Field
						lbClassName={styles['login-form-label']}
						inClassName={styles['login-form-input']}
						lbText="Password"
						name="password"
						component={renderField}
						type="password"
						id="passwordField"
						placeholder="Input Password"
					/>
					<button
						type="submit"
						disabled={!valid}
						className={styles['login-form-button']}
					>
						Register
					</button>
				</form>
			</div>
		);
	}
}

Register = reduxForm({
	form: 'register',
	validate
})(Register);

export default connect(null, actions)(Register);
