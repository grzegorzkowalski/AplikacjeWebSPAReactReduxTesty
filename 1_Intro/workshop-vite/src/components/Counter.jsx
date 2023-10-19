import {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(10);

    const add = () => {
        setCounter(prev => prev - 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={add}>-</button>
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
            <button onClick={() => setCounter(10)}>reset</button>
        </div>
    );
};

export default Counter;