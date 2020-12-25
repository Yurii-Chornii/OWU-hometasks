import './App.css';
import React from "react";
import {useSelector, useDispatch} from 'react-redux';


export default function App() {
    const counter = useSelector(({counter}) => counter)
    const dispatch = useDispatch();

    return (
        <div>
            hello, current value - {counter}
            <br/>
            <button onClick={() => dispatch({type: 'INC_COUNTER'})}>inc</button>
            <button onClick={() => dispatch({type: 'DEC_COUNTER'})}>dec</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
        </div>
    );
}
