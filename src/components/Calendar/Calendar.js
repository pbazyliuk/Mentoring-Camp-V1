import React from 'react';

import styles from './Calendar.scss';

class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles['aside-container']}>
				<div>Calendar</div>
			</div>
		);
	}
}
export default Calendar;
