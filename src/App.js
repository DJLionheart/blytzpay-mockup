import React, { Component } from 'react';

import AppHeader from './components/AppHeader/AppHeader';
import BillDetails from './components/BillDetails/BillDetails';
import Payment from './components/Payment/Payment';

import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <main className="blytz_app">
        <AppHeader/>
        <BillDetails/>
        <Payment/>       
      </main>
    );
  }
}

export default App;
