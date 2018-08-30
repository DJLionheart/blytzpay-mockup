import React, { Component } from 'react';

import Header from './components/Header/Header';
import BillDetails from './components/BillDetails/BillDetails';

import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <main className="blytz_app">
        <Header/>
        <BillDetails/>       
      </main>
    );
  }
}

export default App;
