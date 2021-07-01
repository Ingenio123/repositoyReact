import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk';
import  {composeWithDevTools} from 'redux-devtools-extension';

const middlewares = [thunk]

const initialState = {}

export const store = createStore(
    reducer, initialState,composeWithDevTools(applyMiddleware(...middlewares))
);
