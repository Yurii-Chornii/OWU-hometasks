import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    counter: 1,
    user : null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER' : {
            return {...state, counter: state.counter + 1}
        }
        case 'DEC_COUNTER' : {
            return {...state, counter: state.counter - 1}
        }
        case 'RESET' : {
            return {...state, counter: 0}
        }
        case 'SET_USER' : {
            return {...state, user: action.payload}
        }
        default: {
            return state;
        }
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
