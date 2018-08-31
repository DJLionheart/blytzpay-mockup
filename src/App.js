import React, { Component } from 'react';
import styled from 'styled-components';

import AppHeader from './components/AppHeader/AppHeader';
import BillDetails from './components/BillDetails/BillDetails';
import Payment from './components/Payment/Payment';

import bg from './assets/img/new_mobile_background.png';

import './assets/styles/reset.css';
import './assets/styles/globalStyles.css';

const BlytzPayApp = styled.main`
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  border: 20px solid #1C1820;
  background-image: url(${bg});
  background-size: 115%;
`;

class App extends Component {
  render() {
    return (
      <BlytzPayApp>
        <AppHeader/>
        <BillDetails/>
        <Payment/>       
      </BlytzPayApp>
    );
  }
}

export default App;
