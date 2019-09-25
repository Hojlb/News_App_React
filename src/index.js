import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import { newsData } from './store/reducer';
import getNews from "./API/getNews";
import { initialState } from './actions';

import './index.css';

import App from './App';

const store = createStore(newsData);
async function fillStore() {
  const data = await getNews();
  store.dispatch(initialState(data));
};

fillStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

