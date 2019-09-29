import React from 'react';
import './styles/App.css';

import { Header } from './components/header';
import  Main  from './container/main';
import { Footer } from './components/footer';

const App =(props) =>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>;

export default App;