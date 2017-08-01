import React from 'react';
import Calendar from '../Calendar/Calendar';

import styles from './Aside.scss';

class Aside extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles['aside-container']}>
				<Calendar />
			</div>
		);
	}
}
export default Aside;
