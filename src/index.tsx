import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App.tsx';

const defaultState={cities: []};
const ADD_CITY = 'ADD_CITY';
const REMOVE_CITY = 'REMOVE_CITY';

const reducer = (state = defaultState, action: {type: string, payload?: any}) => {
    switch(action.type){
        case ADD_CITY:
            return {...state}
        case REMOVE_CITY:
            return {...state}
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>    
    </Provider>,
    document.getElementById('root')
);
