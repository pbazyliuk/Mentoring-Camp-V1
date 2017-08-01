import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import LoginContainer from '../../containers/LoginContainer';
import styles from './Main.scss';

var sliderBtnActiveStyle = {
	backgroundColor: '#fff'
};

var imgOne = {
	background:
		'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../../../images/home-bg.jpg")'
};

var imgTwo = {
	background:
		'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../../../images/home-bg2.jpg")'
};

var imgTree = {
	background:
		'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../../../images/home-bg3.jpg")'
};

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			itemNumber: 1,
			sliderBtnActiveStyle: sliderBtnActiveStyle,
			imgSource: imgOne
		};

		this.switchSliderImg = this.switchSliderImg.bind(this);
	}

	componentDidMount() {
		setTimeout(this.switchSliderImg, 4000);
	}

	switchSliderImg(e) {
		let itemNumber;
		if (e) {
			this.setState({
				itemNumber: +e.target.dataset.itemNum
			});

			let target = e.target;
			itemNumber = +target.dataset.itemNum;
		} else {
			itemNumber =
				this.state.itemNumber === 3
					? 1 ? this.setState({ itemNumber: 1 }) : ''
					: ++this.state.itemNumber;
		}

		switch (itemNumber) {
			case 1:
				this.setState({ imgSource: imgOne });
				break;

			case 2:
				this.setState({ imgSource: imgTwo });
				break;

			case 3:
				this.setState({ imgSource: imgTree });
				break;

			default:
				this.setState({ imgSource: imgOne });
				break;
		}
		if (!e) setTimeout(this.switchSliderImg, 4000);
	}

	render() {
		return (
			<main style={this.state.imgSource} className={styles['main-part']}>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={LoginContainer} />

				<div
					onClick={this.switchSliderImg}
					className={styles['slider-buttons-container']}
				>
					<button
						style={this.state.itemNumber === 1 ? sliderBtnActiveStyle : {}}
						type="button"
						className={`${styles['slider-buttons-item']} ${styles[
							'slider-buttons-item-active'
						]}`}
						data-item-num="1"
					/>
					<button
						style={this.state.itemNumber === 2 ? sliderBtnActiveStyle : {}}
						type="button"
						className={styles['slider-buttons-item']}
						data-item-num="2"
					/>
					<button
						style={this.state.itemNumber === 3 ? sliderBtnActiveStyle : {}}
						type="button"
						className={styles['slider-buttons-item']}
						data-item-num="3"
					/>
				</div>
			</main>
		);
	}
}

export default Main;
