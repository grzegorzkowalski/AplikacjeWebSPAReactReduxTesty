import {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(10);
    const add = () => {
        setCounter(prev => prev + 1);
    }
    const subtract = () => {
        setCounter(prev => prev - 1);
    }
    const reset = () => {
        setCounter(10);
    }
    return (
        <>
            <h1>Liczba kliknięć {counter}.</h1>
            <button onClick={subtract}>-</button>
            <button onClick={add}>+</button>
            <button onClick={reset}>reset</button>
        </>
    );
};

export default Counter;
