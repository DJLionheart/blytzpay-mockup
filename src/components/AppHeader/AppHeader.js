import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { toggle_menu } from '../../ducks/menuReducer';
import Menu from './Menu/Menu';

import menu from '../../assets/img/menu_icon_white.png';
import logo from '../../assets/img/logo_trademark.png';

// import '../../assets/styles/comp/Header.css';

const Header = styled.header`
    padding: 45px 25px;
    height: 10vh;
    display: flex;
    justify-content: space-between;

    @media only screen
    and (min-device-height: 568px)
    and (max-device-height: 568px) 
    and (min-device-width: 320px)
    and (max-device-width: 320px) {
        padding: 20px 10px;
        height: 7vh;
    }
    
    @media only screen
    and (min-device-height: 640px)
    and (max-device-height: 640px) 
    and (min-device-width: 360px)
    and (max-device-width: 360px) {
        padding: 25px 15px;
        height: 7vh;
    }

    @media only screen
    and (min-device-height: 667px)
    and (max-device-height: 667px) 
    and (min-device-width: 375px)
    and (max-device-width: 375px) {
        padding: 30px 20px;
        height: 7vh;
    }
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


function AppHeader(props) {
    return(
        <Header>
            <HeaderLeft>
                <img src={menu} alt="menu" role="menu" onClick={ toggle_menu }/>
            </HeaderLeft>
            <HeaderRight>
                <img src={logo} alt="BlytzPay logo"/>
            </HeaderRight>
            { props.menu.menuOpen ? <Menu/> : null }
        </Header>
    )
}

function mapStateToProps(state) {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps, { toggle_menu })(AppHeader);