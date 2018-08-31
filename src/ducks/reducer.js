import axios from 'axios';

const initialState = {
    billAmount: 250,
    hashedPaymentMethod: 'Visa *** 3655',
    paymentType: 'Credit/Debit Card'
}

const GET_BILL = 'GET_BILL_DETAILS'
    , GET_NEW_METHOD = 'GET_NEW_METHOD'
    , FULFILLED = '_FULFILLED';

export function get_bill_details(billCode) {
    let bill = axios.get(`https://insert-url-here/?code=${billCode}`).then( res => {
        return res.data
    }).catch( err => console.log('Error retrieving bill amount: ', err));

    return {
        type: GET_BILL,
        payload: bill
    }
}

export function get_new_method(billId, hashedCardCode = null) {
    let result;
    if(!hashedCardCode) {
        result = axios.get(`https://qr-code-generator-url/?${billId}`).then( res => {
            return res.data
        }).catch(err => console.log('Error retrieving pay-by-cash QR code: ', err));
    } else {
        result = axios.get(`https://securely-stored-card-info-url/?hashedCode=${hashedCardCode}`).then( res => {
            return res.data
        }).catch(err => console.log('Error obtaining selected payment method: ', err));
    }

    return {
        type: GET_NEW_METHOD,
        payload: {result: result, type: !hashedCardCode ? 'Cash' : 'Credit/Debit Card'}
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_BILL + FULFILLED:
            return Object.assign({}, state, {billAmount: action.payload.amount, hashedPaymentMethod: action.payload.defaultPaymentMethod});

        case GET_NEW_METHOD + FULFILLED:
            if(action.payload.type === 'Cash') {
                return Object.assign({}, state, {hashedPaymentMethod: '', paymentType: action.payload.type})
            } else return Object.assign({}, state, {hashedPaymentMethod: action.payload.result, paymentType: action.payload.type})

        default: return state;
    }
}