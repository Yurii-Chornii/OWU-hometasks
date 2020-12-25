import './App.css';
import React, {useEffect, useState, useMemo} from "react";


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
    const [arr, setArr] = useState([2,12,57,3,1,1003,999,843,2500,20,115])

    const totalPrice = arr.reduce((acc, val) => (acc += val), 0)
    console.log(totalPrice)
    const totalPrice2 = useMemo(() => {
        console.log('from useMemo')
        return arr.reduce((acc, val) => (acc += val), 0)
    }, [arr])
    console.log(totalPrice2)

    return (
        <div>
            <h1>App component here</h1>
            <button onClick={() => {
                setIsVisible(!isVisible)
            }}>visible toggler
            </button>
            {isVisible && <Test/>}
            <button onClick={() => {setArr([...arr, 5])}}>change arr for useMemo</button>
        </div>
    );
}
