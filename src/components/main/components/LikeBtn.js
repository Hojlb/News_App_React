//https://www.npmjs.com/package/react-icons
import {IconContext} from 'react-icons';
import {FaHeart} from 'react-icons/fa';
import React from 'react';
import PropTypes from "prop-types";

export default class LikeBtn extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			like: props.like,
			clicked: false,
			color: "#a5a5a5"
		};
		this.onRate = this.onRate.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		const {like} = this.state;
		const {onLike} = this.props;
		if(prevState.like !== like) {
			onLike(like);
		}
	}

	onRate(e) {
		const {like, clicked} = this.state;
		e.preventDefault();

		if (clicked) {
			this.setState(
				{
					like: like - 1,
					clicked: false,
					color: "#a5a5a5",
				});
		} else {
			this.setState(
				{
					like: like + 1,
					clicked: true,
					color: "red",
				});
		}

	};

	render() {
		const {like, color} = this.state;
		return (
				<button className="news-like-btn complementary">
					<IconContext.Provider value={{ color: `${color}`, className: "global-class-name", size: "1.5em" }}>
						<div onClick={this.onRate}>
							<FaHeart />
						</div>
					</IconContext.Provider>
					<span>{like}</span>
				</button>
		);
	}
};

LikeBtn.propTypes = {
	onLike: PropTypes.func,
	like: PropTypes.number,
};

LikeBtn.defaultProps = {
	like: 0,
	onLike: {},
};