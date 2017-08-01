// Libs

import React from 'react';

import styles from './Login.scss';

class Login extends React.Component {
	render() {
		return (
			<div className={styles['login-form-container']}>
				<form className={styles['login-form']} action="">
					<div className={styles['login-form-name']}>Login Form</div>
					<label className={styles['login-form-label']} htmlFor="emailField">
						Email
					</label>
					<input
						className={styles['login-form-input']}
						type="text"
						id="emailField"
						placeholder="Input Email"
					/>
					<label className={styles['login-form-label']} htmlFor="passwordField">
						Password
					</label>
					<input
						className={styles['login-form-input']}
						type="password"
						id="passwordField"
						placeholder="Input Password"
					/>
					<div className={styles['social-icons-container']}>
						<img
							className={styles['facebook']}
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAxJREFUeNpjYBjcAAAAoAABjvuxtAAAAABJRU5ErkJggg=="
						/>

						<img
							className={styles['github-logo']}
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAxJREFUeNpjYBjcAAAAoAABjvuxtAAAAABJRU5ErkJggg=="
						/>
						<img
							className={styles['google-plus-logo-on-black-background']}
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAxJREFUeNpjYBjcAAAAoAABjvuxtAAAAABJRU5ErkJggg=="
						/>
					</div>

					<button className={styles['login-form-button']}>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
