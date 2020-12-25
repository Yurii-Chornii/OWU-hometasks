import './App.css';
import React, {useEffect} from "react";

import {useDispatch, useSelector} from 'react-redux';


export default function App() {
    const counter = useSelector(({counter}) => counter)
    const user = useSelector(({user}) => user)
    const dispatch = useDispatch();
    useEffect(() => {
        if(counter > 0 && counter < 10){
            fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
                .then(value => value.json())
                .then(value => dispatch({type: 'SET_USER', payload: value}))
        }

    }, [counter])
    return (
        <div>
            hello, current value - {counter}
            <br/>
            <button onClick={() => dispatch({type: 'INC_COUNTER'})}>inc</button>
            <button onClick={() => dispatch({type: 'DEC_COUNTER'})}>dec</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
            {user && <div>{user.name} - {user.username} - {user.email}</div>}
        </div>
    );
}
