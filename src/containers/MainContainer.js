import React from 'react';

import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Main from '../components/Main/Main';

import Header from '../components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './MainContainer.scss';

class MainContainer extends React.Component {
	render() {
		return (
			<div className={styles['container']}>
				<Header />
				<Main />
			</div>
		);
	}
}

export default MainContainer;
