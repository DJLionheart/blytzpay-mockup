import React, { Component } from 'react';
import styled from 'styled-components';

import cardIcon from '../../assets/img/card_icon_blue.png';
import chevron from '../../assets/img/chevron_left_blue.png';

// import '../../assets/styles/comp/Payment.css';

const PaymentSection = styled.article`
    padding: 20px 0 20px 0;
    height: 34vh;
    background-color: white;
`;

const PaymentHeading = styled.h2`
    color:#026BB5;
    font-weight: 300;
    font-size: 18pt;
    text-align: center;
`;

const PaymentMethod = styled.section`
    height: 60px;
    padding: 5px;
    background-color: rgb(243, 242, 242);
`;

const CardIcon = styled.section`
    width: 65px;
`;


class Payment extends Component {
    constructor() {
        super();
        this.state = {
            paymentMethod: 'Visa *** 3655',
            paymentType: 'Credit/Debit Card',
            billAmount: 250,
        }
    }

    componentDidMount() {
        /*
        Load default payment information and bill amount.
        */
    }

    render() {
        const { paymentMethod, paymentType, billAmount } = this.state;
        return(
            <PaymentSection>
                <section className="payment_details">
                    <PaymentHeading>Pay With:</PaymentHeading>
                </section>
                <PaymentMethod>
                    <CardIcon>
                        <img src={cardIcon} alt="card icon"/>
                    </CardIcon>
                </PaymentMethod>
            </PaymentSection>
        )
    }
}

export default Payment;