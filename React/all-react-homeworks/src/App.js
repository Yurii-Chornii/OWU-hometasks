import './App.css';
import React, {useEffect, useState} from "react";


const Test = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log('mounted')
        return () => {
            console.log('unmounted')
        }
    }, [counter])

    return (
        <h2 onClick={() => {setCounter((prev) => prev + 1)}}>Test component here</h2>
    )
}


export default function App() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <h1>App component here</h1>
            <button onClick={() => {
                setIsVisible(!isVisible)
            }}>visible toggler
            </button>
            {isVisible && <Test/>}
        </div>
    );
}
