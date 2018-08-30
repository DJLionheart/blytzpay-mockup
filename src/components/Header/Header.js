import React from 'react';

import menu from '../../assets/img/menu_icon_white.png';
import logo from '../../assets/img/logo_trademark.png';

import '../../assets/styles/comp/Header.css';

export default function Header() {
    return(
        <header>
            <section className="header left">
                <img src={menu} alt="menu"/>
            </section>
            <section className="header right">
                <img src={logo} alt="BlytzPay logo"/>
            </section>
        </header>
    )
}