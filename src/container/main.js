import React from "react";
import { connect } from 'react-redux';
import News from '../components/news';
import { updateRating, updateViewers } from '../actions';
import  '../styles/news_item.css';

const Main =(props) =>
  <React.Fragment>
    <main>
      <h1 className="visually-hidden">The News</h1>
      <section className="news-wrapper">
        <ul className="news-list" >
          {props.newsData.map((index, i) =>
            <li key={i} ><News {...index} onLike={(like)=>props.onLike(like)} onView ={(viewers) => props.onView(viewers)}/></li>
          )}
        </ul>
      </section>
    </main>
  </React.Fragment>;


export default connect(
	state => ({
		newsData: state,
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


