import React from 'react';
import Clock from "./components/Clock";
import Searcher from "./components/Searcher";
import { connect } from 'react-redux';
import { findNews } from "../../actions";

const Header = () =>{
    return (
      <header>
        <h2>News App</h2>
        <Clock/>
        <Searcher />
      </header>
    );
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
)(Header);


