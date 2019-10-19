import React from "react";
import { connect } from 'react-redux';
import NewsItm from './components/NewsItm';
import { updateRating, updateViewers } from '../../actions/index';
import '../../styles/news_item.css';

function  Main ({newsData, onLike, onView}) {
	return (
		<main>
			<h1 className="visually-hidden">The News</h1>
			<section className="news-wrapper">
				{Array.isArray(newsData) ? <ul className="news-list">
					{newsData.map((index, i) =>
						<li key={i}><NewsItm {...index} onLike={(like) => onLike(like)}
																 onView={(viewers) => onView(viewers)} /></li>
					)}
				</ul> :
					<h3>{newsData.errorMessage}</h3>}

			</section>
		</main>
	);
}

export default connect(
	state => ({
		newsData: state.FreshNews,
	}),
	dispatch => ({
		onLike: (newsRate) => {
			dispatch(updateRating(newsRate))
		},
		onView: (viewers) => {
			dispatch(updateViewers(viewers))
		}
	})
)(Main);


