import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import News from './components/news';
import { Header } from './components/header';
import { Main } from './container/main';
import { Footer } from './components/footer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      <ul className="news-list">
        {props.newsData.map((index, i) =>
          <li key={i} ><News {...index}/></li>
        )}
      </ul>
    </div>
  );
}

export default connect(
  state => ({
    newsData: state,
  }),
  dispatch => ({})
)(App);
