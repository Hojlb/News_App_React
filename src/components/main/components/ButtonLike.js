//https://www.npmjs.com/package/react-icons
import { IconContext } from 'react-icons';
import { FaHeart } from 'react-icons/fa';
import React from 'react';
import PropTypes from 'prop-types';

export default class LikeBtn extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			like: this.props.like,
			clicked: false,
			color: "#a5a5a5"
		};
		this.onRate = this.onRate.bind(this);
	}

	onRate(e) {
		e.preventDefault();
		const count = this.state.like;

		this.state.clicked ?
			this.setState(
				{
					like: count-1,
					clicked: false,
					color: "#a5a5a5",
				}) :
			this.setState(
				{
					like: count+1,
					clicked: true,
					color: "red",
				});

	};

	componentDidUpdate(prevProps) {
		if(prevProps.like !== this.state.like) {
			this.props.onLike(this.state.like);
		}
	}

	render() {
		return (
			<React.Fragment>
				<button  className="news-like-btn complementary">
					<IconContext.Provider value={{ color: `${this.state.color}`, className: "global-class-name", size: "1.5em" }}>
						<div onClick={this.onRate}>
							<FaHeart />
						</div>
					</IconContext.Provider>
					<span>{this.state.like}</span>
				</button>
			</React.Fragment>
		);
	}
}

LikeBtn.propTypes = {
	like: PropTypes.number,
};