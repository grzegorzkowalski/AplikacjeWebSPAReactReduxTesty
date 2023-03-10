import {useState} from "react";

const TextTyper = ({text}) => {
    const [index, setIndex] = useState(1);
    const add = () => {
        if (index + 1 <= text.length) {
                setIndex(prev => prev + 1);
            }
        }
        const subtract = () => {
            if (index - 1 >= 1) {
                setIndex(prev => prev - 1);
            }
        }
        return (
            <>
                <h1>{text.slice(0, index)}</h1>
                <button onClick={subtract}>-</button>
                <button onClick={() => add()}>+</button>
            </>
        );
};

export default TextTyper;
