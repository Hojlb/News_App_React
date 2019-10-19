import React from "react";
import {connect} from "react-redux";
import {findNews} from "../../../actions";

class Searcher extends React.Component {
	findNews() {
		const {onFindNews} = this.props;
		onFindNews(this.searchInput.value);
	}

	render() {
		return (
				<div>
					<input type="text"
								 name=""
								 className="search"
								 placeholder="Search news"
								 ref={ (input) => this.searchInput = input }
					/>
					<button className="submit-button" onClick={ this.findNews.bind(this) }>Find News</button>
				</div>
		);
	}

};

export default connect(
	state => ({
		newsData: state.FreshNews,
	}),
	dispatch => ({
		onFindNews: (title) => {
			dispatch(findNews(title))
		},

	})
)(Searcher);




