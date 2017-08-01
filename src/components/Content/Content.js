import React from 'react';

import Panel from '../Panel/Panel';
import styles from './Content.scss';

class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles['content-container']}>
				<div className={styles['content-header-container']}>
					<div className={styles['content-header-image']} />

					<h1 className={styles['content-header']}>Theory</h1>
				</div>

				<div className={styles['search-field-container']}>
					<input
						type="text"
						className={styles['search-field']}
						placeholder="Input Search item"
					/>
				</div>

				<Panel />
				<Panel />

				<div className={styles['content-header-container']}>
					<div className={styles['content-header-image']} />

					<h1 className={styles['content-header']}>Project</h1>
				</div>

				<div className={styles['search-field-container']}>
					<input
						type="text"
						className={styles['search-field']}
						placeholder="Input Search item"
					/>
				</div>

				<Panel />
				<Panel />
			</div>
		);
	}
}

export default Content;
