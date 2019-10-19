import React from 'react';
import '../styles/App.css';

import Header from './header/Header';
import  Main  from './main/Main';
import  Footer from './footer/Footer';

const App = (props) =>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>;

export default App;