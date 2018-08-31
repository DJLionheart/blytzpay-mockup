import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import cardIcon from '../../assets/img/card_icon_blue.png';
import chevron from '../../assets/img/chevron_left_blue.png';

// import '../../assets/styles/comp/Payment.css';

const PaymentSection = styled.article`
    padding: 14px 0 0 0;
    height: 33vh;
    background-color: white;
`;

const PaymentHeading = styled.h2`
    margin: 5px 0 15px 0;
    color:#0375bd;
    font-weight: 400;
    font-size: 14pt;
    text-align: center;
`;

const PaymentMethod = styled.section`
    display: flex;
    height: 60px;
    padding: 5px;
    background-color: rgb(243, 242, 242);
    margin-bottom: 5px;
`;

const CardIcon = styled.section`
    width: 13vw;
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
    width: 72vw;
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
    letter-spacing: -1px;
`;

const PaymentTypeP = styled.p`
    color: grey;
    font-weight: 300;
    letter-spacing: 1px;
`;

const PaymentControls = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 15vh;
`;

const AddMethod = styled.h3`
    color: rgb(83, 161, 235);
    font-size: 11pt;
    text-decoration: underline;
`;


const PaymentButton = styled.button`
    height: 65px;
    width: 250px;
    outline: none;
    color: white;
    font-weight: 600;
    font-size: 22pt;
    text-shadow: 1px 1px 5px grey;
    background-color: rgb(147, 214, 0);
    border-radius: 10px;
    box-shadow: 5px 5px 15px darkgrey;
`;

function Payment(props) {
    const { hashedPaymentMethod, paymentType, billAmount } = props.billDetails;
    return(
        <PaymentSection>
            <section className="payment_details">
                <PaymentHeading>Pay with:</PaymentHeading>
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
            <PaymentControls>
                <AddMethod>Add Method</AddMethod>
                <PaymentButton> Pay ${billAmount}.00</PaymentButton>
            </PaymentControls>
        </PaymentSection>
    )
}

function mapStateToProps(state) {
    return {
        billDetails: state
    }
}

export default connect(mapStateToProps)(Payment);