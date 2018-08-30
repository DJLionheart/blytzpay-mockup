import React, { Component } from 'react';

import businessLogo from '../../assets/img/Square-Enix-logo.png';

import '../../assets/styles/comp/BillDetails.css';

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
            <article className="bill_details">
                <section className="business_logo">
                    <img src={businessLogo} alt="company logo"/>
                </section>
                <section className="bill_amount">
                    <section className="shaded_box">
                        <h5 id="bill_heading">Amount Due</h5>
                        <h1 id="amount">${billAmount}.00</h1>
                    </section>
                    <span id="recurring_info">
                        <label className="checkbox_container">
                            <input type="checkbox" checked={recurring} onChange={ this.toggleCheckbox }/>
                            <span className="checkmark"></span> 
                        </label>
                        Make Recurring Payment
                            
                    </span>
                </section>
            </article>
        )
    }
}

export default BillDetails;