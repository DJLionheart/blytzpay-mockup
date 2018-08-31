import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AppHeader from './components/AppHeader/AppHeader';
import BillDetails from './components/BillDetails/BillDetails';
import Payment from './components/Payment/Payment';

import { get_bill_details, get_new_method } from './ducks/reducer';

import bg from './assets/img/new_mobile_background.png';
// import referenceImg from './assets/img/reference.png';
// <img src={referenceImg} alt="reference"/>

import './assets/styles/reset.css';
import './assets/styles/globalStyles.css';

const BlytzPayApp = styled.main`
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  border: 20px solid #1C1820;
  background-image: url(${bg});
  background-size: 110%;
  background-position: 93% 10%;
  background-blend-mode: hard-light;
  background-color: #417575;
`;

class App extends Component {
  componentDidMount() {
      // I would send the axios requests for bill/payment information here
        
      // get_bill_details() and get_new_method action creators for redux  
  }

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

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { get_bill_details, get_new_method })(App);
