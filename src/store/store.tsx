import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dataManagerReducer from './reducers/dataManagerReducer';

import thunk from 'redux-thunk';

declare const window: any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    dataManagerRed: dataManagerReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

