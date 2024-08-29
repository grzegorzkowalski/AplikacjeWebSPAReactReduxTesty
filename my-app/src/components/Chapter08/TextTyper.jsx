import {useState} from "react";

const TextTyper = ({text}) => {
    const [counter, setCounter] = useState(1);

    const subtraction = () => {
        setCounter(prev => {
            if (prev > 1) {
                return prev - 1
            }
            return prev;
        } );
    }

    const add = () => {
        setCounter(prev => {
            if (prev < text.length) {
                return prev + 1;
            }
            else {
                return prev
            }
        });
    }

    return (
        <div>
            <button onClick={subtraction}>-</button>
            <button onClick={add}>+</button>
            <h1>{text.slice(0,counter)}</h1>
        </div>
    );
};

export default TextTyper;
