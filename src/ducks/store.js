import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducer';
import menuReducer from './menuReducer';

const combined = combineReducers({
    billDetails: reducer,
    menu: menuReducer
})


let middleWare = promiseMiddleware();

export default createStore(combined, applyMiddleware(middleWare));
