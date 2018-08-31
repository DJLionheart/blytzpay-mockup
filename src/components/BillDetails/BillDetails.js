import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { toggle_recurring } from '../../ducks/reducer';

import businessLogo from '../../assets/img/Square-Enix-logo.png';


const Details = styled.article`
    padding: 40px;
    height: 51vh;
    /* background-color: magenta; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media only screen
    and (min-device-height: 568px)
    and (max-device-height: 568px) 
    and (min-device-width: 320px)
    and (max-device-width: 320px) {
        height: 46vh;
    }

    @media only screen
    and (min-device-height: 667px)
    and (max-device-height: 667px) 
    and (min-device-width: 375px)
    and (max-device-width: 375px) {
        height: 48vh;
    }

    @media only screen
    and (min-device-height: 731px)
    and (max-device-height: 731px) 
    and (min-device-width: 411px)
    and (max-device-width: 411px) {
        height: 47vh;
    }

    @media only screen
    and (min-device-height: 736px)
    and (max-device-height: 736px) 
    and (min-device-width: 414px)
    and (max-device-width: 414px) {
        height: 45vh;
    }
`;

const BusinessLogo = styled.section`
    width: 90%;
`;

const BillAmountSection = styled.section`
    text-align: center;
`;

const ShadedBox = styled.section`
    padding-bottom: 14px;
    margin-bottom: 10px;
    color: rgb(126, 217, 0);
    height: 100px;
    width: 72vw;
    background-color: rgba(0, 0, 0, 0.11);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const AmountHeading = styled.h5`
    font-size: 15pt;
    font-weight: 300;
    line-height: 19pt;
`;

const TotalDueHeading = styled.h1`
    font-size: 33pt;
    font-weight: 600;
    line-height: 23pt;
`;

const CheckboxContainer = styled.label`
    padding-left: 12px;
    margin-right: 10px;
    float: left;
    display: block;
    position: relative;
    height: 18px;
    width: 18px;
`;

const RecurringP = styled.p`
    margin: 2px 7px;
    font-size: 11pt;
`;

const UnCheckedBox = styled.div`
    position: relative;
    background-color:rgb(195, 195, 195);
    height: 18px;
    width: 18px;
    border-radius: 2px;
`;

const CheckedBox = styled.div`
    position: relative;
    position: relative;
    background-color: rgb(126, 217, 0);
    height: 18px;
    width: 18px;
    border-radius: 2px;
`;

const Checkmark = styled.span`
    position: absolute;
    left: 7px;
    top: 3px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
`;

const RecurringInfo = styled.span`
    display: flex;
    justify-content: center;
    color: #ffffff8c;
    font-weight: 300;
`;

function BillDetails(props) {

    const { billDetails, toggle_recurring } = props
        , { recurring, billAmount } = billDetails;

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
                    <CheckboxContainer onClick={ toggle_recurring } role="checkbox" aria-checked={ recurring }>
                        {
                            recurring ? <CheckedBox><Checkmark/></CheckedBox> : <UnCheckedBox/>
                        }
                    </CheckboxContainer>
                    <RecurringP>Make Recurring Payment</RecurringP>
                </RecurringInfo>
            </BillAmountSection>
        </Details>
    )
}

function mapStateToProps(state) {
    return {
        billDetails: state
    }
}


export default connect(mapStateToProps, { toggle_recurring })(BillDetails);