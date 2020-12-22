import './App.css';
import React, {memo, useState, useMemo, useEffect, useCallback, useContext, useReducer, useRef, useLayoutEffect} from "react";

export default function App (){
    const [count, setCount] = useState(0);

    const incrementCounter = () => setCount((prev) => prev + 1);
    const decrementCounter = () => setCount((prev) => prev - 1);
    const cleanCounter = () => setCount(0);

    useEffect(() => {
        console.log('count wan changed', count)
    }, [])

    return (
        <div>
            <h1>Ви натиснули {count} разів</h1>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
            <button onClick={cleanCounter}>Очистити</button>
        </div>
    );
}
