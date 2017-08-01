import React from 'react';

import styles from './Navigation.scss';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles['navigation-container']}>
				<ul className={styles['navigation']}>
					<li className={styles['navigation-item']}>Study plan</li>
					<li className={styles['navigation-item']}>Users</li>
					<li className={styles['navigation-item']}>History</li>
					<li className={styles['navigation-item']}>Statistics</li>
					<li className={styles['navigation-item']}>Study Matrix</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
