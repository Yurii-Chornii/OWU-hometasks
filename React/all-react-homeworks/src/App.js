import './App.css';
import React, {useEffect, useState, useReducer} from "react";

// useReducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': {
            return action.payload
        }
        case 'CHANGE_USER_NAME': {
            return {
                ...state,
                name : action.payload
            }
        }
        case 'CHANGE_USER_ID': {
            return {
                ...state,
                id : state.id + 1
            }
        }
        default: {
            return state
        }
    }
}
const initialState = {
    id : null,
    name : ''
}
// useReducer

export default function App() {
    const [count, setCount] = useState(1);
    const [user, setUser] = useState();

    const incrementCounter = () => setCount((prev) => prev + 1);
    const decrementCounter = () => {
        setCount((prev) => prev > 1 ? prev - 1 : prev)
    }
    const cleanCounter = () => setCount(1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then(value => value.json())
            .then(value => setUser(value))
    }, [count])


    // useReducer
    const [state, dispatch] = useReducer(reducer, initialState);
    // useReducer

    return (
        <div>
            <h1>Значення {count}</h1>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
            <button onClick={cleanCounter}>Очистити</button>
            {!!user &&
            (<div>
                <p>{user.id} - {user.name} </p>
            </div>)
            }
        </div>
    );
}
