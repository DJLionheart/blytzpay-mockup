import React, { Component } from 'react';

import Header from './components/Header/Header';

import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <main className="blytz_app">
        <Header/>        
      </main>
    );
  }
}

export default App;
