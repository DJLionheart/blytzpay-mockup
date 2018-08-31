import React from 'react';
import styled from 'styled-components';

import menu from '../../assets/img/menu_icon_white.png';
import logo from '../../assets/img/logo_trademark.png';

// import '../../assets/styles/comp/Header.css';

const Header = styled.header`
    padding: 45px 25px;
    height: 10vh;
    display: flex;
    justify-content: space-between;
`;

const HeaderLeft = styled.section`
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
`;

const HeaderRight = styled.section`
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 135px;
`;


export default function AppHeader() {
    return(
        <Header>
            <HeaderLeft>
                <img src={menu} alt="menu"/>
            </HeaderLeft>
            <HeaderRight>
                <img src={logo} alt="BlytzPay logo"/>
            </HeaderRight>
        </Header>
    )
}