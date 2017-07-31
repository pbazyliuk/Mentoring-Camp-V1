import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.scss';

var sliderBtnActiveStyle = {
	backgroundColor: '#fff'
};

var imgOne = {
	opacity: '1',
	transition: 'opacity 1s ease-in-out',
	background:
		'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../../../images/home-bg.jpg")'
};

var imgTwo = {
	opacity: '1',
	background:
		'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../../../images/home-bg2.jpg")'
};

var imgTree = {
	opacity: '1',
	background:
		'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../../../images/home-bg3.jpg")'
};

class Home extends React.Component {
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
		console.log('working');
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

		console.log(itemNumber);
		// debugger;

		switch (itemNumber) {
			case 1:
				this.setState({ imgSource: imgOne });
				if (!e) setTimeout(this.switchSliderImg, 4000);
				return;

			case 2:
				this.setState({ imgSource: imgTwo });
				if (!e) setTimeout(this.switchSliderImg, 4000);
				return;

			case 3:
				this.setState({ imgSource: imgTree });
				if (!e) setTimeout(this.switchSliderImg, 4000);
				return;

			default:
				this.setState({ imgSource: imgOne });
				if (!e) setTimeout(this.switchSliderImg, 4000);
				return;
		}
	}

	render() {
		return (
			<div className={styles['container']}>
				<header className={styles['main-header']}>
					<div className={styles['logo-container']}>Eleks</div>
					<div className={styles['project-description']}>
						Mentoring platform
					</div>
				</header>

				<main style={this.state.imgSource} className={styles['main-part']}>
					<h1 className={styles['main-heading']}>
						Service for developers <br /> to grow with professional mentors
					</h1>

					<Link to="/login">
						<button className={styles['login-button']} type="button">
							Login
						</button>
					</Link>

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
			</div>
		);
	}
}

export default Home;
