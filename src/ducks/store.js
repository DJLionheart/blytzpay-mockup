import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import billReducer from './billReducer';
import menuReducer from './menuReducer';

const combined = combineReducers({
    billDetails: billReducer,
    menu: menuReducer
})


let middleWare = promiseMiddleware();

export default createStore(combined, applyMiddleware(middleWare));
