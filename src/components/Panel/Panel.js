import React from 'react';

import styles from './Panel.scss';

class Panel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles['panel-container']}>
				<div className={styles['panel-container-first-line-wrapper']}>
					<div className={styles['panel-container-header']}>
						Learn Async Javascript
					</div>

					<div className={styles['panel-container-progress-bar']}>
						<div className={styles['panel-container-progress-bar-line']} />
						<div
							className={styles['panel-container-progress-bar-line-active']}
						/>
						<div className={styles['panel-container-progress-bar-number']}>
							80%
						</div>
					</div>
				</div>
				<div className={styles['panel-container-descrip-header']}>
					Get acquinted with Javascript’s async stuff....
				</div>

				<button className={styles['panel-container-button']}>Workplan</button>
			</div>
		);
	}
}

export default Panel;
