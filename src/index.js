import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import { newsData } from './store/reducer';
import getNews from "./API/getNews";
import { downloadFreshNews } from './actions';

import './index.css';

import App from './App';

const store = createStore(newsData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

async function fillStore() {
  const data = await getNews();
  store.dispatch(downloadFreshNews(data));
}

fillStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

