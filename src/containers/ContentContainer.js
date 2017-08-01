import React from 'react';

import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Content from '../components/Content/Content';
import Aside from '../components/Aside/Aside';

import styles from './MainContainer.scss';

class ContentContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles['content-wrapper']}>
				<Navigation />
				<Content />
				<Aside />
			</div>
		);
	}
}

export default ContentContainer;
