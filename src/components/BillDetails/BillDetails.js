import React, { Component } from 'react';
import styled from 'styled-components';

import businessLogo from '../../assets/img/Square-Enix-logo.png';

import '../../assets/styles/comp/BillDetails.css';

const Details = styled.article`
    padding: 40px;
    height: 33vh;
    /* background-color: magenta; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const BusinessLogo = styled.section`
    width: 80%;
`;

const BillAmountSection = styled.section`
    text-align: center;
`;

const ShadedBox = styled.section`
    padding: 15px;
    margin-bottom: 5px;
    color: rgb(18, 230, 18);
    height: 60px;
    width: 65vw;
    background-color: rgba(0, 0, 0, 0.198);
    border-radius: 10px;
`;

const AmountHeading = styled.h5`
    margin: 0;
    font-size: 19px;
    font-weight: 300;
    line-height: 19pt;
`;

const TotalDueHeading = styled.h1`
    margin: 0;
    font-size: 35px;
    font-weight: 600;
    letter-spacing: 2pt;
    line-height: 23pt;
`;

const CheckboxContainer = styled.label`
    padding-left: 12px;
    float: left;
    display: block;
    position: relative;
    height: 18px;
    width: 18px;
    /* background-color: rgb(224, 224, 224); */
`;

const Checkbox = styled.input`
    position: absolute;
    opacity: 0;  
`;

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color:rgb(195, 195, 195);
    border-radius: 3px;
    &:checked {
        background-color:  rgb(18, 230, 18);
    }

    &::after {
        content: "";
        position: absolute;
        display: none; 
    }
`;

const RecurringInfo = styled.span`
    display: flex;
    justify-content: center;
    color: white;
    font-weight: 300;
`;

class BillDetails extends Component {
    constructor() {
        super();
        this.state = {
            businessLogo: businessLogo,
            billAmount: 250,
            recurring: true
        }

        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    toggleCheckbox() {
        this.setState({
            recurring: !this.state.recurring
        })
    }

    componentDidMount() {
        /*
        Before the page finishes loading, a call could be made here to load all the pertinent bill info: business logo, amount, etc.
        */
    }

    render() {
        const { businessLogo, billAmount, recurring } = this.state;
        return(
            <Details>
                <BusinessLogo>
                    <img src={businessLogo} alt="company logo"/>
                </BusinessLogo>
                <BillAmountSection>
                    <ShadedBox>
                        <AmountHeading>Amount Due</AmountHeading>
                        <TotalDueHeading>${billAmount}.00</TotalDueHeading>
                    </ShadedBox>
                    <RecurringInfo>
                        <CheckboxContainer>
                            <input type="checkbox" checked={recurring} onChange={ this.toggleCheckbox }/>
                            <span className="checkmark"></span> 
                        </CheckboxContainer>
                        Make Recurring Payment
                            
                    </RecurringInfo>
                </BillAmountSection>
            </Details>
        )
    }
}

export default BillDetails;