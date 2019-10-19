import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import storeFactory from './store/index';
import {downloadFreshNews} from "./actions";
import getNews from "./store/API/getNews";

import './index.css';

import App from './components/App';

const store = storeFactory ();

async function loadNews() {
  const data = await getNews();
  store.dispatch(downloadFreshNews(data));
}
loadNews();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
