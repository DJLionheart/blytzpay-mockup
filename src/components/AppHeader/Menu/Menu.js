import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { connect } from 'react-redux';

import { toggle_menu } from '../../../ducks/menuReducer';

const MenuAside = styled.aside`
    position: fixed;
    top: 20px;
    left: 20px;
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    background-color: magenta;
`;

function Menu(props) {
    return(
        <MenuAside>
            <button onClick={ toggle_menu }>Close</button>
        </MenuAside>
    )
}

function mapStateToProps(state) {
    menu: state.menu
}

export default connect(mapStateToProps, { toggle_menu })(Menu);