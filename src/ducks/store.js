import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducer';

let middleWare = promiseMiddleware();

export default createStore(reducer, applyMiddleware(middleWare));
