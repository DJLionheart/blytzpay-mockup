import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import cardIcon from '../../assets/img/card_icon_blue.png';
import chevron from '../../assets/img/chevron_left_blue.png';

// import '../../assets/styles/comp/Payment.css';

const PaymentSection = styled.article`
    padding: 20px 0 20px 0;
    height: 34vh;
    background-color: white;
`;

const PaymentHeading = styled.h2`
    margin: 5px 0 15px 0;
    color:#026BB5;
    font-weight: 300;
    font-size: 18pt;
    text-align: center;
`;

const PaymentMethod = styled.section`
    display: flex;
    height: 60px;
    padding: 5px;
    background-color: rgb(243, 242, 242);
`;

const CardIcon = styled.section`
    width: 16vw;
    margin-right: 6px;
`;

const PaymentInfo = styled.section`
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ButtonSection = styled.section`
    color: blue;
`;

const DetailSection = styled.section`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Chevron = styled.img`
    transform: scale(-1, -1);
    width: 10px;
`;

const PaymentMethodP = styled.p`
    color: black;
    font-size: 14pt;
`;

const PaymentTypeP = styled.p`
    color: grey;
    font-weight: 300;
`;

const AddMethod = styled.h3`
    
`;


function Payment(props) {
    const { hashedPaymentMethod, paymentType, billAmount } = props.billDetails;
    return(
        <PaymentSection>
            <section className="payment_details">
                <PaymentHeading>Pay With:</PaymentHeading>
            </section>
            <PaymentMethod>
                <CardIcon>
                    <img src={cardIcon} alt="card icon"/>
                </CardIcon>
                <DetailSection>
                    <PaymentInfo>
                        <PaymentMethodP>{ hashedPaymentMethod }</PaymentMethodP>
                        <PaymentTypeP>{ paymentType }</PaymentTypeP>
                    </PaymentInfo>
                    <ButtonSection><Chevron src={chevron} alt="change button"/></ButtonSection>
                </DetailSection>
            </PaymentMethod>
        </PaymentSection>
    )
}

function mapStateToProps(state) {
    return {
        billDetails: state
    }
}

export default connect(mapStateToProps)(Payment);